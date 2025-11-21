import { Facebook, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section className="pb-28 lg:pb-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column: Image & Info */}
          <div className="flex flex-col gap-10">
            {/* Building Image */}
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/building-placeholder.jpg"
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
              <div className="space-y-3">
                <h3 className="font-semibold">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://facebook.com/coalbanks" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Facebook className="size-5" />
                  </a>
                  <a href="https://twitter.com/coalbanks" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Twitter className="size-5" />
                  </a>
                  <a href="https://linkedin.com/company/coalbanks" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Linkedin className="size-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="rounded-2xl border bg-card p-8 shadow-sm lg:p-10">
            <h2 className="text-2xl font-semibold tracking-tight">Start a Project</h2>
            <p className="text-muted-foreground mt-2">
              Tell us about your story and we'll help you tell it to the world.
            </p>
            
            <form className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="your@email.com" type="email" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Company name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="project-type">Project Type</Label>
                <Input id="project-type" placeholder="e.g. Brand documentary, Recruitment video" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your story</Label>
                <Textarea
                  id="message"
                  placeholder="What story are you looking to tell? What's the purpose of the film?"
                  className="min-h-[150px] resize-none"
                />
              </div>

              <Button size="lg" type="submit" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
