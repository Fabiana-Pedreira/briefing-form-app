'use client';

import React from 'react';
import { BriefingEsteticaData } from '@/types/briefing';
import { Building2, Sparkles, Clock, MapPin, Users, Award, HeartHandshake } from 'lucide-react';

interface StepProps {
  data: BriefingEsteticaData;
  updateData: (fields: Partial<BriefingEsteticaData>) => void;
  onNext: () => void;
}

export const Step01AboutBusiness: React.FC<StepProps> = ({
  data,
  updateData,
  onNext,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.companyName) {
      alert('Por favor, informe o nome da clínica ou marca.');
      return;
    }
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div className="space-y-1 border-b border-zinc-800 pb-4">
        <span className="text-xs font-black uppercase tracking-widest text-lime-400">
          Sessão 01 de 09
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
          <Building2 className="w-6 h-6 text-red-500" /> 01. Sobre o Negócio
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Entender a estrutura, a história e o momento atual da clínica.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Qual é o nome da clínica ou marca? */}
        <div className="space-y-2 sm:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Qual é o nome da clínica ou marca? <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={data.companyName}
            onChange={(e) => updateData({ companyName: e.target.value })}
            placeholder="Ex: Clínica Dra. Amanda Silva Estética Avançada"
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* Há quanto tempo atua no mercado? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Há quanto tempo atua no mercado?
          </label>
          <div className="relative">
            <Clock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              value={data.yearsInMarket}
              onChange={(e) => updateData({ yearsInMarket: e.target.value })}
              placeholder="Ex: 3 anos (fundada em 2021)"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>
        </div>

        {/* Onde está localizada a clínica? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Onde está localizada a clínica? (Cidade / Bairro)
          </label>
          <div className="relative">
            <MapPin className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              value={data.location}
              onChange={(e) => updateData({ location: e.target.value })}
              placeholder="Ex: São Paulo - SP (Moema)"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>
        </div>

        {/* Trabalha sozinha ou possui equipe? */}
        <div className="space-y-2 sm:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Você trabalha sozinha ou possui uma equipe?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              'Trabalho sozinha (Atendimento individual)',
              'Possuo equipe (Recepcionista, Biomédicas, Esteticistas)',
              'Trabalho em parceria com outros profissionais',
            ].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => updateData({ teamStructure: option })}
                className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                  data.teamStructure === option
                    ? 'border-red-500 bg-red-500/10 text-red-400 font-bold'
                    : 'border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-zinc-700'
                }`}
              >
                {data.teamStructure === option ? '✓ ' : ''}
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Como surgiu o negócio e qual foi a motivação? */}
        <div className="space-y-2 sm:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Como surgiu o negócio e qual foi a motivação para começar?
          </label>
          <textarea
            rows={3}
            value={data.originStory}
            onChange={(e) => updateData({ originStory: e.target.value })}
            placeholder="Conte resumidamente a história da clínica e seu propósito..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* Quais são os principais serviços oferecidos? */}
        <div className="space-y-2 sm:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Quais são os principais serviços oferecidos?
          </label>
          <textarea
            rows={3}
            value={data.mainServices}
            onChange={(e) => updateData({ mainServices: e.target.value })}
            placeholder="Ex: Toxina botulínica, Preenchimento labial, Bioestimuladores de colágeno, Drenagem pós-operatória..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* Qual é o serviço mais vendido atualmente? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Qual é o serviço MAIS VENDIDO atualmente?
          </label>
          <input
            type="text"
            value={data.topSellingService}
            onChange={(e) => updateData({ topSellingService: e.target.value })}
            placeholder="Ex: Botox / Harmonização Facial"
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* Qual serviço você gostaria de vender mais? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1">
            Qual serviço gostaria de VENDER MAIS? <Sparkles className="w-3.5 h-3.5 text-lime-400" />
          </label>
          <input
            type="text"
            value={data.serviceToSellMore}
            onChange={(e) => updateData({ serviceToSellMore: e.target.value })}
            placeholder="Ex: Protocolos corporais de alto ticket / Lipo sem cortes"
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* Qual é o seu principal diferencial? */}
        <div className="space-y-2 sm:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Qual é o seu principal diferencial em relação aos concorrentes?
          </label>
          <textarea
            rows={2}
            value={data.mainDifferential}
            onChange={(e) => updateData({ mainDifferential: e.target.value })}
            placeholder="Ex: Atendimento hiperpersonalizado, produtos importados de alta gama, ambiente exclusivo..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>
      </div>

      <div className="flex justify-end pt-4 border-t border-zinc-800">
        <button
          type="submit"
          className="flex items-center gap-2 px-7 py-3 bg-red-600 hover:bg-red-500 text-white font-extrabold rounded-xl shadow-lg shadow-red-500/20 transition-all text-sm"
        >
          Avançar para Objetivos →
        </button>
      </div>
    </form>
  );
};
