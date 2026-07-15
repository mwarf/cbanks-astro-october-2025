import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const AboutSection = () => {
  return (
    <section className="container mt-10 flex max-w-5xl flex-col-reverse gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row lg:items-end">
      {/* Images Left - Text Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <ImageSection
          images={[
            { src: "/about/bts-kitchen-interview-set.webp", alt: "Lighting an interview set on location" },
            { src: "/about/bts-workshop-review.webp", alt: "Reviewing footage with a workshop group" },
          ]}
          className="xl:-translate-x-10"
        />

        <TextSection
          title="Our Process"
          paragraphs={[
            "The best brand stories are found, not created. Every film begins with deep discovery to uncover the human truth behind your business.",
            "We're founder-owned and lean — the person you talk to is the person behind the camera.",
            "If you're ready for storytelling that breaks through the scroll, let's talk about your project.",
          ]}
          ctaButton={{
            href: "/contact",
            text: "Start a Project",
          }}
        />
      </div>

      {/* Text Left - Images Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <TextSection
          paragraphs={[
            "We help municipalities, industrial leaders, and agricultural producers build trust with taxpayers, stakeholders, and skilled workers.",
            "We invest 1-2 weeks in discovery before picking up a camera. Your authentic story is our best showcase.",
          ]}
        />
        <ImageSection
          images={[
            { src: "/about/bts-uofl-interview.webp", alt: "On set with an interview subject" },
            { src: "/about/bts-mountain-job-site.webp", alt: "Crew filming on a mountain job site" },
          ]}
          className="hidden lg:flex xl:translate-x-10"
        />
      </div>
    </section>
  );
};

interface ImageSectionProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export function ImageSection({ images, className }: ImageSectionProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-[2/1.5] overflow-hidden rounded-2xl"
        >
          <img
            src={image.src}
            alt={image.alt}
            width={600}
            height={450}
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

interface TextSectionProps {
  title?: string;
  paragraphs: string[];
  ctaButton?: {
    href: string;
    text: string;
  };
}

export function TextSection({
  title,
  paragraphs,
  ctaButton,
}: TextSectionProps) {
  return (
    <div className="flex-1 space-y-4 text-lg font-medium md:space-y-6">
      {title && <h2 className="text-primary text-4xl font-medium">{title}</h2>}
      <div className="text-muted-foreground max-w-xl space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {ctaButton && (
        <div className="mt-8">
          <Button size="lg" asChild>
            <a href={ctaButton.href}>{ctaButton.text}</a>
          </Button>
        </div>
      )}
    </div>
  );
}
