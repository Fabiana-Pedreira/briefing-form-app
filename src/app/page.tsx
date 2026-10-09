'use client';

import React, { useState, useEffect } from 'react';
import {
  initialBriefingEsteticaData,
  BriefingEsteticaData,
  initialBriefingGeralData,
  BriefingGeralData,
} from '@/types/briefing';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StepIndicator } from '@/components/StepIndicator';
import { BriefingPreviewModal } from '@/components/BriefingPreviewModal';
import { AgencyAdminModal } from '@/components/AgencyAdminModal';

// Components for Estética (09 Sessions + 10 Review)
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

// Components for Briefing Geral (11 Sessions + 12 Review)
import { StepGeral01History } from '@/components/stepsGeral/StepGeral01History';
import { StepGeral02Identity } from '@/components/stepsGeral/StepGeral02Identity';
import { StepGeral03Products } from '@/components/stepsGeral/StepGeral03Products';
import { StepGeral04Audience } from '@/components/stepsGeral/StepGeral04Audience';
import { StepGeral05Goals } from '@/components/stepsGeral/StepGeral05Goals';
import { StepGeral06Visual } from '@/components/stepsGeral/StepGeral06Visual';
import { StepGeral07Digital } from '@/components/stepsGeral/StepGeral07Digital';
import { StepGeral08Sales } from '@/components/stepsGeral/StepGeral08Sales';
import { StepGeral09Competitors } from '@/components/stepsGeral/StepGeral09Competitors';
import { StepGeral10Structure } from '@/components/stepsGeral/StepGeral10Structure';
import { StepGeral11Alignment } from '@/components/stepsGeral/StepGeral11Alignment';
import { StepGeral12ReviewSubmit } from '@/components/stepsGeral/StepGeral12ReviewSubmit';

import { Film, HeartPulse, Building2, Sparkles, Lock } from 'lucide-react';

