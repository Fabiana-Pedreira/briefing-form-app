'use client';

import React from 'react';
import { BriefingEsteticaData } from '@/types/briefing';
import { Target, TrendingUp, DollarSign, Users, Award } from 'lucide-react';

interface StepProps {
  data: BriefingEsteticaData;
  updateData: (fields: Partial<BriefingEsteticaData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const focusOptions = [
  'Atrair novos clientes',
  'Fidelizar os clientes atuais',
  'Aumentar o ticket médio por atendimento',
  'Posicionar a marca como autoridade premium',
];

export const Step02BusinessGoals: React.FC<StepProps> = ({
  data,
  updateData,
  onNext,
  onPrev,
}) => {
  const toggleFocus = (option: string) => {
    const exists = data.growthFocus.includes(option);
    const updated = exists
      ? data.growthFocus.filter((o) => o !== option)
      : [...data.growthFocus, option];
    updateData({ growthFocus: updated });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1 border-b border-zinc-800 pb-4">
        <span className="text-xs font-black uppercase tracking-widest text-lime-400">
          Sessão 02 de 09
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
          <Target className="w-6 h-6 text-red-500" /> 02. Objetivos do Negócio
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Definir o que a clínica espera alcançar com o marketing estrategicamente.
        </p>
      </div>

      <div className="space-y-6">
        {/* Qual é o principal objetivo para os próximos 6 a 12 meses? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Qual é o principal objetivo da empresa para os próximos 6 a 12 meses?
          </label>
          <textarea
            rows={3}
            value={data.goalsNextMonths}
            onChange={(e) => updateData({ goalsNextMonths: e.target.value })}
            placeholder="Ex: Dobrar o faturamento mensal, abrir nova sala de atendimento, virar referência na cidade..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* Você deseja atrair novos clientes, fidelizar ou aumentar ticket? */}
        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Foco principal de crescimento (Selecione quantos desejar):
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {focusOptions.map((opt) => {
              const active = data.growthFocus.includes(opt);
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

        {/* Existe algum procedimento ou protocolo que precisa de mais divulgação? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Existe algum procedimento ou protocolo que precisa de mais divulgação?
          </label>
          <input
            type="text"
            value={data.protocolsToPromote}
            onChange={(e) => updateData({ protocolsToPromote: e.target.value })}
            placeholder="Ex: Protocolo exclusivo de rejuvenescimento facial / Lipo enzimática"
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* Pretende lançar novos serviços ou expandir a estrutura? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Pretende lançar novos serviços ou expandir a estrutura física/equipe?
          </label>
          <input
            type="text"
            value={data.expansionPlans}
            onChange={(e) => updateData({ expansionPlans: e.target.value })}
            placeholder="Ex: Sim, vamos adquirir nova tecnologia a laser no próximo trimestre..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* Meta mensal de faturamento & Novos clientes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1">
              <DollarSign className="w-4 h-4 text-lime-400" /> Meta mensal de faturamento (R$)
            </label>
            <input
              type="text"
              value={data.monthlyRevenueTarget}
              onChange={(e) => updateData({ monthlyRevenueTarget: e.target.value })}
              placeholder="Ex: R$ 50.000 / mês"
              className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1">
              <Users className="w-4 h-4 text-lime-400" /> Quantos novos clientes gostaria/mês?
            </label>
            <input
              type="text"
              value={data.newClientsMonthlyTarget}
              onChange={(e) => updateData({ newClientsMonthlyTarget: e.target.value })}
              placeholder="Ex: 20 a 30 novas pacientes por mês"
              className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>
        </div>

        {/* O que considera um resultado satisfatório no marketing? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            O que considera um resultado satisfatório no trabalho de marketing?
          </label>
          <textarea
            rows={2}
            value={data.satisfactoryResultDefinition}
            onChange={(e) => updateData({ satisfactoryResultDefinition: e.target.value })}
            placeholder="Ex: Agenda cheia com 2 semanas de antecedência e pacientes dispostas a pagar o valor justo..."
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
