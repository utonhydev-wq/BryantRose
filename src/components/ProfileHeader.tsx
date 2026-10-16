import React, { useState } from "react";
import { ArrowUpRight, Diamond, Sparkles } from "lucide-react";
import { PROFILE_DATA } from "../data/profileData";
import { VerifiedBadge } from "./VerifiedBadge";

interface ProfileHeaderProps {
  onExploreGallery?: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ onExploreGallery }) => {
  const [avatarError, setAvatarError] = useState<boolean>(false);

  return (
    <section id="profile" className="relative pt-10 pb-12 sm:pt-16 sm:pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background ambient lighting - subtle silver/gemstone shimmer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 flex justify-center overflow-hidden"
      >
        <div className="h-[360px] w-[680px] bg-gradient-to-b from-zinc-700/10 via-zinc-800/5 to-transparent blur-3xl opacity-60" />
      </div>

      <div className="mx-auto max-w-4xl">
        {/* Top Profile Card Container */}
        <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          
          {/* Subtle diamond watermark icon top-right */}
          <div className="absolute top-6 right-6 text-zinc-800/60 pointer-events-none">
            <Diamond className="h-8 w-8 stroke-[1]" />
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10">
            
            {/* Circular Profile Picture Area */}
            <div className="relative shrink-0 flex flex-col items-center">
              <div className="relative group">
                {/* Silver/Platinum concentric halo ring */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-zinc-400/40 via-zinc-600/20 to-zinc-400/40 opacity-75 blur-xs transition duration-500 group-hover:opacity-100" />
                
                {/* Outer hairline border */}
                <div className="relative flex h-28 w-28 sm:h-36 sm:w-36 items-center justify-center rounded-full border-2 border-zinc-700/80 bg-[#121216] p-1 shadow-inner overflow-hidden">
                  {!avatarError ? (
                    <img
                      src={PROFILE_DATA.avatarUrl}
                      alt="Bryant Rose profile portrait"
                      referrerPolicy="no-referrer"
                      onError={() => setAvatarError(true)}
                      className="h-full w-full rounded-full object-cover"
                    />
                  ) : (
                    /* Elegant Gemological Monogram Fallback */
                    <div className="relative flex h-full w-full flex-col items-center justify-center rounded-full bg-gradient-to-b from-zinc-800/90 to-zinc-900/90 text-zinc-100">
                      <svg
                        className="absolute inset-0 h-full w-full opacity-15"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon points="50,10 88,34 88,66 50,90 12,66 12,34" stroke="currentColor" strokeWidth="1" />
                        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.8" />
                        <line x1="12" y1="34" x2="88" y2="66" stroke="currentColor" strokeWidth="0.8" />
                        <line x1="12" y1="66" x2="88" y2="34" stroke="currentColor" strokeWidth="0.8" />
                      </svg>
                      
                      <span className="font-serif text-3xl sm:text-4xl font-normal tracking-wider text-zinc-200">
                        BR
                      </span>
                      <span className="mt-0.5 text-[9px] uppercase tracking-widest text-zinc-400 font-sans">
                        Gemologist
                      </span>
                    </div>
                  )}
                </div>

                {/* Corner gem accent */}
                <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 shadow">
                  <Diamond className="h-3.5 w-3.5 fill-zinc-300/20" />
                </div>
              </div>
            </div>

            {/* Profile Identity & Information */}
            <div className="flex-1 text-center sm:text-left min-w-0">
              
              {/* Category & Verified Lockup */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs text-zinc-400 mb-2">
                <span className="uppercase tracking-widest text-zinc-300 font-medium">
                  {PROFILE_DATA.category}
                </span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span className="tracking-wide text-zinc-400">
                  Investor & Gem Trader
                </span>
              </div>

              {/* Display Name */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-2" style={{ textWrap: "balance" }}>
                {PROFILE_DATA.name}
              </h1>

              {/* Instagram Handle with Blue Verification Check */}
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
                <a
                  href={PROFILE_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm sm:text-base text-zinc-300 hover:text-white transition-colors"
                >
                  @{PROFILE_DATA.username}
                </a>
                <VerifiedBadge size={19} />
              </div>

              {/* Supplied Professional Description */}
              <div className="space-y-1.5 border-t border-zinc-800/80 pt-4 text-sm text-zinc-300 font-light leading-relaxed">
                <p className="font-normal text-zinc-100 flex items-center justify-center sm:justify-start gap-1.5">
                  <span>Entrepreneur & Investor, Gemologists, Gem trader.</span>
                  <span aria-hidden="true">💎</span>
                </p>
                <div className="text-xs sm:text-sm text-zinc-300 flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1">
                  <span>GIA Gemologists Certified</span>
                  <span aria-hidden="true" className="text-zinc-600">·</span>
                  <span>Diamond grading report</span>
                  <span aria-hidden="true" className="text-zinc-600">·</span>
                  <span>Gemstones identification</span>
                  <span aria-hidden="true" className="text-zinc-600">·</span>
                  <span>EGL, AGL</span>
                </div>
              </div>

              {/* Primary Action Button: Visit Instagram Profile */}
              <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <a
                  href={PROFILE_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-100 px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-zinc-950 hover:bg-white hover:shadow-lg hover:shadow-white/10 active:scale-[0.99] transition-all whitespace-nowrap shrink-0"
                >
                  <span>Visit Instagram Profile</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                {onExploreGallery && (
                  <button
                    type="button"
                    onClick={onExploreGallery}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-700/80 bg-zinc-900/60 px-5 py-2.5 text-xs sm:text-sm font-medium tracking-wide text-zinc-300 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white transition-all whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>View Showcase</span>
                    <Sparkles className="h-3.5 w-3.5 text-zinc-400" />
                  </button>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
