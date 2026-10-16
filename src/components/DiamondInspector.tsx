import React, { useState } from "react";
import { Diamond, Sparkles, Sliders, Info, Eye, Compass, Layers, Scale } from "lucide-react";
import { DIAMOND_4CS_DATA } from "../data/gemstonesData";

export const DiamondInspector: React.FC = () => {
  const [activeTabKey, setActiveTabKey] = useState<"cut" | "color" | "clarity" | "carat">("cut");
  const [selectedGradeIndex, setSelectedGradeIndex] = useState<number>(0);

  const activeContent = DIAMOND_4CS_DATA.find((c) => c.key === activeTabKey)!;
  const currentGrade = activeContent.grades[selectedGradeIndex] || activeContent.grades[0];

  const handleTabChange = (key: "cut" | "color" | "clarity" | "carat") => {
    setActiveTabKey(key);
    setSelectedGradeIndex(0);
  };

  return (
    <section id="diamond-inspector" className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 bg-gradient-to-b from-[#09090b] via-[#0c0c10] to-[#09090b]">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center sm:text-left mb-8 border-b border-zinc-800/80 pb-6">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-medium uppercase tracking-widest text-zinc-400 mb-1">
            <Diamond className="h-3.5 w-3.5 text-zinc-300" />
            <span>Interactive Educational Masterclass</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>GIA 4Cs Standard</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-white">
            The Diamond Inspector
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-light max-w-2xl">
            Understand the universal metrics established by the Gemological Institute of America (GIA) to evaluate diamond brilliance, rarity, and crystal integrity.
          </p>
        </div>

        {/* 4Cs Navigation Tabs (Segmented Controls) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
          {DIAMOND_4CS_DATA.map((item) => {
            const isActive = activeTabKey === item.key;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => handleTabChange(item.key)}
                className={`flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-xs font-medium tracking-wide transition-all cursor-pointer border ${
                  isActive
                    ? "bg-zinc-100 text-zinc-950 font-semibold border-white shadow-md scale-[1.01]"
                    : "bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200 hover:bg-zinc-900"
                }`}
              >
                {item.key === "cut" && <Compass className="h-4 w-4" />}
                {item.key === "color" && <Sparkles className="h-4 w-4" />}
                {item.key === "clarity" && <Eye className="h-4 w-4" />}
                {item.key === "carat" && <Scale className="h-4 w-4" />}
                <span>{item.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Workspace Panel */}
        <div className="rounded-2xl border border-zinc-800/90 bg-[#0d0d12]/90 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Demonstration Canvas (Left, 5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center rounded-xl border border-zinc-800/80 bg-gradient-to-b from-[#121218] to-[#08080a] p-8 shadow-inner min-h-[300px] relative overflow-hidden">
              
              {/* Dynamic visual representation based on selected 4C */}
              {activeTabKey === "cut" && (
                <div className="flex flex-col items-center">
                  <svg viewBox="0 0 160 120" className="w-48 h-36">
                    {/* Diamond Profile Crown & Pavilion */}
                    <polygon
                      points="80,105 18,35 42,12 118,12 142,35"
                      fill="none"
                      stroke="rgba(255,255,255,0.7)"
                      strokeWidth="1.5"
                    />
                    {/* Table facet line */}
                    <line x1="42" y1="12" x2="118" y2="12" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />
                    {/* Facet internal cross-lines */}
                    <line x1="18" y1="35" x2="142" y2="35" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                    <line x1="42" y1="12" x2="80" y2="105" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
                    <line x1="118" y1="12" x2="80" y2="105" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />

                    {/* Light Refraction Rays based on selected cut grade */}
                    {selectedGradeIndex === 0 ? (
                      /* Ideal Cut: Total Internal Reflection back out the top */
                      <g className="stroke-cyan-300" strokeWidth="1.8" strokeLinecap="round">
                        <line x1="60" y1="0" x2="60" y2="35" />
                        <line x1="60" y1="35" x2="105" y2="70" />
                        <line x1="105" y1="70" x2="70" y2="12" />
                        <line x1="70" y1="12" x2="70" y2="0" stroke="rgba(255,255,255,0.9)" />
                      </g>
                    ) : selectedGradeIndex === 1 ? (
                      /* Very Good */
                      <g className="stroke-sky-300" strokeWidth="1.6">
                        <line x1="65" y1="0" x2="65" y2="35" />
                        <line x1="65" y1="35" x2="100" y2="75" />
                        <line x1="100" y1="75" x2="80" y2="15" />
                      </g>
                    ) : (
                      /* Good / Fair: Light leakage through pavilion */
                      <g className="stroke-amber-400" strokeWidth="1.6" strokeDasharray="3,3">
                        <line x1="60" y1="0" x2="60" y2="35" />
                        <line x1="60" y1="35" x2="120" y2="85" />
                        <line x1="120" y1="85" x2="150" y2="105" stroke="rgba(239,68,68,0.8)" />
                      </g>
                    )}
                  </svg>
                  <span className="mt-3 text-xs font-mono font-medium text-zinc-300">
                    {currentGrade.visualProperty}
                  </span>
                </div>
              )}

              {activeTabKey === "color" && (
                <div className="flex flex-col items-center">
                  <div
                    className="h-28 w-28 rounded-full border-2 border-zinc-700/80 shadow-2xl transition-all duration-300 flex items-center justify-center relative"
                    style={{
                      background:
                        selectedGradeIndex === 0
                          ? "radial-gradient(circle, #ffffff 10%, #e4e4e7 60%, #a1a1aa 100%)"
                          : selectedGradeIndex === 1
                          ? "radial-gradient(circle, #fefce8 10%, #fef08a 60%, #ca8a04 100%)"
                          : selectedGradeIndex === 2
                          ? "radial-gradient(circle, #fef9c3 10%, #fde047 60%, #a16207 100%)"
                          : "radial-gradient(circle, #fde047 10%, #eab308 60%, #713f12 100%)",
                    }}
                  >
                    <Diamond className="h-10 w-10 text-black/40" />
                  </div>
                  <span className="mt-4 text-xs font-mono font-medium text-zinc-300">
                    {currentGrade.visualProperty}
                  </span>
                </div>
              )}

              {activeTabKey === "clarity" && (
                <div className="flex flex-col items-center">
                  {/* Loupe Lens Simulation */}
                  <div className="relative h-32 w-32 rounded-full border-4 border-zinc-600 bg-black/80 flex items-center justify-center overflow-hidden shadow-2xl">
                    {/* Reticle grid */}
                    <div className="absolute inset-0 border border-zinc-800/40 rounded-full" />
                    <line x1="0" y1="64" x2="128" y2="64" stroke="rgba(255,255,255,0.1)" />

                    {/* Facet line overlay */}
                    <Diamond className="h-14 w-14 text-white/40" />

                    {/* Inclusions based on grade */}
                    {selectedGradeIndex === 0 ? (
                      /* Flawless: clean */
                      <div className="absolute inset-0 flex items-center justify-center text-[10px] text-emerald-400 font-mono">
                        100% Clean
                      </div>
                    ) : selectedGradeIndex === 1 ? (
                      /* VVS: microscopic pinpoint */
                      <div className="absolute h-1 w-1 bg-white rounded-full top-10 left-12 opacity-80" />
                    ) : selectedGradeIndex === 2 ? (
                      /* VS: two pinpoints */
                      <>
                        <div className="absolute h-1 w-1 bg-white rounded-full top-9 left-11" />
                        <div className="absolute h-1.5 w-0.5 bg-zinc-300 rotate-45 top-18 left-20" />
                      </>
                    ) : (
                      /* SI: visible crystal & feather */
                      <>
                        <div className="absolute h-2 w-2 rounded-full bg-zinc-300 top-12 left-10" />
                        <div className="absolute h-3 w-1 bg-zinc-400 rotate-12 top-16 left-16" />
                      </>
                    )}
                  </div>
                  <span className="mt-4 text-xs font-mono font-medium text-zinc-300">
                    10x Loupe View · {currentGrade.visualProperty}
                  </span>
                </div>
              )}

              {activeTabKey === "carat" && (
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-32 w-48 relative">
                    {/* Proportional diamond circle */}
                    <div
                      className="rounded-full bg-gradient-to-br from-white via-zinc-200 to-zinc-400 border border-white/80 shadow-lg flex items-center justify-center transition-all duration-300"
                      style={{
                        height: `${32 + selectedGradeIndex * 16}px`,
                        width: `${32 + selectedGradeIndex * 16}px`,
                      }}
                    >
                      <Diamond className="h-4 w-4 text-black/50" />
                    </div>
                  </div>
                  <span className="mt-3 text-xs font-mono font-medium text-zinc-300">
                    {currentGrade.visualProperty}
                  </span>
                </div>
              )}

            </div>

            {/* Educational Content & Interactive Grade Selectors (Right, 7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                  Topic Analysis
                </span>
                <h3 className="font-serif text-2xl font-medium text-white mt-0.5">
                  {activeContent.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  {activeContent.summary}
                </p>
                <p className="mt-2 text-xs text-zinc-400 font-light leading-relaxed">
                  {activeContent.details}
                </p>
              </div>

              {/* Grade Selector Strip */}
              <div>
                <span className="text-[11px] uppercase tracking-wider text-zinc-400 block mb-2 font-mono">
                  Select Grade Level:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {activeContent.grades.map((grade, idx) => {
                    const isSelected = selectedGradeIndex === idx;
                    return (
                      <button
                        key={grade.label}
                        type="button"
                        onClick={() => setSelectedGradeIndex(idx)}
                        className={`rounded-lg p-2.5 text-left border transition-all cursor-pointer ${
                          isSelected
                            ? "border-zinc-300 bg-zinc-800 text-white shadow-sm"
                            : "border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                        }`}
                      >
                        <span className="block text-xs font-semibold">{grade.label.split("(")[0]}</span>
                        <span className="block text-[10px] text-zinc-400 truncate">
                          {grade.visualProperty}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Grade Detailed Explanation Box */}
              <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-4">
                <div className="flex items-center gap-2 mb-1 text-xs font-medium text-zinc-200">
                  <Info className="h-4 w-4 text-zinc-400" />
                  <span>{currentGrade.label}</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {currentGrade.description}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
