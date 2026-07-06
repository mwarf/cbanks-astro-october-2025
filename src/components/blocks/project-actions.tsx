import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectVideoModal } from "./project-video-modal";
import type { Project } from "@/lib/portfolio-data";

export function ProjectActions({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!project.videoUrl) return null;

  return (
    <>
      <Button size="lg" className="w-full gap-2" onClick={() => setIsOpen(true)}>
        <Play className="h-4 w-4 fill-current" aria-hidden="true" />
        Watch Full Film
      </Button>

      <ProjectVideoModal 
        project={project} 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
}
