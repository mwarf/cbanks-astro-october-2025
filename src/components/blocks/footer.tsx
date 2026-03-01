import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Footer() {
  const navigation = [
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const social = [
    { name: "Instagram", href: "https://www.instagram.com/coalbanksco" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/coalbanks/" },
    { name: "YouTube", href: "https://www.youtube.com/@coalbanksco" },
  ];

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Ready to tell your story?
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          Documentary-style brand films that actually work because they don't
          sound like marketing.
        </p>
        <div className="text-muted-foreground mt-2 text-sm">
          <p>1401 28 St N, Lethbridge, AB T1H 6H9</p>
          <p>(587) 813-5950</p>
        </div>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <a href="/contact">Start a Project</a>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </a>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name}{" "}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <p className="text-muted-foreground container mx-auto max-w-3xl text-center text-sm italic">
        Coalbanks Creative Inc. is located on the traditional territory of the
        Blackfoot Confederacy — the Siksika, Piikani, and Kainai Nations — as
        well as the Métis Nation of Alberta, Region 3. We honour the land, the
        people, and the treaties that connect us.
      </p>

      <div className="text-primary mt-10 w-full md:mt-14 lg:mt-20">
        <img
          src="/logo-coalbanks.svg"
          alt="Coalbanks Creative"
          className="w-full opacity-15 dark:invert"
          width={1569}
          height={279}
        />
      </div>
    </footer>
  );
}
