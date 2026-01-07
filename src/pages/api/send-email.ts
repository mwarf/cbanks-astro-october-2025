export const prerender = false; // This endpoint must be server-side rendered

import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, company, projectType, message } = data;

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          message: "Missing required fields",
        }),
        { status: 400 }
      );
    }

    const sendResult = await resend.emails.send({
      from: "Coalbanks Contact <onboarding@resend.dev>", // Using onboarding domain for safety initially
      to: ["michael@coalbanks.com"], // Sending to the verified account email for testing
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <div>
          <h1>New Project Inquiry</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Project Type:</strong> ${projectType || "Not provided"}</p>
          <br/>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    if (sendResult.error) {
      console.error("Resend error:", sendResult.error);
      return new Response(
        JSON.stringify({
          message: "Failed to send email",
          error: sendResult.error,
        }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({
        message: "Email sent successfully",
        id: sendResult.data?.id,
      }),
      { status: 200 }
    );
  } catch (e) {
    console.error("API Error:", e);
    return new Response(
      JSON.stringify({
        message: "Internal server error",
      }),
      { status: 500 }
    );
  }
};
