import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { fullFAQ } from "@/data/faq";
import type { FAQCategory } from "@/data/faq";

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
  hideHeader = false,
  categories = fullFAQ,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
  hideHeader?: boolean;
  categories?: FAQCategory[];
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          {!hideHeader && (
            <div className="space-y-4">
              {headerTag === "h1" ? (
                <h1 className="h1">Everything you need to know.</h1>
              ) : (
                <h2 className="h2">Everything you need to know.</h2>
              )}
              <p className="text-muted-foreground max-w-md leading-relaxed lg:mx-auto">
                Understanding our process and pricing. If you need more details,{" "}
                <a href="/contact" className="underline underline-offset-4">
                  let's talk
                </a>
                .
              </p>
            </div>
          )}

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="h5 text-muted-foreground border-b py-4 tracking-wider uppercase">
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
