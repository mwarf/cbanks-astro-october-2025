import { Facebook, Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Alex Morgan",
    title: "Creative Director",
    bio: "Visionary leader with over 15 years of experience in digital design and branding.",
    image: "/team/1.png",
    socials: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Sarah Chen",
    title: "Lead UX Designer",
    bio: "Passionate about creating intuitive and accessible user experiences that delight.",
    image: "/team/2.png",
    socials: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Michael Ross",
    title: "Senior Developer",
    bio: "Full-stack wizard who loves turning complex problems into elegant code solutions.",
    image: "/team/3.png",
    socials: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Emily Watson",
    title: "Marketing Strategist",
    bio: "Data-driven marketer who knows how to tell compelling stories that convert.",
    image: "/team/4.png",
    socials: {
      twitter: "#",
      linkedin: "#",
    },
  },
];

export function TeamSection() {
  return (
    <section className="container max-w-6xl py-24 lg:py-32">
      <div className="mb-16 text-center">
        <h2 className="text-foreground mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Meet Our Team
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          We are a diverse group of thinkers and makers, dedicated to crafting
          exceptional digital experiences.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <div
            key={member.name}
            className="group bg-muted/30 hover:bg-muted/50 relative overflow-hidden rounded-2xl p-4 transition-all"
          >
            <div className="bg-muted aspect-square overflow-hidden rounded-xl">
              <img
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="pt-6">
              <h3 className="text-foreground text-xl font-semibold">
                {member.name}
              </h3>
              <p className="text-primary mb-3 text-sm font-medium">
                {member.title}
              </p>
              <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                {member.bio}
              </p>
              <div className="flex gap-4">
                <a
                  href={member.socials.twitter}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href={member.socials.linkedin}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
