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
  { id: 2, label: 'Objetivos & Pilares', icon: Target },
  { id: 3, label: 'Design & Estilo', icon: Palette },
  { id: 4, label: 'Escopo & Prazos', icon: CheckSquare },
  { id: 5, label: 'Revisão & Aplicação', icon: Send },
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
      <div className="relative w-full h-2.5 bg-zinc-200 dark:bg-zinc-900 rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-gradient-to-r from-red-600 via-red-500 to-lime-500 transition-all duration-500 ease-out rounded-full shadow-sm"
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
                    ? 'bg-lime-500 text-slate-950 font-black shadow-lime-500/20'
                    : isCurrent
                    ? 'bg-gradient-to-tr from-red-600 to-red-500 text-white font-black shadow-red-500/30 scale-105 ring-4 ring-red-500/20'
                    : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-600 border border-zinc-200 dark:border-zinc-800'
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
                    ? 'text-red-500 font-extrabold'
                    : isCompleted
                    ? 'text-lime-400 font-bold'
                    : 'text-zinc-400 dark:text-zinc-600'
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
