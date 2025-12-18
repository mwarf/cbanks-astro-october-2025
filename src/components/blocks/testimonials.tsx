import { ArrowRight } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const items = [
  {
    quote:
      "Our employees started sharing it without us asking. That's never happened before.",
    author: "Sarah Chen",
    role: "HR Director",
    company: "Prairie Ale Works",
    image: "/testimonials/amy-chase.webp",
  },
  {
    quote:
      "The recruitment video got us 12 qualified applications in 3 weeks. Previous videos? Maybe 200 views total.",
    author: "Michael Roberts",
    role: "CEO",
    company: "AgTech Solutions",
    image: "/testimonials/jonas-kotara.webp",
  },
  {
    quote:
      "They really understood our story. The film captures what we're actually building here.",
    author: "Jennifer Walsh",
    role: "Marketing Director",
    company: "Precision Manufacturing",
    image: "/testimonials/kevin-yam.webp",
  },
  {
    quote:
      "Our investors were impressed. The film explained our value proposition better than any pitch deck.",
    author: "David Park",
    role: "Founder",
    company: "Southern Alberta Clean Energy",
    image: "/testimonials/kundo-marta.webp",
  },
  {
    quote:
      "Our employees started sharing it without us asking. That's never happened before.",
    author: "Sarah Chen",
    role: "HR Director",
    company: "Prairie Ale Works",
    image: "/testimonials/amy-chase.webp",
  },
  {
    quote:
      "The recruitment video got us 12 qualified applications in 3 weeks. Previous videos? Maybe 200 views total.",
    author: "Michael Roberts",
    role: "CEO",
    company: "AgTech Solutions",
    image: "/testimonials/jonas-kotara.webp",
  },
  {
    quote:
      "They really understood our story. The film captures what we're actually building here.",
    author: "Jennifer Walsh",
    role: "Marketing Director",
    company: "Precision Manufacturing",
    image: "/testimonials/kevin-yam.webp",
  },
  {
    quote:
      "Our investors were impressed. The film explained our value proposition better than any pitch deck.",
    author: "David Park",
    role: "Founder",
    company: "Southern Alberta Clean Energy",
    image: "/testimonials/kundo-marta.webp",
  },
];

export const Testimonials = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  return (
    <>
      <section className={cn("overflow-hidden py-28 lg:py-32", className)}>
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
              Real Results from Southern Alberta Businesses
            </h2>
            <p className="text-muted-foreground max-w-md leading-snug">
              Documentary-style brand films that drive real business
              results—recruitment, fundraising, brand awareness, sales.
            </p>
            <Button variant="outline" className="shadow-md">
              Watch Our Demo Reel <ArrowRight className="size-4" />
            </Button>
          </div>

          <div className="relative mt-8 -mr-[max(3rem,calc((100vw-80rem)/2+3rem))] md:mt-12 lg:mt-20">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="">
                {items.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="xl:basis-1/3.5 grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%]"
                  >
                    <Card className="bg-muted h-full overflow-hidden border-none p-0">
                      <CardContent className="flex h-full flex-col p-0">
                        <div className="relative h-[288px] overflow-hidden lg:h-[328px]">
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="size-full rounded-t-xl object-cover object-top"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between gap-10 p-6">
                          <blockquote className="font-display text-lg leading-none! font-medium md:text-xl lg:text-2xl">
                            {testimonial.quote}
                          </blockquote>
                          <div className="space-y-0.5">
                            <div className="text-foreground font-semibold">
                              {testimonial.author}, {testimonial.role}
                            </div>
                            <div className="text-muted-foreground text-sm">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex gap-3">
                <CarouselPrevious className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
                <CarouselNext className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <DashedLine
        orientation="horizontal"
        className={cn("mx-auto max-w-[80%]", dashedLineClassName)}
      />
    </>
  );
};
