'use client';

import React from 'react';
import { BriefingGeralData } from '@/types/briefing';
import { MessageSquare, RefreshCw, BarChart2, AlertCircle } from 'lucide-react';

interface StepProps {
  data: BriefingGeralData;
  updateData: (fields: Partial<BriefingGeralData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const StepGeral08Sales: React.FC<StepProps> = ({
  data,
  updateData,
  onNext,
  onPrev,
}) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1 border-b border-zinc-800 pb-4">
        <span className="text-xs font-black uppercase tracking-widest text-lime-400">
          Briefing Geral • Sessão 08 de 11
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-red-500" /> 08. Marketing, Vendas e Relacionamento
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Entender como a divulgação se conecta diretamente aos resultados comerciais da empresa.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Como os clientes chegam até a empresa atualmente e quem faz o atendimento?
          </label>
          <textarea
            rows={2}
            value={data.howClientsArriveNow}
            onChange={(e) => updateData({ howClientsArriveNow: e.target.value })}
            placeholder="Ex: Chegam pelo Instagram e WhatsApp; o vendedor X faz o primeiro contato..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Existe um processo estruturado para acompanhar oportunidades comerciais (Follow-up)?
          </label>
          <input
            type="text"
            value={data.structuredFollowUpProcess}
            onChange={(e) => updateData({ structuredFollowUpProcess: e.target.value })}
            placeholder="Ex: Sim, fazemos controle via CRM / Não, perdemos o contato de muitos interessados..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Quais são os principais motivos para PERDER UMA VENDA?
          </label>
          <input
            type="text"
            value={data.reasonsForLostSales}
            onChange={(e) => updateData({ reasonsForLostSales: e.target.value })}
            placeholder="Ex: Preço, demora no atendimento, falta de orçamento do cliente..."
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
          Avançar para Concorrência →
        </button>
      </div>
    </div>
  );
};
