'use client';

import React from 'react';
import { BriefingData } from '@/types/briefing';
import { Target, Users, ShieldAlert, Award, Layers } from 'lucide-react';

interface StepProjectGoalsProps {
  data: BriefingData;
  updateData: (fields: Partial<BriefingData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const projectTypes = [
  'Website Institucional',
  'E-commerce / Loja Virtual',
  'Landing Page de Vendas',
  'Aplicativo Web / SaaS',
  'Portal de Conteúdo / Blog',
  'Redesign de Marca & Site',
];

const availableGoals = [
  'Aumentar Vendas / Conversão',
  'Melhorar Imagem da Marca',
  'Gerar Leads Qualificados',
  'Lançamento de Produto',
  'Automatizar Atendimento',
  'Superar Concorrentes',
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
          <Target className="w-6 h-6 text-brand-500" /> Objetivos do Projeto & Público
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Defina o foco estratégico do projeto para direcionar o design e a tecnologia.
        </p>
      </div>

      {/* Tipo de Projeto */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          Tipo de Projeto
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {projectTypes.map((type) => {
            const selected = data.projectType === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => updateData({ projectType: type })}
                className={`p-3 rounded-xl border text-left font-medium text-xs sm:text-sm transition-all flex items-center gap-2 ${
                  selected
                    ? 'border-brand-500 bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold ring-2 ring-brand-500/20'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                <Layers className={`w-4 h-4 ${selected ? 'text-brand-500' : 'text-slate-400'}`} />
                {type}
              </button>
            );
          })}
        </div>
      </div>

      {/* Objetivos Principais */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          Principais Metas do Projeto (Escolha quantas desejar)
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
                    ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white border-transparent shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700'
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
              placeholder="Ex: Jovens empreendedores de 25 a 40 anos interessados em tecnologia e produtividade..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all text-sm"
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
              placeholder="Ex: Empresa X (x.com.br), Empresa Y (y.com)..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all text-sm"
            />
          </div>
        </div>
      </div>

      {/* Diferenciais da Marca */}
      <div className="space-y-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          Diferenciais Competitivos da Sua Empresa
        </label>
        <div className="relative">
          <Award className="w-5 h-5 absolute left-3 top-3 text-slate-400" />
          <textarea
            rows={2}
            value={data.differentials}
            onChange={(e) => updateData({ differentials: e.target.value })}
            placeholder="Ex: Atendimento 24/7, garantia de entrega expressa, tecnologia proprietária..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all text-sm"
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
          className="px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/25 transition-all text-sm"
        >
          Próxima Etapa →
        </button>
      </div>
    </div>
  );
};
