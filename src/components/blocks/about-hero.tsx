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
            We Don't Write Scripts. <br /> We Find Truth.
          </h1>

          <p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
            Documentary filmmaking for Southern Alberta's builders, makers, and leaders.
          </p>

          <div className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
            <p>
              In a world of polished marketing fluff, authenticity is the only
              currency that matters. We believe that your best stories aren't
              invented in a boardroom—they're already happening in your
              hallways, on your job sites, and in the lives of your customers.
            </p>
            <p>
              Our "documentary-style" approach isn't just an aesthetic; it's a
              philosophy. We trade teleprompters for conversation and actors for
              real people. We dig deep to uncover the human element that makes
              your business unique. The result? Films that don't just get
              watched, but felt.
            </p>
          </div>
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
