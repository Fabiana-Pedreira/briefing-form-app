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
import { Film } from 'lucide-react';

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
      <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
        {/* Top Sticky Header */}
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onOpenPreview={() => setIsPreviewOpen(true)}
        />

        {/* Hero Section Banner - Frame Mídia Branding (Preto, Vermelho & Verde) */}
        <section className="relative overflow-hidden pt-10 pb-6 px-4 text-center">
          <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-25 pointer-events-none">
            <div className="w-[500px] h-[500px] bg-red-600/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="w-[350px] h-[350px] bg-lime-500/15 rounded-full blur-3xl" />
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-red-500/10 text-red-500 border border-red-500/30 shadow-sm">
              <Film className="w-3.5 h-3.5 text-lime-400" />
              <span>Frame Mídia • Consultoria Estratégica</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Menos ruído, <br className="hidden sm:block" />
              <span className="text-red-500 underline decoration-red-500/40 underline-offset-8">
                mais posicionamento.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto font-medium leading-relaxed">
              Não entregamos posts automáticos. Unimos{' '}
              <strong className="text-slate-900 dark:text-white font-bold">
                análise técnica e direção visual autêntica
              </strong>{' '}
              para gerar valor real a longo prazo.
            </p>

            {/* Como Funciona - 3 Passos Rápidos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-left max-w-2xl mx-auto">
              <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm">
                <span className="text-xs font-extrabold text-red-500">01. Suas Respostas</span>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Compartilhe suas prioridades atuais em 3 minutos.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm">
                <span className="text-xs font-extrabold text-red-500">02. Nosso Olhar</span>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Analisamos seu contexto para a melhor estratégia.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm">
                <span className="text-xs font-extrabold text-red-500">03. Nosso Contato</span>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Retornaremos para alinhar a solução ideal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6">
          <div className="glass-panel p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl shadow-red-500/5 transition-all bg-white dark:bg-[#0d0d0d] border-zinc-200 dark:border-zinc-800">
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
