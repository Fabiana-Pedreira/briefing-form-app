'use client';

import React from 'react';
import { BriefingData } from '@/types/briefing';
import { Target, Users, ShieldAlert, Award, Zap } from 'lucide-react';

interface StepProjectGoalsProps {
  data: BriefingData;
  updateData: (fields: Partial<BriefingData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const framePillars = [
  {
    name: 'Identidade e Posicionamento',
    desc: 'Para quem quer parar de disputar preço por percepção de valor.',
  },
  {
    name: 'Narrativa Audiovisual',
    desc: 'Para reter a atenção antes mesmo do primeiro segundo.',
  },
  {
    name: 'Distribuição Inteligente',
    desc: 'Para colocar sua mensagem direto na mesa do tomador de decisão.',
  },
  {
    name: 'Pontos de Contato e Conversão',
    desc: 'Para transformar interesse disperso em negócios reais.',
  },
  {
    name: 'Ecossistema Integrado',
    desc: 'Engrenagem única integrando posicionamento, estética e distribuição.',
  },
];

const availableGoals = [
  'Parar de disputar preço por percepção de valor',
  'Elevar autoridade e maturidade visual da marca',
  'Criar narrativa audiovisual de alto impacto',
  'Gerar leads qualificados com constância e propósito',
  'Superar concorrentes diretos no nicho',
  'Reformulação completa de marca & ecossistema',
];

export const StepProjectGoals: React.FC<StepProjectGoalsProps> = ({
  data,
  updateData,
  onNext,
  onPrev,
}) => {
  const toggleGoal = (goal: string) => {
    const exists = data.mainGoals.includes(goal);
    const updated = exists
      ? data.mainGoals.filter((g) => g !== goal)
      : [...data.mainGoals, goal];
    updateData({ mainGoals: updated });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <Target className="w-6 h-6 text-red-500" /> Frentes de Impacto & Objetivos
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Selecione onde sua marca precisa atuar agora para gerar valor real a longo prazo.
        </p>
      </div>

      {/* Frentes de Impacto (Frame Mídia) */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
          <Zap className="w-4 h-4 text-lime-400" /> Qual a principal frente de atuação desejada?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {framePillars.map((pilar) => {
            const selected = data.projectType === pilar.name;
            return (
              <button
                key={pilar.name}
                type="button"
                onClick={() => updateData({ projectType: pilar.name })}
                className={`p-4 rounded-2xl border text-left transition-all space-y-1 ${
                  selected
                    ? 'border-red-500 bg-red-500/10 text-slate-900 dark:text-white ring-2 ring-red-500/30'
                    : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white">
                  <span className={`w-2.5 h-2.5 rounded-full ${selected ? 'bg-lime-400' : 'bg-zinc-600'}`} />
                  <span className={selected ? 'text-red-500 font-black' : ''}>{pilar.name}</span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed pl-4">
                  {pilar.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Objetivos Principais */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
          Objetivos & Prioridades (Escolha quantas desejar)
        </label>
        <div className="flex flex-wrap gap-2">
          {availableGoals.map((goal) => {
            const active = data.mainGoals.includes(goal);
            return (
              <button
                key={goal}
                type="button"
                onClick={() => toggleGoal(goal)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                  active
                    ? 'bg-red-600 text-white border-red-600 font-bold shadow-sm'
                    : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-800'
                }`}
              >
                {active ? '✓ ' : '+ '}
                {goal}
              </button>
            );
          })}
        </div>
      </div>

      {/* Público Alvo & Concorrentes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
            Público-Alvo
          </label>
          <div className="relative">
            <Users className="w-5 h-5 absolute left-3 top-3 text-zinc-400" />
            <textarea
              rows={3}
              value={data.targetAudience}
              onChange={(e) => updateData({ targetAudience: e.target.value })}
              placeholder="Ex: Decisores e líderes de empresas que buscam alta maturidade visual..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-sm"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
            Concorrentes Diretos ou Indiretos
          </label>
          <div className="relative">
            <ShieldAlert className="w-5 h-5 absolute left-3 top-3 text-zinc-400" />
            <textarea
              rows={3}
              value={data.competitors}
              onChange={(e) => updateData({ competitors: e.target.value })}
              placeholder="Ex: Marca A, Consultoria B..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-sm"
            />
          </div>
        </div>
      </div>

      {/* Diferenciais da Marca */}
      <div className="space-y-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
          O Que Torna Sua Marca Única? (Diferenciais)
        </label>
        <div className="relative">
          <Award className="w-5 h-5 absolute left-3 top-3 text-zinc-400" />
          <textarea
            rows={2}
            value={data.differentials}
            onChange={(e) => updateData({ differentials: e.target.value })}
            placeholder="Ex: Produto/serviço validado com atendimento técnico próximo e entrega sob medida..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-sm"
          />
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onPrev}
          className="px-6 py-3 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-semibold rounded-xl transition-all text-sm"
        >
          ← Voltar
        </button>
        <button
          type="button"
          onClick={onNext}
          className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-extrabold rounded-xl shadow-lg shadow-red-500/20 transition-all text-sm"
        >
          Próxima Etapa →
        </button>
      </div>
    </div>
  );
};
