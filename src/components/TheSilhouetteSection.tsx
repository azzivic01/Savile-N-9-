import React, { useState } from 'react';

export const TheSilhouetteSection: React.FC = () => {
  const [silhouetteLoaded, setSilhouetteLoaded] = useState(false);
  const [activeFacet, setActiveFacet] = useState<number>(0);

  const silhouetteImagePath = '/src/assets/images/savile_silhouette_coat_1791337540559.jpg';

  const facets = [
    {
      label: 'Natural Arm Elevation',
      principle: 'The High Underarm Scye',
      description: 'Ready-to-wear armholes are cut low to accommodate any chest size, pulling the entire jacket up whenever you raise a hand. Our high arm scye lets you reach, hail, or drive with zero tension at the collar.',
    },
    {
      label: 'The Clean Back Plumb Line',
      principle: 'Scapula Hollow Shaping',
      description: 'Using the heavy tailor iron, excess fabric is coaxed into the shoulder blades so the coat hangs plumb from collar to hem, with no horizontal ripples across the lower lumbar.',
    },
    {
      label: 'The Living Chest Roll',
      principle: 'Unfused Floating Architecture',
      description: 'Because the lapel canvas is curved by hundreds of hand stitches rather than glued stiff, the lapel rolls outward organically like a petal, never pressing flat against the chest.',
    },
    {
      label: 'The Stride Balance',
      principle: 'Side Vent & Quarters Flare',
      description: 'Cut with precise open quarters that sweep away gracefully below the waist button, preserving leg freedom during long strides through city streets.',
    }
  ];

  return (
    <section id="the-silhouette" className="relative py-28 lg:py-36 bg-[#0B0C0E] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Chapter Header */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-mono text-[#C5A880] mb-4">
          <span>CHAPTER 07</span>
          <span className="text-white/20" aria-hidden="true">/</span>
          <span>THE SILHOUETTE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-white/[0.08]">
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#FAF8F5] tracking-tight leading-[1.05]">
              Architecture in <br />
              <span className="italic font-normal text-[#E8E4DA]">Perpetual Motion.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm font-sans text-[#A8A49C] leading-relaxed font-light">
              A bespoke garment does not merely pose in front of a mirror. It lives in movement: 
              navigating stone arcades, stepping into motor cars, leaning across conference tables.
            </p>
          </div>
        </div>

        {/* Dynamic Composition: Editorial Courtyard Photography & Structural Anatomy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: High-Fashion Architectural Editorial Photo */}
          <div className="lg:col-span-7 relative bg-[#13151D] border border-white/[0.08] min-h-[520px] lg:min-h-[640px] overflow-hidden flex items-end group">
            <img
              src={silhouetteImagePath}
              alt="Bespoke charcoal overcoat worn in natural motion walking through modernist stone courtyard in London"
              referrerPolicy="no-referrer"
              onLoad={() => setSilhouetteLoaded(true)}
              className={`w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-95 contrast-[1.03] ${
                silhouetteLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {!silhouetteLoaded && (
              <div className="absolute inset-0 bg-[#161822] flex items-center justify-center">
                <span className="text-xs uppercase tracking-widest font-mono text-[#8E8A80]">
                  Modernist Stone Arcade · London
                </span>
              </div>
            )}

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-black/30 pointer-events-none" />

            {/* Editorial Caption Tag */}
            <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0e1014]/90 backdrop-blur-md border border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase block">
                  BESPOKE COMMISSION // ARCHIVE 2026
                </span>
                <div className="text-base font-serif text-[#FAF8F5]">
                  Sculpted Double-Breasted Overcoat in 380g Fox Flannel
                </div>
              </div>
              <span className="text-xs font-mono text-[#8E8A80]">
                NATURAL SHOULDER ROPE
              </span>
            </div>
          </div>

          {/* Right: Motion & Anatomy Principles */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#7C786E] block">
                ANATOMY IN MOTION
              </span>

              <div className="space-y-2">
                {facets.map((facet, idx) => {
                  const isActive = activeFacet === idx;
                  return (
                    <button
                      key={facet.label}
                      onClick={() => setActiveFacet(idx)}
                      className={`w-full text-left p-4 transition-all duration-200 border cursor-pointer ${
                        isActive
                          ? 'bg-[#171922] border-[#C5A880]/70 translate-x-1'
                          : 'bg-[#101217] border-white/[0.05] hover:border-white/20 hover:bg-[#12141A]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono tracking-widest text-[#C5A880]">
                          0{idx + 1} // {facet.principle}
                        </span>
                      </div>
                      <div className="text-sm font-serif text-[#FAF8F5]">
                        {facet.label}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Principle Details */}
            <div className="bg-[#13151D] border border-white/[0.08] p-6 space-y-3">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A880] block">
                PHYSICS OF THE CUT
              </span>
              <h3 className="text-xl font-serif text-[#FAF8F5]">
                {facets[activeFacet].principle}
              </h3>
              <p className="text-xs font-sans text-[#C4C0B5] leading-relaxed font-light">
                {facets[activeFacet].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
