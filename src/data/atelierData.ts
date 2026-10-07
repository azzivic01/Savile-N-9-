import { ClothItem, MeasurePoint, CraftDetail, FittingStage, ClientStory } from '../types/atelier';

export const CLOTH_ARCHIVE: ClothItem[] = [
  {
    id: 'cloth-014',
    code: 'CLOTH / 014',
    name: 'Midnight Navy Super 160s Worsted',
    mill: 'Loro Piana',
    origin: 'Biella, Italy',
    composition: '100% Merino Wool, 15.2 Micron',
    weightGsm: 310,
    season: 'Four Seasons / Temperate',
    weave: 'Tight Twill with Subdued Chalk Luster',
    colorTone: '#121620',
    description: 'Woven with high-twist combed wool that rebounds effortlessly against wrinkles. Natural drape with an exceptionally matte, deep navy surface that absorbs ambient light.',
    sensoryNotes: 'Silky, cool hand with resilient tensile memory. Whispers softly when draped over the shears bench.',
    imageFallbackGradient: 'linear-gradient(135deg, #0d121c 0%, #171d2b 100%)'
  },
  {
    id: 'cloth-022',
    code: 'CLOTH / 022',
    name: 'Classic Charcoal Flannel',
    mill: 'Fox Brothers & Co.',
    origin: 'Somerset, England',
    composition: '100% British Wool Fleece',
    weightGsm: 380,
    season: 'Autumn / Winter',
    weave: 'Milled Woollen Flannel',
    colorTone: '#1E2024',
    description: 'The historic English flannel, milled in Somerset since 1772. Has a distinctive soft nap that diffuses light, creating an architectural silhouette of timeless gravitas.',
    sensoryNotes: 'Enveloping, substantial warmth. Muted chalk texture that holds a razor-sharp trouser crease.',
    imageFallbackGradient: 'linear-gradient(135deg, #18191c 0%, #25282d 100%)'
  },
  {
    id: 'cloth-009',
    code: 'CLOTH / 009',
    name: 'Double-Face Vicuña & Cashmere',
    mill: 'Joshua Ellis',
    origin: 'Yorkshire, England',
    composition: '30% Peruvian Vicuña / 70% Mongolian Cashmere',
    weightGsm: 460,
    season: 'Winter Overcoat',
    weave: 'Rippled Beaver Finish',
    colorTone: '#2A1F18',
    description: 'Spun from the finest wild vicuña fiber sustainably gathered in the Andean plateaus and brushed cashmere. The surface displays a natural rippled water finish.',
    sensoryNotes: 'Weightless thermal density. An extraordinary buttery softness that conforms to the shoulder contours.',
    imageFallbackGradient: 'linear-gradient(135deg, #241c16 0%, #352922 100%)'
  },
  {
    id: 'cloth-031',
    code: 'CLOTH / 031',
    name: 'Raw Ecru Heavyweight Linen',
    mill: 'Spence Bryson',
    origin: 'Northern Ireland',
    composition: '100% Long-Staple Flax',
    weightGsm: 360,
    season: 'Spring / Mediterranean Summer',
    weave: 'Crisp Plain Weave',
    colorTone: '#D4CEBF',
    description: 'Spun from unbleached flax cultivated in damp river valleys. Unlike industrial linen, this heavy grade falls with authority and wrinkles with sculptured elegance.',
    sensoryNotes: 'Cool dry initial touch that softens with body warmth. Breathable, textured, unapologetically architectural.',
    imageFallbackGradient: 'linear-gradient(135deg, #b8b1a0 0%, #cecaa1 100%)'
  },
  {
    id: 'cloth-047',
    code: 'CLOTH / 047',
    name: 'Vintage Midnight Barathea',
    mill: 'Dormeuil',
    origin: 'Paris / Yorkshire',
    composition: '100% Worsted Spun Wool & Mulberry Silk',
    weightGsm: 340,
    season: 'Formal Black Tie',
    weave: 'Granular Barathea Weave',
    colorTone: '#0A0C11',
    description: 'The definitive formal black-tie fabric. Deeper than black under evening candlelight, paired with a subtle pebbled grain that eliminates harsh sheen.',
    sensoryNotes: 'Firm, structured spring. Crisp edge retention along lapel folds and peaked gorge seams.',
    imageFallbackGradient: 'linear-gradient(135deg, #090a0f 0%, #12141c 100%)'
  }
];

