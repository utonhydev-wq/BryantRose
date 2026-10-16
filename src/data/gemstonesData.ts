export interface GemstoneSpec {
  id: string;
  name: string;
  subtitle: string;
  category: "Diamonds" | "Emeralds" | "Rubies" | "Sapphires" | "Fancy Colored";
  colorName: string;
  accentColor: string; // Tailwind/Hex for subtle jewel tone
  gradientFrom: string;
  gradientTo: string;
  refractiveIndex: string;
  mohsHardness: string;
  crystalSystem: string;
  specificGravity: string;
  chemicalFormula: string;
  primaryLocalities: string;
  cutStyles: string[];
  rarityRating: string;
  educationalSummary: string;
  gemologicalNotes: string;
  identificationKeys: string[];
}

export const GEMSTONE_VAULT_DATA: GemstoneSpec[] = [
  {
    id: "brilliant-diamond",
    name: "Type IIa White Diamond",
    subtitle: "Optically Pure Carbon Crystal",
    category: "Diamonds",
    colorName: "D-Flawless Pure White",
    accentColor: "#e4e4e7",
    gradientFrom: "#ffffff",
    gradientTo: "#71717a",
    refractiveIndex: "2.417",
    mohsHardness: "10.0 (Absolute scale 140)",
    crystalSystem: "Isometric (Cubic)",
    specificGravity: "3.52 g/cm³",
    chemicalFormula: "C (Pure Crystallized Carbon)",
    primaryLocalities: "Botswana, South Africa, Canada, Australia",
    cutStyles: ["Round Brilliant", "Emerald Cut", "Oval", "Cushion"],
    rarityRating: "Top 1.8% of Natural Diamonds",
    educationalSummary:
      "Type IIa diamonds contain no measurable nitrogen or boron impurities in their crystal lattice, yielding supreme optical transparency and thermal conductivity. They exhibit exceptional adamantine luster and high optical dispersion.",
    gemologicalNotes:
      "Graded rigorously under standard 10x binocular gemological microscopes and spectrophotometry. Under cross-polarized light, Type IIa stones display characteristic tatami strain patterns.",
    identificationKeys: [
      "Thermal conductivity confirmation",
      "Total internal reflection (critical angle 24.4°)",
      "Absence of 415nm N3 absorption band",
      "Sharp facet junction crispness",
    ],
  },
  {
    id: "colombian-emerald",
    name: "Colombian Muzo Emerald",
    subtitle: "Chromium-Rich Beryl",
    category: "Emeralds",
    colorName: "Deep Vivid Green",
    accentColor: "#10b981",
    gradientFrom: "#34d399",
    gradientTo: "#065f46",
    refractiveIndex: "1.577 – 1.583",
    mohsHardness: "7.5 – 8.0",
    crystalSystem: "Hexagonal",
    specificGravity: "2.72 g/cm³",
    chemicalFormula: "Be₃Al₂(SiO₃)₆ + Cr, V",
    primaryLocalities: "Muzo & Chivor (Colombia), Zambia, Brazil",
    cutStyles: ["Traditional Emerald Cut", "Cushion", "Oval"],
    rarityRating: "Exceptional Natural Matrix",
    educationalSummary:
      "Colored primarily by traces of chromium and vanadium, fine Colombian emeralds exhibit an unmistakable warm, glowing saturation. Natural internal multiphase inclusions are poetically termed 'jardin' and authenticate natural geological origin.",
    gemologicalNotes:
      "Three-phase inclusions (halite crystal, liquid brine, and gas bubble) specifically distinguish Colombian hydrothermal origin from synthetic flux or hydrothermal emerald imitations.",
    identificationKeys: [
      "Three-phase fluid inclusions under magnification",
      "Birefringence of 0.006 (uniaxial negative)",
      "Specific 683nm and 680nm chromium doublet absorption lines",
      "Mild to moderate clarity enhancement assessment",
    ],
  },
  {
    id: "pigeon-blood-ruby",
    name: "Burmese Pigeon Blood Ruby",
    subtitle: "High-Chromium Corundum",
    category: "Rubies",
    colorName: "Vivid Pigeon Blood Red",
    accentColor: "#e11d48",
    gradientFrom: "#fb7185",
    gradientTo: "#881337",
    refractiveIndex: "1.762 – 1.770",
    mohsHardness: "9.0",
    crystalSystem: "Trigonal (Hexagonal scalenohedral)",
    specificGravity: "4.00 g/cm³",
    chemicalFormula: "Al₂O₃ + Cr",
    primaryLocalities: "Mogok (Myanmar/Burma), Mozambique, Madagascar",
    cutStyles: ["Cushion Mixed Cut", "Oval", "Cabochon"],
    rarityRating: "Premier Auction Caliber",
    educationalSummary:
      "The pinnacle of colored gemstone trading. Rubies displaying the legendary 'Pigeon Blood' hue combine an intense pure red saturation with strong red UV fluorescence, causing the stone to appear internally illuminated in natural daylight.",
    gemologicalNotes:
      "Burmese specimens typically exhibit dense networks of short rutile silk needles intersecting at 60-degree angles and swirling color banding without secondary thermal alteration indicators.",
    identificationKeys: [
      "Intense red fluorescence under long-wave ultraviolet light (365nm)",
      "Refractometer reading at 1.762-1.770 with 0.008 birefringence",
      "Distinctive chromium absorption spectrum with 692.8nm emission line",
      "Rutile silk verification for unheated status confirmation",
    ],
  },
  {
    id: "royal-blue-sapphire",
    name: "Royal Blue Sapphire",
    subtitle: "Iron-Titanium Corundum",
    category: "Sapphires",
    colorName: "Deep Royal & Cornflower Blue",
    accentColor: "#3b82f6",
    gradientFrom: "#60a5fa",
    gradientTo: "#1e3a8a",
    refractiveIndex: "1.762 – 1.770",
    mohsHardness: "9.0",
    crystalSystem: "Trigonal",
    specificGravity: "4.00 g/cm³",
    chemicalFormula: "Al₂O₃ + Fe, Ti",
    primaryLocalities: "Sri Lanka (Ceylon), Madagascar, Kashmir",
    cutStyles: ["Oval Brilliant", "Cushion", "Radiant"],
    rarityRating: "High Investment Grade",
    educationalSummary:
      "Blue corundum colored by intervals of inter-valence charge transfer between Fe²⁺ and Ti⁴⁺ ions. Royal Blue sapphires command worldwide acclaim for their saturated velvety body tone that avoids excessive black extinction.",
    gemologicalNotes:
      "Natural Ceylon sapphires frequently contain angular growth zoning, liquid feather inclusions, and zircon crystals with pleochroic halos. Microscopic immersion testing confirms heat treatment boundaries.",
    identificationKeys: [
      "Vitreous luster and strong dichroism (violet-blue to greenish-blue)",
      "Fe³⁺ 450nm diagnostic absorption complex",
      "Hexagonal color banding under diffused transmitted lighting",
      "Negative crystal and rutile feather analysis",
    ],
  },
  {
    id: "canary-fancy-diamond",
    name: "Fancy Vivid Yellow Diamond",
    subtitle: "Canary Nitrogen-Substituted Diamond",
    category: "Fancy Colored",
    colorName: "Vivid Canary Yellow",
    accentColor: "#eab308",
    gradientFrom: "#fde047",
    gradientTo: "#854d0e",
    refractiveIndex: "2.417",
    mohsHardness: "10.0",
    crystalSystem: "Isometric",
    specificGravity: "3.52 g/cm³",
    chemicalFormula: "C + Single Isolated Nitrogen Atoms",
    primaryLocalities: "South Africa (Kimberley), Australia, Angola",
    cutStyles: ["Radiant Cut", "Cushion Modified Brilliant", "Pear"],
    rarityRating: "1 in 10,000 Natural Diamonds",
    educationalSummary:
      "While trace nitrogen usually imparts faint yellowish tints in the normal D-Z color range, specific isolated nitrogen cluster arrangements produce radiant Fancy Intense and Fancy Vivid Yellow diamonds prized by collectors worldwide.",
    gemologicalNotes:
      "Graded face-up under strictly controlled D65 5500K daylight-equivalent illumination. Modified brilliant and radiant cuts are strategically engineered to maximize color saturation along the pavilion facets.",
    identificationKeys: [
      "Face-up dominant hue saturation exceeding 'Z' masterstones",
      "Absence of artificial irradiation optical indicators",
      "Greenish-yellow fluorescence under LWUV illumination",
      "Specific Cape absorption line series at 415nm and 478nm",
    ],
  },
  {
    id: "argyle-pink-diamond",
    name: "Fancy Argyle Pink Diamond",
    subtitle: "Lattice-Deformed Rare Diamond",
    category: "Fancy Colored",
    colorName: "Purplish Pink & Blush Rose",
    accentColor: "#ec4899",
    gradientFrom: "#f472b6",
    gradientTo: "#831843",
    refractiveIndex: "2.417",
    mohsHardness: "10.0",
    crystalSystem: "Isometric",
    specificGravity: "3.52 g/cm³",
    chemicalFormula: "C (Plastic Deformation of Crystal Matrix)",
    primaryLocalities: "Argyle Mine (Western Australia - Historical)",
    cutStyles: ["Round Brilliant", "Cushion", "Oval Cut"],
    rarityRating: "Ultra-Rare Global Specimen",
    educationalSummary:
      "Unlike yellow or blue diamonds caused by chemical trace elements, natural pink diamonds owe their breathtaking coloration to extreme geological pressure causing plastic deformation in the diamond crystal lattice during ancient continental collisions.",
    gemologicalNotes:
      "Following the closure of the legendary Argyle mine, authenticated natural pink diamonds are among the most appreciated physical luxury assets in private collections.",
    identificationKeys: [
      "Parallel pink color graining planes (glide planes)",
      "Distinctive 550nm broad absorption band under spectroscopy",
      "Natural origin confirmation ruling out HPHT treatment",
      "Argyle lot inscription and GIA colored diamond report",
    ],
  },
];

