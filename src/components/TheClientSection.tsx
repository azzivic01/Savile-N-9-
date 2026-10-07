import React, { useState } from 'react';
import { CLIENT_STORIES } from '../data/atelierData';
import { ClientStory } from '../types/atelier';

export const TheClientSection: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<ClientStory>(CLIENT_STORIES[0]);

  return (
    <section id="the-client" className="relative py-28 lg:py-36 bg-[#0B0C0E] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Chapter Header */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-mono text-[#C5A880] mb-4">
          <span>CHAPTER 09</span>
          <span className="text-white/20" aria-hidden="true">/</span>
          <span>THE CLIENT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-white/[0.08]">
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#FAF8F5] tracking-tight leading-[1.05]">
              The Garment Does Not Begin <br />
              <span className="italic font-normal text-[#E8E4DA]">With the Cloth. It Begins With the Person.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm font-sans text-[#A8A49C] leading-relaxed font-light">
              We do not dress mannequins. We dress people who build cities, conduct orchestras, 
              negotiate treaties, and curate culture. The garment must become an invisible ally.
            </p>
          </div>
        </div>

        {/* 3 Interactive Client Commissions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Client List */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#7C786E] block mb-2">
              COMMISSION ARCHIVES
            </span>
            {CLIENT_STORIES.map((client) => {
              const isSelected = selectedStory.id === client.id;
              return (
                <button
                  key={client.id}
                  onClick={() => setSelectedStory(client)}
                  className={`w-full text-left p-5 transition-all duration-200 border cursor-pointer ${
                    isSelected
                      ? 'bg-[#171922] border-[#C5A880]/70 translate-x-1'
                      : 'bg-[#101217] border-white/[0.05] hover:border-white/20 hover:bg-[#12141A]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#C5A880] mb-1">
                    <span>{client.archetype}</span>
                    <span className="text-[#7C786E]">{client.location}</span>
                  </div>
                  <div className="text-base font-serif text-[#FAF8F5]">
                    {client.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Patron Dossier */}
          <div className="lg:col-span-8 bg-[#13151D] border border-white/[0.08] p-8 sm:p-12 flex flex-col justify-between relative">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-4">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase">
                    PATRON // {selectedStory.archetype}
                  </span>
                  <h3 className="text-3xl font-serif text-[#FAF8F5]">
                    {selectedStory.name}
                  </h3>
                </div>
                <div className="text-xs font-mono text-[#8E8A80]">
                  RESIDENCE: <span className="text-[#FAF8F5]">{selectedStory.location}</span>
                </div>
              </div>

              {/* Commission Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-[#0C0D11] p-3.5 border border-white/5">
                  <span className="text-[9px] uppercase tracking-wider text-[#7C786E] block mb-1">COMMISSIONED PIECE</span>
                  <span className="text-[#E8E4DA]">{selectedStory.piece}</span>
                </div>
                <div className="bg-[#0C0D11] p-3.5 border border-white/5">
                  <span className="text-[9px] uppercase tracking-wider text-[#7C786E] block mb-1">SELECTED CLOTH</span>
                  <span className="text-[#C5A880]">{selectedStory.fabric}</span>
                </div>
              </div>

              {/* Real Client Experience Quote */}
              <div className="pt-4">
                <p className="text-lg sm:text-xl font-serif italic text-[#FAF8F5] leading-relaxed">
                  "{selectedStory.quote}"
                </p>
              </div>

              {/* Atelier Observation */}
              <div className="pt-4 border-t border-white/[0.06]">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#7C786E] block mb-1">
                  CUTTER’S ARCHIVAL OBSERVATION
                </span>
                <p className="text-xs font-sans text-[#A8A49C] leading-relaxed font-light">
                  {selectedStory.observation}
                </p>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#7C786E] font-mono">
              <span>PATTERN REGISTER: SAV-9-ARCHIVE</span>
              <span className="text-[#C5A880]">LIFETIME MAINTENANCE GUARANTEED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
