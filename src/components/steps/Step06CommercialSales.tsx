'use client';

import React from 'react';
import { BriefingEsteticaData } from '@/types/briefing';
import { MessageSquare, PhoneCall, Clock, CheckCircle2, RefreshCw } from 'lucide-react';

interface StepProps {
  data: BriefingEsteticaData;
  updateData: (fields: Partial<BriefingEsteticaData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const channelOptions = ['WhatsApp', 'Instagram Direct', 'Ligação Telefônica', 'Formulário do Site', 'Presencialmente na Clínica'];

export const Step06CommercialSales: React.FC<StepProps> = ({
  data,
  updateData,
  onNext,
  onPrev,
}) => {
  const toggleChannel = (c: string) => {
    const exists = data.leadContactChannels.includes(c);
    const updated = exists
      ? data.leadContactChannels.filter((ch) => ch !== c)
      : [...data.leadContactChannels, c];
    updateData({ leadContactChannels: updated });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1 border-b border-zinc-800 pb-4">
        <span className="text-xs font-black uppercase tracking-widest text-lime-400">
          Sessão 06 de 09
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-red-500" /> 06. Comercial e Atendimento
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Entender como os contatos de potenciais clientes se transformam em agendamentos e vendas.
        </p>
      </div>

      <div className="space-y-6">
        {/* Por onde os clientes costumam entrar em contato? */}
        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Por onde os clientes costumam entrar em contato?
          </label>
          <div className="flex flex-wrap gap-2">
            {channelOptions.map((ch) => {
              const active = data.leadContactChannels.includes(ch);
              return (
                <button
                  key={ch}
                  type="button"
                  onClick={() => toggleChannel(ch)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                    active
                      ? 'bg-red-600 text-white border-red-600 font-bold shadow-sm'
                      : 'bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {active ? '✓ ' : '+ '}
                  {ch}
                </button>
              );
            })}
          </div>
        </div>

        {/* Quem é responsável pelo atendimento? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Quem é responsável pelo atendimento comercial e agendamentos?
          </label>
          <input
            type="text"
            value={data.salesAttendant}
            onChange={(e) => updateData({ salesAttendant: e.target.value })}
            placeholder="Ex: Eu mesma / Secretária / Equipe comercial dedicada"
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* Processo de resposta & tempo médio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
              Existe processo/script definido para responder?
            </label>
            <select
              value={data.definedSalesProcess}
              onChange={(e) => updateData({ definedSalesProcess: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white focus:outline-none focus:ring-2 focus:ring-red-500 text-sm cursor-pointer"
            >
              <option value="Sim, temos script padrão e tabela de preços fácil">Sim, script estruturado</option>
              <option value="Parcialmente, respondemos de forma personalizada">Respondemos pontualmente</option>
              <option value="Não, precisamos estruturar um processo comercial">Não temos processo comercial padronizado</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1">
              <Clock className="w-4 h-4 text-lime-400" /> Tempo médio de resposta aos contatos
            </label>
            <input
              type="text"
              value={data.avgResponseTime}
              onChange={(e) => updateData({ avgResponseTime: e.target.value })}
              placeholder="Ex: Em até 15 minutos / Ao longo do dia"
              className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>
        </div>

        {/* Como é feito o acompanhamento de quem não agenda? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Como é feito o acompanhamento (follow-up) de quem demonstra interesse mas não agenda?
          </label>
          <textarea
            rows={2}
            value={data.followUpProcess}
            onChange={(e) => updateData({ followUpProcess: e.target.value })}
            placeholder="Ex: Enviamos mensagem após 24h oferecendo dúvida, fazemos contato semanal..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* Quais são os motivos mais comuns para perder uma venda? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
            Quais são os motivos mais comuns para perder uma venda/agendamento?
          </label>
          <input
            type="text"
            value={data.lostSalesReasons}
            onChange={(e) => updateData({ lostSalesReasons: e.target.value })}
            placeholder="Ex: Preço achado alto, falta de horário na agenda, distância física..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        {/* Existe uma estratégia de retorno para clientes antigos? */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1">
            <RefreshCw className="w-4 h-4 text-lime-400" /> Existe estratégia de retorno / pós-venda para clientes antigos?
          </label>
          <input
            type="text"
            value={data.winbackStrategy}
            onChange={(e) => updateData({ winbackStrategy: e.target.value })}
            placeholder="Ex: Mensagem de retoque do Botox após 4 a 6 meses, felicitações de aniversário..."
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
          Avançar para Concorrência →
        </button>
      </div>
    </div>
  );
};
