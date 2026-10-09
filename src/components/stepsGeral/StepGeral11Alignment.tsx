'use client';

import React from 'react';
import { BriefingGeralData } from '@/types/briefing';
import { Sparkles, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';

interface StepProps {
  data: BriefingGeralData;
  updateData: (fields: Partial<BriefingGeralData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const StepGeral11Alignment: React.FC<StepProps> = ({
  data,
  updateData,
  onNext,
  onPrev,
}) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1 border-b border-zinc-800 pb-4">
        <span className="text-xs font-black uppercase tracking-widest text-lime-400">
          Briefing Geral • Sessão 11 de 11
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-red-500" /> 11. Expectativas, Alinhamento e Próximos Passos
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Estabelecer uma relação de trabalho transparente, produtiva e alinhada com a Frame Mídia.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            O que motivou a empresa a buscar o apoio da Frame Mídia neste momento?
          </label>
          <textarea
            rows={2}
            value={data.motivationForFrameMidiaNow}
            onChange={(e) => updateData({ motivationForFrameMidiaNow: e.target.value })}
            placeholder="Conte-nos o principal estopim para buscar uma consultoria estratégica..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Como prefere acompanhar o andamento e a frequência dos relatórios?
          </label>
          <select
            value={data.reportingFormatFrequency}
            onChange={(e) => updateData({ reportingFormatFrequency: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white focus:outline-none focus:ring-2 focus:ring-red-500 text-sm cursor-pointer"
          >
            <option value="Relatório Mensal com Reunião de Alinhamento">Relatório Mensal com Reunião de Alinhamento</option>
            <option value="Relatório Quinzenal simplificado">Relatório Quinzenal simplificado</option>
            <option value="Acompanhamento semanal por dashboard">Acompanhamento semanal via dashboard</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Existe alguma informação importante sobre o negócio que não foi contemplada?
          </label>
          <textarea
            rows={2}
            value={data.additionalImportantInfo}
            onChange={(e) => updateData({ additionalImportantInfo: e.target.value })}
            placeholder="Fique à vontade para adicionar qualquer observação relevante..."
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
          Revisar & Enviar Briefing →
        </button>
      </div>
    </div>
  );
};
