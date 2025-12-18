import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Process",
    questions: [
      {
        question: "What's the typical timeline for a project?",
        answer:
          "Our brand documentaries typically take 4-6 weeks from start to finish. This includes 1-2 weeks of discovery to find the real story, 2-3 days of production, and 2-3 weeks of post-production.",
      },
      {
        question: "How do you find the story worth telling?",
        answer:
          "We spend time understanding your business, your values, and what makes you unique. We interview key team members and look for the authentic moments that resonate with your audience.",
      },
      {
        question: "What's included in the production process?",
        answer:
          "Every project includes discovery sessions, professional filming with cinema equipment, color grading, sound design, and multiple revisions to ensure we capture your story perfectly.",
      },
    ],
  },
  {
    title: "Investment",
    questions: [
      {
        question: "What's the investment for a brand documentary?",
        answer:
          "Our brand documentaries start at $15K and include everything from discovery to final delivery. Story packages start at $8K for shorter-form content.",
      },
      {
        question: "Do you offer custom packages?",
        answer:
          "Yes, we create custom packages based on your specific needs. We typically take on 12-15 projects per year to ensure quality, and usually book 2-3 months out.",
      },
    ],
  },
  {
    title: "Results",
    questions: [
      {
        question: "What kind of results can I expect?",
        answer:
          "Our films average a 73% completion rate (vs. 37% industry average) because they don't sound like marketing. Clients see increased engagement, better recruitment results, and stronger investor interest.",
      },
      {
        question: "How do I measure the success of my film?",
        answer:
          "We track metrics like view completion, shares, and most importantly, business outcomes like inquiries, applications, or sales that result from the film.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
  hideHeader = false,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
  hideHeader?: boolean;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          {!hideHeader && (
            <div className="space-y-4">
              {headerTag === "h1" ? (
                <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                  Got Questions?
                </h1>
              ) : (
                <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                  Got Questions?
                </h2>
              )}
              <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
                If you can't find what you're looking for,{" "}
                <a href="/contact" className="underline underline-offset-4">
                  get in touch
                </a>
                .
              </p>
            </div>
          )}

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
