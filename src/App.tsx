import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ChalkSignatureRail } from './components/ChalkSignatureRail';
import { HeroSection } from './components/HeroSection';
import { TheHouseSection } from './components/TheHouseSection';
import { TheClothSection } from './components/TheClothSection';
import { TheMeasureSection } from './components/TheMeasureSection';
import { TheCutSection } from './components/TheCutSection';
import { TheHandSection } from './components/TheHandSection';
import { TheFittingSection } from './components/TheFittingSection';
import { TheSilhouetteSection } from './components/TheSilhouetteSection';
import { TheDetailsSection } from './components/TheDetailsSection';
import { TheClientSection } from './components/TheClientSection';
import { AfterHoursSection } from './components/AfterHoursSection';
import { AppointmentModal } from './components/AppointmentModal';
import { Footer } from './components/Footer';

export default function App() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0C0D10] text-[#E8E6DF] relative font-sans selection:bg-[#C5A880]/30 selection:text-[#FAF8F5]">
      {/* 3-Zone Navigation Header */}
      <Navbar onOpenAppointment={() => setAppointmentModalOpen(true)} />

      {/* Signature Interaction: The Cut Chalk Rail */}
      <ChalkSignatureRail />

      {/* Narrative Chapters Progression */}
      <main>
        {/* HERO: The Cut */}
        <HeroSection onOpenAppointment={() => setAppointmentModalOpen(true)} />

        {/* CHAPTER 01: The House */}
        <TheHouseSection />

        {/* CHAPTER 02: The Cloth */}
        <TheClothSection />

        {/* CHAPTER 03: The Measure */}
        <TheMeasureSection />

        {/* CHAPTER 04: The Cut */}
        <TheCutSection />

        {/* CHAPTER 05: The Hand */}
        <TheHandSection />

        {/* CHAPTER 06: The Fitting */}
        <TheFittingSection />

        {/* CHAPTER 07: The Silhouette */}
        <TheSilhouetteSection />

        {/* CHAPTER 08: The Details */}
        <TheDetailsSection />

        {/* CHAPTER 09: The Client */}
        <TheClientSection />

        {/* CHAPTER 10: After Hours */}
        <AfterHoursSection onOpenAppointment={() => setAppointmentModalOpen(true)} />
      </main>

      {/* Quiet Atelier Footer */}
      <Footer />

      {/* Private Fitting Consultation Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
      />
    </div>
  );
}
