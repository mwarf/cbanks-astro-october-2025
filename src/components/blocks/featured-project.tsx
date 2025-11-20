import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/portfolio-data";
import { ProjectVideoModal } from "./project-video-modal";

export function FeaturedProject({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative w-full overflow-hidden rounded-2xl bg-black text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover opacity-60 transition-transform duration-1000 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center p-8 md:p-16 lg:min-h-[600px] lg:w-2/3">
          <div className="mb-6 flex items-center gap-3">
            <Badge variant="outline" className="border-white/30 text-white">
              Featured Project
            </Badge>
            <span className="text-sm font-medium text-white/80">
              {project.client}
            </span>
          </div>

          <h2 className="font-display mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            {project.title}
          </h2>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2 rounded-full text-base" onClick={() => setIsOpen(true)}>
              <Play className="h-4 w-4 fill-current" />
              Watch Film
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <a href={`/portfolio/${project.id}`}>View Case Study</a>
            </Button>
          </div>
        </div>
      </div>

      <ProjectVideoModal 
        project={project} 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
}