export interface Diamond4CContent {
  key: "cut" | "color" | "clarity" | "carat";
  title: string;
  shortLabel: string;
  summary: string;
  details: string;
  grades: {
    label: string;
    description: string;
    visualProperty: string;
  }[];
}

export const DIAMOND_4CS_DATA: Diamond4CContent[] = [
  {
    key: "cut",
    title: "Diamond Cut: The Architecture of Light",
    shortLabel: "Cut",
    summary:
      "Cut is the only diamond characteristic determined by human craftsmanship. It dictates how light travels within the crystal to produce brilliance, fire, and scintillation.",
    details:
      "An Ideal cut diamond bounces light across pavilion facets and reflects it back out through the table. Cut proportions that are too deep or too shallow cause light to leak out the sides or bottom.",
    grades: [
      {
        label: "Excellent (Ideal)",
        description: "Maximum internal light reflection. Optimal balance of table percentage (53-58%) and crown angle (34-35°).",
        visualProperty: "Total Internal Reflection: 98% Light Return",
      },
      {
        label: "Very Good",
        description: "Reflects nearly all light. Slight variations in table spread or girdle symmetry.",
        visualProperty: "High Brilliance: 90% Light Return",
      },
      {
        label: "Good",
        description: "Reflects substantial light while capturing larger weight retention from the rough crystal.",
        visualProperty: "Moderate Brilliance: 75% Light Return",
      },
      {
        label: "Fair / Shallow",
        description: "Light escapes through the pavilion facets; visibly reduced fire in diffused lighting.",
        visualProperty: "Light Leakage: Under 60% Light Return",
      },
    ],
  },
  {
    key: "color",
    title: "Diamond Color: The Absence of Tint",
    shortLabel: "Color",
    summary:
      "GIA grades white diamond color on a D-to-Z scale measuring absence of color. Purest diamonds act like clear drops of water.",
    details:
      "D, E, and F grades represent truly colorless diamonds. As nitrogen replaces carbon in the lattice, subtle warm tones appear in grades G through Z.",
    grades: [
      {
        label: "D – F (Colorless)",
        description: "Completely icy white and transparent. Exceptional rarity and investment demand.",
        visualProperty: "Pure Colorless Crystal",
      },
      {
        label: "G – J (Near Colorless)",
        description: "Appears colorless face-up to untrained eyes; warm tones detectable only against white master stones.",
        visualProperty: "High Commercial Standard",
      },
      {
        label: "K – M (Faint Warmth)",
        description: "Noticeable soft champagne or yellow tinge, often favored in warm yellow gold settings.",
        visualProperty: "Faint Champagne Tint",
      },
      {
        label: "Fancy Vivid (Beyond Z)",
        description: "Intense deliberate natural colors (Canary Yellow, Pink, Blue) graded on a specialized hue/tone matrix.",
        visualProperty: "Saturated Jewel Tone",
      },
    ],
  },
  {
    key: "clarity",
    title: "Diamond Clarity: Geological Purity",
    shortLabel: "Clarity",
    summary:
      "Clarity evaluates internal inclusions (crystals, feathers, clouds) and surface blemishes under standardized 10x magnification.",
    details:
      "Inclusions are nature's fingerprint—minute minerals trapped as the diamond formed deep within the earth's mantle 100 miles below the surface.",
    grades: [
      {
        label: "FL / IF (Flawless / Internally Flawless)",
        description: "Zero internal inclusions visible under 10x binocular magnification. Less than 0.5% of diamonds.",
        visualProperty: "Absolute Crystal Purity",
      },
      {
        label: "VVS1 – VVS2 (Very Very Slightly Included)",
        description: "Minute pinpoints extremely difficult for a trained gemologist to locate under 10x magnification.",
        visualProperty: "Eye-Clean Perfection",
      },
      {
        label: "VS1 – VS2 (Very Slightly Included)",
        description: "Minor inclusions invisible to the naked eye. The benchmark standard for fine jewelry.",
        visualProperty: "100% Eye-Clean",
      },
      {
        label: "SI1 – SI2 (Slightly Included)",
        description: "Noticeable under 10x magnification; typically eye-clean unless located directly under the center table facet.",
        visualProperty: "Noticeable under Loupe",
      },
    ],
  },
  {
    key: "carat",
    title: "Diamond Carat: Weight and Dimension",
    shortLabel: "Carat",
    summary:
      "One metric carat equals exactly 200 milligrams (0.2 grams), subdivided into 100 points.",
    details:
      "Because large rough diamond crystals are exponentially rarer in nature, value increases exponentially with carat weight rather than linearly.",
    grades: [
      {
        label: "0.50 ct (approx. 5.1 mm)",
        description: "Delicate classic proportion. Excellent everyday wearable presence.",
        visualProperty: "Diameter: ~5.10 mm",
      },
      {
        label: "1.00 ct (approx. 6.5 mm)",
        description: "The global benchmark milestone for diamond solitaire grading.",
        visualProperty: "Diameter: ~6.50 mm",
      },
      {
        label: "2.00 ct (approx. 8.1 mm)",
        description: "Dramatic optical presence. Represents less than 1 in 1,000 gem-quality stones.",
        visualProperty: "Diameter: ~8.15 mm",
      },
      {
        label: "3.00+ ct (approx. 9.4 mm+)",
        description: "Elite private investment tier with striking finger coverage and fire.",
        visualProperty: "Diameter: ~9.40 mm+",
      },
    ],
  },
];
