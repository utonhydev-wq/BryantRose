import React, { useState, Suspense, lazy } from "react";
import { Diamond, Sparkles, Compass, ShieldCheck, ArrowRight, Dna } from "lucide-react";
import { GEMSTONE_VAULT_DATA, GemstoneSpec } from "../data/gemstonesData";
import { GemFacetVisual } from "./GemFacetVisual";

const GemstoneDetailModal = lazy(() =>
  import("./GemstoneDetailModal").then((m) => ({ default: m.GemstoneDetailModal }))
);

interface GemstoneVaultProps {
  onSelectGemstone?: (gem: GemstoneSpec) => void;
}

export const GemstoneVault: React.FC<GemstoneVaultProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalGem, setActiveModalGem] = useState<GemstoneSpec | null>(null);
  const [discoveredAlert, setDiscoveredAlert] = useState<string | null>(null);

  const categories = ["All", "Diamonds", "Emeralds", "Rubies", "Sapphires", "Fancy Colored"];

  const filteredGemstones =
    selectedCategory === "All"
      ? GEMSTONE_VAULT_DATA
      : GEMSTONE_VAULT_DATA.filter((gem) => gem.category === selectedCategory);

  // Discover a Gem handler: lightweight, instant, deterministic pick
  const handleDiscoverGem = () => {
    const randomIndex = Math.floor(Math.random() * GEMSTONE_VAULT_DATA.length);
    const chosen = GEMSTONE_VAULT_DATA[randomIndex];
    setActiveModalGem(chosen);
    setDiscoveredAlert(`Discovered: ${chosen.name}!`);
    setTimeout(() => setDiscoveredAlert(null), 3000);
  };

  return (
    <section id="vault" className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800/80 pb-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-400 mb-1">
              <Diamond className="h-3.5 w-3.5 text-zinc-300" />
              <span>Interactive Gemstone Archive</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>GIA · AGL · EGL Benchmarks</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-white">
              The Gemstone Vault
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 font-light max-w-2xl">
              Explore the physical, optical, and chemical taxonomy of certified precious stones. Select any specimen to inspect crystallography and grading criteria.
            </p>
          </div>

          {/* Discover a Gem Action Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleDiscoverGem}
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/90 px-4 py-2.5 text-xs font-semibold text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              <span>Discover a Gem</span>
            </button>
          </div>
        </div>

        {/* Category Filters: Functional Interactive Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? "bg-zinc-100 text-zinc-950 font-semibold shadow-sm"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Discovery Toast notification if triggered */}
        {discoveredAlert && (
          <div className="mb-6 rounded-lg border border-zinc-700/80 bg-zinc-900/90 px-4 py-2 text-xs text-zinc-200 shadow-lg animate-fade-in flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span>{discoveredAlert}</span>
          </div>
        )}

        {/* Gemstone Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGemstones.map((gem) => (
            <div
              key={gem.id}
              onClick={() => setActiveModalGem(gem)}
              className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-[#0d0d12]/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:bg-[#121218] hover:shadow-2xl cursor-pointer"
            >
              {/* Top Card Bar */}
              <div>
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: gem.accentColor }}
                    />
                    <span className="uppercase tracking-widest text-[10px] font-mono font-medium">
                      {gem.category}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-zinc-400">
                    Mohs {gem.mohsHardness.split(" ")[0]}
                  </span>
                </div>

                {/* Faceted Gem Visual Preview */}
                <div className="flex items-center justify-center py-6">
                  <GemFacetVisual gemstone={gem} size="md" interactive={false} />
                </div>

                {/* Title & Description */}
                <div className="mt-2">
                  <h3 className="font-serif text-xl font-medium text-white group-hover:text-zinc-100 transition-colors">
                    {gem.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light mt-0.5">
                    {gem.subtitle}
                  </p>
                  <p className="mt-3 text-xs text-zinc-400 line-clamp-2 font-light leading-relaxed">
                    {gem.educationalSummary}
                  </p>
                </div>
              </div>

              {/* Card Footer: Optical Specs & Action */}
              <div className="mt-6 border-t border-zinc-800/80 pt-4 flex items-center justify-between text-xs">
                <div className="text-[11px] text-zinc-400 font-mono">
                  <span>RI {gem.refractiveIndex}</span>
                  <span aria-hidden="true" className="mx-1.5 text-zinc-700">·</span>
                  <span>SG {gem.specificGravity.split(" ")[0]}</span>
                </div>

                <span className="inline-flex items-center gap-1 font-medium text-zinc-300 group-hover:text-white transition-colors">
                  <span>Inspect</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {activeModalGem && (
        <Suspense fallback={null}>
          <GemstoneDetailModal
            gemstone={activeModalGem}
            onClose={() => setActiveModalGem(null)}
          />
        </Suspense>
      )}
    </section>
  );
};
