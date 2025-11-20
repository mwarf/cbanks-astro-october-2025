import Marquee from "react-fast-marquee";

import { cn } from "@/lib/utils";

type Company = {
  name: string;
  logo: string;
  width: number;
  height: number;
  href: string;
};

export const Logos = () => {
  const topRowCompanies = [
    {
      name: "Government of Alberta",
      logo: "/logos/government-of-alberta-logo-dark.svg",
      width: 143,
      height: 40,
      href: "https://www.alberta.ca",
    },
    {
      name: "City of Lethbridge",
      logo: "/logos/city-of-lethbridge-horizontal-dark.svg",
      width: 154,
      height: 40,
      href: "https://www.lethbridge.ca",
    },
    {
      name: "Stantec Consulting",
      logo: "/logos/stantec-consulting-logo-dark.svg",
      width: 113,
      height: 30,
      href: "https://www.stantec.com",
    },
    {
      name: "Sumus",
      logo: "/logos/sumus-horizontal-dark.svg",
      width: 112,
      height: 40,
      href: "https://sumus.io",
    },
  ];

  const bottomRowCompanies = [
    {
      name: "MD Taber",
      logo: "/logos/md-taber-logo-dark.svg",
      width: 141,
      height: 60,
      href: "https://www.mdtaber.com",
    },
    {
      name: "Castle Mountain Resort",
      logo: "/logos/castle-mountain-logo-dark.svg",
      width: 104,
      height: 45,
      href: "https://www.castlemountain.ca",
    },
    {
      name: "Galt Museum",
      logo: "/logos/galt-horizontal-dark.svg",
      width: 105,
      height: 40,
      href: "https://galtmuseum.com",
    },
    {
      name: "Storyhive",
      logo: "/logos/storyhive-logo-dark.svg",
      width: 128,
      height: 40,
      href: "https://www.storyhive.com",
    },
    {
      name: "Snapshot Studios",
      logo: "/logos/snapshot-studios-logo-dark.svg",
      width: 90,
      height: 40,
      href: "https://www.snapshotstudios.com",
    },
  ];

  return (
    <section className="overflow-hidden pb-28 lg:pb-32">
      <div className="container space-y-10 lg:space-y-16">
        <div className="text-center">
          <h2 className="mb-4 text-xl text-balance md:text-2xl lg:text-3xl">
            Trusted by Southern Alberta organizations and government entities.
            <br className="max-md:hidden" />
            <span className="text-muted-foreground">
              From municipalities to regional businesses.
            </span>
          </h2>
        </div>

        <div className="flex w-full flex-col items-center gap-8">
          {/* Top row - 4 logos */}
          <LogoRow companies={topRowCompanies} gridClassName="grid-cols-4" />

          {/* Bottom row - 5 logos */}
          <LogoRow
            companies={bottomRowCompanies}
            gridClassName="grid-cols-5"
            direction="right"
          />
        </div>
      </div>
    </section>
  );
};

type LogoRowProps = {
  companies: Company[];
  gridClassName: string;
  direction?: "left" | "right";
};

const LogoRow = ({ companies, gridClassName, direction }: LogoRowProps) => {
  return (
    <>
      {/* Desktop static version */}
      <div className="hidden md:block">
        <div
          className={cn(
            "grid items-center justify-items-center gap-x-20 lg:gap-x-28",
            gridClassName,
          )}
        >
          {companies.map((company, index) => (
            <a href={company.href} target="_blank" key={index}>
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                width={company.width}
                height={company.height}
                className="dark:opacity/100 object-contain opacity-50 transition-opacity hover:opacity-70 dark:invert"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile marquee version */}
      <div className="md:hidden">
        <Marquee direction={direction} pauseOnHover>
          {companies.map((company, index) => (
            <a
              href={company.href}
              target="_blank"
              key={index}
              className="mx-8 inline-block transition-opacity hover:opacity-70"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                width={company.width}
                height={company.height}
                className="object-contain"
              />
            </a>
          ))}
        </Marquee>
      </div>
    </>
  );
};
