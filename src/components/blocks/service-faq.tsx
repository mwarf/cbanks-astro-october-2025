import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  questions: FAQItem[];
  title?: string;
  description?: string;
  className?: string;
}

export const ServiceFAQ = ({
  questions,
  title = "Frequently Asked Questions",
  description,
  className,
}: ServiceFAQProps) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              {description}
            </p>
          )}
        </div>

        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {questions.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card rounded-xl border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a
              href="/contact"
              className="text-primary underline underline-offset-4 hover:no-underline"
            >
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
