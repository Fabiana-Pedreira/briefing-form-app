'use client';

import React from 'react';
import { BriefingData } from '@/types/briefing';
import { Target, Users, ShieldAlert, Award, Layers, Zap } from 'lucide-react';

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
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Target className="w-6 h-6 text-lime-500" /> Frentes de Impacto & Objetivos
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Selecione onde sua marca precisa atuar agora para gerar valor real a longo prazo.
        </p>
      </div>

      {/* Frentes de Impacto (Frame Mídia) */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
          <Zap className="w-4 h-4 text-lime-500" /> Qual a principal frente de atuação desejada?
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
                    ? 'border-lime-500 bg-lime-500/10 text-slate-900 dark:text-white ring-2 ring-lime-500/30'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white">
                  <span className={`w-2 h-2 rounded-full ${selected ? 'bg-lime-500' : 'bg-slate-400'}`} />
                  {pilar.name}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-4">
                  {pilar.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Objetivos Principais */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
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
                    ? 'bg-lime-500 text-slate-950 border-lime-500 font-bold shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700'
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
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            Público-Alvo
          </label>
          <div className="relative">
            <Users className="w-5 h-5 absolute left-3 top-3 text-slate-400" />
            <textarea
              rows={3}
              value={data.targetAudience}
              onChange={(e) => updateData({ targetAudience: e.target.value })}
              placeholder="Ex: Decisores e líderes de empresas que buscam alta maturidade visual..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all text-sm"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            Concorrentes Diretos ou Indiretos
          </label>
          <div className="relative">
            <ShieldAlert className="w-5 h-5 absolute left-3 top-3 text-slate-400" />
            <textarea
              rows={3}
              value={data.competitors}
              onChange={(e) => updateData({ competitors: e.target.value })}
              placeholder="Ex: Marca A, Consultoria B..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all text-sm"
            />
          </div>
        </div>
      </div>

      {/* Diferenciais da Marca */}
      <div className="space-y-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          O Que Torna Sua Marca Única? (Diferenciais)
        </label>
        <div className="relative">
          <Award className="w-5 h-5 absolute left-3 top-3 text-slate-400" />
          <textarea
            rows={2}
            value={data.differentials}
            onChange={(e) => updateData({ differentials: e.target.value })}
            placeholder="Ex: Produto/serviço validado com atendimento técnico próximo e entrega sob medida..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all text-sm"
          />
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onPrev}
          className="px-6 py-3 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-xl transition-all text-sm"
        >
          ← Voltar
        </button>
        <button
          type="button"
          onClick={onNext}
          className="px-6 py-3 bg-lime-500 hover:bg-lime-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-lime-500/20 transition-all text-sm"
        >
          Próxima Etapa →
        </button>
      </div>
    </div>
  );
};
