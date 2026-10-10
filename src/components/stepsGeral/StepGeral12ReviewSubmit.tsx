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
  Mail,
  FileText,
  FileSpreadsheet,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface StepProps {
  data: BriefingGeralData;
  onPrev: () => void;
  onReset: () => void;
}

const AGENCY_EMAIL = 'framemidiamkt@gmail.com';

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
        const id = resData.briefingId;
        setSubmitted(true);
        setBriefingId(id);

        // Save locally to agency submissions history
        try {
          const existing = JSON.parse(localStorage.getItem('frame_midia_submitted_briefings') || '[]');
          existing.unshift({
            id,
            type: 'geral',
            companyName: data.companyName || 'Empresa / Marca',
            submittedAt: new Date().toISOString(),
            data,
          });
          localStorage.setItem('frame_midia_submitted_briefings', JSON.stringify(existing));
        } catch (e) {
          console.warn('LocalStorage save warning:', e);
        }

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

  const generateMarkdownText = () => {
    return `================================================
📄 BRIEFING GERAL DE NEGÓCIOS - FRAME MÍDIA
Código Protocolo: #${briefingId || 'BRF-DEMO'}
Destino: ${AGENCY_EMAIL}
================================================

01. IDENTIFICAÇÃO E HISTÓRIA DO NEGÓCIO
• Empresa/Marca: ${data.companyName}
• Segmento de Atuação: ${data.industrySegment || 'Não informado'}
• Localização / Área: ${data.locationCoverage || 'Não informada'}
• Tempo no Mercado: ${data.timeInBusiness || 'Não informado'}
• Origem da Empresa: ${data.businessIdeaOrigin || 'Não informado'}
• Principal Produto/Serviço: ${data.mainProductService || 'Não informado'}
• Modelo de Negócio: ${data.businessModel || 'Não informado'}
• Momento Atual: ${data.currentPhase}
• Principais Desafios: ${data.currentMainChallenges || 'Não informado'}
• Planos para o Futuro: ${data.futurePlans || 'Não informado'}

02. IDENTIDADE, ESSÊNCIA E POSICIONAMENTO
• Propósito além das vendas: ${data.brandPurpose || 'Não informado'}
• Problema que Resolve: ${data.customerProblemSolved || 'Não informado'}
• Missão, Visão e Valores: ${data.missionVisionValues || 'Não informado'}
• Atributos de Personalidade: ${data.brandPersonalityTraits.join(', ')}
• Descrição Desejada por Clientes: ${data.desiredPeopleDescription || 'Não informado'}
• Percepção a Evitar: ${data.perceptionToAvoid || 'Não informado'}
• Posicionamento de Mercado: ${data.desiredMarketPositioning}

03. PRODUTOS, SERVIÇOS E PROPOSTA DE VALOR
• Carro-chefe (Mais Vendido): ${data.topSellingProducts || 'Não informado'}
• Oportunidade de Expansão: ${data.growthOpportunityProducts || 'Não informado'}
• Principais Diferenciais: ${data.mainDifferentials || 'Não informado'}
• Faixa de Preço: ${data.priceRange || 'Não informada'}

04. PÚBLICO-ALVO E CLIENTE IDEAL
• Perfil Cliente Ideal: ${data.idealClientToConquer || 'Não informado'}
• Perfil Socioeconômico & Idade: ${data.ageAndSocioeconomicProfile || 'Não informado'}
• Dores e Desejos: ${data.needsWantsDifficulties || 'Não informado'}
• Principais Objeções: ${data.purchaseObjections || 'Não informado'}

05. OBJETIVOS DO NEGÓCIO
• Objetivos 6-12 meses: ${data.goals6to12Months || 'Não informado'}
• Foco Principal de Crescimento: ${data.primaryGrowthFocus.join(', ')}

06. IDENTIDADE VISUAL E COMUNICAÇÃO
• Tem Identidade Visual: ${data.hasVisualIdentity}
• Tom de Voz: ${data.brandToneOfVoice.join(', ')}

07. PRESENÇA DIGITAL E MARKETING ATUAL
• Canais Digitais Ativos: ${data.currentDigitalChannels.join(', ')}
• Ferramentas Usadas: ${data.toolsUsed.join(', ')}

08. VENDAS, ATENDIMENTO E RELACIONAMENTO
• Como os clientes chegam: ${data.howClientsArriveNow || 'Não informado'}
• Follow-up Estruturado: ${data.structuredFollowUpProcess || 'Não informado'}

09. CONCORRÊNCIA E MERCADO
• Concorrentes Diretos: ${data.directCompetitors || 'Não informado'}

10. ESTRUTURA, RECURSOS E INVESTIMENTO
• Contato Principal Frame Mídia: ${data.frameMidiaMainContact || 'Não informado'}
• Orçamento Mensal Marketing: ${data.monthlyMarketingBudget}
• Verba Mensal Anúncios Ads: ${data.monthlyPaidAdsBudget}

11. ALINHAMENTO E EXPECTATIVAS DA PARCERIA
• Motivo da Contratação Frame Mídia: ${data.motivationForFrameMidiaNow || 'Não informada'}
• Frequência de Relatórios: ${data.reportingFormatFrequency}
`;
  };

  const copyMarkdown = () => {
    navigator.clipboard.writeText(generateMarkdownText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendEmailToAgency = () => {
    const subject = `Novo Briefing Geral (#${briefingId || 'BRF'}) - ${data.companyName}`;
    const body = generateMarkdownText();
    window.open(`mailto:${AGENCY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  };

  const downloadWordDoc = () => {
    const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Briefing Geral Frame Mídia</title><style>body{font-family:Arial,sans-serif;line-height:1.6;color:#111;} h1{color:#dc2626;} h2{color:#16a34a;border-bottom:1px solid #ccc;padding-bottom:4px;margin-top:20px;}</style></head><body>";
    const footer = "</body></html>";

    const htmlContent = `
      <h1>📄 BRIEFING GERAL DE NEGÓCIOS - FRAME MÍDIA</h1>
      <p><strong>Código Protocolo:</strong> #${briefingId || 'BRF-DEMO'}</p>
      <p><strong>Empresa / Marca:</strong> ${data.companyName}</p>
      <p><strong>E-mail Agência:</strong> ${AGENCY_EMAIL}</p>
      <hr/>

      <h2>01. Identificação e História do Negócio</h2>
      <p><strong>Segmento:</strong> ${data.industrySegment || 'Não informado'}</p>
      <p><strong>Localização:</strong> ${data.locationCoverage || 'Não informada'}</p>
      <p><strong>Tempo no Mercado:</strong> ${data.timeInBusiness || 'Não informado'}</p>
      <p><strong>Momento Atual:</strong> ${data.currentPhase}</p>
      <p><strong>Principal Produto/Serviço:</strong> ${data.mainProductService || 'Não informado'}</p>

      <h2>02. Identidade e Posicionamento</h2>
      <p><strong>Propósito:</strong> ${data.brandPurpose || 'Não informado'}</p>
      <p><strong>Posicionamento:</strong> ${data.desiredMarketPositioning}</p>

      <h2>03. Produtos, Serviços e Proposta de Valor</h2>
      <p><strong>Mais Vendido:</strong> ${data.topSellingProducts || 'Não informado'}</p>
      <p><strong>Diferenciais:</strong> ${data.mainDifferentials || 'Não informado'}</p>

      <h2>04. Público-Alvo</h2>
      <p><strong>Cliente Ideal:</strong> ${data.idealClientToConquer || 'Não informado'}</p>
      <p><strong>Socioeconômico/Idade:</strong> ${data.ageAndSocioeconomicProfile || 'Não informado'}</p>

      <h2>05. Objetivos do Negócio</h2>
      <p><strong>Objetivos 6-12 Meses:</strong> ${data.goals6to12Months || 'Não informado'}</p>
      <p><strong>Foco de Crescimento:</strong> ${data.primaryGrowthFocus.join(', ')}</p>

      <h2>10. Investimento & Recursos</h2>
      <p><strong>Orçamento Gestão:</strong> ${data.monthlyMarketingBudget}</p>
      <p><strong>Verba Anúncios Ads:</strong> ${data.monthlyPaidAdsBudget}</p>
      <p><strong>Contato Principal:</strong> ${data.frameMidiaMainContact || 'Não informado'}</p>
    `;

    const blob = new Blob(['\ufeff' + header + htmlContent + footer], {
      type: 'application/msword',
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `briefing-geral-${data.companyName.toLowerCase().replace(/\s+/g, '-') || 'empresa'}.doc`;
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
          <title>Briefing Geral Frame Mídia - ${data.companyName}</title>
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
          <h1>📄 BRIEFING GERAL DE NEGÓCIOS</h1>
          <div class="subtitle">Agência <strong>Frame Mídia</strong> • E-mail: ${AGENCY_EMAIL} • Protocolo #${briefingId || 'BRF'}</div>
          
          <p><span class="badge">EMPRESA / MARCA</span> <strong>${data.companyName}</strong></p>
          <p><strong>Segmento:</strong> ${data.industrySegment || 'Não informado'} | <strong>Momento:</strong> ${data.currentPhase}</p>
          
          <h2>01. Identificação e História</h2>
          <p><strong>Tempo no Mercado:</strong> ${data.timeInBusiness || 'Não informado'}</p>
          <p><strong>Principal Produto/Serviço:</strong> ${data.mainProductService || 'Não informado'}</p>
          <p><strong>Desafios:</strong> ${data.currentMainChallenges || 'Não informado'}</p>

          <h2>02. Identidade & Posicionamento</h2>
          <p><strong>Propósito:</strong> ${data.brandPurpose || 'Não informado'}</p>
          <p><strong>Posicionamento:</strong> ${data.desiredMarketPositioning}</p>

          <h2>05. Objetivos</h2>
          <p><strong>Objetivos 6-12 Meses:</strong> ${data.goals6to12Months || 'Não informado'}</p>
          <p><strong>Foco de Crescimento:</strong> ${data.primaryGrowthFocus.join(', ')}</p>

          <h2>10. Investimento & Recursos</h2>
          <p><strong>Orçamento Gestão:</strong> ${data.monthlyMarketingBudget}</p>
          <p><strong>Verba Ads:</strong> ${data.monthlyPaidAdsBudget}</p>

          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
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

        <div className="space-y-3 max-w-lg mx-auto">
          <span className="px-3 py-1 bg-lime-500/10 border border-lime-500/30 text-lime-400 font-extrabold text-xs uppercase tracking-widest rounded-full">
            Envio Automático Concluído
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Briefing Geral Recebido pela Frame Mídia! 🎉
          </h2>
          <p className="text-sm text-zinc-300 leading-relaxed">
            As suas respostas foram salvas e transmitidas <strong className="text-lime-400">automaticamente</strong> para a agência (<strong className="text-white">{AGENCY_EMAIL}</strong>) sob o protocolo{' '}
            <strong className="text-red-500 font-mono font-black">
              #{briefingId}
            </strong>
            .
          </p>
          <p className="text-xs text-zinc-400 font-medium">
            ✅ Não é necessário realizar mais nenhuma ação! Nossa equipe já recebeu seus dados e iniciará a análise estratégica.
          </p>
        </div>

        {/* Optional Actions Row */}
        <div className="pt-4 border-t border-zinc-800 max-w-xl mx-auto space-y-3">
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
            Deseja guardar uma cópia do seu briefing? (Opcional)
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <button
              onClick={printPdf}
              className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-lime-400 font-bold rounded-xl text-xs sm:text-sm transition-all border border-zinc-800"
            >
              <FileText className="w-4 h-4 text-red-500" />
              Baixar Cópia em PDF
            </button>

            <button
              onClick={downloadWordDoc}
              className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-blue-400 font-bold rounded-xl text-xs sm:text-sm transition-all border border-zinc-800"
            >
              <FileSpreadsheet className="w-4 h-4 text-blue-400" />
              Baixar Cópia em Word (.DOC)
            </button>

            <button
              onClick={sendEmailToAgency}
              className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-bold rounded-xl text-xs sm:text-sm transition-all border border-zinc-800"
            >
              <Mail className="w-4 h-4 text-red-500" />
              Enviar Cópia para meu E-mail
            </button>

            <button
              onClick={openWhatsAppSend}
              className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 font-bold rounded-xl text-xs sm:text-sm transition-all border border-emerald-500/30"
            >
              <MessageCircle className="w-4 h-4" />
              Notificar Agência no WhatsApp
            </button>
          </div>
        </div>

        <div className="pt-4">
          <button
            onClick={onReset}
            className="text-xs text-zinc-400 hover:text-white underline font-semibold"
          >
            Preencher Novo Briefing Geral
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
