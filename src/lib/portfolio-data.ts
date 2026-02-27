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

