import { DashedLine } from "../dashed-line";

import { cn } from "@/lib/utils";

const topItems = [
  {
    title: "Real conversations, authentic moments.",
    description:
      "We capture genuine interactions that resonate with your audience.",
    images: [
      {
        src: "/images/home/resource-1.png",
        alt: "Documentary filming setup",
        width: 495,
        height: 186,
      },
    ],
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: [""],
  },
  {
    title: "Thoughtful discovery process.",
    description: "We spend 1-2 weeks finding the story worth telling.",
    images: [
      {
        src: "/logos/sumus-horizontal-dark.svg",
        alt: "Discovery session",
        width: 48,
        height: 48,
      },
      {
        src: "/logos/government-of-alberta-logo-dark.svg",
        alt: "Story outline",
        width: 48,
        height: 48,
      },
      {
        src: "/logos/city-of-lethbridge-horizontal-dark.svg",
        alt: "Research materials",
        width: 48,
        height: 48,
      },
      {
        src: "/logos/stantec-consulting-logo-dark.svg",
        alt: "Script development",
        width: 48,
        height: 48,
      },
      {
        src: "/logos/castle-mountain-logo-dark.svg",
        alt: "Timeline planning",
        width: 48,
        height: 48,
      },
      {
        src: "/logos/galt-horizontal-dark.svg",
        alt: "Asset management",
        width: 48,
        height: 48,
      },
      {
        src: "/logos/sumus-horizontal-dark.svg",
        alt: "Project tracking",
        width: 48,
        height: 48,
      },
      {
        src: "/logos/storyhive-logo-dark.svg",
        alt: "Workflow planning",
        width: 48,
        height: 48,
      },
    ],
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 md:[&>.title-container]:translate-x-2 xl:[&>.title-container]:translate-x-4 [&>.title-container]:translate-x-0",
    fade: [],
  },
];

const bottomItems = [
  {
    title: "65+ films delivered since 2019.",
    description:
      "A proven track record of authentic storytelling for businesses.",
    images: [
      {
        src: "/images/home/resource-2.png",
        alt: "Film reel collection",
        width: 305,
        height: 280,
      },
    ],
    className:
      "[&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: ["bottom"],
  },
  {
    title: "Average view completion rate: 73%.",
    description: "Industry average is 37% - our films actually get watched.",
    images: [
      {
        src: "/images/home/resource-3.png",
        alt: "Analytics dashboard",
        width: 320,
        height: 103,
      },
    ],
    className:
      "justify-normal [&>.title-container]:mb-5 md:[&>.title-container]:mb-0 [&>.image-container]:flex-1 md:[&>.image-container]:place-items-center md:[&>.image-container]:-translate-y-3",
    fade: [""],
  },
  {
    title: "Based in Lethbridge, serving Southern Alberta.",
    description:
      "Deep understanding of the local business landscape and culture.",
    images: [
      {
        src: "/images/home/resource-4.png",
        alt: "Map of Southern Alberta",
        width: 305,
        height: 280,
      },
    ],
    className:
      "[&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: ["bottom"],
  },
];

export const ResourceAllocation = ({ images }: { images?: any[] }) => {
  return (
    <section
      id="resource-allocation"
      className="overflow-hidden pb-28 lg:pb-32"
    >
      <div className="">
        <h2 className="container text-center text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
          Tell your story without sounding like marketing
        </h2>

        <div className="mt-8 md:mt-12 lg:mt-20">
          <DashedLine
            orientation="horizontal"
            className="container scale-x-105"
          />

          {/* Top Features Grid - 2 items */}
          <div className="relative container flex max-md:flex-col">
            {topItems.map((item, i) => (
              <Item 
                key={i} 
                item={item} 
                isLast={i === topItems.length - 1} 
                image={i === 0 && images ? images[0] : undefined}
              />
            ))}
          </div>
          <DashedLine
            orientation="horizontal"
            className="container max-w-7xl scale-x-110"
          />

          {/* Bottom Features Grid - 3 items */}
          <div className="relative container grid max-w-7xl md:grid-cols-3">
            {bottomItems.map((item, i) => (
              <Item
                key={i}
                item={item}
                isLast={i === bottomItems.length - 1}
                className="md:pb-0"
                image={images ? images[i + 1] : undefined}
              />
            ))}
          </div>
        </div>
        <DashedLine
          orientation="horizontal"
          className="container max-w-7xl scale-x-110"
        />
      </div>
    </section>
  );
};

interface ItemProps {
  item: (typeof topItems)[number] | (typeof bottomItems)[number];
  isLast?: boolean;
  className?: string;
  image?: any;
}

const Item = ({ item, isLast, className, image }: ItemProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between px-0 py-6 md:px-6 md:py-8",
        className,
        item.className,
      )}
    >
      <div className="title-container text-balance">
        <h3 className="inline font-semibold">{item.title} </h3>
        <span className="text-muted-foreground"> {item.description}</span>
      </div>

      {item.fade.includes("bottom") && (
        <div className="from-muted/80 absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent md:hidden" />
      )}
      {item.images.length > 4 ? (
        <div className="relative overflow-hidden">
          <div className="flex flex-col gap-5">
            {/* First row - right aligned */}
            <div className="flex translate-x-4 justify-end gap-5">
              {item.images.slice(0, 4).map((img, j) => (
                <div
                  key={j}
                  className="bg-background grid aspect-square size-16 place-items-center rounded-2xl p-2 lg:size-20"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="object-contain object-left-top"
                  />
                  <div className="from-muted/80 absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l to-transparent" />
                </div>
              ))}
            </div>
            {/* Second row - left aligned */}
            <div className="flex -translate-x-4 gap-5">
              {item.images.slice(4).map((img, j) => (
                <div
                  key={j}
                  className="bg-background grid aspect-square size-16 place-items-center rounded-2xl lg:size-20"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="object-contain object-left-top"
                  />
                  <div className="from-muted absolute inset-y-0 bottom-0 left-0 z-10 w-14 bg-linear-to-r to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="image-container grid grid-cols-1 gap-4">
          {item.images.map((img, j) => (
            <img
              key={j}
              src={image?.src || img.src}
              alt={img.alt}
              className="object-cover object-center w-full h-auto rounded-xl shadow-sm"
              width={image?.width}
              height={image?.height}
            />
          ))}
        </div>
      )}

      {!isLast && (
        <>
          <DashedLine
            orientation="vertical"
            className="absolute top-0 right-0 max-md:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute inset-x-0 bottom-0 md:hidden"
          />
        </>
      )}
    </div>
  );
};
