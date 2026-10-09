'use client';

import React from 'react';
import {
  Building2,
  Target,
  Users,
  Palette,
  Share2,
  MessageSquare,
  Shield,
  DollarSign,
  HeartPulse,
  Send,
  Check,
} from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  onStepClick: (step: number) => void;
}

const steps = [
  { id: 1, label: '01. Negócio', icon: Building2 },
  { id: 2, label: '02. Objetivos', icon: Target },
  { id: 3, label: '03. Público', icon: Users },
  { id: 4, label: '04. Identidade', icon: Palette },
  { id: 5, label: '05. Digital', icon: Share2 },
  { id: 6, label: '06. Comercial', icon: MessageSquare },
  { id: 7, label: '07. Mercado', icon: Shield },
  { id: 8, label: '08. Verba', icon: DollarSign },
  { id: 9, label: '09. Estética', icon: HeartPulse },
  { id: 10, label: '10. Envio', icon: Send },
];

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps,
  onStepClick,
}) => {
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full mb-6">
      {/* Top Progress Bar */}
      <div className="flex items-center justify-between text-xs mb-2">
        <span className="font-extrabold text-red-500 uppercase tracking-wider">
          Sessão {currentStep} de {totalSteps}
        </span>
        <span className="font-bold text-lime-400 font-mono">
          {Math.round(progressPercentage)}% Concluído
        </span>
      </div>

      <div className="relative w-full h-2 bg-zinc-900 rounded-full overflow-hidden mb-5 border border-zinc-800">
        <div
          className="h-full bg-gradient-to-r from-red-600 via-red-500 to-lime-400 transition-all duration-500 ease-out rounded-full shadow-sm"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Grid / Scrollable Session Buttons */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
        {steps.map((step) => {
          const Icon = step.icon;
          const isCompleted = currentStep > step.id;
          const isCurrent = currentStep === step.id;

          return (
            <button
              key={step.id}
              onClick={() => isCompleted && onStepClick(step.id)}
              disabled={!isCompleted && !isCurrent}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                isCurrent
                  ? 'bg-red-600 text-white shadow-md shadow-red-500/20 ring-2 ring-red-500/30'
                  : isCompleted
                  ? 'bg-zinc-900 text-lime-400 border border-zinc-800 hover:border-zinc-700 cursor-pointer'
                  : 'bg-zinc-950 text-zinc-600 border border-zinc-900 opacity-60 cursor-default'
              }`}
            >
              {isCompleted ? (
                <Check className="w-3.5 h-3.5 stroke-[3] text-lime-400" />
              ) : (
                <Icon className="w-3.5 h-3.5" />
              )}
              <span>{step.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
