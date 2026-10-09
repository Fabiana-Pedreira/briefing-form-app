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
  Mail,
  FileText,
  FileSpreadsheet,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface StepProps {
  data: BriefingEsteticaData;
  onPrev: () => void;
  onReset: () => void;
}

const AGENCY_EMAIL = 'framemidiamkt@gmail.com';

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

  const generateMarkdownText = () => {
    return `================================================
📄 BRIEFING DE ESTÉTICA & SAÚDE - FRAME MÍDIA
Código Protocolo: #${briefingId || 'BRF-DEMO'}
Destino: ${AGENCY_EMAIL}
================================================

01. SOBRE O NEGÓCIO
• Empresa/Clínica: ${data.companyName}
• Tempo no Mercado: ${data.yearsInMarket || 'Não informado'}
• Localização: ${data.location || 'Não informada'}
• Estrutura de Equipe: ${data.teamStructure}
• Serviços Oferecidos: ${data.mainServices}
• Serviço Mais Vendido: ${data.topSellingService}
• Serviço para Vender Mais: ${data.serviceToSellMore}
• Diferencial Competitivo: ${data.mainDifferential}

02. OBJETIVOS DO NEGÓCIO
• Objetivos 6-12 meses: ${data.goalsNextMonths}
• Foco de Crescimento: ${data.growthFocus.join(', ')}
• Protocolos para Divulgação: ${data.protocolsToPromote}
• Meta Faturamento: ${data.monthlyRevenueTarget}
• Meta Novos Clientes/mês: ${data.newClientsMonthlyTarget}

03. PÚBLICO-ALVO E CLIENTES
• Perfil Cliente Ideal: ${data.idealClientProfile}
• Faixa Etária / Gênero: ${data.ageRange} (${data.genderAudience})
• Região/Bairros: ${data.neighborhoodsCities}
• Poder Aquisitivo: ${data.purchasingPower}
• Queixas Estéticas: ${data.aestheticComplaints}
• Valores Apreciados: ${data.clientValues.join(', ')}
• Objeções Antes de Fechar: ${data.objectionsBeforeBuying}

04. IDENTIDADE E POSICIONAMENTO
• Percepção Desejada: ${data.desiredBrandPerception}
• 3 Palavras Essência: ${data.essenceWords}
• Atributos: ${data.brandAttributes.join(', ')}
• Posicionamento: ${data.marketPositioning}

05. PRESENÇA DIGITAL E CONTEÚDO
• Canais Ativos: ${data.activeSocialNetworks.join(', ')}
• Canal Efetivo: ${data.topLeadChannel}
• Conforto em Vídeos: ${data.videoComfortLevel}
• Tom de Comunicação: ${data.communicationTone.join(', ')}

06. COMERCIAL E ATENDIMENTO
• Atendente Comercial: ${data.salesAttendant}
• Tempo de Resposta: ${data.avgResponseTime}
• Motivos de Perda de Venda: ${data.lostSalesReasons}

07. CONCORRÊNCIA E MERCADO
• Concorrentes: ${data.mainCompetitors}
• Fator Competitivo: ${data.competitiveEdgeType}

08. INVESTIMENTO E EXPECTATIVAS
• Orçamento Gestão Marketing: ${data.agencyMonthlyBudget}
• Verba Anúncios Ads: ${data.paidAdsMonthlyBudget}

09. PERGUNTAS ESTRATÉGICAS DE ESTÉTICA
• Maior Margem de Lucro: ${data.highestProfitMarginServices}
• Porta de Entrada (Chama-cliente): ${data.entryLeadMagnetServices}
• Ticket Médio: ${data.avgTicketPerClient}
• Fotos Antes/Depois & Normas: ${data.beforeAfterPolicy}
`;
  };

  const copyMarkdown = () => {
    navigator.clipboard.writeText(generateMarkdownText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendEmailToAgency = () => {
    const subject = `Novo Briefing Estética (#${briefingId || 'BRF'}) - ${data.companyName}`;
    const body = generateMarkdownText();
    window.open(`mailto:${AGENCY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  };

  const downloadWordDoc = () => {
    const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Briefing Frame Mídia</title><style>body{font-family:Arial,sans-serif;line-height:1.6;color:#111;} h1{color:#dc2626;} h2{color:#16a34a;border-bottom:1px solid #ccc;padding-bottom:4px;margin-top:20px;}</style></head><body>";
    const footer = "</body></html>";

    const htmlContent = `
      <h1>📄 BRIEFING DE ESTÉTICA & SAÚDE - FRAME MÍDIA</h1>
      <p><strong>Código Protocolo:</strong> #${briefingId || 'BRF-DEMO'}</p>
      <p><strong>Empresa / Clínica:</strong> ${data.companyName}</p>
      <p><strong>E-mail Agência:</strong> ${AGENCY_EMAIL}</p>
      <hr/>

      <h2>01. Sobre o Negócio</h2>
      <p><strong>Tempo no Mercado:</strong> ${data.yearsInMarket || 'Não informado'}</p>
      <p><strong>Localização:</strong> ${data.location || 'Não informada'}</p>
      <p><strong>Serviços Oferecidos:</strong> ${data.mainServices}</p>
      <p><strong>Serviço Mais Vendido:</strong> ${data.topSellingService}</p>
      <p><strong>Serviço para Vender Mais:</strong> ${data.serviceToSellMore}</p>
      <p><strong>Diferencial:</strong> ${data.mainDifferential}</p>

      <h2>02. Objetivos do Negócio</h2>
      <p><strong>Objetivos 6-12 meses:</strong> ${data.goalsNextMonths}</p>
      <p><strong>Foco de Crescimento:</strong> ${data.growthFocus.join(', ')}</p>
      <p><strong>Meta Faturamento:</strong> ${data.monthlyRevenueTarget}</p>

      <h2>03. Público-Alvo e Clientes</h2>
      <p><strong>Cliente Ideal:</strong> ${data.idealClientProfile}</p>
      <p><strong>Faixa Etária / Gênero:</strong> ${data.ageRange} (${data.genderAudience})</p>
      <p><strong>Queixas Estéticas:</strong> ${data.aestheticComplaints}</p>

      <h2>04. Identidade e Posicionamento</h2>
      <p><strong>Posicionamento:</strong> ${data.marketPositioning}</p>
      <p><strong>3 Palavras Essência:</strong> ${data.essenceWords}</p>

      <h2>05. Presença Digital</h2>
      <p><strong>Canais Ativos:</strong> ${data.activeSocialNetworks.join(', ')}</p>
      <p><strong>Tom de Comunicação:</strong> ${data.communicationTone.join(', ')}</p>

      <h2>08. Investimento & Recursos</h2>
      <p><strong>Orçamento Gestão:</strong> ${data.agencyMonthlyBudget}</p>
      <p><strong>Verba Ads:</strong> ${data.paidAdsMonthlyBudget}</p>

      <h2>09. Estratégias Específicas de Estética</h2>
      <p><strong>Maior Margem de Lucro:</strong> ${data.highestProfitMarginServices}</p>
      <p><strong>Chama-cliente:</strong> ${data.entryLeadMagnetServices}</p>
      <p><strong>Ticket Médio:</strong> ${data.avgTicketPerClient}</p>
    `;

    const blob = new Blob(['\ufeff' + header + htmlContent + footer], {
      type: 'application/msword',
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `briefing-estetica-${data.companyName.toLowerCase().replace(/\s+/g, '-') || 'clinica'}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const printPdf = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Briefing Frame Mídia - ${data.companyName}</title>
          <style>
            body { font-family: 'Helvetica Neue', Arial, sans-serif; padding: 40px; color: #111; line-height: 1.5; }
            h1 { color: #dc2626; margin-bottom: 5px; font-size: 24px; }
            .subtitle { color: #666; font-size: 14px; margin-bottom: 25px; border-bottom: 2px solid #ef4444; padding-bottom: 10px; }
            h2 { color: #16a34a; font-size: 16px; margin-top: 20px; border-bottom: 1px solid #eee; padding-bottom: 4px; }
            p { font-size: 13px; margin: 6px 0; }
            strong { color: #000; }
            .badge { background: #fee2e2; color: #dc2626; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 12px; }
          </style>
        </head>
        <body>
          <h1>📄 BRIEFING DE ESTÉTICA & SAÚDE</h1>
          <div class="subtitle">Agência <strong>Frame Mídia</strong> • E-mail: ${AGENCY_EMAIL} • Protocolo #${briefingId || 'BRF'}</div>
          
          <p><span class="badge">EMPRESA / CLÍNICA</span> <strong>${data.companyName}</strong></p>
          <p><strong>Localização:</strong> ${data.location || 'Não informada'} | <strong>Tempo de Mercado:</strong> ${data.yearsInMarket || 'Não informado'}</p>
          
          <h2>01. Sobre o Negócio</h2>
          <p><strong>Serviços Oferecidos:</strong> ${data.mainServices}</p>
          <p><strong>Serviço Mais Vendido:</strong> ${data.topSellingService}</p>
          <p><strong>Serviço para Vender Mais:</strong> ${data.serviceToSellMore}</p>
          <p><strong>Diferencial:</strong> ${data.mainDifferential}</p>

          <h2>02. Objetivos do Negócio</h2>
          <p><strong>Objetivos 6-12 Meses:</strong> ${data.goalsNextMonths}</p>
          <p><strong>Foco de Crescimento:</strong> ${data.growthFocus.join(', ')}</p>
          <p><strong>Meta Mensal Faturamento:</strong> ${data.monthlyRevenueTarget}</p>

          <h2>03. Público-Alvo e Clientes</h2>
          <p><strong>Cliente Ideal:</strong> ${data.idealClientProfile}</p>
          <p><strong>Faixa Etária / Gênero:</strong> ${data.ageRange} (${data.genderAudience})</p>
          <p><strong>Queixas Estéticas:</strong> ${data.aestheticComplaints}</p>

          <h2>04. Identidade e Posicionamento</h2>
          <p><strong>Posicionamento:</strong> ${data.marketPositioning}</p>
          <p><strong>3 Palavras Essência:</strong> ${data.essenceWords}</p>

          <h2>05. Presença Digital e Conteúdo</h2>
          <p><strong>Canais Ativos:</strong> ${data.activeSocialNetworks.join(', ')}</p>
          <p><strong>Tom de Comunicação:</strong> ${data.communicationTone.join(', ')}</p>

          <h2>08. Investimento e Expectativas</h2>
          <p><strong>Orçamento Gestão:</strong> ${data.agencyMonthlyBudget}</p>
          <p><strong>Verba Anúncios Ads:</strong> ${data.paidAdsMonthlyBudget}</p>

          <h2>09. Estratégias Específicas de Estética</h2>
          <p><strong>Maior Margem de Lucro:</strong> ${data.highestProfitMarginServices}</p>
          <p><strong>Serviço Porta de Entrada:</strong> ${data.entryLeadMagnetServices}</p>
          <p><strong>Ticket Médio:</strong> ${data.avgTicketPerClient}</p>
          <p><strong>Normas Fotos Antes/Depois:</strong> ${data.beforeAfterPolicy}</p>

          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
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
            Sua resposta foi salva com o código{' '}
            <strong className="text-red-500 font-mono font-black">
              #{briefingId}
            </strong>
            . E-mail oficial da agência: <strong className="text-lime-400 font-mono">{AGENCY_EMAIL}</strong>.
          </p>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4 max-w-2xl mx-auto">
          <button
            onClick={sendEmailToAgency}
            className="flex items-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-500 text-white font-extrabold rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-red-600/20"
          >
            <Mail className="w-4 h-4" />
            Enviar por E-mail ({AGENCY_EMAIL})
          </button>

          <button
            onClick={printPdf}
            className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-lime-400 font-bold rounded-xl text-xs sm:text-sm transition-all border border-zinc-800"
          >
            <FileText className="w-4 h-4 text-red-500" />
            Baixar em PDF
          </button>

          <button
            onClick={downloadWordDoc}
            className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-blue-400 font-bold rounded-xl text-xs sm:text-sm transition-all border border-zinc-800"
          >
            <FileSpreadsheet className="w-4 h-4 text-blue-400" />
            Baixar em Word (.DOC)
          </button>

          <button
            onClick={openWhatsAppSend}
            className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-emerald-600/20"
          >
            <MessageCircle className="w-4 h-4" />
            Enviar no WhatsApp
          </button>

          <button
            onClick={copyMarkdown}
            className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-semibold rounded-xl text-xs sm:text-sm transition-all border border-zinc-800"
          >
            <Copy className="w-4 h-4 text-red-500" />
            {copied ? 'Copiado!' : 'Copiar Markdown'}
          </button>
        </div>

        <div className="pt-4">
          <button
            onClick={onReset}
            className="text-xs text-zinc-400 hover:text-white underline font-semibold"
          >
            Preencher Novo Diagnóstico
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
          Confira o resumo geral das 09 sessões antes de submeter para a equipe da Frame Mídia ({AGENCY_EMAIL}).
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
