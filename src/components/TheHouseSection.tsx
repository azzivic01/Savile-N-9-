import React, { useState } from 'react';

export const TheHouseSection: React.FC = () => {
  const [activeChamber, setActiveChamber] = useState<number>(0);

  const chambers = [
    {
      id: 'cutting-room',
      title: 'The Cutting Bench',
      subtitle: 'Where geometry meets raw bolt',
      details: 'Four meters of hand-waxed English oak. Leveled with a spirit level to within half a millimeter. Here, patterns drafted on brown kraft paper meet shears weighed specifically for the cutter’s hand.',
      atmosphere: 'Scents of raw fleece, chalk dust, and aged timber. High sash windows casting raking north light.',
      annotation: 'ROOM 01 // GROUND FLOOR REAR'
    },
    {
      id: 'cloth-vault',
      title: 'The Cloth Library',
      subtitle: 'Over 3,000 vintage & seasonal lengths',
      details: 'Lengths collected over four decades: dormant deadstock flannels from defunct Somerset mills, heavy Scottish tweeds, gossamer silks from Como, and 15-micron wools from Biella.',
      atmosphere: 'Shelves stacked floor to ceiling. Complete acoustic silence dampened by hundreds of yards of dense weave.',
      annotation: 'ROOM 02 // SUB-TERRAIN VAULT'
    },
    {
      id: 'fitting-salon',
      title: 'The Private Fitting Salon',
      subtitle: 'A sanctuary of mirror and poise',
      details: 'Tri-fold bronze-framed mirrors capturing the line from every angle. No cash registers, no promotional displays. An intimate room where you stand alongside the cutter to dissect posture and balance.',
      atmosphere: 'Soft wool carpeting, low-grain walnut armchairs, steaming brass kettle, and deliberate discretion.',
      annotation: 'ROOM 03 // FIRST FLOOR SALON'
    },
    {
      id: 'hand-bench',
      title: 'The Needle Bench',
      subtitle: '52 hours of silent benchwork',
      details: 'Where needleworkers sit in natural daylight. Floating horsehair canvas is secured with thousand-stitch pad chevrons, buttonhole twist is hand-waxed with beeswax, and silk linings are hand-felled.',
      atmosphere: 'Rhythmic tap of tailor’s thimbles against brass needles; quiet breathing; the murmur of iron steam.',
      annotation: 'ROOM 04 // UPPER ATELIER'
    }
  ];

  return (
    <section id="the-house" className="relative py-28 lg:py-36 bg-[#0E0F13] border-t border-white/[0.06] overflow-hidden">
      {/* Editorial Chapter Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-mono text-[#C5A880] mb-4">
          <span>CHAPTER 01</span>
          <span className="text-white/20" aria-hidden="true">/</span>
          <span>THE HOUSE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-white/[0.08]">
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#FAF8F5] tracking-tight leading-[1.05]">
              A House of Measure, <br />
              <span className="italic font-normal text-[#E8E4DA]">Material and Time.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm font-sans text-[#A8A49C] leading-relaxed font-light">
              We do not operate a boutique. SAVILE N° 9 is a working sanctuary of craftsmanship where garments 
              are drafted, cut, and assembled beneath one roof in Mayfair and Paris.
            </p>
          </div>
        </div>

        {/* Architectural Atelier Blueprint Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Interactive Chamber Selector */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-[11px] font-mono tracking-widest uppercase text-[#7C786E] mb-4">
              ATELIER SANCTUARY LAYOUT
            </div>
            {chambers.map((chamber, index) => {
              const isActive = activeChamber === index;
              return (
                <button
                  key={chamber.id}
                  onClick={() => setActiveChamber(index)}
                  className={`w-full text-left p-5 transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? 'bg-[#15171D] border-[#C5A880]/60 shadow-lg translate-x-1'
                      : 'bg-[#101216] border-white/[0.05] hover:border-white/20 hover:bg-[#13151A]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono tracking-widest text-[#C5A880]">
                      {chamber.annotation}
                    </span>
                    <span className="text-xs font-mono text-[#7C786E]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif text-[#FAF8F5] mb-1">
                    {chamber.title}
                  </h3>
                  <p className="text-xs font-sans text-[#969288] line-clamp-1">
                    {chamber.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Archival Chamber View */}
          <div className="lg:col-span-7 bg-[#14161C] border border-white/[0.08] p-8 sm:p-10 flex flex-col justify-between relative">
            {/* Corner architectural crosshair */}
            <div className="absolute top-4 right-4 text-[9px] font-mono text-[#7C786E]">
              SEC. D-09 // LAT: 51.5113° N
            </div>

            <div className="space-y-6">
              <div className="inline-block border-b border-[#C5A880]/40 pb-1">
                <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#C5A880]">
                  {chambers[activeChamber].annotation}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif text-[#FAF8F5] leading-tight">
                {chambers[activeChamber].title}
              </h3>

              <p className="text-sm font-serif italic text-[#C5A880] text-lg">
                "{chambers[activeChamber].subtitle}"
              </p>

              <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                <div>
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#7C786E] mb-1">
                    FUNCTION & ARCHITECTURE
                  </h4>
                  <p className="text-sm font-sans text-[#C2BEB4] leading-relaxed font-light">
                    {chambers[activeChamber].details}
                  </p>
                </div>

                <div className="pt-2">
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#7C786E] mb-1">
                    SENSILLIC ATMOSPHERE
                  </h4>
                  <p className="text-xs font-sans text-[#A8A49C] italic leading-relaxed">
                    {chambers[activeChamber].atmosphere}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Atelier Quote Stamp */}
            <div className="pt-8 mt-8 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#8E8A80]">
              <span className="font-mono text-[10px] tracking-widest">SAVILE ROW · LONDON W1S</span>
              <span className="font-serif italic text-[#C5A880]/80">Discreet by appointment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
