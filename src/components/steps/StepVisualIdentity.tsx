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
  'Editorial / High-End',
  'Minimalista & Contrasto',
  'Fundo Escuro / Dark Mode',
  'Elegante & Sofisticado',
  'Futurista / Tech',
  'Vibrante & Autêntico',
  'Corporativo Executivo',
  'Orgânico & Estético',
];

const presetPalettes = [
  { name: 'Frame Mídia (Verde-Limão & Preto)', primary: '#a3e635', secondary: '#090d16' },
  { name: 'Coral Accent & Preto Profundo', primary: '#ff5e36', secondary: '#090d16' },
  { name: 'Limão & Coral Contrast', primary: '#a3e635', secondary: '#ff5e36' },
  { name: 'Ocean Tech Premium', primary: '#0284c7', secondary: '#a3e635' },
  { name: 'Gold Luxury', primary: '#d97706', secondary: '#18181b' },
  { name: 'Cyber Minimal', primary: '#38bdf8', secondary: '#e0e7ff' },
];

const toneOptions = [
  'Profissional, Autêntico & Estratégico',
  'Sofisticado & Direto',
  'Inovador & Ousado',
  'Técnico & Confiável',
  'Acolhedor & Exclusivo',
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
          <Palette className="w-6 h-6 text-lime-500" /> Direção Visual & Estética
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Defina o tom de voz e a estética que expressam a maturidade da sua marca.
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
                    ? 'bg-lime-500 text-slate-950 border-lime-500 font-bold shadow-md shadow-lime-500/10'
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
            <Sparkles className="w-4 h-4 text-lime-500" /> Paleta de Cores Preferida
          </label>
          <span className="text-xs text-slate-500">Clique para aplicar</span>
        </div>

        {/* Preset Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {presetPalettes.map((p) => {
            const isSelected =
              data.primaryColor.toLowerCase() === p.primary.toLowerCase() &&
              data.secondaryColor.toLowerCase() === p.secondary.toLowerCase();
            return (
              <button
                key={p.name}
                type="button"
                onClick={() => applyPalette(p.primary, p.secondary)}
                className={`p-2.5 rounded-xl border text-left flex items-center gap-3 transition-all ${
                  isSelected
                    ? 'border-lime-500 ring-2 ring-lime-500/30 bg-white dark:bg-slate-800'
                    : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="flex h-6 w-10 rounded-lg overflow-hidden shrink-0 shadow-inner border border-slate-700">
                  <div className="w-1/2 h-full" style={{ backgroundColor: p.primary }} />
                  <div className="w-1/2 h-full" style={{ backgroundColor: p.secondary }} />
                </div>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
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
                Cor Primária / Destaque
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
                Cor Secundária / Fundo
              </span>
              <span className="text-xs font-mono text-slate-500">{data.secondaryColor}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tom de Voz */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-lime-500" /> Tom de Voz da Comunicação
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {toneOptions.map((tone) => {
            const active = data.toneOfVoice === tone;
            return (
              <button
                key={tone}
                type="button"
                onClick={() => updateData({ toneOfVoice: tone })}
                className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                  active
                    ? 'bg-lime-500/10 border-lime-500 text-lime-600 dark:text-lime-400 ring-2 ring-lime-500/20 font-bold'
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
          Referências Visuais (Links de marcas ou projetos inspiradores)
        </label>
        <div className="relative">
          <LinkIcon className="w-5 h-5 absolute left-3 top-3 text-slate-400" />
          <textarea
            rows={3}
            value={data.references}
            onChange={(e) => updateData({ references: e.target.value })}
            placeholder="Cole aqui links do Instagram, Behance, Vimeo ou sites de referência..."
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
