'use client';

import React from 'react';
import { BriefingEsteticaData } from '@/types/briefing';
import { Shield, Award, Sparkles, Compass } from 'lucide-react';

interface StepProps {
  data: BriefingEsteticaData;
  updateData: (fields: Partial<BriefingEsteticaData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Step07CompetitorsMarket: React.FC<StepProps> = ({
  data,
  updateData,
  onNext,
  onPrev,
}) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1 border-b border-zinc-800 pb-4">
        <span className="text-xs font-black uppercase tracking-widest text-lime-400">
          Sessão 07 de 09
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
          <Shield className="w-6 h-6 text-red-500" /> 07. Concorrência e Mercado
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Identificar oportunidades estratégicas para construir uma marca altamente competitiva.
        </p>
      </div>

      <div className="space-y-6">
        {/* Quais clínicas você considera seus principais concorrentes? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Quais clínicas você considera seus principais concorrentes na região?
          </label>
          <textarea
            rows={2}
            value={data.mainCompetitors}
            onChange={(e) => updateData({ mainCompetitors: e.target.value })}
            placeholder="Ex: Clínica X (Instagram @x), Dra. Y..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* O que essas empresas fazem bem? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            O que essas empresas concorrentes fazem bem?
          </label>
          <input
            type="text"
            value={data.competitorsStrengths}
            onChange={(e) => updateData({ competitorsStrengths: e.target.value })}
            placeholder="Ex: Anúncios constantes, vídeos bem editados, preços agressivos..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* O que você acredita que poderia fazer melhor? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1">
            <Sparkles className="w-4 h-4 text-lime-400" /> O que você acredita que sua clínica faz ou poderia fazer MELHOR?
          </label>
          <textarea
            rows={2}
            value={data.whatYouCanDoBetter}
            onChange={(e) => updateData({ whatYouCanDoBetter: e.target.value })}
            placeholder="Ex: Atendimento mais humano, ambiente mais acolhedor, técnicas mais avançadas..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* Sua empresa compete principalmente por... */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Sua empresa compete principalmente por qual fator?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              'Preço & Promoções',
              'Experiência do Cliente & Ambiente',
              'Especialização & Alta Tecnologia',
              'Diferenciação & Exclusividade de Marca',
            ].map((factor) => (
              <button
                key={factor}
                type="button"
                onClick={() => updateData({ competitiveEdgeType: factor })}
                className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                  data.competitiveEdgeType === factor
                    ? 'border-red-500 bg-red-500/10 text-red-400 font-bold'
                    : 'border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-zinc-700'
                }`}
              >
                {data.competitiveEdgeType === factor ? '✓ ' : ''}
                {factor}
              </button>
            ))}
          </div>
        </div>

        {/* Existe alguma necessidade do público local ainda não atendida? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Existe alguma necessidade do público da sua região ainda não bem atendida?
          </label>
          <textarea
            rows={2}
            value={data.unmetLocalNeeds}
            onChange={(e) => updateData({ unmetLocalNeeds: e.target.value })}
            placeholder="Ex: Tratamentos pós-parto específicos, tratamentos masculinos discretos..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>
      </div>

      <div className="flex justify-between pt-4 border-t border-zinc-800">
        <button
          type="button"
          onClick={onPrev}
          className="px-6 py-3 border border-zinc-800 hover:bg-zinc-900 text-zinc-300 font-semibold rounded-xl text-sm"
        >
          ← Voltar
        </button>
        <button
          type="button"
          onClick={onNext}
          className="px-7 py-3 bg-red-600 hover:bg-red-500 text-white font-extrabold rounded-xl shadow-lg shadow-red-500/20 text-sm"
        >
          Avançar para Investimento →
        </button>
      </div>
    </div>
  );
};
