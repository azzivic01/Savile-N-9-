import React, { useState } from 'react';

interface HeroSectionProps {
  onOpenAppointment: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAppointment }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [interactiveChalkOffset, setInteractiveChalkOffset] = useState<number | null>(null);

  const heroImagePath = '/src/assets/images/savile_hero_cut_1791337500939.jpg';

  const handleMouseMoveOnFabric = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relativeX = ((e.clientX - rect.left) / rect.width) * 100;
    setInteractiveChalkOffset(relativeX);
  };

  return (
    <section
      className="relative min-h-screen w-full flex items-end justify-start overflow-hidden bg-[#0C0D10] pt-24 pb-16 lg:pb-24"
      onMouseMove={handleMouseMoveOnFabric}
      onMouseLeave={() => setInteractiveChalkOffset(null)}
    >
      {/* Background Editorial Cutting Table Photography with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImagePath}
          alt="Bespoke cutting table at Savile N° 9 with heavy dark wool cloth, tailor's shears, chalk markings, and raking morning light"
          referrerPolicy="no-referrer"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover object-center transition-all duration-1000 scale-[1.02] filter brightness-[0.78] contrast-[1.06] ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Fallback elegant dark canvas if image is loading */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-[#0F1116] flex items-center justify-center">
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#8E8A80]">
              Maison Savile N° 9 · Cutting Table
            </span>
          </div>
        )}

        {/* Measured scrims: deep charcoal vignette ensuring WCAG contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-[#0C0D10]/55 to-black/35 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0D10]/85 via-[#0C0D10]/40 to-transparent pointer-events-none" />

        {/* Subtle cloth grain & tailor's chalk line overlay */}
        <div className="absolute inset-0 bg-wool-grain pointer-events-none opacity-40" />

        {/* Dynamic Chalk Line cutting across the fabric */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="12%"
            y1="72%"
            x2={interactiveChalkOffset !== null ? `${interactiveChalkOffset}%` : '88%'}
            y2="72%"
            stroke="#F4F2EC"
            strokeWidth="1.2"
            strokeDasharray="8 4"
            className="transition-all duration-300 ease-out"
          />
          {interactiveChalkOffset !== null && (
            <circle
              cx={`${interactiveChalkOffset}%`}
              cy="72%"
              r="3"
              fill="#C5A880"
              className="opacity-90"
            />
          )}
        </svg>
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        {/* Top Atelier Reference Tag */}
        <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.26em] uppercase font-mono text-[#C5A880] mb-6">
          <span>SAVILE N° 9</span>
          <span className="text-white/30" aria-hidden="true">·</span>
          <span>BESPOKE TAILORING</span>
          <span className="text-white/30" aria-hidden="true">·</span>
          <span className="text-[#A8A49C]">EST. 1987</span>
        </div>

        {/* Primary Title: High-contrast Editorial Serif */}
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-serif font-light text-[#FAF8F5] tracking-tight leading-[0.95] text-balance mb-8">
            The Art of <br />
            <span className="italic font-normal text-[#E8E4DA]">the Cut.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-4 border-t border-white/10">
            {/* Core Declarative Philosophy */}
            <div className="md:col-span-7 space-y-3">
              <p className="text-sm sm:text-base font-serif italic text-[#C5A880] tracking-wide">
                Cut by hand. Made for one.
              </p>
              <p className="text-sm font-sans text-[#B0ACA2] leading-relaxed max-w-xl font-light">
                The garment does not begin with the cloth. It begins with the individual: 
                an intimate conversation of posture, weight, proportion, and movement, 
                translated into a personal paper pattern drafted from first principles.
              </p>
            </div>

            {/* Interaction & Atelier Coordinates */}
            <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col justify-between items-start md:items-end gap-4">
              <div className="text-[11px] font-mono tracking-widest text-[#8E8A80] text-left md:text-right space-y-1">
                <div>NO. 9 SAVILE ROW · MAYFAIR</div>
                <div>8ÈME ARRONDISSEMENT · PARIS</div>
                <div className="text-[#C5A880]/80">BY PRIVATE CONSULTATION ONLY</div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={onOpenAppointment}
                  className="px-6 py-3 text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#0C0D10] bg-[#FAF8F5] hover:bg-[#C5A880] transition-colors duration-200 cursor-pointer shadow-lg active:translate-y-px"
                >
                  Commission a Garment
                </button>
                <a
                  href="#the-house"
                  className="text-xs uppercase tracking-[0.18em] font-sans text-[#FAF8F5]/80 hover:text-[#FAF8F5] flex items-center gap-2 py-3 transition-colors"
                >
                  <span>Explore Atelier</span>
                  <span className="text-[#C5A880]">↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
