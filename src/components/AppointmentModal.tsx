import React, { useState } from 'react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [salon, setSalon] = useState('london');
  const [commissionType, setCommissionType] = useState('lounge-suit');
  const [clothChoice, setClothChoice] = useState('worsted');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-[#111319] border border-white/10 p-6 sm:p-10 shadow-2xl max-h-[92vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#8E8A80] hover:text-[#FAF8F5] transition-colors p-2 text-xl focus:outline-none"
          aria-label="Close consultation modal"
        >
          ✕
        </button>

        {submitted ? (
          /* Confirmation Screen */
          <div className="py-8 text-center space-y-6 animate-fadeIn">
            <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase block">
              COMMISSION DOSSIER CONFIRMED
            </span>
            <h3 className="text-3xl font-serif text-[#FAF8F5]">
              The House Awaits You.
            </h3>
            <p className="text-sm font-sans text-[#A8A49C] max-w-md mx-auto leading-relaxed">
              Your inquiry has been inscribed in the atelier records under reference{' '}
              <span className="font-mono text-[#FAF8F5]">SAV-2026-N°09</span>. 
              The Master Cutter’s salon secretary will contact you privately within 24 hours to coordinate your first measurements.
            </p>

            <div className="bg-[#0A0B0E] border border-white/5 p-4 max-w-sm mx-auto text-left space-y-1 text-xs font-mono text-[#8E8A80]">
              <div>PATRON: <span className="text-[#FAF8F5]">{name}</span></div>
              <div>LOCATION: <span className="text-[#C5A880]">{salon.toUpperCase()} ATELIER</span></div>
              <div>COMMISSION: <span className="text-[#FAF8F5]">{commissionType.toUpperCase()}</span></div>
            </div>

            <button
              onClick={handleReset}
              className="mt-6 px-6 py-2.5 text-xs uppercase tracking-widest text-[#0C0D10] bg-[#FAF8F5] hover:bg-[#C5A880] font-sans font-medium transition-colors cursor-pointer"
            >
              Return to Atelier
            </button>
          </div>
        ) : (
          /* Consultation Form */
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase block mb-1">
                PRIVATE FITTING CONSULTATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#FAF8F5]">
                Inquire for Bespoke Commission
              </h3>
              <p className="text-xs font-sans text-[#8E8A80] mt-1 font-light">
                Initial consultations are conducted in our London or Paris salons, or by private arrangement during traveling trunk shows.
              </p>
            </div>

            {/* Salon Location Tabs */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-[#7C786E] block">
                SALON LOCATION
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'london', label: 'No. 9 Savile Row, London' },
                  { id: 'paris', label: 'Faubourg St-Honoré, Paris' },
                  { id: 'trunk-show', label: 'Traveling Trunk Show' },
                ].map((s) => (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => setSalon(s.id)}
                    className={`p-3 text-left border transition-all text-xs font-mono cursor-pointer ${
                      salon === s.id
                        ? 'bg-[#181B24] border-[#C5A880] text-[#FAF8F5]'
                        : 'bg-[#0E1015] border-white/5 text-[#8E8A80] hover:border-white/20'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Commission Type */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-[#7C786E] block">
                GARMENT COMMISSION
              </label>
              <select
                value={commissionType}
                onChange={(e) => setCommissionType(e.target.value)}
                className="w-full bg-[#0E1015] border border-white/10 p-3 text-xs text-[#FAF8F5] font-sans focus:outline-none focus:border-[#C5A880]"
              >
                <option value="lounge-suit">Two-Piece Bespoke Lounge Suit</option>
                <option value="evening-tuxedo">Three-Piece Formal Evening Smoking / Tuxedo</option>
                <option value="overcoat">Sculpted Cashmere & Flannel Overcoat</option>
                <option value="trouser-suite">Bespoke Trouser Suite & Waistcoat</option>
                <option value="womens-tailoring">Women’s Sculpted Architectural Tailoring</option>
              </select>
            </div>

            {/* Cloth Preference */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-[#7C786E] block">
                INITIAL CLOTH PREFERENCE
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'worsted', label: 'Super 160s Worsted' },
                  { id: 'flannel', label: 'Somerset Wool Flannel' },
                  { id: 'cashmere', label: 'Vicuña & Cashmere' },
                  { id: 'linen', label: 'Irish Heavy Linen' },
                  { id: 'barathea', label: 'Midnight Barathea' },
                  { id: 'decide-later', label: 'Cutter Consultation' },
                ].map((c) => (
                  <button
                    type="button"
                    key={c.id}
                    onClick={() => setClothChoice(c.id)}
                    className={`p-2.5 text-center border text-[11px] font-mono transition-all cursor-pointer ${
                      clothChoice === c.id
                        ? 'bg-[#181B24] border-[#C5A880] text-[#FAF8F5]'
                        : 'bg-[#0E1015] border-white/5 text-[#8E8A80] hover:border-white/20'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase tracking-widest text-[#7C786E] block">
                  FULL NAME
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Julian Vance"
                  className="w-full bg-[#0E1015] border border-white/10 p-3 text-xs text-[#FAF8F5] font-sans focus:outline-none focus:border-[#C5A880]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase tracking-widest text-[#7C786E] block">
                  PRIVATE EMAIL OR TELEPHONE
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@residence.com"
                  className="w-full bg-[#0E1015] border border-white/10 p-3 text-xs text-[#FAF8F5] font-sans focus:outline-none focus:border-[#C5A880]"
                />
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-1">
              <label className="text-[10px] font-mono uppercase tracking-widest text-[#7C786E] block">
                SPECIAL POSTURE OR OCCASION NOTES (OPTIONAL)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="Specific posture considerations, travel dates, or architectural preferences..."
                className="w-full bg-[#0E1015] border border-white/10 p-3 text-xs text-[#FAF8F5] font-sans focus:outline-none focus:border-[#C5A880]"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#7C786E]">
                STRICT DISCRETION OBSERVED
              </span>
              <button
                type="submit"
                className="px-6 py-3 text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#0A0B0E] bg-[#FAF8F5] hover:bg-[#C5A880] transition-colors cursor-pointer"
              >
                Submit Dossier
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
