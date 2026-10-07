import React, { useState } from 'react';

interface AfterHoursSectionProps {
  onOpenAppointment: () => void;
}

export const AfterHoursSection: React.FC<AfterHoursSectionProps> = ({ onOpenAppointment }) => {
  const [photoLoaded, setPhotoLoaded] = useState(false);
  const afterHoursImagePath = '/src/assets/images/savile_after_hours_1791337549406.jpg';

  return (
    <section className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden bg-[#0A0B0D] py-24 border-t border-white/[0.08]">
      {/* Background After Hours Atelier Photography with Soft Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={afterHoursImagePath}
          alt="Savile N° 9 atelier after hours at night with cutting table under solitary brass lamp and coat on tailor dummy"
          referrerPolicy="no-referrer"
          onLoad={() => setPhotoLoaded(true)}
          className={`w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08] transition-opacity duration-1000 ${
            photoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {!photoLoaded && (
          <div className="absolute inset-0 bg-[#0C0D11] flex items-center justify-center">
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#7C786E]">
              After Hours · Savile N° 9
            </span>
          </div>
        )}

        {/* Cinematic Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-black/40 to-[#0A0B0D] pointer-events-none" />
        <div className="absolute inset-0 bg-[#0A0B0D]/40 pointer-events-none" />
      </div>

      {/* Foreground Poetic Declaration */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
        <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#C5A880]">
          AFTER HOURS // NOCTURNE
        </div>

        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-light text-[#FAF8F5] tracking-tight leading-[0.95]">
          The House Remains.
        </h2>

        <p className="text-base sm:text-lg font-serif italic text-[#C5A880] tracking-widest uppercase">
          Until the next cut.
        </p>

        <p className="text-sm font-sans text-[#A8A49C] max-w-md mx-auto leading-relaxed font-light">
          The shears rest. The chalk dust settles upon the English oak. 
          The pattern drafted today will endure for forty years of wear and alteration.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenAppointment}
            className="px-8 py-3.5 text-xs uppercase tracking-[0.22em] font-sans font-medium text-[#0A0B0D] bg-[#FAF8F5] hover:bg-[#C5A880] transition-colors cursor-pointer shadow-xl active:translate-y-px"
          >
            Request Private Fitting
          </button>
        </div>
      </div>
    </section>
  );
};
