'use client';

import React from 'react';
import { BriefingGeralData } from '@/types/briefing';
import { DollarSign, Sliders, Calendar, UserCheck } from 'lucide-react';

interface StepProps {
  data: BriefingGeralData;
  updateData: (fields: Partial<BriefingGeralData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const StepGeral10Structure: React.FC<StepProps> = ({
  data,
  updateData,
  onNext,
  onPrev,
}) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1 border-b border-zinc-800 pb-4">
        <span className="text-xs font-black uppercase tracking-widest text-lime-400">
          Briefing Geral • Sessão 10 de 11
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-red-500" /> 10. Estrutura, Recursos e Investimento
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Alinhar as estratégias à capacidade operacional, financeira e de equipe da empresa.
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1">
              <DollarSign className="w-4 h-4 text-lime-400" /> Orçamento mensal para gestão de marketing
            </label>
            <input
              type="text"
              value={data.monthlyMarketingBudget}
              onChange={(e) => updateData({ monthlyMarketingBudget: e.target.value })}
              placeholder="Ex: R$ 3.000 a R$ 5.000 / mês"
              className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1">
              <Sliders className="w-4 h-4 text-lime-400" /> Verba separada para anúncios pagos (Ads)
            </label>
            <input
              type="text"
              value={data.monthlyPaidAdsBudget}
              onChange={(e) => updateData({ monthlyPaidAdsBudget: e.target.value })}
              placeholder="Ex: R$ 2.000 / mês"
              className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Quem será o contato principal da Frame Mídia e os tomadores de decisão?
          </label>
          <input
            type="text"
            value={data.frameMidiaMainContact}
            onChange={(e) => updateData({ frameMidiaMainContact: e.target.value })}
            placeholder="Ex: Carlos Silva (CEO) - carlos@empresa.com"
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
          Avançar para Alinhamento Final →
        </button>
      </div>
    </div>
  );
};
