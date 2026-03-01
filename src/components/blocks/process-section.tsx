import { DashedLine } from "../dashed-line";
import { cn } from "@/lib/utils";
import { Search, Clapperboard, Film, BarChart3 } from "lucide-react";

const steps = [
  {
    title: "1. Discovery",
    description:
      "1-2 weeks finding the real story. No scripts, just honest curiosity.",
    icon: Search,
    className: "flex-1",
  },
  {
    title: "2. Production",
    description:
      "Cinema-quality filming with a small, easy-going crew. No stress, no fuss.",
    icon: Clapperboard,
    className: "flex-1",
  },
  {
    title: "3. Post-Production",
    description:
      "Expert editing, color grading, and sound design. We shape it into a story that flows.",
    icon: Film,
    className: "flex-1",
  },
  {
    title: "4. Delivery & Strategy",
    description:
      "We help you distribute your film to ensure it reaches the right audience and drives ROI.",
    icon: BarChart3,
    className: "flex-1",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="overflow-hidden pb-28 lg:pb-32">
      <div className="">
        <h2 className="h2 container text-center text-balance">
          The Coalbanks Method: 4-6 Weeks from Discovery to Delivery
        </h2>
        <p className="text-muted-foreground container mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed">
          A proven four-step process to transform corporate messaging into
          authentic stories.
        </p>

        <div className="mt-8 md:mt-12 lg:mt-20">
          <DashedLine
            orientation="horizontal"
            className="container scale-x-105"
          />

          <div className="relative container grid gap-8 py-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col gap-4 p-4">
                <div className="bg-muted text-primary mb-2 flex h-12 w-12 items-center justify-center rounded-xl">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="h3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {i < steps.length - 1 && (
                  <div className="bg-border absolute top-1/2 right-0 hidden h-12 w-[1px] -translate-y-1/2 lg:block" />
                )}
                {i < steps.length - 1 && (
                  <div className="bg-border absolute bottom-0 left-1/2 h-[1px] w-12 -translate-x-1/2 lg:hidden" />
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
