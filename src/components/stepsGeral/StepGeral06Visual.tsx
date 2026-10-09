'use client';

import React from 'react';
import { BriefingGeralData } from '@/types/briefing';
import { Palette, MessageSquare, Image, ShieldAlert } from 'lucide-react';

interface StepProps {
  data: BriefingGeralData;
  updateData: (fields: Partial<BriefingGeralData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const toneOptions = ['Formal', 'Descontraído', 'Educativo', 'Técnico', 'Próximo / Acolhedor', 'Inspirador'];

export const StepGeral06Visual: React.FC<StepProps> = ({
  data,
  updateData,
  onNext,
  onPrev,
}) => {
  const toggleTone = (tone: string) => {
    const exists = data.brandToneOfVoice.includes(tone);
    const updated = exists
      ? data.brandToneOfVoice.filter((t) => t !== tone)
      : [...data.brandToneOfVoice, tone];
    updateData({ brandToneOfVoice: updated });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1 border-b border-zinc-800 pb-4">
        <span className="text-xs font-black uppercase tracking-widest text-lime-400">
          Briefing Geral • Sessão 06 de 11
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
          <Palette className="w-6 h-6 text-red-500" /> 06. Identidade Visual e Comunicação
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Compreender a linguagem visual e verbal que representa e traduz a essência da marca.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            A empresa possui identidade visual definida? (Logotipo, manual, paleta)
          </label>
          <input
            type="text"
            value={data.hasVisualIdentity}
            onChange={(e) => updateData({ hasVisualIdentity: e.target.value })}
            placeholder="Ex: Sim, temos manual completo / Não, precisamos criar ou reformular..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Como deve ser o tom de voz da marca na comunicação?
          </label>
          <div className="flex flex-wrap gap-2">
            {toneOptions.map((tone) => {
              const active = data.brandToneOfVoice.includes(tone);
              return (
                <button
                  key={tone}
                  type="button"
                  onClick={() => toggleTone(tone)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                    active
                      ? 'bg-red-600 text-white border-red-600 font-bold'
                      : 'bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {active ? '✓ ' : '+ '}
                  {tone}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Quais temas, expressões ou abordagens devem ser EVITADOS na comunicação?
          </label>
          <input
            type="text"
            value={data.topicsToAvoid}
            onChange={(e) => updateData({ topicsToAvoid: e.target.value })}
            placeholder="Ex: Gírias excessivas, polêmicas políticas, linguagem excessivamente técnica..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Quem é responsável por aprovar as peças e os materiais de comunicação?
          </label>
          <input
            type="text"
            value={data.approvalResponsiblePerson}
            onChange={(e) => updateData({ approvalResponsiblePerson: e.target.value })}
            placeholder="Ex: Diretor de Marketing / Sócio Fundador"
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
