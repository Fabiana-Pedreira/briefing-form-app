'use client';

import React, { useState } from 'react';
import { BriefingGeralData } from '@/types/briefing';
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
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface StepProps {
  data: BriefingGeralData;
  onPrev: () => void;
  onReset: () => void;
}

export const StepGeral12ReviewSubmit: React.FC<StepProps> = ({
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
        body: JSON.stringify({ type: 'geral', ...data }),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSubmitted(true);
        setBriefingId(resData.briefingId);
        confetti({
          particleCount: 150,
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
    const md = `# 📄 BRIEFING GERAL DE NEGÓCIOS - FRAME MÍDIA
**Empresa / Marca:** ${data.companyName}
**Segmento:** ${data.industrySegment || 'Não informado'}
**Localização:** ${data.locationCoverage || 'Não informada'}
**Momento Atual:** ${data.currentPhase}

---

## 01. Identificação e História
- **Tempo de Mercado:** ${data.timeInBusiness || 'Não informado'}
- **Principal Produto/Serviço:** ${data.mainProductService || 'Não informado'}
- **Desafios Atuais:** ${data.currentMainChallenges || 'Não informado'}

## 02. Identidade & Posicionamento
- **Propósito da Marca:** ${data.brandPurpose || 'Não informado'}
- **Atributos de Personalidade:** ${data.brandPersonalityTraits.join(', ')}
- **Posicionamento:** ${data.desiredMarketPositioning}

## 03. Produtos & Proposta de Valor
- **Mais Vendidos:** ${data.topSellingProducts || 'Não informado'}
- **Oportunidades de Crescimento:** ${data.growthOpportunityProducts || 'Não informado'}
- **Faixa de Preço:** ${data.priceRange || 'Não informada'}

## 04. Público-Alvo
- **Cliente Ideal:** ${data.idealClientToConquer || 'Não informado'}
- **Perfil Socioeconômico:** ${data.ageAndSocioeconomicProfile || 'Não informado'}

## 05. Objetivos
- **Metas 6-12 Meses:** ${data.goals6to12Months || 'Não informado'}
- **Foco de Crescimento:** ${data.primaryGrowthFocus.join(', ')}

## 06. Identidade Visual
- **Identidade Existente:** ${data.hasVisualIdentity}
- **Tom de Voz:** ${data.brandToneOfVoice.join(', ')}

## 07. Presença Digital
- **Canais:** ${data.currentDigitalChannels.join(', ')}
- **Ferramentas Usadas:** ${data.toolsUsed.join(', ')}

## 08. Vendas & Relacionamento
- **Entrada de Leads:** ${data.howClientsArriveNow || 'Não informado'}
- **Follow-up:** ${data.structuredFollowUpProcess || 'Não informado'}

## 09. Concorrência
- **Principais Concorrentes:** ${data.directCompetitors || 'Não informado'}

## 10. Investimento & Recursos
- **Gestão de Marketing:** ${data.monthlyMarketingBudget}
- **Verba para Anúncios Ads:** ${data.monthlyPaidAdsBudget}
- **Contato Principal:** ${data.frameMidiaMainContact || 'Não informado'}

## 11. Alinhamento & Expectativas
- **Motivação:** ${data.motivationForFrameMidiaNow || 'Não informada'}
- **Relatórios:** ${data.reportingFormatFrequency}
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
      `briefing-geral-${data.companyName.toLowerCase().replace(/\s+/g, '-') || 'empresa'}.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const openWhatsAppSend = () => {
    const message = `Olá equipe Frame Mídia! 🚀 Concluí o preenchimento do Briefing Geral de Negócios (#${briefingId}).

*Empresa:* ${data.companyName}
*Segmento:* ${data.industrySegment || 'Não informado'}
*Objetivo Principais:* ${data.goals6to12Months || 'Não informado'}

Gostaria de agendar nosso alinhamento estratégico!`;

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
            Briefing Geral Recebido! 🎉
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            As 11 sessões foram registradas sob o protocolo{' '}
            <strong className="text-red-500 font-mono font-black">
              #{briefingId}
            </strong>
            . A equipe da Frame Mídia iniciará a análise estratégica do seu negócio!
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
            Novo Briefing
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1 border-b border-zinc-800 pb-4">
        <span className="text-xs font-black uppercase tracking-widest text-lime-400">
          Revisão Final • 11 Sessões Preenchidas
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
          <Send className="w-6 h-6 text-red-500" /> 12. Envio do Briefing Geral
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Confira o resumo das 11 sessões antes de submeter para a equipe da Frame Mídia.
        </p>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm flex items-center gap-3">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Grid de Resumo das 11 Sessões */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
        <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
          <span className="font-extrabold text-red-500 flex items-center gap-1">
            <Building2 className="w-3.5 h-3.5 text-lime-400" /> 01. Empresa
          </span>
          <p className="text-white font-bold">{data.companyName || 'Não informado'}</p>
          <p className="text-zinc-400">Fase: {data.currentPhase}</p>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
          <span className="font-extrabold text-red-500 flex items-center gap-1">
            <Palette className="w-3.5 h-3.5 text-lime-400" /> 02. Posicionamento
          </span>
          <p className="text-white font-bold">{data.desiredMarketPositioning}</p>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
          <span className="font-extrabold text-red-500 flex items-center gap-1">
            <Target className="w-3.5 h-3.5 text-lime-400" /> 05. Objetivos
          </span>
          <p className="text-white font-bold">{data.primaryGrowthFocus.join(', ')}</p>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
          <span className="font-extrabold text-red-500 flex items-center gap-1">
            <Share2 className="w-3.5 h-3.5 text-lime-400" /> 07. Presença Digital
          </span>
          <p className="text-white font-bold">{data.currentDigitalChannels.join(', ')}</p>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
          <span className="font-extrabold text-red-500 flex items-center gap-1">
            <DollarSign className="w-3.5 h-3.5 text-lime-400" /> 10. Investimento
          </span>
          <p className="text-white font-bold">Gestão: {data.monthlyMarketingBudget}</p>
          <p className="text-zinc-400">Ads: {data.monthlyPaidAdsBudget}</p>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
          <span className="font-extrabold text-red-500 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-lime-400" /> 11. Alinhamento
          </span>
          <p className="text-white font-bold">{data.reportingFormatFrequency}</p>
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
              Processando Briefing...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-lime-400" /> Enviar Briefing Geral para Frame Mídia
            </>
          )}
        </button>
      </div>
    </div>
  );
};
