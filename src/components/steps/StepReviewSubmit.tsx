'use client';

import React, { useState } from 'react';
import { BriefingData } from '@/types/briefing';
import {
  Send,
  Download,
  Copy,
  CheckCircle2,
  AlertCircle,
  User,
  Target,
  Palette,
  CheckSquare,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface StepReviewSubmitProps {
  data: BriefingData;
  onPrev: () => void;
  onReset: () => void;
}

export const StepReviewSubmit: React.FC<StepReviewSubmitProps> = ({
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
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSubmitted(true);
        setBriefingId(resData.briefingId);
        confetti({
          particleCount: 120,
          spread: 80,
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
    const md = `# 📄 BRIEFING FRAME MÍDIA: ${data.companyName}

- **Cliente:** ${data.clientName} (${data.email})
- **Empresa:** ${data.companyName}
- **Frente de Atuação:** ${data.projectType}
- **Objetivos:** ${data.mainGoals.join(', ')}
- **Estilo Visual:** ${data.brandStyle.join(', ')}
- **Cores:** Destaque (${data.primaryColor}), Fundo (${data.secondaryColor})
- **Investimento:** ${data.budgetRange} | **Prazo:** ${data.deadline}
- **Estrutura:** ${data.requiredPages.join(', ')}
- **Serviços:** ${data.features.join(', ')}
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
      `briefing-frame-midia-${data.companyName.toLowerCase().replace(/\s+/g, '-') || 'projeto'}.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  if (submitted) {
    return (
      <div className="text-center py-10 space-y-6 animate-fade-in">
        <div className="w-20 h-20 mx-auto rounded-full bg-lime-500/10 dark:bg-lime-500/20 text-lime-400 flex items-center justify-center ring-8 ring-lime-500/10">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2 max-w-md mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Aplicação Enviada com Sucesso! 🎉
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Recebemos seu diagnóstico com a identificação{' '}
            <strong className="text-red-500 font-mono font-black">
              #{briefingId}
            </strong>
            . Nossa equipe analisará seu contexto para retornar em breve.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <button
            onClick={copyMarkdown}
            className="flex items-center gap-2 px-4 py-2.5 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold rounded-xl text-sm transition-all border border-zinc-200 dark:border-zinc-800"
          >
            <Copy className="w-4 h-4 text-red-500" />
            {copied ? 'Markdown Copiado!' : 'Copiar em Markdown'}
          </button>

          <button
            onClick={downloadJSON}
            className="flex items-center gap-2 px-4 py-2.5 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold rounded-xl text-sm transition-all border border-zinc-200 dark:border-zinc-800"
          >
            <Download className="w-4 h-4 text-lime-400" />
            Baixar Arquivo JSON
          </button>

          <button
            onClick={onReset}
            className="px-4 py-2.5 bg-red-600 hover:bg-red-500 text-white font-extrabold rounded-xl text-sm transition-all shadow-md shadow-red-500/20"
          >
            Nova Aplicação
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <Send className="w-6 h-6 text-red-500" /> Revisão Final & Envio da Aplicação
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Confira o resumo das informações antes de enviar para a equipe da Frame Mídia.
        </p>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm flex items-center gap-3">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1: Cliente */}
        <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500">
            <User className="w-4 h-4 text-lime-400" /> Cliente & Empresa
          </div>
          <div className="text-sm space-y-1 text-slate-800 dark:text-slate-200">
            <p>
              <strong>Nome:</strong> {data.clientName || 'Não informado'}
            </p>
            <p>
              <strong>Empresa:</strong> {data.companyName || 'Não informado'}
            </p>
            <p>
              <strong>E-mail:</strong> {data.email || 'Não informado'}
            </p>
            <p>
              <strong>WhatsApp:</strong> {data.phone || 'Não informado'}
            </p>
          </div>
        </div>

        {/* Card 2: Objetivos */}
        <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500">
            <Target className="w-4 h-4 text-lime-400" /> Frente & Objetivos
          </div>
          <div className="text-sm space-y-1 text-slate-800 dark:text-slate-200">
            <p>
              <strong>Frente:</strong> {data.projectType}
            </p>
            <p>
              <strong>Metas:</strong> {data.mainGoals.join(', ') || 'Nenhuma'}
            </p>
            <p>
              <strong>Segmento:</strong> {data.industry}
            </p>
          </div>
        </div>

        {/* Card 3: Design */}
        <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500">
            <Palette className="w-4 h-4 text-lime-400" /> Estilo & Tom de Voz
          </div>
          <div className="text-sm space-y-1 text-slate-800 dark:text-slate-200">
            <p>
              <strong>Estilo:</strong> {data.brandStyle.join(', ')}
            </p>
            <p>
              <strong>Tom de Voz:</strong> {data.toneOfVoice}
            </p>
          </div>
        </div>

        {/* Card 4: Escopo */}
        <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500">
            <CheckSquare className="w-4 h-4 text-lime-400" /> Investimento & Prazo
          </div>
          <div className="text-sm space-y-1 text-slate-800 dark:text-slate-200">
            <p>
              <strong>Investimento:</strong> {data.budgetRange}
            </p>
            <p>
              <strong>Prazo:</strong> {data.deadline}
            </p>
            <p>
              <strong>Estruturas Selecionadas:</strong> {data.requiredPages.length}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <button
          type="button"
          onClick={onPrev}
          disabled={submitting}
          className="w-full sm:w-auto px-6 py-3 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-semibold rounded-xl transition-all text-sm"
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
              <Sparkles className="w-4 h-4 text-lime-400" /> Enviar Aplicação para Frame Mídia
            </>
          )}
        </button>
      </div>
    </div>
  );
};
