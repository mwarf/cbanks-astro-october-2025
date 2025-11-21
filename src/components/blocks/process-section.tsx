import { DashedLine } from "../dashed-line";
import { cn } from "@/lib/utils";
import { Search, Clapperboard, Film, BarChart3 } from "lucide-react";

const steps = [
  {
    title: "1. Discovery",
    description: "We spend 1-2 weeks finding the human story worth telling. No scripts, just genuine curiosity.",
    icon: Search,
    className: "flex-1",
  },
  {
    title: "2. Production",
    description: "Cinema-quality filming with a small, agile crew. We capture authentic moments without the stress.",
    icon: Clapperboard,
    className: "flex-1",
  },
  {
    title: "3. Post-Production",
    description: "Expert editing, color grading, and sound design to craft a compelling narrative arc.",
    icon: Film,
    className: "flex-1",
  },
  {
    title: "4. Delivery & Strategy",
    description: "We don't just hand over a file. We help you ensure your film gets watched by the right people.",
    icon: BarChart3,
    className: "flex-1",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="overflow-hidden pb-28 lg:pb-32">
      <div className="">
        <h2 className="container text-center text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
          The Coalbanks Method
        </h2>
        <p className="container mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
          A proven four-step process to transform corporate messaging into authentic stories.
        </p>

        <div className="mt-8 md:mt-12 lg:mt-20">
          <DashedLine
            orientation="horizontal"
            className="container scale-x-105"
          />

          <div className="relative container grid gap-8 md:grid-cols-2 lg:grid-cols-4 py-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col gap-4 p-4">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-primary">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-12 w-[1px] -translate-y-1/2 bg-border lg:block" />
                )}
                 {i < steps.length - 1 && (
                  <div className="absolute bottom-0 left-1/2 h-[1px] w-12 -translate-x-1/2 bg-border lg:hidden" />
                )}
              </div>
            ))}
          </div>

          <DashedLine
            orientation="horizontal"
            className="container max-w-7xl scale-x-110"
          />
        </div>
      </div>
    </section>
  );
};
