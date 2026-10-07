import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenAppointment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The House', href: '#the-house' },
    { label: 'The Cloth', href: '#the-cloth' },
    { label: 'The Measure', href: '#the-measure' },
    { label: 'The Cut', href: '#the-cut' },
    { label: 'The Hand', href: '#the-hand' },
    { label: 'The Fitting', href: '#the-fitting' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0c0d10]/95 backdrop-blur-md border-b border-white/[0.07] py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#0c0d10]/90 via-[#0c0d10]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-serif tracking-widest text-[#F5F2EA] hover:text-[#C5A880] transition-colors whitespace-nowrap uppercase font-medium"
        >
          SAVILE N° 9
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs tracking-[0.2em] uppercase font-sans text-[#A8A49C]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#F5F2EA] transition-colors relative py-1 hover:border-b hover:border-[#C5A880]/60 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenAppointment}
            className="px-4 sm:px-5 py-2 text-xs uppercase tracking-[0.18em] font-sans text-[#FAF8F5] bg-[#1A1D24] hover:bg-[#252832] border border-[#C5A880]/40 hover:border-[#C5A880] rounded-none transition-all duration-200 whitespace-nowrap cursor-pointer shadow-sm active:translate-y-px"
          >
            Private Appointment
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#A8A49C] hover:text-[#F5F2EA] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1014] border-b border-white/10 px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col gap-4 text-xs uppercase tracking-[0.2em] font-sans text-[#A8A49C]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#F5F2EA] transition-colors border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="mt-2 w-full py-3 text-xs uppercase tracking-[0.2em] text-[#0C0D10] bg-[#C5A880] font-medium"
            >
              Inquire for Fitting
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
