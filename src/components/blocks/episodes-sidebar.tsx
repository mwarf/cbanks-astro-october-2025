import { useState } from "react";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Episode {
  title: string;
  url: string;
}

interface EpisodesSidebarProps {
  episodes: Episode[];
  projectTitle: string;
}

export function EpisodesSidebar({ episodes, projectTitle }: EpisodesSidebarProps) {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  if (!episodes || episodes.length === 0) return null;

  return (
    <>
      <div className="rounded-2xl border bg-card p-8 shadow-sm">
        <h3 className="font-display text-2xl font-bold mb-4">Watch the Series</h3>
        <ul className="space-y-3">
          {episodes.map((episode, index) => (
            <li key={index}>
              <button
                onClick={() => setSelectedEpisode(episode)}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group w-full text-left"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <Play className="h-4 w-4" />
                </span>
                <span className="font-medium">{episode.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Dialog open={!!selectedEpisode} onOpenChange={(open) => !open && setSelectedEpisode(null)}>
        <DialogContent className="sm:max-w-4xl p-0 overflow-hidden bg-black border-none">
          <div className="relative aspect-video w-full">
            {selectedEpisode && (
              <iframe
                width="100%"
                height="100%"
                src={selectedEpisode.url + "?autoplay=1"}
                title={selectedEpisode.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            )}
          </div>
          <div className="p-6 bg-background">
            <DialogHeader>
              <DialogTitle className="text-2xl font-display">
                {selectedEpisode?.title}
              </DialogTitle>
              <DialogDescription className="text-base mt-2">
                {projectTitle}
              </DialogDescription>
            </DialogHeader>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
