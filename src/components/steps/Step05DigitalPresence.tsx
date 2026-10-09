'use client';

import React from 'react';
import { BriefingEsteticaData } from '@/types/briefing';
import { Share2, Video, Camera, MessageSquare, ShieldAlert, Sparkles } from 'lucide-react';

interface StepProps {
  data: BriefingEsteticaData;
  updateData: (fields: Partial<BriefingEsteticaData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const networkOptions = ['Instagram', 'WhatsApp Business', 'Google Meu Negócio', 'TikTok', 'YouTube', 'Facebook', 'Site Oficial'];
const toneOptions = ['Educativa', 'Sofisticada', 'Próxima e Acolhedora', 'Comercial e Direta'];

export const Step05DigitalPresence: React.FC<StepProps> = ({
  data,
  updateData,
  onNext,
  onPrev,
}) => {
  const toggleNetwork = (net: string) => {
    const exists = data.activeSocialNetworks.includes(net);
    const updated = exists
      ? data.activeSocialNetworks.filter((n) => n !== net)
      : [...data.activeSocialNetworks, net];
    updateData({ activeSocialNetworks: updated });
  };

  const toggleTone = (t: string) => {
    const exists = data.communicationTone.includes(t);
    const updated = exists
      ? data.communicationTone.filter((tone) => tone !== t)
      : [...data.communicationTone, t];
    updateData({ communicationTone: updated });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1 border-b border-zinc-800 pb-4">
        <span className="text-xs font-black uppercase tracking-widest text-lime-400">
          Sessão 05 de 09
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
          <Share2 className="w-6 h-6 text-red-500" /> 05. Presença Digital e Conteúdo
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Avaliar os canais atuais de comunicação e oportunidades de conteúdo.
        </p>
      </div>

      <div className="space-y-6">
        {/* Quais redes sociais a empresa utiliza atualmente? */}
        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Quais redes sociais e canais a empresa utiliza atualmente?
          </label>
          <div className="flex flex-wrap gap-2">
            {networkOptions.map((net) => {
              const active = data.activeSocialNetworks.includes(net);
              return (
                <button
                  key={net}
                  type="button"
                  onClick={() => toggleNetwork(net)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                    active
                      ? 'bg-red-600 text-white border-red-600 font-bold shadow-sm'
                      : 'bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {active ? '✓ ' : '+ '}
                  {net}
                </button>
              );
            })}
          </div>
        </div>

        {/* Qual canal gera mais contatos e agendamentos? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Qual canal gera MAIS CONTATOS E AGENDAMENTOS hoje?
          </label>
          <input
            type="text"
            value={data.topLeadChannel}
            onChange={(e) => updateData({ topLeadChannel: e.target.value })}
            placeholder="Ex: Instagram Direct / Indicação no WhatsApp"
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* Você já investiu em marketing ou anúncios pagos? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Você já investiu em tráfego pago (anúncios no Meta/Google)?
          </label>
          <select
            value={data.paidAdsExperience}
            onChange={(e) => updateData({ paidAdsExperience: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white focus:outline-none focus:ring-2 focus:ring-red-500 text-sm cursor-pointer"
          >
            <option value="Sim, invisto atualmente de forma contínua">Sim, invisto atualmente de forma contínua</option>
            <option value="Já investi no passado, mas parei">Já investi no passado, mas parei</option>
            <option value="Nunca investi em anúncios pagos">Nunca investi em anúncios pagos</option>
          </select>
        </div>

        {/* Você se sente confortável aparecendo em vídeos? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1">
            <Video className="w-4 h-4 text-lime-400" /> Você se sente confortável aparecendo em vídeos?
          </label>
          <select
            value={data.videoComfortLevel}
            onChange={(e) => updateData({ videoComfortLevel: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white focus:outline-none focus:ring-2 focus:ring-red-500 text-sm cursor-pointer"
          >
            <option value="Sim, me sinto super confortável e gravo com frequência">Sim, me sinto confortável e gravo com frequência</option>
            <option value="Às vezes, preciso de roteiro/direção para gravar">Às vezes, preciso de direcionamento/roteiro</option>
            <option value="Não me sinto confortável (Prefiro conteúdos sem minha imagem direta)">Não me sinto confortável (Prefiro conteúdos sem aparecer)</option>
          </select>
        </div>

        {/* Tem fotos e vídeos profissionais dos procedimentos? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1">
            <Camera className="w-4 h-4 text-lime-400" /> Possui acervo de fotos e vídeos profissionais da estrutura/procedimentos?
          </label>
          <input
            type="text"
            value={data.professionalMediaAvailable}
            onChange={(e) => updateData({ professionalMediaAvailable: e.target.value })}
            placeholder="Ex: Sim, fiz ensaio recente / Não, precisamos produzir novo acervo..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* Como gostaria que fosse a comunicação (Tom de voz)? */}
        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Como gostaria que fosse a comunicação visual e de texto?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {toneOptions.map((t) => {
              const active = data.communicationTone.includes(t);
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => toggleTone(t)}
                  className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${
                    active
                      ? 'border-red-500 bg-red-500/10 text-red-400 font-bold'
                      : 'border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-zinc-700'
                  }`}
                >
                  <span>{t}</span>
                  <span className={`text-xs ${active ? 'text-lime-400 font-black' : 'text-zinc-600'}`}>
                    {active ? '☑' : '☐'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Existem restrições sobre imagens, linguagem ou procedimentos? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1">
            <ShieldAlert className="w-4 h-4 text-red-400" /> Existem restrições éticas, conselho profissional ou de imagem?
          </label>
          <textarea
            rows={2}
            value={data.contentRestrictions}
            onChange={(e) => updateData({ contentRestrictions: e.target.value })}
            placeholder="Ex: Respeitar regras do CFM/CFO/CRBM sobre antes e depois, evitar preços abertos em posts..."
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
          Avançar para Comercial →
        </button>
      </div>
    </div>
  );
};
