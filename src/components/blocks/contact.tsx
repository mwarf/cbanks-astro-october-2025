import { Facebook, Linkedin, Twitter, MapPin, Phone, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

import buildingPlaceholder from "@/assets/images/building-placeholder.jpg";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      projectType: formData.get("project-type"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSuccess(true);
      toast.success("Message sent successfully!");
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="pb-28 lg:pb-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column: Image & Info */}
          <div className="flex flex-col gap-10">
            {/* Building Image */}
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={buildingPlaceholder.src}
                alt="Coalbanks Building"
                className="h-64 w-full object-cover lg:h-80"
              />
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {/* Address */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary">
                  <MapPin className="size-5" />
                  <h3 className="font-semibold">Visit Us</h3>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1401+28+St+N,+Lethbridge,+AB+T1H+6H9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground block leading-relaxed"
                >
                  1401 28 St N<br />
                  Lethbridge, AB T1H 6H9
                </a>
              </div>

              {/* Phone */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary">
                  <Phone className="size-5" />
                  <h3 className="font-semibold">Call Us</h3>
                </div>
                <a
                  href="tel:+15878135950"
                  className="text-muted-foreground hover:text-foreground block"
                >
                  (587) 813-5950
                </a>
              </div>

              {/* Email */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary">
                  <Mail className="size-5" />
                  <h3 className="font-semibold">Email Us</h3>
                </div>
                <div className="space-y-1">
                  <a href="mailto:hello@coalbanks.ca" className="text-muted-foreground hover:text-foreground block">
                    hello@coalbanks.ca
                  </a>
                  <a href="mailto:info@coalbanks.ca" className="text-muted-foreground hover:text-foreground block">
                    info@coalbanks.ca
                  </a>
                </div>
              </div>

              {/* Socials */}
              {/* Socials - Hidden until we have real links */}
              {/* <div className="space-y-3">
                <h3 className="font-semibold">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Facebook className="size-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Twitter className="size-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Linkedin className="size-5" />
                  </a>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="rounded-2xl border bg-card p-8 shadow-sm lg:p-10">
            <h2 className="text-2xl font-semibold tracking-tight">Start a Project</h2>
            <p className="text-muted-foreground mt-2">
              Tell us about your story—we'll respond within 24 hours.
            </p>
            
            {isSuccess ? (
              <div className="mt-8 flex flex-col items-center justify-center space-y-4 rounded-lg bg-green-50/50 py-12 text-center">
                <div className="rounded-full bg-green-100 p-3 text-green-600">
                  <CheckCircle2 className="size-8" />
                </div>
                <h3 className="text-xl font-semibold text-green-900">Message Sent!</h3>
                <p className="text-green-700 max-w-xs">
                  Thanks for reaching out. We've received your message and will get back to you shortly.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setIsSuccess(false)}
                  className="mt-4"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" required disabled={isSubmitting} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" placeholder="your@email.com" type="email" required disabled={isSubmitting} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" placeholder="Company name" disabled={isSubmitting} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="project-type">Project Type</Label>
                  <Input id="project-type" name="project-type" placeholder="e.g. Brand documentary, Recruitment video" disabled={isSubmitting} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your story</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="What story are you looking to tell? What's the purpose of the film?"
                    className="min-h-[150px] resize-none"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-4">
                  <Button size="lg" type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 size-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Start a Project"
                    )}
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    No teleprompters. No stock footage. Just your story.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

