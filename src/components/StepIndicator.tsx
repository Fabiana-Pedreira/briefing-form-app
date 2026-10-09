'use client';

import React from 'react';
import { User, Target, Palette, CheckSquare, Send, Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  onStepClick: (step: number) => void;
}

const steps = [
  { id: 1, label: 'Cliente & Empresa', icon: User },
  { id: 2, label: 'Objetivos & Foco', icon: Target },
  { id: 3, label: 'Design & Estilo', icon: Palette },
  { id: 4, label: 'Escopo & Recursos', icon: CheckSquare },
  { id: 5, label: 'Revisão & Envio', icon: Send },
];

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps,
  onStepClick,
}) => {
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full mb-8 sm:mb-12">
      {/* Top Progress Bar */}
      <div className="relative w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-gradient-to-r from-brand-600 via-indigo-500 to-accent-500 transition-all duration-500 ease-out rounded-full"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Steps Row */}
      <div className="grid grid-cols-5 gap-2 sm:gap-4">
        {steps.map((step) => {
          const Icon = step.icon;
          const isCompleted = currentStep > step.id;
          const isCurrent = currentStep === step.id;

          return (
            <button
              key={step.id}
              onClick={() => isCompleted && onStepClick(step.id)}
              disabled={!isCompleted && !isCurrent}
              className={`flex flex-col items-center group text-center transition-all ${
                isCompleted ? 'cursor-pointer' : 'cursor-default'
              }`}
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-md ${
                  isCompleted
                    ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                    : isCurrent
                    ? 'bg-gradient-to-tr from-brand-600 to-indigo-600 text-white shadow-brand-500/30 scale-105 ring-4 ring-brand-500/20 dark:ring-brand-500/30'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5 stroke-[3]" />
                ) : (
                  <Icon className="w-5 h-5" />
                )}
              </div>

              <span
                className={`mt-2 text-xs font-semibold hidden md:block transition-colors ${
                  isCurrent
                    ? 'text-brand-600 dark:text-brand-400'
                    : isCompleted
                    ? 'text-slate-700 dark:text-slate-300'
                    : 'text-slate-400 dark:text-slate-500'
                }`}
              >
                {step.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