export const MEASURE_POINTS: MeasurePoint[] = [
  {
    id: 'shoulder-pitch',
    code: 'POINT / 01',
    label: 'Shoulder Slope & Incline',
    description: 'No human shoulder is symmetrical. We record the individual downward angle of both clavicles to prevent neck gaping.',
    bespokeDetail: 'Right shoulder -7mm drop compensation; collar gorge re-leveled to balance lapel planes.',
    typicalVariance: '3mm to 14mm asymmetrical offset',
    x: 48,
    y: 20
  },
  {
    id: 'chest-prominence',
    code: 'POINT / 02',
    label: 'Chest Volumetric Arc',
    description: 'The distance between shoulder points across the pectoral crest dictates chest canvas shaping and ease.',
    bespokeDetail: '25mm floating ease hand-padded into chest canvas to preserve clean line while breathing.',
    typicalVariance: 'Calculated via 3 distinct tape arcs',
    x: 50,
    y: 32
  },
  {
    id: 'arm-scye-depth',
    code: 'POINT / 03',
    label: 'Armhole Scye Depth',
    description: 'Cut exceptionally high to hug the underarm. Allows the arms to raise freely without pulling the jacket hem.',
    bespokeDetail: 'Cut 28mm higher than commercial ready-to-wear; armhole circumference custom-contoured to arm pitch.',
    typicalVariance: 'Custom drafting formula per bicep diameter',
    x: 36,
    y: 35
  },
  {
    id: 'blade-prominence',
    code: 'POINT / 04',
    label: 'Scapula & Back Curvature',
    description: 'The curvature of the upper back blades requires iron-shrunk fabric shaping so the jacket back hangs straight as a plumb line.',
    bespokeDetail: 'Hand-stretched cloth over hot tailor iron creates permanent hollow without visible pleats.',
    typicalVariance: 'Corrects forward or erect posture',
    x: 52,
    y: 42
  },
  {
    id: 'waist-hollow',
    code: 'POINT / 05',
    label: 'Natural Waist Suppression',
    description: 'The exact point where the torso narrows. Positioned individually to elongate leg lines and establish silhouette authority.',
    bespokeDetail: 'Waist suppression balanced between side seams and back seam for continuous curvature.',
    typicalVariance: 'Located at individual pivot vertebra',
    x: 50,
    y: 56
  },
  {
    id: 'balance-ratio',
    code: 'POINT / 06',
    label: 'Front-to-Back Balance Ratio',
    description: 'The master equation of bespoke tailoring: comparing front neck point to hem against back collar to hem.',
    bespokeDetail: 'Guarantees the jacket hem rests perfectly horizontal, neither kicking back nor bowing forward.',
    typicalVariance: 'Pure bespoke alignment',
    x: 50,
    y: 72
  }
];

export const CRAFT_DETAILS: CraftDetail[] = [
  {
    id: 'floating-canvas',
    number: '01',
    title: 'Full Floating Horsehair Canvas',
    hours: 14,
    craftsmanNote: 'No fusible glue. Only horsehair, camel hair, and linen canvas suspended by hand-stitches.',
    description: 'The skeleton of the garment is cut from unbleached natural canvas and fastened inside the wool with loose prick-stitches. It warms with your body temperature, molding permanently to your physique over years of wear.',
    technique: 'Pad-stitching with pure linen thread (1,200 micro-stitches per chest piece).'
  },
  {
    id: 'milanese-buttonhole',
    number: '02',
    title: 'The Milanese Keyhole Buttonhole',
    hours: 4,
    craftsmanNote: '45 minutes of solitary concentration for a single lapel buttonhole.',
    description: 'Worked over a raised cord of silk gimp using pure buttonhole twist silk. The thread is knotted rhythmically with surgical precision to produce a smooth, sculptural pearl edge that no machine can replicate.',
    technique: 'Continuous tension hand-knotting with French Au Chinois silk thread.'
  },
  {
    id: 'iron-sculpting',
    number: '03',
    title: 'Sculpting with the Tailor’s Iron',
    hours: 7,
    craftsmanNote: 'Steam, pressure, and heat transform two-dimensional wool into a three-dimensional shell.',
    description: 'Before a single permanent seam is sewn, heavy damp cloths and an 8kg solid iron are used to stretch and shrink the cloth fibers. The cloth is coaxed into the contours of the human chest, back, and calves.',
    technique: 'Thermal fiber realignment using heavy cast iron.'
  },
  {
    id: 'collar-lapel-roll',
    number: '04',
    title: 'Hand-Padded Collar & Lapel Roll',
    hours: 9,
    craftsmanNote: 'A natural, fluid roll that never creases flat against the chest.',
    description: 'Over 800 minute diagonal hand-stitches curve the collar canvas and wool into an organic horseshoe shape. The lapel rolls outward with subtle spring, framing the tie and shirt collar flawlessly.',
    technique: 'Chevrons of hand pad-stitching through canvas and Melton felt.'
  },
  {
    id: 'horn-shank-buttons',
    number: '05',
    title: 'Hand-Turned Buffalo Horn Buttons',
    hours: 3,
    craftsmanNote: 'Sown with thread shanks so the fabric slides underneath without buckling.',
    description: 'Crafted from ethically sourced natural horn with matte burnished edges. Each button is sewn with waxed linen thread and wrapped with a 3mm thread stem, allowing the thick wool layers to button smoothly.',
    technique: 'Hand-stemmed with cross-locking lockstitch.'
  }
];

