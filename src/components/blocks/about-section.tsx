import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const AboutSection = () => {
  return (
    <section className="container mt-10 flex max-w-5xl flex-col-reverse gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row lg:items-end">
      {/* Images Left - Text Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <ImageSection
          images={[
            { src: "/about/1.webp", alt: "Team collaboration" },
            { src: "/about/2.webp", alt: "Team workspace" },
          ]}
          className="xl:-translate-x-10"
        />

        <TextSection
          title="The approach"
          paragraphs={[
            "We started Coalbanks in 2019 with a simple belief: the best brand stories are found, not created. Every film we produce begins with deep discovery to uncover the real human truth behind your business. We are purpose-built to power authentic storytelling for the next decade.",
            "We are 100% founder and team-owned, profitable, and we keep our team lean. We're focused on what matters: finding your story and crafting it with cinema-quality production.",
            "If you're interested in authentic storytelling that breaks through the scroll, let's talk about your project.",
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
            "At Coalbanks, we're dedicated to transforming corporate messaging into authentic stories using documentary filmmaking techniques. Our mission is to help companies tell stories that people actually want to watch—because they don't sound like marketing. We'll stop at nothing to find the real human truth in your brand.",
            "We're story-obsessed — investing 1-2 weeks in discovery to understand your business before we ever pick up a camera. We're all in this together because your authentic story is our best showcase. Since 2019, we've delivered 65+ films with an average 73% completion rate—3x the industry standard—because when your story succeeds, so do we.",
          ]}
        />
        <ImageSection
          images={[
            { src: "/about/3.webp", alt: "Modern workspace" },
            { src: "/about/4.webp", alt: "Team collaboration" },
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
          <a href={ctaButton.href}>
            <Button size="lg">{ctaButton.text}</Button>
          </a>
        </div>
      )}
    </div>
  );
}
