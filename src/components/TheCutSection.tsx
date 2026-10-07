import React, { useState } from 'react';

export const TheCutSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'DRAFT' | 'CHALK' | 'CUT'>('CHALK');
  const [shearsPosition, setShearsPosition] = useState(55);

  return (
    <section id="the-cut" className="relative py-28 lg:py-36 bg-[#0E0F14] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Chapter Header */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-mono text-[#C5A880] mb-4">
          <span>CHAPTER 04 // THE ARCHITECTURAL CORE</span>
          <span className="text-white/20" aria-hidden="true">/</span>
          <span>THE CUT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-white/[0.08]">
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#FAF8F5] tracking-tight leading-[1.05]">
              Where Geometry <br />
              <span className="italic font-normal text-[#E8E4DA]">Becomes Second Skin.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm font-sans text-[#A8A49C] leading-relaxed font-light">
              The cut is irreversible. Once the steel shears bite through the wool, 
              there is no returning. Every arc drawn with chalk must resolve mathematical physics 
              with human movement.
            </p>
          </div>
        </div>

        {/* Interactive Cutting Bench & Drafting Simulator */}
        <div className="bg-[#12141A] border border-white/[0.08] p-6 lg:p-10 relative space-y-8">
          {/* Top Control Bar: Drafting View Modes */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase">
                SAVILE N° 9 CUTTING TABLE
              </span>
              <div className="text-sm font-serif text-[#FAF8F5]">
                Pattern Draft N° 014 — Two-Button Lounge Coat
              </div>
            </div>

            {/* Segmented Mode Selector buttons */}
            <div className="flex items-center bg-[#0C0D10] border border-white/10 p-1">
              <button
                onClick={() => setViewMode('DRAFT')}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider transition-colors cursor-pointer ${
                  viewMode === 'DRAFT'
                    ? 'bg-[#1C1F26] text-[#FAF8F5] shadow-sm'
                    : 'text-[#8E8A80] hover:text-[#FAF8F5]'
                }`}
              >
                01. KRAFT DRAFT
              </button>
              <button
                onClick={() => setViewMode('CHALK')}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider transition-colors cursor-pointer ${
                  viewMode === 'CHALK'
                    ? 'bg-[#1C1F26] text-[#FAF8F5] shadow-sm'
                    : 'text-[#8E8A80] hover:text-[#FAF8F5]'
                }`}
              >
                02. CHALK ON CLOTH
              </button>
              <button
                onClick={() => setViewMode('CUT')}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider transition-colors cursor-pointer ${
                  viewMode === 'CUT'
                    ? 'bg-[#1C1F26] text-[#FAF8F5] shadow-sm'
                    : 'text-[#8E8A80] hover:text-[#FAF8F5]'
                }`}
              >
                03. SHEARED PANELS
              </button>
            </div>
          </div>

          {/* Center Drafting Canvas: SVG Blueprint of Bespoke Pattern */}
          <div className="relative w-full aspect-[16/9] max-h-[520px] bg-[#0A0B0E] border border-white/[0.06] overflow-hidden flex items-center justify-center">
            {/* Drafting Paper Grid / Fabric Weave texture */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                viewMode === 'DRAFT'
                  ? 'bg-[#1B1713]/80 opacity-90'
                  : 'bg-[#0E1015] bg-wool-grain opacity-80'
              }`}
            />

            {/* Blueprint Grid Lines */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="draftGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#draftGrid)" />
            </svg>

            {/* Architectural Pattern Geometry */}
            <svg
              className="relative z-10 w-full h-full max-w-4xl p-4 lg:p-8 overflow-visible"
              viewBox="0 0 800 450"
            >
              {/* Reference Baseline / Plumb lines */}
              <line x1="80" y1="40" x2="80" y2="400" stroke="#7C786E" strokeWidth="0.8" strokeDasharray="3 3" />
              <line x1="720" y1="40" x2="720" y2="400" stroke="#7C786E" strokeWidth="0.8" strokeDasharray="3 3" />
              <line x1="60" y1="180" x2="740" y2="180" stroke="#7C786E" strokeWidth="0.8" strokeDasharray="3 3" />
              <text x="90" y="174" fill="#7C786E" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="2">
                SCYE DEPTH LINE // 248 MM
              </text>
              <line x1="60" y1="280" x2="740" y2="280" stroke="#7C786E" strokeWidth="0.8" strokeDasharray="3 3" />
              <text x="90" y="274" fill="#7C786E" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="2">
                NATURAL WAIST SUPPRESSION // -45 MM
              </text>

              {/* FOREPART (Jacket Front) */}
              <path
                d="M 160 80 Q 230 65 300 70 L 320 180 Q 330 280 290 380 L 140 380 Q 150 280 160 180 Z"
                fill={viewMode === 'CUT' ? 'rgba(197, 168, 128, 0.08)' : 'none'}
                stroke={viewMode === 'DRAFT' ? '#C5A880' : '#F4F2EC'}
                strokeWidth={viewMode === 'CHALK' ? '2' : '1.5'}
                strokeDasharray={viewMode === 'CHALK' ? '6 3' : 'none'}
                className="transition-all duration-300"
              />

              {/* Lapel Roll & Gorge Notch */}
              <path
                d="M 230 65 L 180 180 L 230 240"
                stroke="#C5A880"
                strokeWidth="1.2"
                strokeDasharray="4 2"
                fill="none"
              />
              <text x="210" y="110" fill="#C5A880" fontSize="9" fontFamily="JetBrains Mono">
                LAPEL ROLL
              </text>

              {/* BACK COAT (Jacket Back) */}
              <path
                d="M 480 70 Q 560 65 620 80 L 640 180 Q 650 280 610 380 L 460 380 Q 470 280 470 180 Z"
                fill={viewMode === 'CUT' ? 'rgba(197, 168, 128, 0.08)' : 'none'}
                stroke={viewMode === 'DRAFT' ? '#C5A880' : '#F4F2EC'}
                strokeWidth={viewMode === 'CHALK' ? '2' : '1.5'}
                strokeDasharray={viewMode === 'CHALK' ? '6 3' : 'none'}
                className="transition-all duration-300"
              />
              <text x="520" y="110" fill="#C5A880" fontSize="9" fontFamily="JetBrains Mono">
                BACK BLADE BALANCE
              </text>

              {/* Dynamic Shears Trajectory */}
              <line
                x1={shearsPosition * 7.5}
                y1="40"
                x2={shearsPosition * 7.5}
                y2="410"
                stroke="#FAF8F5"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                className="opacity-60"
              />
            </svg>

            {/* Interactive Shears Marker floating over canvas */}
            <div
              className="absolute top-6 bottom-6 pointer-events-none flex flex-col justify-between items-center transition-all duration-100"
              style={{ left: `${shearsPosition}%` }}
            >
              <span className="text-[9px] font-mono tracking-widest text-[#FAF8F5] bg-[#1a1d24] px-1.5 py-0.5 border border-white/20">
                SHEAR AXIS
              </span>
              <div className="w-px h-full bg-[#C5A880]/60 my-2" />
              <span className="text-[8px] font-mono text-[#C5A880]">
                {shearsPosition}% TRAVERSE
              </span>
            </div>
          </div>

          {/* Shears Traversal Slider */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="w-full sm:w-2/3 flex items-center gap-4">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#7C786E] whitespace-nowrap">
                TRAVERSE SHEARS:
              </span>
              <input
                type="range"
                min="10"
                max="90"
                value={shearsPosition}
                onChange={(e) => setShearsPosition(Number(e.target.value))}
                className="w-full accent-[#C5A880] cursor-pointer bg-white/10"
                aria-label="Adjust shears position on pattern"
              />
              <span className="text-xs font-mono text-[#FAF8F5] tabular-nums">
                {shearsPosition}mm
              </span>
            </div>

            <div className="text-[11px] font-mono text-[#8E8A80] text-right">
              RESERVED INLAY: <span className="text-[#FAF8F5]">65MM BALANCE ALLOWANCE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
