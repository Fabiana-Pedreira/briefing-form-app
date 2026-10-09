'use client';

import React, { useState } from 'react';
import { initialBriefingData, BriefingData } from '@/types/briefing';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StepIndicator } from '@/components/StepIndicator';
import { BriefingPreviewModal } from '@/components/BriefingPreviewModal';
import { StepClientInfo } from '@/components/steps/StepClientInfo';
import { StepProjectGoals } from '@/components/steps/StepProjectGoals';
import { StepVisualIdentity } from '@/components/steps/StepVisualIdentity';
import { StepScopeRequirements } from '@/components/steps/StepScopeRequirements';
import { StepReviewSubmit } from '@/components/steps/StepReviewSubmit';
import { Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [briefingData, setBriefingData] = useState<BriefingData>(initialBriefingData);
  const [darkMode, setDarkMode] = useState(true);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const updateBriefingData = (fields: Partial<BriefingData>) => {
    setBriefingData((prev) => ({ ...prev, ...fields }));
  };

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setBriefingData(initialBriefingData);
    setCurrentStep(1);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
        {/* Top Sticky Header */}
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onOpenPreview={() => setIsPreviewOpen(true)}
        />

        {/* Hero Section Banner */}
        <section className="relative overflow-hidden pt-8 pb-4 px-4 text-center">
          <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30 dark:opacity-20 pointer-events-none">
            <div className="w-[500px] h-[500px] bg-brand-500/30 rounded-full blur-3xl animate-pulse-slow" />
            <div className="w-[400px] h-[400px] bg-accent-500/20 rounded-full blur-3xl" />
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-600 dark:text-brand-300 border border-brand-500/20 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Formulário Inteligente de Briefing para Vercel</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Vamos transformar suas ideias em um{' '}
              <span className="gradient-text">Projeto Extraordinário</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Preencha os detalhes abaixo em menos de 3 minutos para alinharmos objetivos, design e escopo técnico.
            </p>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6">
          <div className="glass-panel p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl shadow-brand-500/5 transition-all">
            {/* Step Indicator */}
            <StepIndicator
              currentStep={currentStep}
              totalSteps={5}
              onStepClick={(step) => setCurrentStep(step)}
            />

            {/* Dynamic Step View */}
            <div className="mt-6">
              {currentStep === 1 && (
                <StepClientInfo
                  data={briefingData}
                  updateData={updateBriefingData}
                  onNext={handleNext}
                />
              )}

              {currentStep === 2 && (
                <StepProjectGoals
                  data={briefingData}
                  updateData={updateBriefingData}
                  onNext={handleNext}
                  onPrev={handlePrev}
                />
              )}

              {currentStep === 3 && (
                <StepVisualIdentity
                  data={briefingData}
                  updateData={updateBriefingData}
                  onNext={handleNext}
                  onPrev={handlePrev}
                />
              )}

              {currentStep === 4 && (
                <StepScopeRequirements
                  data={briefingData}
                  updateData={updateBriefingData}
                  onNext={handleNext}
                  onPrev={handlePrev}
                />
              )}

              {currentStep === 5 && (
                <StepReviewSubmit
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
