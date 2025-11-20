import { DashedLine } from "@/components/dashed-line";

const stats = [
  {
    value: "65+",
    label: "Films Delivered",
  },
  {
    value: "73%",
    label: "Avg. View Rate",
  },
  {
    value: "2019",
    label: "Founded",
  },
  {
    value: "4-6 wks",
    label: "Timeline",
  },
];

export function AboutHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="font-display font-bold text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Your Employees Have Better Stories Than Your Marketing Department
          </h1>

          <p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
            The best brand stories are found, not created.
          </p>

          <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
            We're Coalbanks—documentary-style filmmakers who dig into Southern
            Alberta businesses until we uncover the real human truth that makes
            people stop scrolling. Not because they have to watch. Because the
            story actually matters. Since 2019, we've delivered 65+ films with
            an average 73% completion rate. That's nearly double the 37%
            industry average. The difference? We stopped making videos that
            sound like marketing and started making films that feel like stories
            people actually care about.
          </p>
        </div>

        <div
          className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10`}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="font-display text-4xl tracking-wide md:text-5xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
