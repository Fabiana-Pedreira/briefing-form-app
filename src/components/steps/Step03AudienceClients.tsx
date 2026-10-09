'use client';

import React from 'react';
import { BriefingEsteticaData } from '@/types/briefing';
import { Users, Heart, AlertCircle, Sparkles } from 'lucide-react';

interface StepProps {
  data: BriefingEsteticaData;
  updateData: (fields: Partial<BriefingEsteticaData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const clientValuesOptions = [
  'Resultados Visíveis e Rápidos',
  'Confiança, Segurança e Credibilidade',
  'Qualidade dos Produtos & Alta Tecnologia',
  'Exclusividade e Atendimento Vip',
  'Preço Acessível / Condições de Pagamento',
];

export const Step03AudienceClients: React.FC<StepProps> = ({
  data,
  updateData,
  onNext,
  onPrev,
}) => {
  const toggleValue = (option: string) => {
    const exists = data.clientValues.includes(option);
    const updated = exists
      ? data.clientValues.filter((o) => o !== option)
      : [...data.clientValues, option];
    updateData({ clientValues: updated });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1 border-b border-zinc-800 pb-4">
        <span className="text-xs font-black uppercase tracking-widest text-lime-400">
          Sessão 03 de 09
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
          <Users className="w-6 h-6 text-red-500" /> 03. Público-Alvo e Clientes
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Descobrir quem compra, por que compra e o que influencia a decisão de escolha.
        </p>
      </div>

      <div className="space-y-6">
        {/* Quem é o cliente ideal da sua clínica? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Quem é o cliente ideal da sua clínica?
          </label>
          <textarea
            rows={3}
            value={data.idealClientProfile}
            onChange={(e) => updateData({ idealClientProfile: e.target.value })}
            placeholder="Ex: Mulheres de 30 a 50 anos, vaidosas, ocupadas, que buscam rejuvenescimento natural sem exageros..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Faixa etária */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
              Faixa etária predominante
            </label>
            <input
              type="text"
              value={data.ageRange}
              onChange={(e) => updateData({ ageRange: e.target.value })}
              placeholder="Ex: 25 a 45 anos"
              className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>

          {/* Gênero do público */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
              Gênero do público
            </label>
            <select
              value={data.genderAudience}
              onChange={(e) => updateData({ genderAudience: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white focus:outline-none focus:ring-2 focus:ring-red-500 text-sm cursor-pointer"
            >
              <option value="Predominantemente Feminino">Predominantemente Feminino</option>
              <option value="Predominantemente Masculino">Predominantemente Masculino</option>
              <option value="Público Misto (Feminino e Masculino)">Público Misto</option>
            </select>
          </div>

          {/* Poder aquisitivo */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
              Poder aquisitivo estimado
            </label>
            <input
              type="text"
              value={data.purchasingPower}
              onChange={(e) => updateData({ purchasingPower: e.target.value })}
              placeholder="Ex: Classe A/B (Médio-Alto)"
              className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>
        </div>

        {/* Em quais bairros ou cidades seus clientes estão? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Em quais bairros ou cidades seus clientes estão concentrados?
          </label>
          <input
            type="text"
            value={data.neighborhoodsCities}
            onChange={(e) => updateData({ neighborhoodsCities: e.target.value })}
            placeholder="Ex: Bairros nobres da região sul ou cidades vizinhas num raio de 20km..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* Quais são as principais queixas estéticas dos clientes? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Quais são as principais queixas estéticas relatadas na avaliação?
          </label>
          <textarea
            rows={2}
            value={data.aestheticComplaints}
            onChange={(e) => updateData({ aestheticComplaints: e.target.value })}
            placeholder="Ex: Rugas de expressão, lábios finos, flacidez corporal, gordura localizada, manchas/melasma..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* O que eles mais valorizam? */}
        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            O que eles MAIS VALORIZAM na decisão de compra?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {clientValuesOptions.map((opt) => {
              const active = data.clientValues.includes(opt);
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleValue(opt)}
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

        {/* Quais são as principais dúvidas e objeções antes de fechar? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1">
            <AlertCircle className="w-4 h-4 text-red-400" /> Quais são as maiores dúvidas e objeções antes de fechar?
          </label>
          <textarea
            rows={2}
            value={data.objectionsBeforeBuying}
            onChange={(e) => updateData({ objectionsBeforeBuying: e.target.value })}
            placeholder="Ex: Medo de ficar artificial, medo de dor, preço elevado, incerteza sobre o tempo de recuperação..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* Por que os clientes escolhem você em vez de outra clínica? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Por que os clientes escolhem VOCÊ em vez de outra clínica?
          </label>
          <textarea
            rows={2}
            value={data.whyChooseYou}
            onChange={(e) => updateData({ whyChooseYou: e.target.value })}
            placeholder="Ex: Confiança na profissional, indicação de amigas, vídeos explicativos detalhados, resultados naturais..."
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
          Avançar para Identidade →
        </button>
      </div>
    </div>
  );
};
