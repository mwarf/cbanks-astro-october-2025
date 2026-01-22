import { useState } from "react";
import { Play, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VideoModalProps {
  videoUrl: string;
  thumbnail?: string;
  title: string;
  description?: string;
  triggerText?: string;
  triggerVariant?: "button" | "thumbnail" | "custom";
  className?: string;
  children?: React.ReactNode;
}

export const VideoModal = ({
  videoUrl,
  thumbnail,
  title,
  description,
  triggerText = "Watch Video",
  triggerVariant = "thumbnail",
  className,
  children,
}: VideoModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Convert YouTube/Vimeo URLs to embed format if needed
  const getEmbedUrl = (url: string) => {
    // Already an embed URL
    if (url.includes("/embed/")) return url;

    // YouTube URL
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const videoId = url.includes("youtu.be")
        ? url.split("youtu.be/")[1]?.split("?")[0]
        : url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Vimeo URL
    if (url.includes("vimeo.com")) {
      const videoId = url.split("vimeo.com/")[1]?.split("?")[0];
      return `https://player.vimeo.com/video/${videoId}`;
    }

    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* Trigger */}
      {triggerVariant === "custom" ? (
         <DialogTrigger className={className}>
           {children}
         </DialogTrigger>
      ) : triggerVariant === "button" ? (
        <DialogTrigger asChild>
          <Button size="lg" className={className}>
            <Play className="mr-2 h-5 w-5" />
            {triggerText}
          </Button>
        </DialogTrigger>
      ) : (
        <DialogTrigger asChild>
          <button
            className={cn(
              "group focus:ring-primary relative overflow-hidden rounded-xl border shadow-lg transition-all hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:outline-none",
              className,
            )}
          >
            <div className="relative aspect-video">
              {thumbnail && (
                <img
                    src={thumbnail}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
                <div className="bg-primary text-primary-foreground flex h-20 w-20 items-center justify-center rounded-full shadow-2xl transition-transform group-hover:scale-110">
                  <Play className="h-10 w-10 fill-current" />
                </div>
              </div>
            </div>
            {description && (
              <div className="bg-card p-4">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  {description}
                </p>
              </div>
            )}
          </button>
        </DialogTrigger>
      )}

      {/* Modal Content */}
      <DialogContent className="max-w-[90vw] p-0 border-none bg-black">
        <div className="relative">
          {/* Close Button */}
          <DialogClose className="absolute top-4 right-4 z-50 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/70 focus:ring-2 focus:ring-white focus:outline-none">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>

          {/* Video Embed */}
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
            {isOpen && (
              <iframe
                src={`${embedUrl}${embedUrl.includes("?") ? "&" : "?"}autoplay=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

