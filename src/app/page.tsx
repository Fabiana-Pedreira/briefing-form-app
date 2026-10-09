'use client';

import React, { useState } from 'react';
import { initialBriefingEsteticaData, BriefingEsteticaData } from '@/types/briefing';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StepIndicator } from '@/components/StepIndicator';
import { BriefingPreviewModal } from '@/components/BriefingPreviewModal';
import { Step01AboutBusiness } from '@/components/steps/Step01AboutBusiness';
import { Step02BusinessGoals } from '@/components/steps/Step02BusinessGoals';
import { Step03AudienceClients } from '@/components/steps/Step03AudienceClients';
import { Step04BrandIdentity } from '@/components/steps/Step04BrandIdentity';
import { Step05DigitalPresence } from '@/components/steps/Step05DigitalPresence';
import { Step06CommercialSales } from '@/components/steps/Step06CommercialSales';
import { Step07CompetitorsMarket } from '@/components/steps/Step07CompetitorsMarket';
import { Step08InvestmentResources } from '@/components/steps/Step08InvestmentResources';
import { Step09AestheticStrategy } from '@/components/steps/Step09AestheticStrategy';
import { Step10ReviewSubmit } from '@/components/steps/Step10ReviewSubmit';
import { Film, HeartPulse, Sparkles } from 'lucide-react';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [briefingData, setBriefingData] = useState<BriefingEsteticaData>(initialBriefingEsteticaData);
  const [darkMode, setDarkMode] = useState(true);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const updateBriefingData = (fields: Partial<BriefingEsteticaData>) => {
    setBriefingData((prev) => ({ ...prev, ...fields }));
  };

  const handleNext = () => {
    if (currentStep < 10) setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setBriefingData(initialBriefingEsteticaData);
    setCurrentStep(1);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
        {/* Top Sticky Header */}
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onOpenPreview={() => setIsPreviewOpen(true)}
        />

        {/* Hero Section Banner - Frame Mídia Branding (Preto, Vermelho & Verde) */}
        <section className="relative overflow-hidden pt-8 pb-4 px-4 text-center">
          <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-25 pointer-events-none">
            <div className="w-[500px] h-[500px] bg-red-600/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="w-[350px] h-[350px] bg-lime-500/15 rounded-full blur-3xl" />
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-red-500/10 text-red-500 border border-red-500/30 shadow-sm">
              <HeartPulse className="w-3.5 h-3.5 text-lime-400" />
              <span>Frame Mídia • Diagnóstico Estratégico de Estética & Saúde</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Menos ruído, <br className="hidden sm:block" />
              <span className="text-red-500 underline decoration-red-500/40 underline-offset-8">
                mais posicionamento.
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto font-medium leading-relaxed">
              Formulário completo de <strong className="text-white">09 sessões estratégicas</strong> para identificar gargalos comerciais, valor de marca e estratégias de alta margem de lucro.
            </p>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-4">
          <div className="glass-panel p-5 sm:p-8 rounded-3xl shadow-2xl shadow-red-500/5 transition-all bg-white dark:bg-[#0d0d0d] border-zinc-200 dark:border-zinc-800">
            {/* Step Indicator */}
            <StepIndicator
              currentStep={currentStep}
              totalSteps={10}
              onStepClick={(step) => setCurrentStep(step)}
            />

            {/* Dynamic Step View */}
            <div className="mt-4">
              {currentStep === 1 && (
                <Step01AboutBusiness
                  data={briefingData}
                  updateData={updateBriefingData}
                  onNext={handleNext}
                />
              )}

              {currentStep === 2 && (
                <Step02BusinessGoals
                  data={briefingData}
                  updateData={updateBriefingData}
                  onNext={handleNext}
                  onPrev={handlePrev}
                />
              )}

              {currentStep === 3 && (
                <Step03AudienceClients
                  data={briefingData}
                  updateData={updateBriefingData}
                  onNext={handleNext}
                  onPrev={handlePrev}
                />
              )}

              {currentStep === 4 && (
                <Step04BrandIdentity
                  data={briefingData}
                  updateData={updateBriefingData}
                  onNext={handleNext}
                  onPrev={handlePrev}
                />
              )}

              {currentStep === 5 && (
                <Step05DigitalPresence
                  data={briefingData}
                  updateData={updateBriefingData}
                  onNext={handleNext}
                  onPrev={handlePrev}
                />
              )}

              {currentStep === 6 && (
                <Step06CommercialSales
                  data={briefingData}
                  updateData={updateBriefingData}
                  onNext={handleNext}
                  onPrev={handlePrev}
                />
              )}

              {currentStep === 7 && (
                <Step07CompetitorsMarket
                  data={briefingData}
                  updateData={updateBriefingData}
                  onNext={handleNext}
                  onPrev={handlePrev}
                />
              )}

              {currentStep === 8 && (
                <Step08InvestmentResources
                  data={briefingData}
                  updateData={updateBriefingData}
                  onNext={handleNext}
                  onPrev={handlePrev}
                />
              )}

              {currentStep === 9 && (
                <Step09AestheticStrategy
                  data={briefingData}
                  updateData={updateBriefingData}
                  onNext={handleNext}
                  onPrev={handlePrev}
                />
              )}

              {currentStep === 10 && (
                <Step10ReviewSubmit
                  data={briefingData}
                  onPrev={handlePrev}
                  onReset={handleReset}
                />
              )}
            </div>
          </div>
        </main>

        {/* Realtime Briefing Preview Modal */}
        <BriefingPreviewModal
          isOpen={isPreviewOpen}
          onClose={() => setIsPreviewOpen(false)}
          data={briefingData}
        />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
