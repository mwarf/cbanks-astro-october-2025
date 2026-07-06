import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { Project } from "@/lib/portfolio-data";

interface ProjectVideoModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

function withAutoplay(url: string) {
  return `${url}${url.includes("?") ? "&" : "?"}autoplay=1`;
}

export function ProjectVideoModal({ project, isOpen, onClose }: ProjectVideoModalProps) {
  if (!project?.videoUrl) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-4xl p-0 overflow-hidden bg-black text-white border-none">
        <div className="relative aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src={withAutoplay(project.videoUrl)}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0"
          />
        </div>
        <div className="p-6 bg-background text-foreground">
            <DialogHeader>
            <DialogTitle className="text-2xl font-display">{project.title}</DialogTitle>
            <DialogDescription className="text-base mt-2">
                {project.description}
            </DialogDescription>
            </DialogHeader>
        </div>
      </DialogContent>
    </Dialog>
  );
}
