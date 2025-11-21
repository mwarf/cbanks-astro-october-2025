"use client";

import { useState } from "react";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Brand Documentary",
    monthlyPrice: "Starting at $15K",
    yearlyPrice: "Starting at $15K",
    description:
      "The 8-15 minute film that explains who you are, what you've built, and why it matters",
    features: [
      "4-6 week timeline",
      "Includes discovery, 2-3 day production",
      "Multiple cuts for different platforms",
      "Cinema-quality equipment",
      "Professional color grading",
      "Sound design and mixing",
      "Client revisions included",
    ],
  },
  {
    name: "Story Package",
    monthlyPrice: "Starting at $8K",
    yearlyPrice: "Starting at $8K",
    features: [
      "Complete story development process",
      "3-5 minute brand film",
      "Behind-the-scenes content",
      "Social media cuts",
      "Extended interviews",
      "Raw footage delivery",
    ],
  },
  {
    name: "Custom Project",
    monthlyPrice: "Custom Quote",
    yearlyPrice: "Custom Quote",
    features: [
      "Completely tailored approach",
      "Multiple videos or extended series",
      "Extended production timeline",
      "Specialized equipment or techniques",
      "Custom deliverables",
      "Extended client collaboration",
    ],
  },
];

export const Pricing = ({ className }: { className?: string }) => {
  return (
    <section className={cn("pb-28 lg:pb-32", className)}>
      <div className="container max-w-5xl">
        <div className="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-3 lg:mt-20">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative flex flex-col",
                plan.name === "Brand Documentary"
                  ? "border-primary shadow-lg scale-105 z-10"
                  : "border-border"
              )}
            >
              {plan.name === "Brand Documentary" && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
              )}
              <CardContent className="flex flex-1 flex-col gap-7 px-6 py-5">
                <div className="space-y-2">
                  <h3 className="text-foreground font-semibold">{plan.name}</h3>
                  <div className="space-y-1">
                    <div className="text-muted-foreground text-lg font-medium">
                      {plan.monthlyPrice}
                    </div>
                  </div>
                </div>

                <span className="text-muted-foreground text-sm">
                  {plan.description}
                </span>

                <div className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted-foreground flex items-center gap-1.5"
                    >
                      <Check className="size-5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className="w-full"
                  variant={
                    plan.name === "Brand Documentary" ? "default" : "outline"
                  }
                >
                  <a href="/contact">
                    {plan.name === "Custom Project"
                      ? "Get Custom Quote"
                      : "Start a Project"}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
