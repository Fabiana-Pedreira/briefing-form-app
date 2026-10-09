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
  'Home (Página Inicial)',
  'Sobre Nós / Quem Somos',
  'Serviços / Produtos',
  'Portfólio / Casos de Sucesso',
  'Blog / Artigos',
  'Contato / Localização',
  'FAQ (Perguntas Frequentes)',
  'Área de Membros / Login',
];

const availableFeatures = [
  'Formulário de Contato',
  'Integração com WhatsApp',
  'SEO Otimizado (Google)',
  'Integração com CRM / E-mail Marketing',
  'Gateway de Pagamento (Pix/Cartão)',
  'Chatbot / Suporte ao Vivo',
  'Multi-idiomas (PT / EN / ES)',
  'Painel Administrativo CMS',
];

const budgetOptions = [
  'Até R$ 3.000',
  'R$ 3.000 a R$ 5.000',
  'R$ 5.000 a R$ 10.000',
  'R$ 10.000 a R$ 20.000',
  'Acima de R$ 20.000',
  'A ser avaliado',
];

const deadlineOptions = ['15 dias', '30 dias', '45 a 60 dias', 'Sem prazo fixo'];

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
          <CheckSquare className="w-6 h-6 text-brand-500" /> Escopo & Requisitos Técnicos
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Selecione os elementos da estrutura do site, funcionalidades desejadas e orçamento.
        </p>
      </div>

      {/* Páginas Necessárias */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          Páginas ou Seções Desejadas
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
                    ? 'border-brand-500 bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold'
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

      {/* Funcionalidades */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          Funcionalidades & Integrações
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
                    ? 'border-indigo-500 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold'
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
            <DollarSign className="w-4 h-4 text-emerald-500" /> Orçamento Estimado
          </label>
          <div className="relative">
            <Sliders className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <select
              value={data.budgetRange}
              onChange={(e) => updateData({ budgetRange: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all text-sm cursor-pointer"
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
            <Calendar className="w-4 h-4 text-indigo-500" /> Prazo Desejado
          </label>
          <div className="relative">
            <Calendar className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <select
              value={data.deadline}
              onChange={(e) => updateData({ deadline: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all text-sm cursor-pointer"
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
            placeholder="Adicione qualquer detalhe extra sobre hospedagem, domínio, integrações legadas ou requisitos específicos..."
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
          Revisar & Finalizar →
        </button>
      </div>
    </div>
  );
};
