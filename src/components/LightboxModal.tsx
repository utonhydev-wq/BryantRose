import React, { useEffect } from "react";
import { ChevronLeft, ChevronRight, X, ExternalLink, Diamond } from "lucide-react";
import { PROFILE_DATA, CarouselPost } from "../data/profileData";

interface LightboxModalProps {
  currentIndex: number | null;
  posts?: CarouselPost[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  currentIndex,
  posts = PROFILE_DATA.carouselPosts,
  onClose,
  onNext,
  onPrev,
}) => {

  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onPrev();
      } else if (e.key === "ArrowRight") {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [currentIndex, onClose, onNext, onPrev]);

  if (currentIndex === null) return null;

  const currentPost = posts[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gemstone post inspection"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
    >
      {/* Top Bar inside modal */}
      <div className="absolute top-0 inset-x-0 flex items-center justify-between p-4 sm:p-6 z-20 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-3">
          <Diamond className="h-4 w-4 text-zinc-400" />
          <span className="text-xs tracking-wider uppercase text-zinc-400 font-mono">
            Bryant Rose · Post {currentIndex + 1} of {posts.length}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={PROFILE_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition-colors"
          >
            <span>Instagram</span>
            <ExternalLink className="h-3 w-3" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer"
            aria-label="Close viewer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main Image Viewport */}
      <div className="relative flex h-full w-full max-w-5xl items-center justify-center pt-16 pb-12">
        <img
          src={currentPost.url}
          alt={`Bryant Rose Instagram post ${currentPost.postNumber}`}
          className="max-h-[82vh] max-w-[90vw] object-contain rounded-md shadow-2xl"
          referrerPolicy="no-referrer"
        />

        {/* Previous Button */}
        <button
          type="button"
          onClick={onPrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700/80 bg-zinc-950/80 text-zinc-200 hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={onNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700/80 bg-zinc-950/80 text-zinc-200 hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Bottom caption */}
      <div className="absolute bottom-3 inset-x-0 text-center text-xs text-zinc-400">
        <span>Use Left/Right arrow keys to navigate · ESC to exit</span>
      </div>
    </div>
  );
};
