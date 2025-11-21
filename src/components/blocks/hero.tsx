import { ArrowRight, Video, Camera, Target, MapPin } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { GITHUB_URL } from "@/consts";

const features = [
  {
    title: "Documentary storytelling",
    description:
      "Transform corporate messages into authentic stories worth telling.",
    icon: Video,
  },
  {
    title: "Cinema-quality production",
    description: "Professional equipment and techniques for premium results.",
    icon: Camera,
  },
  {
    title: "Business outcomes",
    description:
      "Films that drive recruitment, sales, fundraising, engagement.",
    icon: Target,
  },
  {
    title: "Local expertise",
    description: "Deep understanding of Southern Alberta business landscape.",
    icon: MapPin,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1 max-lg:max-w-[600px]">
          <h1 className="text-foreground font-display font-bold max-w-[90%] text-3xl tracking-tight md:text-4xl lg:text-5xl xl:whitespace-normal">
            Films That Make Your Customers Actually Give a Damn
          </h1>

          <p className="text-muted-foreground text-1xl mt-5 max-w-[90%] md:text-3xl">
            Documentary-style brand films for companies with stories worth
            telling
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <a href="/contact">Start a Project</a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a
                href="/portfolio"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                Watch Our Work
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24">
        <div className="relative aspect-video w-full">
          <img
            src="/images/hero-main/hero-main.webp"
            alt="hero"
            className="h-full w-full rounded-2xl object-cover object-center shadow-lg max-lg:rounded-tr-none"
          />
        </div>
      </div>
    </section>
  );
};
