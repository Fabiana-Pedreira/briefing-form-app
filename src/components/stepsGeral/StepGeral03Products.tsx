'use client';

import React from 'react';
import { BriefingGeralData } from '@/types/briefing';
import { ShoppingBag, Sparkles, DollarSign } from 'lucide-react';

interface StepProps {
  data: BriefingGeralData;
  updateData: (fields: Partial<BriefingGeralData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const StepGeral03Products: React.FC<StepProps> = ({
  data,
  updateData,
  onNext,
  onPrev,
}) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1 border-b border-zinc-800 pb-4">
        <span className="text-xs font-black uppercase tracking-widest text-lime-400">
          Briefing Geral • Sessão 03 de 11
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
          <ShoppingBag className="w-6 h-6 text-red-500" /> 03. Produtos, Serviços e Proposta de Valor
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Entender o que a empresa oferece e por que isso importa para o cliente.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Quais são os principais produtos ou serviços oferecidos?
          </label>
          <textarea
            rows={2}
            value={data.productsServicesList}
            onChange={(e) => updateData({ productsServicesList: e.target.value })}
            placeholder="Liste os produtos/serviços de maior destaque..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
              Quais são os MAIS VENDIDOS ou procurados?
            </label>
            <input
              type="text"
              value={data.topSellingProducts}
              onChange={(e) => updateData({ topSellingProducts: e.target.value })}
              placeholder="Ex: Serviço X / Produto Y"
              className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-lime-400" /> Quais oferecem maior oportunidade de crescimento?
            </label>
            <input
              type="text"
              value={data.growthOpportunityProducts}
              onChange={(e) => updateData({ growthOpportunityProducts: e.target.value })}
              placeholder="Ex: Novo serviço digital / Contratos recorrentes"
              className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Qual é a faixa de preço média dos produtos ou serviços?
          </label>
          <input
            type="text"
            value={data.priceRange}
            onChange={(e) => updateData({ priceRange: e.target.value })}
            placeholder="Ex: De R$ 1.500 a R$ 10.000"
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Há alguma limitação de estoque, agenda ou capacidade de atendimento?
          </label>
          <input
            type="text"
            value={data.capacityInventoryLimits}
            onChange={(e) => updateData({ capacityInventoryLimits: e.target.value })}
            placeholder="Ex: Limite de 15 novos clientes simultâneos por mês..."
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
          Avançar para Público-Alvo →
        </button>
      </div>
    </div>
  );
};
