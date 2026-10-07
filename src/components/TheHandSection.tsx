import React, { useState } from 'react';
import { CRAFT_DETAILS } from '../data/atelierData';
import { CraftDetail } from '../types/atelier';

export const TheHandSection: React.FC = () => {
  const [selectedCraft, setSelectedCraft] = useState<CraftDetail>(CRAFT_DETAILS[0]);

  return (
    <section id="the-hand" className="relative py-28 lg:py-36 bg-[#0B0C0E] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Chapter Header */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-mono text-[#C5A880] mb-4">
          <span>CHAPTER 05</span>
          <span className="text-white/20" aria-hidden="true">/</span>
          <span>THE HAND</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-white/[0.08]">
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#FAF8F5] tracking-tight leading-[1.05]">
              Fifty-Two Hours <br />
              <span className="italic font-normal text-[#E8E4DA]">at the Hand Bench.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm font-sans text-[#A8A49C] leading-relaxed font-light">
              A bespoke suit cannot be rushed. It requires over fifty hours of solitary needlework, 
              where hands adjust tension grain by grain, stitch by stitch.
            </p>
          </div>
        </div>

        {/* 5-Column Hand Craft Explorer */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-10">
          {CRAFT_DETAILS.map((craft) => {
            const isSelected = selectedCraft.id === craft.id;
            return (
              <button
                key={craft.id}
                onClick={() => setSelectedCraft(craft)}
                className={`p-5 text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[140px] ${
                  isSelected
                    ? 'bg-[#181B24] border-[#C5A880] -translate-y-1 shadow-lg'
                    : 'bg-[#111318] border-white/[0.05] hover:border-white/20 hover:bg-[#14161E]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#C5A880]">{craft.number}</span>
                  <span className="text-[#7C786E]">{craft.hours}h</span>
                </div>
                <div className="text-sm font-serif text-[#FAF8F5] font-medium leading-tight">
                  {craft.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Focused Workstation Detail Card */}
        <div className="bg-[#13151D] border border-white/[0.08] p-8 lg:p-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-[#C5A880]">
                <span>TECHNIQUE {selectedCraft.number} OF 05</span>
                <span className="text-white/20">/</span>
                <span>ALLOCATED TIME: {selectedCraft.hours} HOURS</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif text-[#FAF8F5]">
                {selectedCraft.title}
              </h3>

              <p className="text-sm font-serif italic text-[#C5A880] text-lg">
                "{selectedCraft.craftsmanNote}"
              </p>

              <p className="text-sm font-sans text-[#C5C1B6] leading-relaxed font-light">
                {selectedCraft.description}
              </p>

              <div className="pt-4 border-t border-white/[0.06]">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#7C786E] block mb-1">
                  EXACT ATELIER PROTOCOL
                </span>
                <p className="text-xs font-mono text-[#E8E4DA]">
                  {selectedCraft.technique}
                </p>
              </div>
            </div>

            {/* Right: Technical Diagram of Needle & Thread Geometry */}
            <div className="lg:col-span-5 bg-[#0C0D10] border border-white/10 p-6 flex flex-col justify-center items-center text-center space-y-4">
              <div className="w-24 h-24 rounded-full border border-[#C5A880]/30 flex items-center justify-center relative">
                {/* Needle graphic */}
                <svg className="w-14 h-14" viewBox="0 0 48 48" fill="none">
                  <path d="M 12 36 L 36 12" stroke="#FAF8F5" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="34" cy="14" r="1.5" fill="#C5A880" />
                  <path d="M 34 14 Q 38 20 28 26 T 20 38" stroke="#C5A880" strokeWidth="0.8" strokeDasharray="2 2" fill="none" />
                </svg>
              </div>

              <div className="text-xs font-mono tracking-widest text-[#FAF8F5]">
                PURE SILK GIMP & LINEN WAX
              </div>
              <p className="text-[11px] font-sans text-[#8E8A80] max-w-xs leading-relaxed">
                Hand needles calibrated by caliber (N° 9 Betweens). Beeswax pulled through thread twice to prevent internal knot friction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
