import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08090B] border-t border-white/[0.06] py-16 text-[#8E8A80]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Col 1: Wordmark & Identity */}
          <div className="space-y-3">
            <span className="text-xl font-serif tracking-widest text-[#FAF8F5] uppercase font-medium block">
              SAVILE N° 9
            </span>
            <p className="text-xs font-serif italic text-[#C5A880]">
              The Art of the Cut
            </p>
            <p className="text-xs font-sans text-[#78756D] leading-relaxed font-light">
              Private luxury bespoke tailoring atelier. Hand-cut garments made for one, measured to the millimeter.
            </p>
          </div>

          {/* Col 2: London Atelier */}
          <div className="space-y-2 text-xs">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A880] block">
              MAYFAIR ATELIER
            </span>
            <p className="font-sans text-[#D4D0C5] leading-relaxed">
              No. 9 Savile Row<br />
              Mayfair, London W1S 3PF<br />
              United Kingdom
            </p>
            <p className="text-[11px] font-mono text-[#6E6A60] pt-1">
              salon@savilenine.com
            </p>
          </div>

          {/* Col 3: Paris Atelier */}
          <div className="space-y-2 text-xs">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A880] block">
              PARIS SALON
            </span>
            <p className="font-sans text-[#D4D0C5] leading-relaxed">
              18 Rue du Faubourg Saint-Honoré<br />
              8ème Arrondissement, 75008 Paris<br />
              France
            </p>
            <p className="text-[11px] font-mono text-[#6E6A60] pt-1">
              paris@savilenine.com
            </p>
          </div>

          {/* Col 4: Operating Hours & Discretion */}
          <div className="space-y-2 text-xs">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A880] block">
              CONSULTATIONS
            </span>
            <p className="font-sans text-[#D4D0C5] leading-relaxed">
              Monday through Friday: 09:30 — 18:00<br />
              Saturday: By private salon arrangement<br />
              Sunday: Atelier closed
            </p>
            <p className="text-[10px] font-mono text-[#C5A880]/80 pt-1">
              STRICTLY BY APPOINTMENT
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#6E6A60] gap-4">
          <div>
            © 1987—2026 SAVILE N° 9 BESPOKE ATELIER. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>TERMS OF COMMISSION</span>
            <span>CLOTH PROVENANCE</span>
            <span>DISCRETION CHARTER</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
