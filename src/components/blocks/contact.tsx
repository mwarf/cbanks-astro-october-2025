import { Facebook, Linkedin, Twitter } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    title: "Location",
    content: (
      <p className="text-muted-foreground mt-3">
        Based in Lethbridge
        <br />
        Serving Southern Alberta
      </p>
    ),
  },
  {
    title: "Let's talk",
    content: (
      <div className="mt-3">
        <div>
          <p className="">Projects</p>
          <a
            href="mailto:hello@coalbanks.ca"
            className="text-muted-foreground hover:text-foreground"
          >
            hello@coalbanks.ca
          </a>
        </div>
        <div className="mt-1">
          <p className="">General</p>
          <a
            href="mailto:info@coalbanks.ca"
            className="text-muted-foreground hover:text-foreground"
          >
            info@coalbanks.ca
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "Follow our work",
    content: (
      <div className="mt-3 flex gap-6 lg:gap-10">
        <a
          href="https://facebook.com/coalbanks"
          className="text-muted-foreground hover:text-foreground"
        >
          <Facebook className="size-5" />
        </a>
        <a
          href="https://twitter.com/coalbanks"
          className="text-muted-foreground hover:text-foreground"
        >
          <Twitter className="size-5" />
        </a>
        <a
          href="https://linkedin.com/company/coalbanks"
          className="text-muted-foreground hover:text-foreground"
        >
          <Linkedin className="size-5" />
        </a>
      </div>
    ),
  },
];

export const Contact = () => {
  return (
    <section className="pb-28 lg:pb-32">
      <div className="container max-w-2xl">


        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          {contactInfo.map((info, index) => (
            <div key={index}>
              <h2 className="font-medium">{info.title}</h2>
              {info.content}
            </div>
          ))}
        </div>

        <DashedLine className="my-12" />

        {/* Inquiry Form */}
        <div className="mx-auto">
          <h2 className="text-lg font-semibold">Project Inquiry</h2>
          <form className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input placeholder="your.email@company.com" type="email" />
            </div>
            <div className="space-y-2">
              <Label>Company</Label>
              <Input placeholder="Company name" />
            </div>
            <div className="space-y-2">
              <Label>Project Type</Label>
              <Input placeholder="e.g. Brand documentary, Recruitment video" />
            </div>
            <div className="space-y-2">
              <Label>Tell us about your story</Label>
              <Textarea
                placeholder="What story are you looking to tell? What's the purpose of the film?"
                className="min-h-[120px] resize-none"
              />
            </div>

            <div className="flex justify-end">
              <Button size="lg" type="submit" className="">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
