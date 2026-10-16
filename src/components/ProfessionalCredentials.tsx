import React from "react";
import { Award, Compass, Diamond, FileCheck, Layers, ShieldCheck, TrendingUp } from "lucide-react";
import { PROFILE_DATA } from "../data/profileData";

export const ProfessionalCredentials: React.FC = () => {
  return (
    <section id="credentials" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="mx-auto max-w-4xl">
        
        {/* Section Lead */}
        <div className="mb-10 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-medium uppercase tracking-widest text-zinc-400 mb-1">
            <Diamond className="h-3.5 w-3.5 text-zinc-300" />
            <span>Professional Profile & Standards</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-white">
            Professional Practice & Gemological Focus
          </h2>
          <p className="mt-2 text-sm text-zinc-400 max-w-2xl font-light">
            A specialized practice centered on international gemstone trade, comprehensive grading standards, and private market investment.
          </p>
        </div>

        {/* 2-Part Structured Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Card 1: Entrepreneur & Investor (md:col-span-5) */}
          <div className="md:col-span-5 flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
            {/* Subtle silver gradient background sheen */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-zinc-600/5 blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700/80 bg-zinc-900 text-zinc-200">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-zinc-400">Primary Focus</span>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-white">
                    Entrepreneur & Investor
                  </h3>
                </div>
              </div>

              <div className="space-y-3 text-sm text-zinc-300 font-light leading-relaxed">
                <p>
                  Active entrepreneur and investor specializing in the valuation, sourcing, and global distribution of precious stones and fine jewelry assets.
                </p>
                <p className="text-zinc-400 text-xs">
                  Conducting private acquisitions, inventory appraisal, and trade opportunities across high-value diamond markets.
                </p>
              </div>
            </div>

            {/* Quiet summary points without pills */}
            <div className="mt-8 border-t border-zinc-800/80 pt-4">
              <div className="text-xs text-zinc-400 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-zinc-400" />
                  <span>International Gem Trading</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-zinc-400" />
                  <span>Private Gemstone Asset Placement</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-zinc-400" />
                  <span>Market Valuation & Sourcing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Gemology & Precious Stones (md:col-span-7) */}
          <div id="gemology" className="md:col-span-7 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-6 sm:p-8 backdrop-blur-sm relative">
            
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700/80 bg-zinc-900 text-zinc-200">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-zinc-400">Technical Expertise</span>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-white">
                  Gemology & Precious Stones
                </h3>
              </div>
            </div>

            {/* The 4 core qualifications as specified in reference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Item 1 */}
              <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-4 transition-colors hover:border-zinc-700">
                <div className="flex items-center gap-2 mb-1.5">
                  <Award className="h-4 w-4 text-zinc-300 shrink-0" />
                  <h4 className="text-sm font-semibold text-zinc-100">
                    GIA Gemologist Certification
                  </h4>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Trained under Gemological Institute of America benchmarks for grading, physical properties, and gemstone integrity.
                </p>
              </div>

              {/* Item 2 */}
              <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-4 transition-colors hover:border-zinc-700">
                <div className="flex items-center gap-2 mb-1.5">
                  <FileCheck className="h-4 w-4 text-zinc-300 shrink-0" />
                  <h4 className="text-sm font-semibold text-zinc-100">
                    Diamond Grading Reports
                  </h4>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Meticulous analysis of Cut, Color, Clarity, and Carat weight alongside plot charting and inclusion mapping.
                </p>
              </div>

              {/* Item 3 */}
              <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-4 transition-colors hover:border-zinc-700">
                <div className="flex items-center gap-2 mb-1.5">
                  <Compass className="h-4 w-4 text-zinc-300 shrink-0" />
                  <h4 className="text-sm font-semibold text-zinc-100">
                    Gemstone Identification
                  </h4>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Refractometry, specific gravity, and optical examination to classify natural, synthetic, and treated specimens.
                </p>
              </div>

              {/* Item 4 */}
              <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-4 transition-colors hover:border-zinc-700">
                <div className="flex items-center gap-2 mb-1.5">
                  <Layers className="h-4 w-4 text-zinc-300 shrink-0" />
                  <h4 className="text-sm font-semibold text-zinc-100">
                    EGL & AGL Standards
                  </h4>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Recognition of European Gemological Laboratory and American Gemological Laboratories criteria and evaluation methods.
                </p>
              </div>

            </div>

            {/* Preserving authentic qualifications notice */}
            <div className="mt-6 border-t border-zinc-800/80 pt-3 text-[11px] text-zinc-400 leading-normal">
              * Qualifications and professional descriptions are presented as published on official channels.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