export default function Home() {
  const [briefingType, setBriefingType] = useState<'estetica' | 'geral'>('geral');
  const [currentStep, setCurrentStep] = useState(1);
  const [darkMode, setDarkMode] = useState(true);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isAgencyAdminOpen, setIsAgencyAdminOpen] = useState(false);

  // States for form data
  const [esteticaData, setEsteticaData] = useState<BriefingEsteticaData>(initialBriefingEsteticaData);
  const [geralData, setGeralData] = useState<BriefingGeralData>(initialBriefingGeralData);

  // Read saved briefing type from localStorage if available
  useEffect(() => {
    const savedType = localStorage.getItem('frame_midia_briefing_type');
    if (savedType === 'estetica' || savedType === 'geral') {
      setBriefingType(savedType);
    }
  }, []);

  const handleSelectBriefingType = (type: 'estetica' | 'geral') => {
    setBriefingType(type);
    setCurrentStep(1);
    localStorage.setItem('frame_midia_briefing_type', type);
  };

  const updateEsteticaData = (fields: Partial<BriefingEsteticaData>) => {
    setEsteticaData((prev) => ({ ...prev, ...fields }));
  };

  const updateGeralData = (fields: Partial<BriefingGeralData>) => {
    setGeralData((prev) => ({ ...prev, ...fields }));
  };

  const maxSteps = briefingType === 'estetica' ? 10 : 12;

  const handleNext = () => {
    if (currentStep < maxSteps) setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleReset = () => {
    if (briefingType === 'estetica') setEsteticaData(initialBriefingEsteticaData);
    else setGeralData(initialBriefingGeralData);
    setCurrentStep(1);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-[#000000] text-slate-100 flex flex-col transition-colors duration-300">
        {/* Top Sticky Header */}
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onOpenPreview={() => setIsPreviewOpen(true)}
          onOpenAgencyAdmin={() => setIsAgencyAdminOpen(true)}
          currentBriefingType={briefingType}
        />

        {/* Hero Section Banner */}
        <section className="relative overflow-hidden pt-8 pb-4 px-4 text-center">
          <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-25 pointer-events-none">
            <div className="w-[500px] h-[500px] bg-red-600/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="w-[350px] h-[350px] bg-lime-500/15 rounded-full blur-3xl" />
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-red-500/10 text-red-500 border border-red-500/30 shadow-sm">
              {briefingType === 'estetica' ? (
                <HeartPulse className="w-3.5 h-3.5 text-lime-400" />
              ) : (
                <Building2 className="w-3.5 h-3.5 text-lime-400" />
              )}
              <span>
                Frame Mídia • {briefingType === 'estetica' ? 'Diagnóstico de Estética & Saúde' : 'Briefing Geral de Negócios'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Menos ruído, <br className="hidden sm:block" />
              <span className="text-red-500 underline decoration-red-500/40 underline-offset-8">
                mais posicionamento.
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto font-medium leading-relaxed">
              {briefingType === 'estetica'
                ? 'Diagnóstico exclusivo para Clínicas de Estética & Saúde com 09 sessões estratégicas.'
                : 'Diagnóstico corporativo completo com 11 sessões estruturadas para acelerar o seu negócio.'}
            </p>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-4">
          <div className="glass-panel p-5 sm:p-8 rounded-3xl shadow-2xl shadow-red-500/5 transition-all bg-[#0d0d0d] border-zinc-800">
            {/* Step Indicator */}
            <StepIndicator
              currentStep={currentStep}
              totalSteps={maxSteps}
              onStepClick={(step) => setCurrentStep(step)}
            />

            {/* Dynamic Step View for BRIEFING ESTÉTICA */}
            {briefingType === 'estetica' && (
              <div className="mt-4">
                {currentStep === 1 && (
                  <Step01AboutBusiness data={esteticaData} updateData={updateEsteticaData} onNext={handleNext} />
                )}
                {currentStep === 2 && (
                  <Step02BusinessGoals data={esteticaData} updateData={updateEsteticaData} onNext={handleNext} onPrev={handlePrev} />
                )}
                {currentStep === 3 && (
                  <Step03AudienceClients data={esteticaData} updateData={updateEsteticaData} onNext={handleNext} onPrev={handlePrev} />
                )}
                {currentStep === 4 && (
                  <Step04BrandIdentity data={esteticaData} updateData={updateEsteticaData} onNext={handleNext} onPrev={handlePrev} />
                )}
                {currentStep === 5 && (
                  <Step05DigitalPresence data={esteticaData} updateData={updateEsteticaData} onNext={handleNext} onPrev={handlePrev} />
                )}
                {currentStep === 6 && (
                  <Step06CommercialSales data={esteticaData} updateData={updateEsteticaData} onNext={handleNext} onPrev={handlePrev} />
                )}
                {currentStep === 7 && (
                  <Step07CompetitorsMarket data={esteticaData} updateData={updateEsteticaData} onNext={handleNext} onPrev={handlePrev} />
                )}
                {currentStep === 8 && (
                  <Step08InvestmentResources data={esteticaData} updateData={updateEsteticaData} onNext={handleNext} onPrev={handlePrev} />
                )}
                {currentStep === 9 && (
                  <Step09AestheticStrategy data={esteticaData} updateData={updateEsteticaData} onNext={handleNext} onPrev={handlePrev} />
                )}
                {currentStep === 10 && (
                  <Step10ReviewSubmit data={esteticaData} onPrev={handlePrev} onReset={handleReset} />
                )}
              </div>
            )}

            {/* Dynamic Step View for BRIEFING GERAL */}
            {briefingType === 'geral' && (
              <div className="mt-4">
                {currentStep === 1 && (
                  <StepGeral01History data={geralData} updateData={updateGeralData} onNext={handleNext} />
                )}
                {currentStep === 2 && (
                  <StepGeral02Identity data={geralData} updateData={updateGeralData} onNext={handleNext} onPrev={handlePrev} />
                )}
                {currentStep === 3 && (
                  <StepGeral03Products data={geralData} updateData={updateGeralData} onNext={handleNext} onPrev={handlePrev} />
                )}
                {currentStep === 4 && (
                  <StepGeral04Audience data={geralData} updateData={updateGeralData} onNext={handleNext} onPrev={handlePrev} />
                )}
                {currentStep === 5 && (
                  <StepGeral05Goals data={geralData} updateData={updateGeralData} onNext={handleNext} onPrev={handlePrev} />
                )}
                {currentStep === 6 && (
                  <StepGeral06Visual data={geralData} updateData={updateGeralData} onNext={handleNext} onPrev={handlePrev} />
                )}
                {currentStep === 7 && (
                  <StepGeral07Digital data={geralData} updateData={updateGeralData} onNext={handleNext} onPrev={handlePrev} />
                )}
                {currentStep === 8 && (
                  <StepGeral08Sales data={geralData} updateData={updateGeralData} onNext={handleNext} onPrev={handlePrev} />
                )}
                {currentStep === 9 && (
                  <StepGeral09Competitors data={geralData} updateData={updateGeralData} onNext={handleNext} onPrev={handlePrev} />
                )}
                {currentStep === 10 && (
                  <StepGeral10Structure data={geralData} updateData={updateGeralData} onNext={handleNext} onPrev={handlePrev} />
                )}
                {currentStep === 11 && (
                  <StepGeral11Alignment data={geralData} updateData={updateGeralData} onNext={handleNext} onPrev={handlePrev} />
                )}
                {currentStep === 12 && (
                  <StepGeral12ReviewSubmit data={geralData} onPrev={handlePrev} onReset={handleReset} />
                )}
              </div>
            )}
          </div>
        </main>

        {/* Realtime Briefing Preview Modal */}
        <BriefingPreviewModal
          isOpen={isPreviewOpen}
          onClose={() => setIsPreviewOpen(false)}
          data={briefingType === 'estetica' ? (esteticaData as any) : (geralData as any)}
        />

        {/* Agency Restricted Password Modal (Senha: 9396) */}
        <AgencyAdminModal
          isOpen={isAgencyAdminOpen}
          onClose={() => setIsAgencyAdminOpen(false)}
          currentBriefingType={briefingType}
          onSelectBriefingType={handleSelectBriefingType}
        />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
