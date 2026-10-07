import React, { useEffect, useState } from 'react';

export const ChalkSignatureRail: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activePhase, setActivePhase] = useState<'CHALK LINE' | 'PATTERN' | 'SILHOUETTE' | 'SEAM' | 'GARMENT'>('CHALK LINE');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
        setScrollProgress(progress);

        if (progress < 0.2) {
          setActivePhase('CHALK LINE');
        } else if (progress < 0.45) {
          setActivePhase('PATTERN');
        } else if (progress < 0.7) {
          setActivePhase('SILHOUETTE');
        } else if (progress < 0.88) {
          setActivePhase('SEAM');
        } else {
          setActivePhase('GARMENT');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phases = [
    { name: 'CHALK LINE', anchor: '#the-house', threshold: 0.1 },
    { name: 'PATTERN', anchor: '#the-cut', threshold: 0.35 },
    { name: 'SILHOUETTE', anchor: '#the-measure', threshold: 0.6 },
    { name: 'SEAM', anchor: '#the-hand', threshold: 0.8 },
    { name: 'GARMENT', anchor: '#the-silhouette', threshold: 0.95 },
  ];

  return (
    <div
      className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center select-none pointer-events-auto"
      aria-label="The Art of The Cut — Scroll Progression"
    >
      {/* Atelier chalk index annotation */}
      <div className="mb-4 text-[9px] uppercase tracking-[0.28em] font-mono text-[#C5A880]/70 text-right w-36">
        <span className="block text-[#E8E4DA]/90 font-medium">THE CUT</span>
        <span className="text-[#8E8A80] text-[8px]">{activePhase}</span>
      </div>

      {/* Vertical chalk rail */}
      <div className="relative w-8 h-64 flex justify-center">
        {/* Background faint guideline */}
        <div className="absolute top-0 bottom-0 w-px bg-white/10" />

        {/* Chalk line drawn with dashes and slight texture */}
        <svg
          className="absolute top-0 left-0 w-full h-full overflow-visible"
          viewBox="0 0 32 256"
          preserveAspectRatio="none"
        >
          {/* Active chalk trail */}
          <line
            x1="16"
            y1="0"
            x2="16"
            y2={Math.max(scrollProgress * 256, 4)}
            stroke="#F4F2EC"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            strokeLinecap="round"
            className="opacity-80"
          />

          {/* Morphing chalk glyph at current depth */}
          <g transform={`translate(16, ${scrollProgress * 256})`}>
            {activePhase === 'CHALK LINE' && (
              <line x1="-8" y1="0" x2="8" y2="0" stroke="#F4F2EC" strokeWidth="1.5" strokeDasharray="2 1" />
            )}
            {activePhase === 'PATTERN' && (
              <path d="M-8,-4 L8,4 M-8,4 L8,-4" stroke="#C5A880" strokeWidth="1" />
            )}
            {activePhase === 'SILHOUETTE' && (
              <path d="M-6,-6 Q0,0 -6,6 M6,-6 Q0,0 6,6" stroke="#F4F2EC" strokeWidth="1.2" fill="none" />
            )}
            {activePhase === 'SEAM' && (
              <path d="M-7,-5 L7,-5 M-4,0 L4,0 M-7,5 L7,5" stroke="#F4F2EC" strokeWidth="1" strokeDasharray="2 2" />
            )}
            {activePhase === 'GARMENT' && (
              <polygon points="0,-7 6,4 -6,4" stroke="#C5A880" strokeWidth="1.2" fill="none" />
            )}
          </g>
        </svg>

        {/* Phase milestone markers */}
        <div className="absolute inset-y-0 flex flex-col justify-between py-1 pointer-events-auto">
          {phases.map((p) => {
            const isPassed = activePhase === p.name;
            return (
              <a
                key={p.name}
                href={p.anchor}
                title={`Jump to ${p.name}`}
                className="group relative flex items-center justify-center -mr-1"
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isPassed
                      ? 'bg-[#C5A880] ring-4 ring-[#C5A880]/20 scale-125'
                      : 'bg-white/20 group-hover:bg-white/50'
                  }`}
                />
                <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[8px] font-mono tracking-widest text-[#E8E4DA] bg-[#14161B] px-1.5 py-0.5 whitespace-nowrap border border-white/10 pointer-events-none">
                  {p.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Progress measurement in millimeters */}
      <div className="mt-4 text-[9px] font-mono tracking-widest text-[#7C786E] tabular-nums">
        {(scrollProgress * 100).toFixed(0)}% <span className="text-[7px]">CUT</span>
      </div>
    </div>
  );
};
