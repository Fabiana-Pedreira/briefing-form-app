'use client';

import React, { useState } from 'react';
import { BriefingData } from '@/types/briefing';
import {
  Send,
  Download,
  Copy,
  CheckCircle2,
  AlertCircle,
  FileText,
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
        // Solta confetes festivos de sucesso!
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
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
    const md = `# 📄 BRIEFING DE PROJETO: ${data.companyName}

- **Cliente:** ${data.clientName} (${data.email})
- **Empresa:** ${data.companyName}
- **Projeto:** ${data.projectType}
- **Metas:** ${data.mainGoals.join(', ')}
- **Estilo Visual:** ${data.brandStyle.join(', ')}
- **Cores:** Primária (${data.primaryColor}), Secundária (${data.secondaryColor})
- **Orçamento:** ${data.budgetRange} | **Prazo:** ${data.deadline}
- **Páginas:** ${data.requiredPages.join(', ')}
- **Recursos:** ${data.features.join(', ')}
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
      `briefing-${data.companyName.toLowerCase().replace(/\s+/g, '-') || 'projeto'}.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  if (submitted) {
    return (
      <div className="text-center py-10 space-y-6 animate-fade-in">
        <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-500 flex items-center justify-center ring-8 ring-emerald-500/10">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2 max-w-md mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Briefing Enviado com Sucesso! 🎉
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Obrigado! Seu briefing foi registrado com o código{' '}
            <strong className="text-brand-600 dark:text-brand-400 font-mono">
              #{briefingId}
            </strong>
            .
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <button
            onClick={copyMarkdown}
            className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold rounded-xl text-sm transition-all border border-slate-200 dark:border-slate-700"
          >
            <Copy className="w-4 h-4 text-brand-500" />
            {copied ? 'Markdown Copiado!' : 'Copiar em Markdown'}
          </button>

          <button
            onClick={downloadJSON}
            className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold rounded-xl text-sm transition-all border border-slate-200 dark:border-slate-700"
          >
            <Download className="w-4 h-4 text-brand-500" />
            Baixar Arquivo JSON
          </button>

          <button
            onClick={onReset}
            className="px-4 py-2.5 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl text-sm transition-all shadow-md shadow-brand-500/20"
          >
            Novo Briefing
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Send className="w-6 h-6 text-brand-500" /> Revisão Final & Envio
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Confira os dados preenchidos antes de enviar diretamente para a nossa equipe.
        </p>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-sm flex items-center gap-3">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1: Cliente */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            <User className="w-4 h-4" /> Cliente & Empresa
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
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            <Target className="w-4 h-4" /> Tipo & Objetivos
          </div>
          <div className="text-sm space-y-1 text-slate-800 dark:text-slate-200">
            <p>
              <strong>Projeto:</strong> {data.projectType}
            </p>
            <p>
              <strong>Metas:</strong> {data.mainGoals.join(', ') || 'Nenhuma'}
            </p>
            <p>
              <strong>Setor:</strong> {data.industry}
            </p>
          </div>
        </div>

        {/* Card 3: Design */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            <Palette className="w-4 h-4" /> Estilo Visual
          </div>
          <div className="text-sm space-y-1 text-slate-800 dark:text-slate-200">
            <p>
              <strong>Estilos:</strong> {data.brandStyle.join(', ')}
            </p>
            <div className="flex items-center gap-2 pt-1">
              <strong>Cores:</strong>
              <span
                className="w-4 h-4 rounded-full border border-slate-300"
                style={{ backgroundColor: data.primaryColor }}
                title="Primária"
              />
              <span
                className="w-4 h-4 rounded-full border border-slate-300"
                style={{ backgroundColor: data.secondaryColor }}
                title="Secundária"
              />
            </div>
          </div>
        </div>

        {/* Card 4: Escopo */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            <CheckSquare className="w-4 h-4" /> Orçamento & Prazo
          </div>
          <div className="text-sm space-y-1 text-slate-800 dark:text-slate-200">
            <p>
              <strong>Orçamento:</strong> {data.budgetRange}
            </p>
            <p>
              <strong>Prazo Desejado:</strong> {data.deadline}
            </p>
            <p>
              <strong>Páginas Selecionadas:</strong> {data.requiredPages.length}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
        <button
          type="button"
          onClick={onPrev}
          disabled={submitting}
          className="w-full sm:w-auto px-6 py-3 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-xl transition-all text-sm"
        >
          ← Ajustar Respostas
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-brand-600 via-indigo-600 to-accent-500 hover:opacity-95 text-white font-bold rounded-xl shadow-xl shadow-brand-500/30 transition-all text-sm disabled:opacity-50"
        >
          {submitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Processando e Enviando...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" /> Enviar Briefing Agora
            </>
          )}
        </button>
      </div>
    </div>
  );
};
