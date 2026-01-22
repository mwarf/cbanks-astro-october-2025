import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface InlineVideoPlayerProps {
  videoUrl: string;
  poster: string;
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export function InlineVideoPlayer({
  videoUrl,
  poster,
  title,
  subtitle,
  description,
  className,
}: InlineVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Convert YouTube/Vimeo URLs to embed format if needed
  const getEmbedUrl = (url: string) => {
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
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-xl",
        className,
      )}
    >
      {isPlaying ? (
        <iframe
          src={`${embedUrl}${embedUrl.includes("?") ? "&" : "?"}autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <>
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={poster}
              alt={title}
              className="h-full w-full object-cover brightness-[0.4]"
            />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center text-white">
            <div className="w-full max-w-4xl">
              {subtitle && (
                <p className="mb-4 text-sm font-bold tracking-widest text-white/70 uppercase">
                  {subtitle}
                </p>
              )}
              <h2 className="font-display mb-10 text-4xl font-bold tracking-tight text-white md:text-6xl">
                {title}
              </h2>

              <button
                onClick={() => setIsPlaying(true)}
                className="group relative inline-flex items-center justify-center rounded-full transition-transform hover:scale-110 focus:ring-4 focus:ring-white/20 focus:outline-none"
                aria-label={`Play ${title}`}
              >
                <div className="relative flex h-24 w-24 items-center justify-center">
                  {/* Pulse Ring */}
                  <div className="absolute -inset-4 rounded-full bg-white/20 opacity-0 duration-1000 group-hover:animate-ping group-hover:opacity-100"></div>
                  {/* Main Button Visual */}
                  <div className="bg-primary text-primary-foreground group-hover:bg-primary group-hover:text-primary-foreground relative flex h-24 w-24 items-center justify-center rounded-full bg-white text-black shadow-2xl transition-all duration-300">
                    <Play className="ml-1 h-10 w-10 fill-current" />
                  </div>
                </div>
              </button>

              {description && (
                <p className="mx-auto mt-8 max-w-xl text-lg font-light text-white/80">
                  {description}
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
