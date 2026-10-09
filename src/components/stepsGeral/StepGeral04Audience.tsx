'use client';

import React from 'react';
import { BriefingGeralData } from '@/types/briefing';
import { Users, Target, HelpCircle } from 'lucide-react';

interface StepProps {
  data: BriefingGeralData;
  updateData: (fields: Partial<BriefingGeralData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const StepGeral04Audience: React.FC<StepProps> = ({
  data,
  updateData,
  onNext,
  onPrev,
}) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1 border-b border-zinc-800 pb-4">
        <span className="text-xs font-black uppercase tracking-widest text-lime-400">
          Briefing Geral • Sessão 04 de 11
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
          <Users className="w-6 h-6 text-red-500" /> 04. Público-Alvo e Comportamento do Consumidor
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Identificar quem a empresa deseja alcançar e o que influencia suas decisões de compra.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Quem é o público que a empresa atende atualmente vs o CLIENTE IDEAL que deseja conquistar?
          </label>
          <textarea
            rows={3}
            value={data.idealClientToConquer}
            onChange={(e) => updateData({ idealClientToConquer: e.target.value })}
            placeholder="Descreva o perfil do cliente que gera maior rentabilidade e menor atrito..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
              Faixa etária e perfil socioeconômico predominante
            </label>
            <input
              type="text"
              value={data.ageAndSocioeconomicProfile}
              onChange={(e) => updateData({ ageAndSocioeconomicProfile: e.target.value })}
              placeholder="Ex: Empresários de 30 a 55 anos, Classe A/B"
              className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
              Regiões onde este público está localizado
            </label>
            <input
              type="text"
              value={data.audienceRegions}
              onChange={(e) => updateData({ audienceRegions: e.target.value })}
              placeholder="Ex: Sudeste e Sul / Grandes capitais"
              className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Quais são as principais necessidades, desejos e objeções desse público?
          </label>
          <textarea
            rows={2}
            value={data.needsWantsDifficulties}
            onChange={(e) => updateData({ needsWantsDifficulties: e.target.value })}
            placeholder="Ex: Deseja agilidade, teme burocracia e questiona prazos de entrega..."
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
          Avançar para Objetivos →
        </button>
      </div>
    </div>
  );
};
