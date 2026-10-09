'use client';

import React from 'react';
import { BriefingEsteticaData } from '@/types/briefing';
import { Sparkles, HeartPulse, ShieldCheck, Flame, Layers } from 'lucide-react';

interface StepProps {
  data: BriefingEsteticaData;
  updateData: (fields: Partial<BriefingEsteticaData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Step09AestheticStrategy: React.FC<StepProps> = ({
  data,
  updateData,
  onNext,
  onPrev,
}) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1 border-b border-zinc-800 pb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-lime-500/15 text-lime-400 border border-lime-500/30">
          <Sparkles className="w-3.5 h-3.5 text-red-500" /> Sessão 09 de 09 • Exclusivo Estética
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2 pt-1">
          <HeartPulse className="w-6 h-6 text-red-500" /> 09. Perguntas Estratégicas para Estética
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Identificar oportunidades comerciais de alta margem de lucro e regulatórias.
        </p>
      </div>

      <div className="space-y-6">
        {/* Quais procedimentos têm maior margem de lucro? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1">
            <Flame className="w-4 h-4 text-red-500" /> Quais procedimentos possuem MAIOR MARGEM DE LUCRO?
          </label>
          <input
            type="text"
            value={data.highestProfitMarginServices}
            onChange={(e) => updateData({ highestProfitMarginServices: e.target.value })}
            placeholder="Ex: Bioestimuladores de colágeno, Lavieen, Fios de Sustentação..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* Quais serviços atraem novos clientes que depois compram outros procedimentos? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1">
            <Sparkles className="w-4 h-4 text-lime-400" /> Quais serviços servem como 'PORTA DE ENTRADA' (Chama-cliente)?
          </label>
          <input
            type="text"
            value={data.entryLeadMagnetServices}
            onChange={(e) => updateData({ entryLeadMagnetServices: e.target.value })}
            placeholder="Ex: Limpeza de pele profunda, Toxina botulínica (Botox), Peelings..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* Existem protocolos ou pacotes que você deseja fortalecer? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Existem protocolos exclusivos ou pacotes que você deseja fortalecer?
          </label>
          <textarea
            rows={2}
            value={data.packagesToStrengthen}
            onChange={(e) => updateData({ packagesToStrengthen: e.target.value })}
            placeholder="Ex: Protocolo 'Glow de Noiva', Plano Anual de Gerenciamento de Envelhecimento..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* Ticket médio atual por cliente */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
              Qual é o TICKET MÉDIO atual por cliente (R$)?
            </label>
            <input
              type="text"
              value={data.avgTicketPerClient}
              onChange={(e) => updateData({ avgTicketPerClient: e.target.value })}
              placeholder="Ex: R$ 1.200 a R$ 2.500 por sessão/plano"
              className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
              Perfil de compra dos clientes
            </label>
            <select
              value={data.purchasePattern}
              onChange={(e) => updateData({ purchasePattern: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white focus:outline-none focus:ring-2 focus:ring-red-500 text-sm cursor-pointer"
            >
              <option value="Misto (Procedimentos pontuais e planos de tratamento)">Misto (Pontual e Tratamento contínuo)</option>
              <option value="Predominantemente Compras Pontuais (Sessão única)">Predominantemente Compras Pontuais</option>
              <option value="Predominantemente Planos / Tratamentos Recorrentes">Predominantemente Planos Recorrentes</option>
            </select>
          </div>
        </div>

        {/* Divulgação de resultados de antes e depois */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-lime-400" /> Como é tratada a divulgação de Antes & Depois na clínica?
          </label>
          <textarea
            rows={2}
            value={data.beforeAfterPolicy}
            onChange={(e) => updateData({ beforeAfterPolicy: e.target.value })}
            placeholder="Ex: Temos termo de autorização assinado por 100% dos pacientes, seguimos diretrizes do conselho..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* Habilitação dos profissionais */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Quais profissionais realizam os procedimentos e suas habilitações?
          </label>
          <input
            type="text"
            value={data.professionalsCredentials}
            onChange={(e) => updateData({ professionalsCredentials: e.target.value })}
            placeholder="Ex: Dra. Amanda (Médica Dermatologista CRM-SP XXXXX) / Dra. Patricia (Biomédica CRBM XXXXX)"
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* Capacidade de atendimento para novos clientes */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            A clínica possui capacidade operacional para absorver um aumento de demanda?
          </label>
          <input
            type="text"
            value={data.capacityForIncreasedDemand}
            onChange={(e) => updateData({ capacityForIncreasedDemand: e.target.value })}
            placeholder="Ex: Sim, temos salas disponíveis e horários vagos em 2 turnos..."
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
          Revisar Diagnóstico Completo →
        </button>
      </div>
    </div>
  );
};
