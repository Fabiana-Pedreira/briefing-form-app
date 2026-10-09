'use client';

import React from 'react';
import { BriefingGeralData } from '@/types/briefing';
import { Palette, Sparkles, Award } from 'lucide-react';

interface StepProps {
  data: BriefingGeralData;
  updateData: (fields: Partial<BriefingGeralData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const traitOptions = ['Inovadora', 'Confiável', 'Profissional', 'Exclusiva / Premium', 'Humana / Acolhedora', 'Técnica / Especialista', 'Jovem / Descontraída'];

export const StepGeral02Identity: React.FC<StepProps> = ({
  data,
  updateData,
  onNext,
  onPrev,
}) => {
  const toggleTrait = (trait: string) => {
    const exists = data.brandPersonalityTraits.includes(trait);
    const updated = exists
      ? data.brandPersonalityTraits.filter((t) => t !== trait)
      : [...data.brandPersonalityTraits, trait];
    updateData({ brandPersonalityTraits: updated });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1 border-b border-zinc-800 pb-4">
        <span className="text-xs font-black uppercase tracking-widest text-lime-400">
          Briefing Geral • Sessão 02 de 11
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
          <Palette className="w-6 h-6 text-red-500" /> 02. Identidade, Essência e Posicionamento
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Descobrir o que torna a marca única e como ela deseja ser percebida no mercado.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Qual é o propósito da marca além de vender produtos ou serviços?
          </label>
          <textarea
            rows={2}
            value={data.brandPurpose}
            onChange={(e) => updateData({ brandPurpose: e.target.value })}
            placeholder="Ex: Transformar a eficiência operacional das empresas parceiras..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Qual problema a empresa resolve para seus clientes?
          </label>
          <input
            type="text"
            value={data.customerProblemSolved}
            onChange={(e) => updateData({ customerProblemSolved: e.target.value })}
            placeholder="Ex: Evita desperdício de tempo e traz previsibilidade de caixa..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Quais características melhor representam a personalidade da marca?
          </label>
          <div className="flex flex-wrap gap-2">
            {traitOptions.map((trait) => {
              const active = data.brandPersonalityTraits.includes(trait);
              return (
                <button
                  key={trait}
                  type="button"
                  onClick={() => toggleTrait(trait)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                    active
                      ? 'bg-red-600 text-white border-red-600 font-bold'
                      : 'bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {active ? '✓ ' : '+ '}
                  {trait}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Como você gostaria que as pessoas descrevessem sua empresa?
          </label>
          <input
            type="text"
            value={data.desiredPeopleDescription}
            onChange={(e) => updateData({ desiredPeopleDescription: e.target.value })}
            placeholder="Ex: A parceira mais segura e inovadora do setor..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Se a marca fosse uma pessoa, como seria sua personalidade e forma de se comunicar?
          </label>
          <textarea
            rows={2}
            value={data.brandIfPersonPersonality}
            onChange={(e) => updateData({ brandIfPersonPersonality: e.target.value })}
            placeholder="Ex: Um consultor experiente, direto ao ponto, elegante e acessível..."
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
          Avançar para Produtos & Serviços →
        </button>
      </div>
    </div>
  );
};
