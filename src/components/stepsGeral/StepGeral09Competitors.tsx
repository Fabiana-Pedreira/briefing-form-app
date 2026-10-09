'use client';

import React from 'react';
import { BriefingGeralData } from '@/types/briefing';
import { Shield, Sparkles, Compass } from 'lucide-react';

interface StepProps {
  data: BriefingGeralData;
  updateData: (fields: Partial<BriefingGeralData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const StepGeral09Competitors: React.FC<StepProps> = ({
  data,
  updateData,
  onNext,
  onPrev,
}) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1 border-b border-zinc-800 pb-4">
        <span className="text-xs font-black uppercase tracking-widest text-lime-400">
          Briefing Geral • Sessão 09 de 11
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
          <Shield className="w-6 h-6 text-red-500" /> 09. Concorrência e Mercado
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Entender o ambiente competitivo e as oportunidades de diferenciação no mercado.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Quem são os principais concorrentes diretos e indiretos?
          </label>
          <textarea
            rows={2}
            value={data.directCompetitors}
            onChange={(e) => updateData({ directCompetitors: e.target.value })}
            placeholder="Ex: Concorrente A (Site/Instagram), Empresa B..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            O que os concorrentes fazem bem vs O que pode ser feito de maneira diferente/melhor?
          </label>
          <textarea
            rows={2}
            value={data.whatCanBeDoneDifferently}
            onChange={(e) => updateData({ whatCanBeDoneDifferently: e.target.value })}
            placeholder="Ex: Eles têm boa presença, mas nós entregamos um atendimento 100% sob medida..."
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
          Avançar para Estrutura & Verba →
        </button>
      </div>
    </div>
  );
};
