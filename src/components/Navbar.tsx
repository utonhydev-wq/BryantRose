import React from "react";
import { ArrowUpRight } from "lucide-react";
import { PROFILE_DATA } from "../data/profileData";

interface NavbarProps {
  onScrollTo: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollTo }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-[#09090b]/85 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark (Single text element in display face, no subtext) */}
        <a
          href="#profile"
          onClick={(e) => {
            e.preventDefault();
            onScrollTo("profile");
          }}
          className="shrink-0 font-serif text-lg font-semibold tracking-wider text-zinc-100 hover:text-white transition-colors uppercase whitespace-nowrap"
        >
          Bryant Rose
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium tracking-wide uppercase text-zinc-400">
          <button
            type="button"
            onClick={() => onScrollTo("vault")}
            className="hover:text-zinc-100 transition-colors whitespace-nowrap cursor-pointer"
          >
            Vault
          </button>
          <button
            type="button"
            onClick={() => onScrollTo("diamond-inspector")}
            className="hover:text-zinc-100 transition-colors whitespace-nowrap cursor-pointer"
          >
            4Cs Inspector
          </button>
          <button
            type="button"
            onClick={() => onScrollTo("featured-pairing")}
            className="hover:text-zinc-100 transition-colors whitespace-nowrap cursor-pointer"
          >
            Gallery
          </button>
          <button
            type="button"
            onClick={() => onScrollTo("credentials")}
            className="hover:text-zinc-100 transition-colors whitespace-nowrap cursor-pointer"
          >
            Credentials
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center shrink-0">
          <a
            href={PROFILE_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-900/90 px-3.5 py-1.5 text-xs font-medium text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white transition-all whitespace-nowrap shrink-0 shadow-sm"
            aria-label="Visit Bryant Rose's official Instagram profile"
          >
            <span>Visit Instagram</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </header>
  );
};
