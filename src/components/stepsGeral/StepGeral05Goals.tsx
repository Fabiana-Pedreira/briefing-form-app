'use client';

import React from 'react';
import { BriefingGeralData } from '@/types/briefing';
import { Target, TrendingUp, Sparkles } from 'lucide-react';

interface StepProps {
  data: BriefingGeralData;
  updateData: (fields: Partial<BriefingGeralData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const focusOptions = [
  'Aumentar as vendas',
  'Atrair clientes qualificados',
  'Fortalecer o posicionamento de marca',
  'Fidelizar consumidores / Recompra',
  'Lançar novos produtos/serviços',
];

export const StepGeral05Goals: React.FC<StepProps> = ({
  data,
  updateData,
  onNext,
  onPrev,
}) => {
  const toggleFocus = (option: string) => {
    const exists = data.primaryGrowthFocus.includes(option);
    const updated = exists
      ? data.primaryGrowthFocus.filter((o) => o !== option)
      : [...data.primaryGrowthFocus, option];
    updateData({ primaryGrowthFocus: updated });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1 border-b border-zinc-800 pb-4">
        <span className="text-xs font-black uppercase tracking-widest text-lime-400">
          Briefing Geral • Sessão 05 de 11
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
          <Target className="w-6 h-6 text-red-500" /> 05. Objetivos e Expectativas
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Transformar expectativas em metas claras para orientar a estratégia da Frame Mídia.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Qual é o principal objetivo da empresa para os próximos 6 a 12 meses?
          </label>
          <textarea
            rows={2}
            value={data.goals6to12Months}
            onChange={(e) => updateData({ goals6to12Months: e.target.value })}
            placeholder="Ex: Aumentar faturamento em 50%, expandir para 2 novos estados..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Foco de crescimento prioritário (Selecione quantos desejar):
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {focusOptions.map((opt) => {
              const active = data.primaryGrowthFocus.includes(opt);
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleFocus(opt)}
                  className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${
                    active
                      ? 'border-red-500 bg-red-500/10 text-red-400 font-bold'
                      : 'border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-zinc-700'
                  }`}
                >
                  <span>{opt}</span>
                  <span className={`text-xs ${active ? 'text-lime-400 font-black' : 'text-zinc-600'}`}>
                    {active ? '☑' : '☐'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            O que seria considerado um resultado satisfatório nos primeiros 3 meses de trabalho?
          </label>
          <textarea
            rows={2}
            value={data.satisfactory3MonthsResult}
            onChange={(e) => updateData({ satisfactory3MonthsResult: e.target.value })}
            placeholder="Ex: Estruturação comercial, aumento de 30% em orçamentos qualificados..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1">
            <Sparkles className="w-4 h-4 text-lime-400" /> Quais são as expectativas em relação à Frame Mídia?
          </label>
          <input
            type="text"
            value={data.frameMidiaExpectations}
            onChange={(e) => updateData({ frameMidiaExpectations: e.target.value })}
            placeholder="Ex: Proatividade, clareza em relatórios, direção criativa de alto nível..."
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
          Avançar para Identidade Visual →
        </button>
      </div>
    </div>
  );
};
