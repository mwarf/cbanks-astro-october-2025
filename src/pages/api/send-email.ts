export const prerender = false; // This endpoint must be server-side rendered

import type { APIRoute } from "astro";
import { Resend } from "resend";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  company: z.string().trim().max(200).nullish(),
  projectType: z.string().trim().max(200).nullish(),
  message: z.string().trim().min(1).max(5000),
});

// User-supplied values are interpolated into email HTML; escape them so a
// submission can't inject markup (phishing links, layout breakage).
const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );

const json = (body: object, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const POST: APIRoute = async ({ request, locals }) => {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return json({ message: "Invalid JSON body" }, 400);
  }

  const parsed = ContactSchema.safeParse(raw);
  if (!parsed.success) {
    return json({ message: "Missing or invalid form fields" }, 400);
  }
  const { name, email, company, projectType, message } = parsed.data;

  // Prefer the Workers runtime secret (wrangler secret / dashboard); fall back
  // to a build-time env var for local dev.
  const apiKey =
    locals.runtime?.env?.RESEND_API_KEY ?? import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return json({ message: "Email service is not configured" }, 500);
  }

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: "Coalbanks Contact <onboarding@resend.dev>", // TODO: switch to a verified coalbanks.com sender
      to: ["michael@coalbanks.com"],
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <div>
          <h1>New Project Inquiry</h1>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Company:</strong> ${company ? escapeHtml(company) : "Not provided"}</p>
          <p><strong>Project Type:</strong> ${projectType ? escapeHtml(projectType) : "Not provided"}</p>
          <br/>
          <h3>Message:</h3>
          <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    if (error) {
      // Log the detail server-side; never return provider internals to the client.
      console.error("Resend error:", error);
      return json({ message: "Failed to send email" }, 500);
    }

    return json({ message: "Email sent successfully", id: data?.id }, 200);
  } catch (e) {
    console.error("API Error:", e);
    return json({ message: "Internal server error" }, 500);
  }
};
