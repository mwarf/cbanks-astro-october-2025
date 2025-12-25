export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  videoUrl?: string; // For the modal
  featured?: boolean;
  pubDate: Date;
}

export const projects: Project[] = [
  {
    id: "the-last-blacksmith",
    title: "The Last Blacksmith",
    client: "Heritage Crafts",
    category: "Brand Documentary",
    image: "/portfolio/project-1.png",
    description: "A 12-minute film exploring the dying art of traditional blacksmithing in Southern Alberta.",
    tags: ["Documentary", "Craft", "Heritage"],
    featured: true,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    pubDate: new Date("2023-10-15")
  },
  {
    id: "growing-tomorrow",
    title: "Growing Tomorrow",
    client: "Prairie AgTech",
    category: "Recruitment",
    image: "/portfolio/project-2.png",
    description: "Showcasing the innovative spirit of young farmers using technology to revolutionize agriculture.",
    tags: ["Agriculture", "Tech", "Recruitment"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    pubDate: new Date("2023-11-02")
  },
  {
    id: "community-first",
    title: "Community First",
    client: "Lethbridge Family Services",
    category: "Fundraising",
    image: "/portfolio/project-3.png",
    description: "An emotional look at the impact of community support services on local families.",
    tags: ["Non-Profit", "Community", "Fundraising"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    pubDate: new Date("2023-09-20")
  },
  {
    id: "built-to-last",
    title: "Built to Last",
    client: "IronClad Construction",
    category: "Brand Story",
    image: "/portfolio/project-4.png",
    description: "Following the construction of a landmark building from groundbreak to ribbon cutting.",
    tags: ["Construction", "Corporate", "Brand"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    pubDate: new Date("2023-08-12")
  },
  {
    id: "the-roasters-journey",
    title: "The Roaster's Journey",
    client: "Crowsnest Coffee",
    category: "Product Launch",
    image: "/portfolio/project-5.png",
    description: "Tracing the journey of coffee beans from fair-trade farms to the morning cup.",
    tags: ["Food & Bev", "Product", "Story"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    pubDate: new Date("2024-01-10")
  },
  {
    id: "energy-in-motion",
    title: "Energy in Motion",
    client: "WindSouth",
    category: "Investor Relations",
    image: "/portfolio/project-6.png",
    description: "Explaining complex renewable energy infrastructure to potential investors.",
    tags: ["Energy", "Finance", "Corporate"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    pubDate: new Date("2023-12-05")
  }
];
