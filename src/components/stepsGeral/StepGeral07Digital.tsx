'use client';

import React from 'react';
import { BriefingGeralData } from '@/types/briefing';
import { Share2, Globe, Cpu, BarChart } from 'lucide-react';

interface StepProps {
  data: BriefingGeralData;
  updateData: (fields: Partial<BriefingGeralData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const toolOptions = ['Google Ads', 'Meta Ads (Instagram/Facebook)', 'E-mail Marketing', 'CRM de Vendas', 'WhatsApp Business API'];

export const StepGeral07Digital: React.FC<StepProps> = ({
  data,
  updateData,
  onNext,
  onPrev,
}) => {
  const toggleTool = (tool: string) => {
    const exists = data.toolsUsed.includes(tool);
    const updated = exists
      ? data.toolsUsed.filter((t) => t !== tool)
      : [...data.toolsUsed, tool];
    updateData({ toolsUsed: updated });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1 border-b border-zinc-800 pb-4">
        <span className="text-xs font-black uppercase tracking-widest text-lime-400">
          Briefing Geral • Sessão 07 de 11
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
          <Share2 className="w-6 h-6 text-red-500" /> 07. Presença Digital e Canais de Comunicação
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Mapear os canais existentes e identificar possibilidades de melhoria e conversão.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Qual canal digital gera MAIS VISIBILIDADE, CONTATOS OU VENDAS hoje?
          </label>
          <input
            type="text"
            value={data.topPerformingChannel}
            onChange={(e) => updateData({ topPerformingChannel: e.target.value })}
            placeholder="Ex: Anúncios no Google Ads / Instagram Direct"
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Existe site, loja virtual ou página de conversão?
          </label>
          <input
            type="text"
            value={data.hasWebsiteLandingPage}
            onChange={(e) => updateData({ hasWebsiteLandingPage: e.target.value })}
            placeholder="Ex: Sim (https://suaempresa.com.br) / Não possuímos"
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            A empresa utiliza ferramentas de marketing e vendas?
          </label>
          <div className="flex flex-wrap gap-2">
            {toolOptions.map((tool) => {
              const active = data.toolsUsed.includes(tool);
              return (
                <button
                  key={tool}
                  type="button"
                  onClick={() => toggleTool(tool)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                    active
                      ? 'bg-red-600 text-white border-red-600 font-bold'
                      : 'bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {active ? '✓ ' : '+ '}
                  {tool}
                </button>
              );
            })}
          </div>
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
          Avançar para Vendas & Relacionamento →
        </button>
      </div>
    </div>
  );
};
