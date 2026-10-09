'use client';

import React from 'react';
import { BriefingData } from '@/types/briefing';
import { User, Building, Mail, Phone, Globe, Briefcase, Sparkles } from 'lucide-react';

interface StepClientInfoProps {
  data: BriefingData;
  updateData: (fields: Partial<BriefingData>) => void;
  onNext: () => void;
}

const industries = [
  'Tecnologia & Inovação',
  'Consultoria & Serviços Profissionais',
  'E-commerce & Varejo',
  'Saúde, Medicina & Estética',
  'Educação & Infoprodutos',
  'Serviços Financeiros / Fintech',
  'Imobiliário & Arquitetura',
  'Alimentação & Gastronomia',
  'Moda & Luxo',
  'Outro Setor',
];

export const StepClientInfo: React.FC<StepClientInfoProps> = ({
  data,
  updateData,
  onNext,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.clientName || !data.email || !data.companyName) {
      alert('Por favor, preencha os campos obrigatórios (Nome, Empresa e E-mail).');
      return;
    }
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <User className="w-6 h-6 text-red-500" /> Diagnóstico do Cliente & Empresa
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Informe seus dados básicos para direcionarmos a análise estratégica.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Nome do Responsável */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
            Seu Nome Completo <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              required
              value={data.clientName}
              onChange={(e) => updateData({ clientName: e.target.value })}
              placeholder="Ex: Carlos Silva"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-sm"
            />
          </div>
        </div>

        {/* Nome da Empresa */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
            Nome da Empresa / Marca <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Building className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              required
              value={data.companyName}
              onChange={(e) => updateData({ companyName: e.target.value })}
              placeholder="Ex: Nexus Studio"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-sm"
            />
          </div>
        </div>

        {/* E-mail */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
            E-mail Profissional <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="email"
              required
              value={data.email}
              onChange={(e) => updateData({ email: e.target.value })}
              placeholder="carlos@empresa.com.br"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-sm"
            />
          </div>
        </div>

        {/* Telefone / WhatsApp */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
            Telefone / WhatsApp
          </label>
          <div className="relative">
            <Phone className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => updateData({ phone: e.target.value })}
              placeholder="(11) 99999-8888"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-sm"
            />
          </div>
        </div>

        {/* Website / Instagram Atual */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
            Website ou Instagram Atual
          </label>
          <div className="relative">
            <Globe className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={data.website}
              onChange={(e) => updateData({ website: e.target.value })}
              placeholder="https://suaempresa.com.br ou @suamarca"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-sm"
            />
          </div>
        </div>

        {/* Setor de Atuação */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
            Segmento do Negócio
          </label>
          <div className="relative">
            <Briefcase className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <select
              value={data.industry}
              onChange={(e) => updateData({ industry: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-sm appearance-none cursor-pointer"
            >
              {industries.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="flex items-center gap-2 px-7 py-3 bg-red-600 hover:bg-red-500 text-white font-extrabold rounded-xl shadow-lg shadow-red-500/20 transition-all text-sm"
        >
          Próxima Etapa <Sparkles className="w-4 h-4 text-lime-400" />
        </button>
      </div>
    </form>
  );
};
