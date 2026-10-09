'use client';

import React from 'react';
import { BriefingEsteticaData } from '@/types/briefing';
import { Palette, Sparkles, Shield, Eye, Flame } from 'lucide-react';

interface StepProps {
  data: BriefingEsteticaData;
  updateData: (fields: Partial<BriefingEsteticaData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const attributeOptions = [
  'Sofisticação & Elegância',
  'Acolhimento & Humanização',
  'Confiança & Segurança Médica',
  'Modernidade & Tecnologia',
  'Naturalidade & Harmonia',
  'Acessibilidade & Proximidade',
];

export const Step04BrandIdentity: React.FC<StepProps> = ({
  data,
  updateData,
  onNext,
  onPrev,
}) => {
  const toggleAttribute = (option: string) => {
    const exists = data.brandAttributes.includes(option);
    const updated = exists
      ? data.brandAttributes.filter((o) => o !== option)
      : [...data.brandAttributes, option];
    updateData({ brandAttributes: updated });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1 border-b border-zinc-800 pb-4">
        <span className="text-xs font-black uppercase tracking-widest text-lime-400">
          Sessão 04 de 09
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
          <Palette className="w-6 h-6 text-red-500" /> 04. Identidade e Posicionamento da Marca
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Definir como a marca deve ser percebida e desejada pelo mercado.
        </p>
      </div>

      <div className="space-y-6">
        {/* Como você gostaria que as pessoas descrevessem sua marca? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Como você gostaria que as pessoas descrevessem sua marca?
          </label>
          <input
            type="text"
            value={data.desiredBrandPerception}
            onChange={(e) => updateData({ desiredBrandPerception: e.target.value })}
            placeholder="Ex: A clínica mais segura e sofisticada da região para procedimentos faciais..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* Quais três palavras representam a essência do seu negócio? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1">
            <Sparkles className="w-4 h-4 text-lime-400" /> Quais TRÊS PALAVRAS representam a essência do negócio?
          </label>
          <input
            type="text"
            value={data.essenceWords}
            onChange={(e) => updateData({ essenceWords: e.target.value })}
            placeholder="Ex: Naturalidade, Segurança, Elegância"
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* A marca deve transmitir... */}
        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            A marca deve transmitir principalmente:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {attributeOptions.map((opt) => {
              const active = data.brandAttributes.includes(opt);
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleAttribute(opt)}
                  className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${
                    active
                      ? 'border-red-500 bg-red-500/10 text-red-400 font-bold'
                      : 'border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-zinc-700'
                  }`}
                >
                  <span>{opt}</span>
                  <span className={`text-xs ${active ? 'text-lime-400 font-black' : 'text-zinc-600'}`}>
                    {active ? '☑' : '☐'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Você deseja se posicionar como uma clínica... */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Qual é o posicionamento de mercado desejado?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {['Popular / Acessível', 'Intermediária / Competitiva', 'Premium / Alta Gama (Exclusiva)'].map(
              (pos) => (
                <button
                  key={pos}
                  type="button"
                  onClick={() => updateData({ marketPositioning: pos })}
                  className={`p-3 rounded-xl border text-center text-xs font-semibold transition-all ${
                    data.marketPositioning === pos
                      ? 'border-red-500 bg-red-500/10 text-red-400 font-bold'
                      : 'border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-zinc-700'
                  }`}
                >
                  {data.marketPositioning === pos ? '✓ ' : ''}
                  {pos}
                </button>
              )
            )}
          </div>
        </div>

        {/* História ou propósito por trás da marca */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Existe uma história ou propósito por trás da marca que devemos contar?
          </label>
          <textarea
            rows={2}
            value={data.brandStoryPurpose}
            onChange={(e) => updateData({ brandStoryPurpose: e.target.value })}
            placeholder="Ex: Transformar a autoestima de mulheres maduras com procedimentos sutis..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* Há cores, símbolos ou elementos visuais que deseja manter? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Cores, símbolos ou elementos visuais que deseja MANTER no projeto:
          </label>
          <input
            type="text"
            value={data.elementsToKeep}
            onChange={(e) => updateData({ elementsToKeep: e.target.value })}
            placeholder="Ex: Logo atual, tons de Dourado e Nude, símbolo de flor de lótus..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* O que você NÃO gostaria que a sua marca transmitisse? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1">
            <Flame className="w-4 h-4 text-red-500" /> O que você NÃO GOSTARIA que a sua marca transmitisse?
          </label>
          <input
            type="text"
            value={data.whatNotToTransmit}
            onChange={(e) => updateData({ whatNotToTransmit: e.target.value })}
            placeholder="Ex: Aspecto de 'clínica popular de shopping', promessas milagrosas, visual artificial..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* Quais marcas ou clínicas são referências para você? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Quais marcas ou clínicas são REFERÊNCIAS para você? Por quê?
          </label>
          <textarea
            rows={2}
            value={data.referenceClinics}
            onChange={(e) => updateData({ referenceClinics: e.target.value })}
            placeholder="Ex: Clínica @exemplo no Instagram (pela estética limpa e vídeos educativos)..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* O que diferencia a experiência oferecida? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            O que diferencia a experiência oferecida na sua clínica?
          </label>
          <input
            type="text"
            value={data.experienceDifferential}
            onChange={(e) => updateData({ experienceDifferential: e.target.value })}
            placeholder="Ex: Cappuccino especial, aromaterapia exclusiva na sala, música relaxante, pós-procedimento..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>
      </div>

      <div className="flex justify-between pt-4 border-t border-zinc-800">
        <button
          type="button"
          onClick={onPrev}
          className="px-6 py-3 border border-zinc-800 hover:bg-zinc-900 text-zinc-300 font-semibold rounded-xl text-sm"
        >
          ← Voltar
        </button>
        <button
          type="button"
          onClick={onNext}
          className="px-7 py-3 bg-red-600 hover:bg-red-500 text-white font-extrabold rounded-xl shadow-lg shadow-red-500/20 text-sm"
        >
          Avançar para Presença Digital →
        </button>
      </div>
    </div>
  );
};
