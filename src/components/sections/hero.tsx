import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from "lucide-react";

import { DashedLine } from "../elements/dashed-line";

import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Tailored workflows",
    description: "Track progress across custom issue flows for your team.",
    icon: CircleDot,
  },
  {
    title: "Cross-team projects",
    description: "Collaborate across teams and departments.",
    icon: Blend,
  },
  {
    title: "Milestones",
    description: "Break projects down into concrete phases.",
    icon: Diamond,
  },
  {
    title: "Progress insights",
    description: "Track scope, velocity, and progress over time.",
    icon: ChartNoAxesColumn,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:whitespace-nowrap md:text-5xl lg:text-6xl">
            Mainline your product.
          </h1>

          <p className="text-muted-foreground font-sans-settings mt-5 font-sans text-2xl font-medium md:text-3xl lg:text-4xl">
            Mainline is the fit-for-purpose tool for planning and building
            modern software products.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button>Get started</Button>
            <a href="#">
              <Button
                variant="outline"
                className="from-background bg-linear-to-r h-auto gap-2 to-transparent shadow-md"
              >
                <span className="max-w-56 truncate text-start md:max-w-none">
                  Mainline raises $12M from Roba Ventures
                </span>
                <ArrowRight className="stroke-3" />
              </Button>
            </a>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:ps-10">
          <DashedLine
            orientation="vertical"
            className="absolute left-0 top-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-inter font-semibold">{feature.title}</h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 lg:container max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:mt-24">
        <div className="relative h-[793px] w-full">
          <img
            src="/hero.webp"
            alt="hero"
            className="size-full rounded-3xl object-cover object-left-top shadow-lg max-lg:rounded-tr-none"
          />
        </div>
      </div>
    </section>
  );
};
