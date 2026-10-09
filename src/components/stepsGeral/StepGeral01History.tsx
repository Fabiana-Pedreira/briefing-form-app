'use client';

import React from 'react';
import { BriefingGeralData } from '@/types/briefing';
import { Building2, MapPin, Clock, Flame, Sparkles } from 'lucide-react';

interface StepProps {
  data: BriefingGeralData;
  updateData: (fields: Partial<BriefingGeralData>) => void;
  onNext: () => void;
}

const phaseOptions = ['Início / Validação', 'Crescimento Acelerado', 'Consolidação de Mercado', 'Expansão de Unidades/Operação', 'Reposicionamento de Marca'];

export const StepGeral01History: React.FC<StepProps> = ({
  data,
  updateData,
  onNext,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.companyName) {
      alert('Por favor, informe o nome da empresa ou marca.');
      return;
    }
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div className="space-y-1 border-b border-zinc-800 pb-4">
        <span className="text-xs font-black uppercase tracking-widest text-lime-400">
          Briefing Geral • Sessão 01 de 11
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
          <Building2 className="w-6 h-6 text-red-500" /> 01. Identificação e História do Negócio
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Conhecer a empresa, sua trajetória e seu momento atual.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-2 sm:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Qual é o nome da empresa ou marca? <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={data.companyName}
            onChange={(e) => updateData({ companyName: e.target.value })}
            placeholder="Ex: Grupo Frame Solutions / Marca X"
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Qual é o segmento de atuação?
          </label>
          <input
            type="text"
            value={data.industrySegment}
            onChange={(e) => updateData({ industrySegment: e.target.value })}
            placeholder="Ex: Tecnologia B2B, Arquitetura, Moda Feminina..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Localização e área de atendimento
          </label>
          <input
            type="text"
            value={data.locationCoverage}
            onChange={(e) => updateData({ locationCoverage: e.target.value })}
            placeholder="Ex: São Paulo - SP (Atendimento Nacional)"
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Há quanto tempo o negócio existe?
          </label>
          <input
            type="text"
            value={data.timeInBusiness}
            onChange={(e) => updateData({ timeInBusiness: e.target.value })}
            placeholder="Ex: 5 anos (desde 2019)"
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Momento atual da empresa
          </label>
          <select
            value={data.currentPhase}
            onChange={(e) => updateData({ currentPhase: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white focus:outline-none focus:ring-2 focus:ring-red-500 text-sm cursor-pointer"
          >
            {phaseOptions.map((phase) => (
              <option key={phase} value={phase}>
                {phase}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2 sm:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Como surgiu a ideia de criar a empresa?
          </label>
          <textarea
            rows={2}
            value={data.businessIdeaOrigin}
            onChange={(e) => updateData({ businessIdeaOrigin: e.target.value })}
            placeholder="Conte resumidamente como o negócio foi idealizado..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Qual é o principal produto/serviço oferecido e modelo de negócio?
          </label>
          <textarea
            rows={2}
            value={data.mainProductService}
            onChange={(e) => updateData({ mainProductService: e.target.value })}
            placeholder="Ex: Consultoria mensal recorrente / Venda direta B2C..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1">
            <Flame className="w-4 h-4 text-red-500" /> Quais os principais desafios enfrentados atualmente?
          </label>
          <textarea
            rows={2}
            value={data.currentMainChallenges}
            onChange={(e) => updateData({ currentMainChallenges: e.target.value })}
            placeholder="Ex: Dependência de indicação, dificuldade de gerar leads qualificados..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>
      </div>

      <div className="flex justify-end pt-4 border-t border-zinc-800">
        <button
          type="submit"
          className="flex items-center gap-2 px-7 py-3 bg-red-600 hover:bg-red-500 text-white font-extrabold rounded-xl shadow-lg shadow-red-500/20 text-sm"
        >
          Avançar para Identidade →
        </button>
      </div>
    </form>
  );
};
