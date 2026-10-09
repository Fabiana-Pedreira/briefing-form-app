'use client';

import React, { useState } from 'react';
import { BriefingEsteticaData } from '@/types/briefing';
import {
  Send,
  Download,
  Copy,
  CheckCircle2,
  AlertCircle,
  Building2,
  Target,
  Users,
  Palette,
  Share2,
  MessageSquare,
  Shield,
  DollarSign,
  HeartPulse,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface StepProps {
  data: BriefingEsteticaData;
  onPrev: () => void;
  onReset: () => void;
}

export const Step10ReviewSubmit: React.FC<StepProps> = ({
  data,
  onPrev,
  onReset,
}) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [briefingId, setBriefingId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async () => {
    setSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/briefing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'estetica', ...data }),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSubmitted(true);
        setBriefingId(resData.briefingId);
        confetti({
          particleCount: 140,
          spread: 90,
          origin: { y: 0.6 },
          colors: ['#ef4444', '#a3e635', '#ffffff'],
        });
      } else {
        setErrorMessage(resData.error || 'Ocorreu um erro ao enviar o briefing.');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Falha na conexão com o servidor da Vercel.');
    } finally {
      setSubmitting(false);
    }
  };

  const copyMarkdown = () => {
    const md = `# 📄 BRIEFING DE ESTÉTICA & SAÚDE - FRAME MÍDIA
**Clínica/Marca:** ${data.companyName}
**Localização:** ${data.location || 'Não informada'}
**Tempo de Mercado:** ${data.yearsInMarket || 'Não informado'}

---

## 01. Sobre o Negócio
- **Serviços Principais:** ${data.mainServices}
- **Serviço Mais Vendido:** ${data.topSellingService}
- **Serviço para Vender Mais:** ${data.serviceToSellMore}
- **Diferencial:** ${data.mainDifferential}

## 02. Objetivos
- **Objetivos 6-12 meses:** ${data.goalsNextMonths}
- **Foco de Crescimento:** ${data.growthFocus.join(', ')}
- **Meta Faturamento:** ${data.monthlyRevenueTarget} | **Novos Clientes/mês:** ${data.newClientsMonthlyTarget}

## 03. Público-Alvo
- **Cliente Ideal:** ${data.idealClientProfile}
- **Faixa Etária / Gênero:** ${data.ageRange} (${data.genderAudience})
- **Poder Aquisitivo:** ${data.purchasingPower}
- **Queixas Estéticas:** ${data.aestheticComplaints}

## 04. Identidade & Posicionamento
- **Essência:** ${data.essenceWords}
- **Atributos:** ${data.brandAttributes.join(', ')}
- **Posicionamento:** ${data.marketPositioning}

## 05. Presença Digital
- **Canais Ativos:** ${data.activeSocialNetworks.join(', ')}
- **Conforto em Vídeos:** ${data.videoComfortLevel}
- **Tom de Comunicação:** ${data.communicationTone.join(', ')}

## 06. Comercial & Atendimento
- **Responsável Comercial:** ${data.salesAttendant}
- **Tempo de Resposta:** ${data.avgResponseTime}
- **Motivos de Perda de Venda:** ${data.lostSalesReasons}

## 07. Concorrência
- **Principais Concorrentes:** ${data.mainCompetitors}
- **Fator Competitivo:** ${data.competitiveEdgeType}

## 08. Investimento & Recursos
- **Gestão de Marketing:** ${data.agencyMonthlyBudget}
- **Verba para Anúncios (Ads):** ${data.paidAdsMonthlyBudget}

## 09. Estratégias Específicas de Estética
- **Maior Margem de Lucro:** ${data.highestProfitMarginServices}
- **Porta de Entrada (Chama-cliente):** ${data.entryLeadMagnetServices}
- **Ticket Médio por Cliente:** ${data.avgTicketPerClient}
- **Normas & Fotos Antes/Depois:** ${data.beforeAfterPolicy}
`;
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadJSON = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(data, null, 2)
    )}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute(
      'download',
      `briefing-estetica-${data.companyName.toLowerCase().replace(/\s+/g, '-') || 'clinica'}.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const openWhatsAppSend = () => {
    const message = `Olá equipe Frame Mídia! 🚀 Finalizei o preenchimento do Briefing de Estética & Saúde (#${briefingId}).

*Empresa:* ${data.companyName}
*Localização:* ${data.location || 'Não informada'}
*Objetivo Principais:* ${data.goalsNextMonths || 'Não informado'}
*Serviço para Vender Mais:* ${data.serviceToSellMore || 'Não informado'}

Gostaria de agendar nossa reunião de alinhamento!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
  };

  if (submitted) {
    return (
      <div className="text-center py-10 space-y-6 animate-fade-in">
        <div className="w-20 h-20 mx-auto rounded-full bg-lime-500/10 dark:bg-lime-500/20 text-lime-400 flex items-center justify-center ring-8 ring-lime-500/10">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2 max-w-md mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Diagnóstico de Estética Recebido! 🎉
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Todas as 09 sessões foram registradas sob o protocolo{' '}
            <strong className="text-red-500 font-mono font-black">
              #{briefingId}
            </strong>
            . A equipe da Frame Mídia analisará as oportunidades do seu negócio!
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <button
            onClick={openWhatsAppSend}
            className="flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-xl text-sm transition-all shadow-lg shadow-emerald-600/20"
          >
            <MessageCircle className="w-4 h-4" />
            Enviar Confirmação no WhatsApp da Agência
          </button>

          <button
            onClick={copyMarkdown}
            className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-semibold rounded-xl text-sm transition-all border border-zinc-800"
          >
            <Copy className="w-4 h-4 text-red-500" />
            {copied ? 'Markdown Copiado!' : 'Copiar Resumo em Markdown'}
          </button>

          <button
            onClick={downloadJSON}
            className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-semibold rounded-xl text-sm transition-all border border-zinc-800"
          >
            <Download className="w-4 h-4 text-lime-400" />
            Baixar JSON Completo
          </button>

          <button
            onClick={onReset}
            className="px-4 py-2.5 bg-red-600 hover:bg-red-500 text-white font-extrabold rounded-xl text-sm transition-all shadow-md shadow-red-500/20"
          >
            Novo Diagnóstico
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1 border-b border-zinc-800 pb-4">
        <span className="text-xs font-black uppercase tracking-widest text-lime-400">
          Revisão Final • 09 Sessões Preenchidas
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
          <Send className="w-6 h-6 text-red-500" /> 10. Envio do Diagnóstico Estratégico
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Confira o resumo geral das 09 sessões antes de submeter para a equipe da Frame Mídia.
        </p>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm flex items-center gap-3">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Grid de Resumo das 9 Sessões */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
        <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
          <span className="font-extrabold text-red-500 flex items-center gap-1">
            <Building2 className="w-3.5 h-3.5 text-lime-400" /> 01. Empresa
          </span>
          <p className="text-white font-bold">{data.companyName || 'Não informado'}</p>
          <p className="text-zinc-400">{data.location}</p>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
          <span className="font-extrabold text-red-500 flex items-center gap-1">
            <Target className="w-3.5 h-3.5 text-lime-400" /> 02. Objetivos
          </span>
          <p className="text-white font-bold">{data.growthFocus.join(', ')}</p>
          <p className="text-zinc-400">Meta: {data.monthlyRevenueTarget || 'N/A'}</p>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
          <span className="font-extrabold text-red-500 flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-lime-400" /> 03. Público
          </span>
          <p className="text-white font-bold">{data.ageRange} ({data.genderAudience})</p>
          <p className="text-zinc-400">{data.purchasingPower}</p>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
          <span className="font-extrabold text-red-500 flex items-center gap-1">
            <Palette className="w-3.5 h-3.5 text-lime-400" /> 04. Posicionamento
          </span>
          <p className="text-white font-bold">{data.marketPositioning}</p>
          <p className="text-zinc-400">{data.brandAttributes.join(', ')}</p>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
          <span className="font-extrabold text-red-500 flex items-center gap-1">
            <Share2 className="w-3.5 h-3.5 text-lime-400" /> 05. Digital
          </span>
          <p className="text-white font-bold">{data.activeSocialNetworks.join(', ')}</p>
          <p className="text-zinc-400">Vídeos: {data.videoComfortLevel}</p>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
          <span className="font-extrabold text-red-500 flex items-center gap-1">
            <MessageSquare className="w-3.5 h-3.5 text-lime-400" /> 06. Comercial
          </span>
          <p className="text-white font-bold">Canal: {data.leadContactChannels.join(', ')}</p>
          <p className="text-zinc-400">Tempo: {data.avgResponseTime}</p>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
          <span className="font-extrabold text-red-500 flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-lime-400" /> 07. Mercado
          </span>
          <p className="text-white font-bold">Fator: {data.competitiveEdgeType}</p>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
          <span className="font-extrabold text-red-500 flex items-center gap-1">
            <DollarSign className="w-3.5 h-3.5 text-lime-400" /> 08. Investimento
          </span>
          <p className="text-white font-bold">Gestão: {data.agencyMonthlyBudget}</p>
          <p className="text-zinc-400">Ads: {data.paidAdsMonthlyBudget}</p>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
          <span className="font-extrabold text-red-500 flex items-center gap-1">
            <HeartPulse className="w-3.5 h-3.5 text-lime-400" /> 09. Estética
          </span>
          <p className="text-white font-bold">Margem Alta: {data.highestProfitMarginServices || 'N/A'}</p>
          <p className="text-zinc-400">Chama-cliente: {data.entryLeadMagnetServices || 'N/A'}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-800">
        <button
          type="button"
          onClick={onPrev}
          disabled={submitting}
          className="w-full sm:w-auto px-6 py-3 border border-zinc-800 hover:bg-zinc-900 text-zinc-300 font-semibold rounded-xl text-sm"
        >
          ← Ajustar Respostas
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white font-black rounded-xl shadow-xl shadow-red-500/25 transition-all text-sm disabled:opacity-50"
        >
          {submitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Processando Diagnóstico...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-lime-400" /> Enviar Diagnóstico Completo (Frame Mídia)
            </>
          )}
        </button>
      </div>
    </div>
  );
};
