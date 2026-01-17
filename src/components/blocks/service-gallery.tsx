import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  thumbnail?: string;
}

interface ServiceGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export const ServiceGallery = ({
  images,
  columns = 3,
  className,
}: ServiceGalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") setIsOpen(false);
  };

  return (
    <>
      {/* Thumbnail Grid */}
      <div className={cn("grid gap-4", gridCols[columns], className)}>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="group bg-muted focus:ring-primary relative aspect-video overflow-hidden rounded-xl border transition-all hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            <img
              src={image.thumbnail || image.src}
              alt={image.alt}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-7xl p-0" onKeyDown={handleKeyDown}>
          <div className="relative">
            {/* Close Button */}
            <DialogClose className="absolute top-4 right-4 z-50 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/70 focus:ring-2 focus:ring-white focus:outline-none">
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </DialogClose>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 z-50 rounded-full bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-sm">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Main Image */}
            <div className="relative flex items-center justify-center bg-black">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="max-h-[85vh] w-full object-contain"
              />
            </div>

            {/* Caption */}
            {images[currentIndex].caption && (
              <div className="bg-muted px-6 py-4">
                <p className="text-muted-foreground text-center text-sm">
                  {images[currentIndex].caption}
                </p>
              </div>
            )}

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white backdrop-blur-sm transition-colors hover:bg-black/70 focus:ring-2 focus:ring-white focus:outline-none"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white backdrop-blur-sm transition-colors hover:bg-black/70 focus:ring-2 focus:ring-white focus:outline-none"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
