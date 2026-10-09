'use client';

import React, { useState } from 'react';
import { BriefingData } from '@/types/briefing';
import { X, Copy, Check, FileText, Code } from 'lucide-react';

interface BriefingPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: BriefingData;
}

export const BriefingPreviewModal: React.FC<BriefingPreviewModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  const [copied, setCopied] = useState(false);
  const [viewFormat, setViewFormat] = useState<'markdown' | 'json'>('markdown');

  if (!isOpen) return null;

  const generateMarkdown = () => {
    return `# 📄 BRIEFING DE PROJETO: ${data.companyName || 'Nova Empresa'}

## 1. Informações Gerais
- **Cliente:** ${data.clientName || 'Não informado'}
- **Empresa:** ${data.companyName || 'Não informado'}
- **E-mail:** ${data.email || 'Não informado'}
- **Telefone / WhatsApp:** ${data.phone || 'Não informado'}
- **Website:** ${data.website || 'Nenhum'}
- **Setor:** ${data.industry}

## 2. Objetivos & Público
- **Tipo de Projeto:** ${data.projectType}
- **Principais Metas:** ${data.mainGoals.join(', ')}
- **Público-Alvo:** ${data.targetAudience || 'Não informado'}
- **Concorrentes:** ${data.competitors || 'Não informado'}
- **Diferenciais:** ${data.differentials || 'Não informado'}

## 3. Identidade Visual & Design
- **Estilo Visual:** ${data.brandStyle.join(', ')}
- **Cor Primária:** ${data.primaryColor}
- **Cor Secundária:** ${data.secondaryColor}
- **Tom de Voz:** ${data.toneOfVoice}
- **Referências:** ${data.references || 'Não informado'}

## 4. Escopo & Requisitos
- **Páginas Necessárias:** ${data.requiredPages.join(', ')}
- **Funcionalidades:** ${data.features.join(', ')}
- **Orçamento Estimado:** ${data.budgetRange}
- **Prazo Desejado:** ${data.deadline}
- **Notas Adicionais:** ${data.additionalNotes || 'Nenhuma'}
`;
  };

  const copyToClipboard = () => {
    const textToCopy =
      viewFormat === 'markdown' ? generateMarkdown() : JSON.stringify(data, null, 2);
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                Pré-visualização do Briefing
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Resumo em tempo real do formulário preenchido
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex bg-slate-200 dark:bg-slate-800 p-1 rounded-lg text-xs font-semibold">
              <button
                onClick={() => setViewFormat('markdown')}
                className={`px-3 py-1 rounded-md transition-all flex items-center gap-1 ${
                  viewFormat === 'markdown'
                    ? 'bg-white dark:bg-slate-700 text-brand-600 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                <FileText className="w-3.5 h-3.5" /> Markdown
              </button>
              <button
                onClick={() => setViewFormat('json')}
                className={`px-3 py-1 rounded-md transition-all flex items-center gap-1 ${
                  viewFormat === 'json'
                    ? 'bg-white dark:bg-slate-700 text-brand-600 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                <Code className="w-3.5 h-3.5" /> JSON
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 bg-slate-50/50 dark:bg-slate-950/50">
          <pre className="whitespace-pre-wrap leading-relaxed">
            {viewFormat === 'markdown'
              ? generateMarkdown()
              : JSON.stringify(data, null, 2)}
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-900">
          <span className="text-xs text-slate-500 dark:text-slate-400 hidden xs:block">
            Você pode copiar este texto para o Notion, Trello ou e-mail.
          </span>
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-brand-600 hover:bg-brand-500 rounded-xl transition-all shadow-md shadow-brand-500/20"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" /> Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" /> Copiar Conteúdo
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