export const FITTING_STAGES: FittingStage[] = [
  {
    stage: '01',
    code: 'FITTING / 01',
    name: 'The Baste Fitting',
    timing: 'Week 3 following initial measures',
    objective: 'Verifying posture, balance, and proportional architecture before any cloth is permanently trimmed.',
    garmentState: 'The jacket exists as a skeleton: raw canvas, white basting thread, no collar, no pockets, no lining. The cloth has ample seam allowances reserved for adjustment.',
    tailorAction: 'The cutter uses shears and pins directly on your body, ripping apart seams, re-pinning the shoulder incline, and marking chalk lines across the balance points.',
    details: [
      'Raw canvas exposed with contrasting white basting thread',
      'Shoulder slope and collar gorge dissected and adjusted',
      'Waist suppression sculpted to your natural stance',
      'Sleeve pitch aligned with your relaxed arm swing'
    ]
  },
  {
    stage: '02',
    code: 'FITTING / 02',
    name: 'The Forward Fitting',
    timing: 'Week 6',
    objective: 'Refining pockets, sleeve length, collar placement, and drape fluidity.',
    garmentState: 'Internal canvases are permanently trimmed. Pockets and lapels are hand-basted in position. One sleeve is set. The garment begins to feel like a second skin.',
    tailorAction: 'Millimeter adjustments to cuff reveal (showing precisely 12mm of shirt cuff), chest blade ease, and trousers rise and break.',
    details: [
      'Pockets cut and flap angles verified against hand resting posture',
      'Lapel width and gorge notch placed in relation to facial structure',
      'Undercollar padded and tailored to hug the neck shirt collar',
      'Trouser break calibrated to your specific bespoke footwear'
    ]
  },
  {
    stage: '03',
    code: 'FITTING / 03',
    name: 'The Finish Fitting',
    timing: 'Week 8',
    objective: 'The garment is complete. Hand-sewn buttonholes, silk lining, and final press verified in motion.',
    garmentState: 'All hand finishing is complete. The suit is fully lined in breathable Bemberg cupro silk. Milanese buttonholes sewn. Horn buttons secured.',
    tailorAction: 'You move freely: sitting, reaching, walking across the fitting salon. The cutter inspects the silhouette from every angle in the tri-fold mirrors.',
    details: [
      'Pure freedom of motion: arms lift without pulling jacket hem',
      'Clean horizontal back drape free of folds or pulling',
      'Personal monogram verified inside the left breast interior pocket',
      'Registration into the Savile N° 9 Archives under your personal pattern code'
    ]
  }
];

export const CLIENT_STORIES: ClientStory[] = [
  {
    id: 'client-01',
    archetype: 'Architectural Director',
    name: 'Julian Vance',
    location: 'London & Basel',
    piece: 'Unstructured Double-Breasted Guard’s Coat in West of England Flannel',
    fabric: 'Fox Brothers 380g Charcoal Fleece',
    quote: 'At the drafting table, I need my arms to move without feeling the resistance of fabric. Savile N° 9 engineered the scye so high that the coat feels like an extension of my posture, not an enclosure.',
    observation: 'Cut with extended shoulder points to balance a tall architectural posture, with generous interior drafting-roll pockets.'
  },
  {
    id: 'client-02',
    archetype: 'Concert Cellist',
    name: 'Helena Bergström',
    location: 'Stockholm & Paris',
    piece: 'Sculpted Smoking Jacket with Silk Barathea Lapels',
    fabric: 'Dormeuil Midnight Barathea with Silk Grossgrain',
    quote: 'When bowing, my back expands several centimeters. Any commercial jacket buckles behind the neck. Here, the tailor shaped the back canvas so the collar stays locked to my neck regardless of movement.',
    observation: 'Back blades cut with hidden iron-shrunk ease; softer chest canvas for instrument resting angle.'
  },
  {
    id: 'client-03',
    archetype: 'Contemporary Art Dealer',
    name: 'Arthur Moreau',
    location: 'Paris, 8ème',
    piece: 'Three-Piece Lounge Suit in Super 160s Worsted',
    fabric: 'Loro Piana Midnight Navy 310g',
    quote: 'There are no logos. No one in the room knows the brand, yet everyone notices that the shoulders and lapels possess a calm, magnetic authority that cannot be bought off a rack.',
    observation: 'Slight roped sleevehead (con rollino); bespoke waist suppression with double reverse pleat trousers.'
  }
];
