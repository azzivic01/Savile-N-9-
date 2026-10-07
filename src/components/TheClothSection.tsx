import React, { useState } from 'react';
import { CLOTH_ARCHIVE } from '../data/atelierData';
import { ClothItem } from '../types/atelier';

export const TheClothSection: React.FC = () => {
  const [selectedCloth, setSelectedCloth] = useState<ClothItem>(CLOTH_ARCHIVE[0]);
  const [macroImageLoaded, setMacroImageLoaded] = useState(false);

  const macroImagePath = '/src/assets/images/savile_cloth_texture_1791337517643.jpg';

  return (
    <section id="the-cloth" className="relative py-28 lg:py-36 bg-[#0B0C0E] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Chapter Header */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-mono text-[#C5A880] mb-4">
          <span>CHAPTER 02</span>
          <span className="text-white/20" aria-hidden="true">/</span>
          <span>THE CLOTH</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-white/[0.08]">
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#FAF8F5] tracking-tight leading-[1.05]">
              The Fiber, the Twist, <br />
              <span className="italic font-normal text-[#E8E4DA]">the Drape of Noble Cloth.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm font-sans text-[#A8A49C] leading-relaxed font-light">
              Cloth is not an inert backdrop; it is living architecture. It breathes with atmospheric humidity, 
              warms with human body heat, and falls with an inherent weight determined by centuries of milling heritage.
            </p>
          </div>
        </div>

        {/* Hero Visual Presentation: Macro Textile Photography & Technical Atelier Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Macro Textile Photograph with Editorial Scrim & Magnifier */}
          <div className="lg:col-span-7 relative group min-h-[460px] lg:min-h-[580px] bg-[#12141A] border border-white/[0.08] overflow-hidden">
            <img
              src={macroImagePath}
              alt="Macro photograph of high-twist worsted wool and cashmere weave with subtle chalk stripe and textured fiber grain"
              referrerPolicy="no-referrer"
              onLoad={() => setMacroImageLoaded(true)}
              className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[1.05] brightness-95 ${
                macroImageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {!macroImageLoaded && (
              <div
                className="w-full h-full"
                style={{ background: selectedCloth.imageFallbackGradient }}
              />
            )}

            {/* Contrast scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-black/20 pointer-events-none" />

            {/* Atelier Chalk Plate Notation pinned over fabric */}
            <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0e1014]/90 backdrop-blur-md border border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase">
                  ACTIVE SPECIMEN
                </span>
                <div className="text-lg font-serif text-[#FAF8F5]">
                  {selectedCloth.name}
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs font-mono text-[#A8A49C]">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#6B675E] block">ORIGIN</span>
                  <span>{selectedCloth.origin}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#6B675E] block">WEIGHT</span>
                  <span className="tabular-nums text-[#FAF8F5]">{selectedCloth.weightGsm} GSM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Atelier Cloth Curatorial Dossier */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Cloth Selection Buttons styled as clean unboxed editorial tokens */}
            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#7C786E]">
                SELECT ARCHIVE SPECIMEN
              </div>
              <div className="grid grid-cols-1 gap-2">
                {CLOTH_ARCHIVE.map((cloth) => {
                  const isSelected = selectedCloth.id === cloth.id;
                  return (
                    <button
                      key={cloth.id}
                      onClick={() => setSelectedCloth(cloth)}
                      className={`text-left p-3.5 transition-all duration-200 border cursor-pointer ${
                        isSelected
                          ? 'bg-[#161820] border-[#C5A880]/70 translate-x-1'
                          : 'bg-[#101217] border-white/[0.05] hover:border-white/20 hover:bg-[#12141A]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono tracking-widest text-[#C5A880]">
                          {cloth.code}
                        </span>
                        <span className="text-[10px] font-mono text-[#7C786E]">
                          {cloth.mill}
                        </span>
                      </div>
                      <div className="text-sm font-serif text-[#FAF8F5] font-medium">
                        {cloth.name}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Deep Textile Characteristics Record */}
            <div className="bg-[#12141A] border border-white/[0.08] p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <span className="text-xs font-mono text-[#C5A880] tracking-widest uppercase">
                  {selectedCloth.code}
                </span>
                <span className="text-xs font-mono text-[#8E8A80]">
                  {selectedCloth.season}
                </span>
              </div>

              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#6E6A60] mb-1">
                  COMPOSITION & WEAVE
                </h4>
                <p className="text-sm font-sans text-[#E2DFD7] font-light">
                  {selectedCloth.composition} — {selectedCloth.weave}
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#6E6A60] mb-1">
                  STRUCTURAL BEHAVIOR
                </h4>
                <p className="text-xs font-sans text-[#A8A49C] leading-relaxed">
                  {selectedCloth.description}
                </p>
              </div>

              <div className="pt-2 border-t border-white/[0.06]">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#6E6A60] mb-1">
                  TACTILE BENCH RECORD
                </h4>
                <p className="text-xs font-serif italic text-[#C5A880] leading-relaxed">
                  "{selectedCloth.sensoryNotes}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
