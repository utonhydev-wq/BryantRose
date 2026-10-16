import React, { useState, Suspense, lazy } from "react";
import { Navbar } from "./components/Navbar";
import { ProfileHeader } from "./components/ProfileHeader";
import { GemstoneVault } from "./components/GemstoneVault";
import { DiamondInspector } from "./components/DiamondInspector";
import { InstagramCarousel } from "./components/InstagramCarousel";
import { ProfessionalCredentials } from "./components/ProfessionalCredentials";
import { Footer } from "./components/Footer";
import { PROFILE_DATA, CarouselPost } from "./data/profileData";

const LightboxModal = lazy(() =>
  import("./components/LightboxModal").then((m) => ({ default: m.LightboxModal }))
);

export default function App() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeLightboxPosts, setActiveLightboxPosts] = useState<CarouselPost[]>(
    PROFILE_DATA.carouselPosts
  );

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleOpenLightbox = (index: number, postsList: CarouselPost[]) => {
    setActiveLightboxPosts(postsList);
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % activeLightboxPosts.length);
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (prev) => (prev! - 1 + activeLightboxPosts.length) % activeLightboxPosts.length
    );
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col font-sans selection:bg-zinc-700 selection:text-white">
      {/* 3-Zone Top Bar Navigation */}
      <Navbar onScrollTo={handleScrollTo} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Profile Header Hero Section */}
        <ProfileHeader onExploreGallery={() => handleScrollTo("featured-pairing")} />

        {/* Curated 4-Post Carousel: Watches & Diamonds (At the beginning) */}
        <InstagramCarousel
          id="featured-pairing"
          badgeLabel="Curated Pairing"
          title="Fine Watches & Luxury Diamonds"
          subtitle="The perfect combination is always a fine watch paired with a luxurious diamond."
          posts={PROFILE_DATA.featuredWatchDiamondPosts}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Dedicated 8-Image Automatic Carousel (At the beginning) */}
        <InstagramCarousel
          id="gallery"
          badgeLabel="Instagram Visual Portfolio"
          title="Curated Gemology & Field Selections"
          subtitle="50,000+ certified gemstones · 50.000+ gemas certificadas · Pigeon blood ruby"
          posts={PROFILE_DATA.carouselPosts}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* The Gemstone Vault (Diamonds, Emeralds, Rubies, Sapphires, Fancy Colored) */}
        <GemstoneVault />

        {/* Diamond Inspector (The 4Cs: Cut, Color, Clarity, Carat Weight) */}
        <DiamondInspector />

        {/* Professional Content: Entrepreneur & Investor / Gemology & Precious Stones */}
        <ProfessionalCredentials />
      </main>

      {/* Elegant Footer */}
      <Footer />

      {/* Lightbox Modal for Fullscreen Image Inspection */}
      {lightboxIndex !== null && (
        <Suspense fallback={null}>
          <LightboxModal
            currentIndex={lightboxIndex}
            posts={activeLightboxPosts}
            onClose={handleCloseLightbox}
            onNext={handleNextLightbox}
            onPrev={handlePrevLightbox}
          />
        </Suspense>
      )}
    </div>
  );
}
