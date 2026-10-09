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
  'Minimalista & Alto Contraste',
  'Fundo Preto Profundo (Pure Dark)',
  'Elegante & Sofisticado',
  'Futurista / Tech',
  'Vibrante & Autêntico',
  'Corporativo Executivo',
  'Orgânico & Estético',
];

const presetPalettes = [
  { name: 'Frame Mídia (Vermelho & Preto)', primary: '#ef4444', secondary: '#000000' },
  { name: 'Verde-Limão & Preto Profundo', primary: '#a3e635', secondary: '#000000' },
  { name: 'Vermelho & Limão Contrast', primary: '#ef4444', secondary: '#a3e635' },
  { name: 'Ocean Tech Premium', primary: '#0284c7', secondary: '#ef4444' },
  { name: 'Luxury Gold & Onyx', primary: '#d97706', secondary: '#18181b' },
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
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <Palette className="w-6 h-6 text-red-500" /> Direção Visual & Estética
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Defina o tom de voz e a estética que expressam a maturidade da sua marca.
        </p>
      </div>

      {/* Estilos Visuais */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
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
                    ? 'bg-red-600 text-white border-red-600 font-bold shadow-md shadow-red-500/20'
                    : 'bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'
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
      <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-lime-400" /> Paleta de Cores Preferida
          </label>
          <span className="text-xs text-zinc-500">Clique para aplicar</span>
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
                    ? 'border-red-500 ring-2 ring-red-500/30 bg-white dark:bg-zinc-900'
                    : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'
                }`}
              >
                <div className="flex h-6 w-10 rounded-lg overflow-hidden shrink-0 shadow-inner border border-zinc-700">
                  <div className="w-1/2 h-full" style={{ backgroundColor: p.primary }} />
                  <div className="w-1/2 h-full" style={{ backgroundColor: p.secondary }} />
                </div>
                <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 truncate">
                  {p.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Custom Pickers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="flex items-center gap-3 bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <input
              type="color"
              value={data.primaryColor}
              onChange={(e) => updateData({ primaryColor: e.target.value })}
              className="w-10 h-10 rounded-lg cursor-pointer border-0 bg-transparent"
            />
            <div>
              <span className="block text-xs font-bold text-zinc-800 dark:text-zinc-200">
                Cor Primária / Destaque
              </span>
              <span className="text-xs font-mono text-zinc-500">{data.primaryColor}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <input
              type="color"
              value={data.secondaryColor}
              onChange={(e) => updateData({ secondaryColor: e.target.value })}
              className="w-10 h-10 rounded-lg cursor-pointer border-0 bg-transparent"
            />
            <div>
              <span className="block text-xs font-bold text-zinc-800 dark:text-zinc-200">
                Cor Secundária / Fundo
              </span>
              <span className="text-xs font-mono text-zinc-500">{data.secondaryColor}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tom de Voz */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-red-500" /> Tom de Voz da Comunicação
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
                    ? 'bg-red-500/10 border-red-500 text-red-500 ring-2 ring-red-500/20 font-bold'
                    : 'bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300'
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
        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
          Referências Visuais (Links de marcas ou projetos inspiradores)
        </label>
        <div className="relative">
          <LinkIcon className="w-5 h-5 absolute left-3 top-3 text-zinc-400" />
          <textarea
            rows={3}
            value={data.references}
            onChange={(e) => updateData({ references: e.target.value })}
            placeholder="Cole aqui links do Instagram, Behance, Vimeo ou sites de referência..."
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
