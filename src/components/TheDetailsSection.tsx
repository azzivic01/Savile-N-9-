import React, { useState } from 'react';

interface MuseumDetail {
  id: string;
  code: string;
  title: string;
  sub: string;
  archiveNumber: string;
  description: string;
  material: string;
}

export const TheDetailsSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('cuffs');

  const details: MuseumDetail[] = [
    {
      id: 'cuffs',
      code: 'DETAIL / 01',
      title: "Working Surgeon's Cuffs",
      sub: 'Four kissing buffalo horn buttons',
      archiveNumber: 'CAT. N° 884-A',
      description: 'Historically cut so military surgeons could roll their sleeves without removing their uniform coats. Hand-cut and hand-bound keyhole buttonholes.',
      material: 'Real unlacquered horn & Au Chinois twisted silk'
    },
    {
      id: 'bar-tack',
      code: 'DETAIL / 02',
      title: 'Hand-Sewn Milanese Bar Tack',
      sub: 'Reinforcement at high-stress gorge seams',
      archiveNumber: 'CAT. N° 884-B',
      description: 'A tiny embroidered bar of silk thread anchoring the pocket edge. Known in Naples as la travetta, preventing torn seams across decades of daily wear.',
      material: 'High-density silk gimp'
    },
    {
      id: 'lining',
      code: 'DETAIL / 03',
      title: 'Bemberg Cupro Silk Lining',
      sub: 'Cotton linter spun with natural breathability',
      archiveNumber: 'CAT. N° 884-C',
      description: 'Unlike synthetic polyester which traps sweat, Bemberg cupro absorbs moisture and slips effortlessly over dress shirts without static clinging.',
      material: 'Asahi Kasei 100% cupro fiber'
    },
    {
      id: 'collar',
      code: 'DETAIL / 04',
      title: 'Melton Undercollar Leaf',
      sub: 'Hand-felled to the woolen gorge',
      archiveNumber: 'CAT. N° 884-D',
      description: 'Densely milled wool felt hand-shaped over a tailor’s ham. It hugs the back of the neck like a second collar, never pulling away when you lean forward.',
      material: 'West Yorkshire woollen melton'
    },
    {
      id: 'monogram',
      code: 'DETAIL / 05',
      title: 'The Hidden Atelier Monogram',
      sub: 'Embroidered discreetly inside the breast pocket',
      archiveNumber: 'CAT. N° 884-E',
      description: 'No exterior branding. Your initials, date of commission, and individual cloth code are hand-embroidered inside the right interior breast welt pocket.',
      material: 'Tonal silk floss thread'
    },
    {
      id: 'waistband',
      code: 'DETAIL / 06',
      title: 'Split Curtain Waistband',
      sub: 'Trouser ease with after-dinner split',
      archiveNumber: 'CAT. N° 884-F',
      description: 'The back trouser waistband is split with an elasticized or cloth V-notch, accommodating seated expansion without requiring a tight leather belt.',
      material: 'Pleated cotton waistband curtain'
    }
  ];

  return (
    <section id="the-details" className="relative py-28 lg:py-36 bg-[#0E0F14] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Chapter Header */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-mono text-[#C5A880] mb-4">
          <span>CHAPTER 08</span>
          <span className="text-white/20" aria-hidden="true">/</span>
          <span>THE DETAILS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-white/[0.08]">
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#FAF8F5] tracking-tight leading-[1.05]">
              The Microcosm of <br />
              <span className="italic font-normal text-[#E8E4DA]">Invisible Finishes.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm font-sans text-[#A8A49C] leading-relaxed font-light">
              True luxury lives where no onlooker ever sees: in the interior pocket welts, 
              the hand-felled collar underleaf, and the silky roll of a thread shank.
            </p>
          </div>
        </div>

        {/* Museum Grid with Clean Framing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((item) => {
            const isSelected = activeItem === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`p-7 bg-[#12141A] border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[260px] ${
                  isSelected
                    ? 'border-[#C5A880]/80 bg-[#161822] shadow-xl'
                    : 'border-white/[0.06] hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#7C786E] mb-3">
                    <span className="text-[#C5A880]">{item.code}</span>
                    <span>{item.archiveNumber}</span>
                  </div>
                  <h3 className="text-xl font-serif text-[#FAF8F5] mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-serif italic text-[#C5A880] mb-3">
                    {item.sub}
                  </div>
                  <p className="text-xs font-sans text-[#A8A49C] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#7C786E]">
                  <span>MATERIAL SPEC:</span>
                  <span className="text-[#E8E4DA] truncate max-w-[180px]">{item.material}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
