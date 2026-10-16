import React from "react";
import { ArrowUpRight, Diamond } from "lucide-react";
import { PROFILE_DATA } from "../data/profileData";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 bg-[#070709] py-12 px-4 sm:px-6 lg:px-8 text-zinc-400">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          
          {/* Brand & Category */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-white font-serif text-lg tracking-wider">
              <Diamond className="h-4 w-4 text-zinc-400" />
              <span>Bryant Rose</span>
            </div>
            <p className="text-xs text-zinc-400 mt-1">
              Entrepreneur & Investor · GIA Certified Gemologist
            </p>
          </div>

          {/* Official Instagram Button */}
          <div>
            <a
              href={PROFILE_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-200 hover:border-zinc-500 hover:text-white transition-all shadow-sm"
              aria-label="Visit official Instagram profile"
            >
              <span>Follow @{PROFILE_DATA.username}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
            </a>
          </div>
        </div>

        {/* Quiet Copyright & Disclaimers */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <p>
            © {currentYear} Bryant Rose. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span>Gemological Standards: GIA · EGL · AGL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
