import React, { useState } from 'react';
import { FITTING_STAGES } from '../data/atelierData';
import { FittingStage } from '../types/atelier';

export const TheFittingSection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<FittingStage>(FITTING_STAGES[0]);

  return (
    <section id="the-fitting" className="relative py-28 lg:py-36 bg-[#0E0F14] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Chapter Header */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-mono text-[#C5A880] mb-4">
          <span>CHAPTER 06</span>
          <span className="text-white/20" aria-hidden="true">/</span>
          <span>THE FITTING</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-white/[0.08]">
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#FAF8F5] tracking-tight leading-[1.05]">
              Fit is Where the Garment <br />
              <span className="italic font-normal text-[#E8E4DA]">Becomes Yours.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm font-sans text-[#A8A49C] leading-relaxed font-light">
              In the quiet of the fitting salon, you and the cutter stand before the tri-fold mirrors. 
              The chalk marks and pins do not seek a rigid military symmetry; they seek harmony with your natural spine.
            </p>
          </div>
        </div>

        {/* 3-Stage Fitting Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          {FITTING_STAGES.map((stage) => {
            const isSelected = selectedStage.stage === stage.stage;
            return (
              <button
                key={stage.stage}
                onClick={() => setSelectedStage(stage)}
                className={`p-6 text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#181B24] border-[#C5A880] shadow-md'
                    : 'bg-[#111319] border-white/[0.06] hover:border-white/20 hover:bg-[#13151E]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-[#C5A880]">{stage.code}</span>
                    <span className="text-[#7C786E]">{stage.timing}</span>
                  </div>
                  <h3 className="text-xl font-serif text-[#FAF8F5] mb-2">
                    {stage.name}
                  </h3>
                </div>
                <p className="text-xs font-sans text-[#9E9A8E] line-clamp-2">
                  {stage.objective}
                </p>
              </button>
            );
          })}
        </div>

        {/* Stage In-Depth Anatomy */}
        <div className="bg-[#13151D] border border-white/[0.08] p-8 lg:p-12 relative space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase block">
                ATELIER BENCH PHASE
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#FAF8F5]">
                {selectedStage.name}
              </h3>
            </div>
            <div className="text-xs font-mono text-[#8E8A80]">
              ESTIMATED TIMELINE: <span className="text-[#FAF8F5]">{selectedStage.timing}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#7C786E] mb-1">
                  STATE OF THE GARMENT
                </h4>
                <p className="text-sm font-sans text-[#D4D0C5] leading-relaxed font-light">
                  {selectedStage.garmentState}
                </p>
              </div>

              <div className="pt-2">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#7C786E] mb-1">
                  ACTIONS OF THE MASTER CUTTER
                </h4>
                <p className="text-sm font-sans text-[#A8A49C] leading-relaxed">
                  {selectedStage.tailorAction}
                </p>
              </div>
            </div>

            <div className="bg-[#0C0D11] border border-white/10 p-6 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A880] block">
                SALON VERIFICATION CHECKPOINTS
              </span>
              <ul className="space-y-2.5">
                {selectedStage.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-[#E0DCD1] font-light">
                    <span className="text-[#C5A880] font-mono mt-0.5">·</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
