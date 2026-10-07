export interface ClothItem {
  id: string;
  code: string;
  name: string;
  mill: string;
  origin: string;
  composition: string;
  weightGsm: number;
  season: string;
  weave: string;
  colorTone: string;
  description: string;
  sensoryNotes: string;
  imageFallbackGradient: string;
}

export interface MeasurePoint {
  id: string;
  code: string;
  label: string;
  description: string;
  bespokeDetail: string;
  typicalVariance: string;
  x: number; // percentage coordinate for diagram
  y: number;
}

export interface CraftDetail {
  id: string;
  number: string;
  title: string;
  hours: number;
  craftsmanNote: string;
  description: string;
  technique: string;
}

export interface FittingStage {
  stage: string;
  code: string;
  name: string;
  timing: string;
  objective: string;
  garmentState: string;
  tailorAction: string;
  details: string[];
}

export interface ClientStory {
  id: string;
  archetype: string;
  name: string;
  location: string;
  piece: string;
  fabric: string;
  quote: string;
  observation: string;
}
