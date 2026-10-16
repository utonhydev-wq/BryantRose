import React, { useEffect, useState } from "react";
import {
  X,
  Diamond,
  Compass,
  Layers,
  Sparkles,
  ExternalLink,
  MessageSquare,
  Copy,
  Check,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import { GemstoneSpec } from "../data/gemstonesData";
import { GemFacetVisual } from "./GemFacetVisual";
import { PROFILE_DATA } from "../data/profileData";

interface GemstoneDetailModalProps {
  gemstone: GemstoneSpec | null;
  onClose: () => void;
}

export const GemstoneDetailModal: React.FC<GemstoneDetailModalProps> = ({
  gemstone,
  onClose,
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"overview" | "specs" | "identification">("overview");

  useEffect(() => {
    if (!gemstone) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [gemstone, onClose]);

  if (!gemstone) return null;

  const inquiryMessage = `Hello Bryant Rose, I would like to request information regarding the ${gemstone.name} (${gemstone.category}) from your official Gemstone Vault.`;

  // WhatsApp integration: check env or format prefilled WhatsApp link
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "";
  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(inquiryMessage)}`
    : `https://wa.me/?text=${encodeURIComponent(inquiryMessage)}`;

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(inquiryMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${gemstone.name} Gemstone Inspection`}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl border border-zinc-800 bg-[#0d0d12] p-5 sm:p-8 shadow-2xl transition-all my-8 text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header bar inside modal */}
        <div className="flex items-start justify-between gap-4 border-b border-zinc-800/80 pb-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400 font-mono mb-1">
              <span style={{ color: gemstone.accentColor }}>●</span>
              <span>{gemstone.category}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">{gemstone.colorName}</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-white">
              {gemstone.name}
            </h3>
            <p className="text-xs text-zinc-400 font-light mt-0.5">
              {gemstone.subtitle} · {gemstone.rarityRating}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-600 hover:text-white transition-colors cursor-pointer"
            aria-label="Close details"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Visual Inspection + Quick Metrics Hero */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
          
          {/* Interactive Facet Inspection Viewer */}
          <div className="sm:col-span-5 flex flex-col items-center justify-center rounded-xl border border-zinc-800/70 bg-gradient-to-b from-[#14141c] to-[#0a0a0e] p-6 shadow-inner relative overflow-hidden">
            <GemFacetVisual gemstone={gemstone} size="lg" interactive={true} />
            <span className="mt-3 text-[10px] tracking-wider uppercase text-zinc-400 flex items-center gap-1 font-mono">
              <Sparkles className="h-3 w-3" />
              <span>Interactive Light Reflection</span>
            </span>
          </div>

          {/* Core Gemological Metrics */}
          <div className="sm:col-span-7 space-y-3">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-lg border border-zinc-800/60 bg-zinc-900/50 p-3">
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-0.5">
                  Mohs Hardness
                </span>
                <span className="font-semibold text-zinc-100 font-mono">
                  {gemstone.mohsHardness}
                </span>
              </div>
              <div className="rounded-lg border border-zinc-800/60 bg-zinc-900/50 p-3">
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-0.5">
                  Refractive Index
                </span>
                <span className="font-semibold text-zinc-100 font-mono">
                  {gemstone.refractiveIndex}
                </span>
              </div>
              <div className="rounded-lg border border-zinc-800/60 bg-zinc-900/50 p-3">
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-0.5">
                  Crystal System
                </span>
                <span className="font-semibold text-zinc-100">
                  {gemstone.crystalSystem}
                </span>
              </div>
              <div className="rounded-lg border border-zinc-800/60 bg-zinc-900/50 p-3">
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-0.5">
                  Specific Gravity
                </span>
                <span className="font-semibold text-zinc-100 font-mono">
                  {gemstone.specificGravity}
                </span>
              </div>
            </div>

            <div className="rounded-lg border border-zinc-800/60 bg-zinc-900/40 p-3 text-xs">
              <div className="flex items-center justify-between text-zinc-400 mb-1">
                <span className="text-[10px] uppercase tracking-wider text-zinc-400">Chemical Formula</span>
                <span className="font-mono text-zinc-300">{gemstone.chemicalFormula}</span>
              </div>
              <div className="flex items-center justify-between text-zinc-400">
                <span className="text-[10px] uppercase tracking-wider text-zinc-400">Primary Localities</span>
                <span className="text-zinc-200 text-right">{gemstone.primaryLocalities}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Tabbed Educational Exploration */}
        <div className="mb-6">
          <div className="flex items-center gap-1 border-b border-zinc-800 pb-2 mb-3">
            <button
              type="button"
              onClick={() => setActiveTab("overview")}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeTab === "overview"
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Overview & Science
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("specs")}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeTab === "specs"
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Gemological Notes
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("identification")}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeTab === "identification"
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Identification Keys
            </button>
          </div>

          <div className="min-h-[110px] text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
            {activeTab === "overview" && (
              <div>
                <p className="mb-2">{gemstone.educationalSummary}</p>
                <div className="flex flex-wrap items-center gap-2 mt-3 pt-2 border-t border-zinc-800/60 text-xs text-zinc-400">
                  <span className="text-zinc-400 font-medium">Recommended Cut Proportions:</span>
                  {gemstone.cutStyles.map((cut) => (
                    <span key={cut} className="text-zinc-300">
                      {cut}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "specs" && (
              <div>
                <p className="mb-2">{gemstone.gemologicalNotes}</p>
                <p className="text-zinc-400 text-xs mt-2">
                  * Evaluated under GIA, EGL, and AGL gem testing criteria. All educational properties reflect natural crystalline standards.
                </p>
              </div>
            )}

            {activeTab === "identification" && (
              <ul className="space-y-1.5 text-xs text-zinc-300">
                {gemstone.identificationKeys.map((key, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 mt-1.5 shrink-0" />
                    <span>{key}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Action Controls & Functional Request Information */}
        <div className="border-t border-zinc-800/80 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] text-zinc-400 text-center sm:text-left">
            Inquire directly for certified specimens and appraisal advisory
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {/* Copy Inquiry Message */}
            <button
              type="button"
              onClick={handleCopyMessage}
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-900 px-3.5 py-2 text-xs font-medium text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors cursor-pointer shrink-0"
              title="Copy inquiry message to clipboard"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? "Copied" : "Copy Inquiry"}</span>
            </button>

            {/* WhatsApp Contact Action */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 sm:flex-none items-center justify-center gap-1.5 rounded-lg border border-emerald-600/40 bg-emerald-950/40 px-3.5 py-2 text-xs font-medium text-emerald-200 hover:bg-emerald-900/60 hover:text-white transition-colors cursor-pointer"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>WhatsApp Inquiry</span>
            </a>

            {/* Instagram DM Action */}
            <a
              href={PROFILE_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 sm:flex-none items-center justify-center gap-1.5 rounded-lg bg-zinc-100 px-4 py-2 text-xs font-semibold text-zinc-950 hover:bg-white transition-all shadow-sm"
            >
              <span>Contact @{PROFILE_DATA.username}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
