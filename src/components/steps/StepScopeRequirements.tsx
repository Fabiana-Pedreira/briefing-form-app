'use client';

import React from 'react';
import { BriefingData } from '@/types/briefing';
import { CheckSquare, DollarSign, Calendar, Sliders, FileText } from 'lucide-react';

interface StepScopeRequirementsProps {
  data: BriefingData;
  updateData: (fields: Partial<BriefingData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const availablePages = [
  'Home (Página Inicial com Posicionamento)',
  'Sobre Nós / Manifesto de Marca',
  'Soluções & Pilares de Atuação',
  'Casos de Sucesso & Audiovisual',
  'Formulário de Aplicação Qualificada',
  'Página de Vendas / Landing Page',
  'FAQ & Dúvidas Frequentes',
  'Área Exclusiva de Clientes',
];

const availableFeatures = [
  'Direção de Arte & Branding',
  'Produção / Roteiro Audiovisual',
  'Formulário de Aplicação Qualificado',
  'Integração com WhatsApp / Comercial',
  'SEO Otimizado (Posicionamento no Google)',
  'Integração com CRM (HubSpot, RD, Active)',
  'Painel Administrativo CMS',
  'Tráfego Pago & Distribuição Inteligente',
];

const budgetOptions = [
  'R$ 5.000 a R$ 10.000',
  'R$ 10.000 a R$ 20.000',
  'R$ 20.000 a R$ 35.000',
  'Acima de R$ 35.000',
  'A ser analisado no diagnóstico',
];

const deadlineOptions = [
  'Imediato (em até 20 dias)',
  '30 dias (recomendado)',
  '45 a 60 dias (projetos integrados)',
  'Flexível',
];

export const StepScopeRequirements: React.FC<StepScopeRequirementsProps> = ({
  data,
  updateData,
  onNext,
  onPrev,
}) => {
  const togglePage = (page: string) => {
    const exists = data.requiredPages.includes(page);
    const updated = exists
      ? data.requiredPages.filter((p) => p !== page)
      : [...data.requiredPages, page];
    updateData({ requiredPages: updated });
  };

  const toggleFeature = (feature: string) => {
    const exists = data.features.includes(feature);
    const updated = exists
      ? data.features.filter((f) => f !== feature)
      : [...data.features, feature];
    updateData({ features: updated });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <CheckSquare className="w-6 h-6 text-lime-500" /> Escopo & Nível de Investimento
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Selecione a estrutura, entregáveis e estimativa de investimento para o projeto.
        </p>
      </div>

      {/* Estrutura / Entregáveis */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          Páginas ou Estruturas Necessárias
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {availablePages.map((page) => {
            const selected = data.requiredPages.includes(page);
            return (
              <button
                key={page}
                type="button"
                onClick={() => togglePage(page)}
                className={`p-3 rounded-xl border text-left font-medium text-xs sm:text-sm transition-all flex items-center justify-between ${
                  selected
                    ? 'border-lime-500 bg-lime-500/10 text-lime-600 dark:text-lime-400 font-bold'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span>{page}</span>
                <span className="text-xs">{selected ? '☑' : '☐'}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Funcionalidades & Serviços */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          Serviços & Recursos Desejados
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {availableFeatures.map((feature) => {
            const selected = data.features.includes(feature);
            return (
              <button
                key={feature}
                type="button"
                onClick={() => toggleFeature(feature)}
                className={`p-3 rounded-xl border text-left font-medium text-xs sm:text-sm transition-all flex items-center justify-between ${
                  selected
                    ? 'border-coral-500 bg-coral-500/10 text-coral-600 dark:text-coral-400 font-bold'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span>{feature}</span>
                <span className="text-xs">{selected ? '☑' : '☐'}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Orçamento & Prazo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <DollarSign className="w-4 h-4 text-lime-500" /> Nível de Investimento Pretendido
          </label>
          <div className="relative">
            <Sliders className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <select
              value={data.budgetRange}
              onChange={(e) => updateData({ budgetRange: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all text-sm cursor-pointer"
            >
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-coral-500" /> Prazo Desejado
          </label>
          <div className="relative">
            <Calendar className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <select
              value={data.deadline}
              onChange={(e) => updateData({ deadline: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all text-sm cursor-pointer"
            >
              {deadlineOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Observações Adicionais */}
      <div className="space-y-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          Observações Adicionais ou Detalhes Relevantes
        </label>
        <div className="relative">
          <FileText className="w-5 h-5 absolute left-3 top-3 text-slate-400" />
          <textarea
            rows={3}
            value={data.additionalNotes}
            onChange={(e) => updateData({ additionalNotes: e.target.value })}
            placeholder="Conte-nos mais sobre os gargalos atuais e suas expectativas para o projeto..."
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
          Revisar & Aplicar →
        </button>
      </div>
    </div>
  );
};
