'use client';

import React from 'react';
import { BriefingData } from '@/types/briefing';
import { Palette, Sparkles, Link as LinkIcon, MessageSquare } from 'lucide-react';

interface StepVisualIdentityProps {
  data: BriefingData;
  updateData: (fields: Partial<BriefingData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const stylesList = [
  'Moderno',
  'Minimalista / Clean',
  'Corporativo / Sobrio',
  'Vibrante / Colorido',
  'Futurista / High-tech',
  'Elegante / Luxo',
  'Descontraído / Jovem',
  'Orgânico / Sustentável',
];

const presetPalettes = [
  { name: 'Indigo Dark', primary: '#6366f1', secondary: '#d946ef' },
  { name: 'Ocean Tech', primary: '#0284c7', secondary: '#14b8a6' },
  { name: 'Emerald Clean', primary: '#059669', secondary: '#10b981' },
  { name: 'Sunset Warm', primary: '#f97316', secondary: '#e11d48' },
  { name: 'Luxury Gold', primary: '#d97706', secondary: '#451a03' },
  { name: 'Cyberpunk', primary: '#a855f7', secondary: '#06b6d4' },
];

const toneOptions = [
  'Profissional & Confiável',
  'Inovador & Ousado',
  'Amigável & Próximo',
  'Exclusivo & Premium',
  'Didático & Direto',
];

export const StepVisualIdentity: React.FC<StepVisualIdentityProps> = ({
  data,
  updateData,
  onNext,
  onPrev,
}) => {
  const toggleStyle = (style: string) => {
    const exists = data.brandStyle.includes(style);
    const updated = exists
      ? data.brandStyle.filter((s) => s !== style)
      : [...data.brandStyle, style];
    updateData({ brandStyle: updated });
  };

  const applyPalette = (primary: string, secondary: string) => {
    updateData({ primaryColor: primary, secondaryColor: secondary });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Palette className="w-6 h-6 text-brand-500" /> Identidade Visual & Design
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Escolha o estilo estético e as preferências visuais para o seu projeto.
        </p>
      </div>

      {/* Estilos Visuais */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          Estilo Visual da Marca (Selecione um ou mais)
        </label>
        <div className="flex flex-wrap gap-2">
          {stylesList.map((style) => {
            const active = data.brandStyle.includes(style);
            return (
              <button
                key={style}
                type="button"
                onClick={() => toggleStyle(style)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                  active
                    ? 'bg-brand-600 text-white border-brand-600 shadow-md shadow-brand-500/20'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                }`}
              >
                {active ? '✓ ' : '+ '}
                {style}
              </button>
            );
          })}
        </div>
      </div>

      {/* Seletor de Cores & Paletas Pré-definidas */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" /> Paleta de Cores Preferida
          </label>
          <span className="text-xs text-slate-500">Selecione uma paleta ou escolha cores exatas</span>
        </div>

        {/* Preset Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {presetPalettes.map((p) => {
            const isSelected =
              data.primaryColor.toLowerCase() === p.primary.toLowerCase() &&
              data.secondaryColor.toLowerCase() === p.secondary.toLowerCase();
            return (
              <button
                key={p.name}
                type="button"
                onClick={() => applyPalette(p.primary, p.secondary)}
                className={`p-2 rounded-xl border text-left flex flex-col gap-1.5 transition-all ${
                  isSelected
                    ? 'border-brand-500 ring-2 ring-brand-500/30 bg-white dark:bg-slate-800'
                    : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="flex h-5 rounded-lg overflow-hidden w-full shadow-inner">
                  <div className="w-1/2 h-full" style={{ backgroundColor: p.primary }} />
                  <div className="w-1/2 h-full" style={{ backgroundColor: p.secondary }} />
                </div>
                <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 truncate">
                  {p.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Custom Pickers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="flex items-center gap-3 bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
            <input
              type="color"
              value={data.primaryColor}
              onChange={(e) => updateData({ primaryColor: e.target.value })}
              className="w-10 h-10 rounded-lg cursor-pointer border-0 bg-transparent"
            />
            <div>
              <span className="block text-xs font-bold text-slate-800 dark:text-slate-200">
                Cor Primária
              </span>
              <span className="text-xs font-mono text-slate-500">{data.primaryColor}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
            <input
              type="color"
              value={data.secondaryColor}
              onChange={(e) => updateData({ secondaryColor: e.target.value })}
              className="w-10 h-10 rounded-lg cursor-pointer border-0 bg-transparent"
            />
            <div>
              <span className="block text-xs font-bold text-slate-800 dark:text-slate-200">
                Cor Secundária
              </span>
              <span className="text-xs font-mono text-slate-500">{data.secondaryColor}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tom de Voz */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-brand-500" /> Tom de Voz da Comunicação
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {toneOptions.map((tone) => {
            const active = data.toneOfVoice === tone;
            return (
              <button
                key={tone}
                type="button"
                onClick={() => updateData({ toneOfVoice: tone })}
                className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                  active
                    ? 'bg-brand-500/10 border-brand-500 text-brand-600 dark:text-brand-400 ring-2 ring-brand-500/20'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                {tone}
              </button>
            );
          })}
        </div>
      </div>

      {/* Referências Visuais / Links */}
      <div className="space-y-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          Links de Referência (Sites que você gosta)
        </label>
        <div className="relative">
          <LinkIcon className="w-5 h-5 absolute left-3 top-3 text-slate-400" />
          <textarea
            rows={3}
            value={data.references}
            onChange={(e) => updateData({ references: e.target.value })}
            placeholder="Cole aqui URLs de sites ou perfis no Dribbble/Pinterest que sirvam de inspiração..."
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
