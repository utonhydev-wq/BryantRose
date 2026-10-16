import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Pause,
  Play,
  RotateCcw,
  Sparkles,
  Instagram,
} from "lucide-react";
import { PROFILE_DATA, CarouselPost } from "../data/profileData";

interface InstagramCarouselProps {
  id?: string;
  badgeLabel?: string;
  title?: string;
  subtitle?: string;
  posts?: CarouselPost[];
  onOpenLightbox?: (postIndex: number, posts: CarouselPost[]) => void;
}

export const InstagramCarousel: React.FC<InstagramCarouselProps> = ({
  id = "gallery",
  badgeLabel = "Instagram Visual Portfolio",
  title = "Curated Gemology & Field Selections",
  subtitle,
  posts = PROFILE_DATA.carouselPosts,
  onOpenLightbox,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isPausedByUser, setIsPausedByUser] = useState<boolean>(false);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Timer reference for the 4-second automatic advance
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const [progress, setProgress] = useState<number>(0);

  // Preload adjacent images to prevent blank slides
  useEffect(() => {
    posts.forEach((p) => {
      const img = new Image();
      img.src = p.url;
    });
  }, [posts]);

  // Advance to next slide seamlessly (loops post 8 -> post 1)
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, [posts.length]);

  // Move to previous slide
  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, [posts.length]);

  // Jump to specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  // 4000ms timer with 100ms ticker for smooth progress bar and hover-pause
  useEffect(() => {
    if (isHovered || isPausedByUser) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    startTimeRef.current = Date.now() - (progress / 100) * 4000;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const currentProgress = Math.min((elapsed / 4000) * 100, 100);
      setProgress(currentProgress);

      if (elapsed >= 4000) {
        nextSlide();
      }
    }, 50);

    timerRef.current = interval;

    return () => clearInterval(interval);
  }, [currentIndex, isHovered, isPausedByUser, nextSlide, progress]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 45; // 45px swipe threshold

    if (distance > minSwipeDistance) {
      // Swiped Left -> Next
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Previous
      prevSlide();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Keyboard navigation when user interacts with carousel
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const activePost = posts[currentIndex];

  return (
    <section
      id={id}
      className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8"
      aria-label={`${title} Carousel`}
    >
      <div className="mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-800/80 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-400 mb-1">
              <Instagram className="h-3.5 w-3.5 text-zinc-300" />
              <span>{badgeLabel}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>{posts.length} Posts</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-white">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 font-light italic">
                "{subtitle}"
              </p>
            )}
          </div>

          {/* Autoplay Controls & Slide Counter */}
          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <span className="font-mono tabular-nums tracking-wider text-zinc-300">
              {String(currentIndex + 1).padStart(2, "0")} / {String(posts.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={() => setIsPausedByUser(!isPausedByUser)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors cursor-pointer"
              title={isPausedByUser ? "Resume automatic rotation" : "Pause automatic rotation"}
              aria-label={isPausedByUser ? "Play carousel" : "Pause carousel"}
            >
              {isPausedByUser ? <Play className="h-3.5 w-3.5 fill-current" /> : <Pause className="h-3.5 w-3.5" />}
            </button>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div
          className="group relative overflow-hidden rounded-2xl border border-zinc-800/90 bg-[#0d0d10] shadow-2xl focus:outline-none focus:ring-1 focus:ring-zinc-600"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          aria-roledescription="carousel"
        >
          {/* Subtle Progress Bar (Resets every 4000ms) */}
          <div className="absolute top-0 left-0 right-0 z-20 h-0.5 bg-zinc-800/60">
            <div
              className="h-full bg-zinc-300 transition-all duration-75"
              style={{
                width: isHovered || isPausedByUser ? `${progress}%` : `${progress}%`,
                opacity: isHovered || isPausedByUser ? 0.4 : 1,
              }}
            />
          </div>

          {/* Fixed aspect ratio container preventing layout shifts */}
          {/* 4:5 Instagram Portrait ratio container on mobile, adaptive max-h-[580px] on desktop */}
          <div className="relative flex items-center justify-center w-full aspect-[4/5] sm:aspect-[1/1] md:aspect-[4/3] max-h-[580px] bg-gradient-to-b from-[#111115] via-[#09090c] to-[#111115]">
            
            {/* Slide Images with Smooth Crossfade & Transition */}
            {posts.map((post, idx) => {
              const isActive = idx === currentIndex;
              const hasError = imageErrors[idx];

              return (
                <div
                  key={post.id}
                  className={`absolute inset-0 flex items-center justify-center p-2 sm:p-4 transition-opacity duration-500 ease-in-out ${
                    isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                  }`}
                  aria-hidden={!isActive}
                >
                  {hasError ? (
                    /* Graceful error fallback keeping slide functional */
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-dashed border-zinc-700/60 bg-zinc-900/60 p-6 text-center">
                      <Sparkles className="h-8 w-8 text-zinc-500 mb-2" />
                      <p className="text-sm font-medium text-zinc-300">Image currently loading or unavailable</p>
                      <p className="text-xs text-zinc-500 mt-1">Post {post.postNumber} from official Instagram catalog</p>
                      <a
                        href={PROFILE_DATA.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 text-xs text-zinc-400 underline hover:text-white"
                      >
                        View on Instagram
                      </a>
                    </div>
                  ) : (
                    /* The actual image container using non-cropping object-contain */
                    <div className="relative flex items-center justify-center h-full w-full">
                      {/* Ambient blur background for rich luxury depth */}
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-20 blur-2xl scale-95 pointer-events-none"
                        style={{ backgroundImage: `url(${post.url})` }}
                        aria-hidden="true"
                      />

                      <img
                        src={post.url}
                        alt={`Bryant Rose Instagram post ${post.postNumber} - Gemology and diamond collection`}
                        loading={idx <= 1 ? "eager" : "lazy"}
                        referrerPolicy="no-referrer"
                        onError={() => handleImageError(idx)}
                        onClick={() => onOpenLightbox && onOpenLightbox(currentIndex, posts)}
                        className="relative z-10 max-h-full max-w-full rounded-lg object-contain shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
                      />

                      {/* Expand / Lightbox overlay trigger button */}
                      <button
                        type="button"
                        onClick={() => onOpenLightbox && onOpenLightbox(currentIndex, posts)}
                        className="absolute bottom-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700/80 bg-black/70 text-zinc-300 hover:text-white hover:bg-black/90 transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-lg backdrop-blur-sm"
                        title="Inspect image in high resolution"
                        aria-label="Inspect image"
                      >
                        <Maximize2 className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Manual Navigation Arrows (unobtrusive, sleek silver touch) */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-zinc-700/80 bg-zinc-950/70 text-zinc-300 backdrop-blur-md shadow-lg transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Previous image"
              title="Previous image"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-zinc-700/80 bg-zinc-950/70 text-zinc-300 backdrop-blur-md shadow-lg transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Next image"
              title="Next image"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

          </div>

          {/* Carousel Footer Bar: Pagination Indicators & Post Caption */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-zinc-800/80 bg-zinc-950/90 px-4 py-3.5 backdrop-blur-md">
            
            {/* Post Information */}
            <div className="text-center sm:text-left">
              <p className="text-xs font-medium text-zinc-200">
                {activePost.title}
              </p>
              <p className="text-[11px] text-zinc-400">
                {activePost.subtitle}
              </p>
            </div>

            {/* 8 Pagination Indicators */}
            <div
              className="flex items-center gap-1.5"
              role="tablist"
              aria-label="Select slide"
            >
              {posts.map((post, idx) => {
                const isSelected = idx === currentIndex;
                return (
                  <button
                    key={post.id}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    role="tab"
                    aria-selected={isSelected}
                    aria-label={`Slide ${idx + 1} of ${posts.length}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      isSelected
                        ? "h-1.5 w-6 bg-zinc-200"
                        : "h-1.5 w-1.5 bg-zinc-700 hover:bg-zinc-500"
                    }`}
                  />
                );
              })}
            </div>

            {/* Direct Link to Instagram */}
            <div className="hidden sm:block">
              <a
                href={PROFILE_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-medium text-zinc-400 hover:text-white transition-colors"
              >
                @{PROFILE_DATA.username} ↗
              </a>
            </div>

          </div>

        </div>

        {/* Carousel Operational Notice (Subtle, unobtrusive) */}
        <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-400 px-1">
          <span>Cycles automatically every 4 seconds · Hover to pause</span>
          <span className="hidden sm:inline">Swipe or use arrow keys to navigate</span>
        </div>

      </div>
    </section>
  );
};
