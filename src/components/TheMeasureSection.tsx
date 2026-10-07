import React, { useState } from 'react';
import { MEASURE_POINTS } from '../data/atelierData';
import { MeasurePoint } from '../types/atelier';

export const TheMeasureSection: React.FC = () => {
  const [activePoint, setActivePoint] = useState<MeasurePoint>(MEASURE_POINTS[0]);
  const [photoLoaded, setPhotoLoaded] = useState(false);

  const measureImagePath = '/src/assets/images/savile_measure_craft_1791337530554.jpg';

  return (
    <section id="the-measure" className="relative py-28 lg:py-36 bg-[#0C0D10] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Chapter Header */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-mono text-[#C5A880] mb-4">
          <span>CHAPTER 03</span>
          <span className="text-white/20" aria-hidden="true">/</span>
          <span>THE MEASURE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-white/[0.08]">
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#FAF8F5] tracking-tight leading-[1.05]">
              Measured to <br />
              <span className="italic font-normal text-[#E8E4DA]">the Millimeter.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm font-sans text-[#A8A49C] leading-relaxed font-light">
              No human body conforms to a standardized size. We observe the subtle curve of your spine, 
              the natural forward pitch of your arms, the height of your hips, and how you naturally stand when unobserved.
            </p>
          </div>
        </div>

        {/* Two-Column Asymmetric Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Intimate Editorial Tailor Documentary Portrait */}
          <div className="lg:col-span-6 relative bg-[#13151B] border border-white/[0.08] overflow-hidden min-h-[500px] flex items-end">
            <img
              src={measureImagePath}
              alt="Master tailor measuring shoulder incline and posture with linen tape in private atelier"
              referrerPolicy="no-referrer"
              onLoad={() => setPhotoLoaded(true)}
              className={`w-full h-full object-cover object-top transition-opacity duration-700 filter brightness-95 contrast-[1.04] ${
                photoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {!photoLoaded && (
              <div className="absolute inset-0 bg-[#161820] flex items-center justify-center">
                <span className="text-xs uppercase tracking-widest font-mono text-[#8E8A80]">
                  Private Fitting Salon · Paris
                </span>
              </div>
            )}

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-transparent to-black/30 pointer-events-none" />

            {/* Inset Quote Annotation */}
            <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0e1014]/90 backdrop-blur-md border border-white/10 space-y-2">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A880]">
                CUTTER'S NOTEBOOK // ENTRY 412
              </span>
              <p className="text-sm font-serif italic text-[#FAF8F5]">
                "The tape does not merely measure circumference. It records how weight is distributed between feet when speaking, listening, or thinking."
              </p>
            </div>
          </div>

          {/* Right: Anatomical Balance Matrix & Coordinate Points */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#7C786E]">
                  28-POINT BESPOKE POSTURE MATRIX
                </span>
                <span className="text-[10px] font-mono text-[#C5A880]">
                  SELECT COORDINATE
                </span>
              </div>

              {/* Grid of anatomical measure coordinates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {MEASURE_POINTS.map((pt) => {
                  const isActive = activePoint.id === pt.id;
                  return (
                    <button
                      key={pt.id}
                      onClick={() => setActivePoint(pt)}
                      className={`text-left p-3.5 transition-all duration-200 border cursor-pointer ${
                        isActive
                          ? 'bg-[#181B22] border-[#C5A880]/70'
                          : 'bg-[#111317] border-white/[0.05] hover:border-white/20 hover:bg-[#14161C]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] font-mono tracking-widest text-[#C5A880]">
                          {pt.code}
                        </span>
                      </div>
                      <div className="text-xs font-serif text-[#FAF8F5] font-medium leading-snug">
                        {pt.label}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Measure Coordinate Analysis Card */}
            <div className="bg-[#14161C] border border-white/[0.08] p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-[#C5A880] tracking-widest uppercase">
                    ANATOMICAL BALANCE ANALYSIS
                  </span>
                  <h3 className="text-xl font-serif text-[#FAF8F5]">
                    {activePoint.label}
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#8E8A80] bg-[#1a1d24] px-2 py-1 border border-white/5">
                  {activePoint.code}
                </span>
              </div>

              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#6E6A60] mb-1">
                  OBSERVATIONAL PRINCIPLE
                </h4>
                <p className="text-xs font-sans text-[#C2BEB4] leading-relaxed">
                  {activePoint.description}
                </p>
              </div>

              <div className="pt-2 border-t border-white/[0.06]">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#6E6A60] mb-1">
                  BESPOKE PATTERN CORRECTION
                </h4>
                <p className="text-xs font-sans text-[#E0DDD5] leading-relaxed font-light">
                  {activePoint.bespokeDetail}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-[#7C786E]">
                <span>TYPICAL VARIANCE:</span>
                <span className="text-[#C5A880]">{activePoint.typicalVariance}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
