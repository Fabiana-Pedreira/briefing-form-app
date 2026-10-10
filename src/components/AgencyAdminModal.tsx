import React, { useState } from 'react';
import {
  Lock,
  Unlock,
  Check,
  Sparkles,
  X,
  ShieldAlert,
  HeartPulse,
  Building2,
  Copy,
  MessageCircle,
  Share2,
} from 'lucide-react';

interface AgencyAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentBriefingType: 'estetica' | 'geral';
  onSelectBriefingType: (type: 'estetica' | 'geral') => void;
}

export const AgencyAdminModal: React.FC<AgencyAdminModalProps> = ({
  isOpen,
  onClose,
  currentBriefingType,
  onSelectBriefingType,
}) => {
  const [passwordInput, setPasswordInput] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [submittedList, setSubmittedList] = useState<any[]>([]);

  React.useEffect(() => {
    if (isUnlocked) {
      try {
        const items = JSON.parse(localStorage.getItem('frame_midia_submitted_briefings') || '[]');
        setSubmittedList(items);
      } catch (e) {
        console.error(e);
      }
    }
  }, [isUnlocked]);

  if (!isOpen) return null;

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === '9396') {
      setIsUnlocked(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Senha incorreta! Acesso permitido apenas para a equipe da agência.');
    }
  };

  const getBriefingUrl = (type: 'estetica' | 'geral') => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    return `${origin}/?type=${type}`;
  };

  const copyLink = (type: 'estetica' | 'geral') => {
    const url = getBriefingUrl(type);
    navigator.clipboard.writeText(url);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const sendWhatsAppLink = (type: 'estetica' | 'geral') => {
    const url = getBriefingUrl(type);
    const title = type === 'estetica' ? 'Briefing de Estética & Saúde' : 'Briefing Geral de Negócios';
    const message = `Olá! 🚀 Segue o link do *${title}* da *Frame Mídia* para iniciarmos o seu projeto:

${url}

Por favor, preencha as etapas para alinharmos o seu posicionamento!`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleSelect = (type: 'estetica' | 'geral') => {
    onSelectBriefingType(type);
    alert(`Briefing alterado para: ${type === 'estetica' ? 'Estética & Saúde (09 Sessões)' : 'Geral de Negócios (11 Sessões)'}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in">
      <div className="relative w-full max-w-lg bg-zinc-950 rounded-2xl shadow-2xl border border-zinc-800 p-6 space-y-6 text-white">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className={`p-2 rounded-xl ${isUnlocked ? 'bg-lime-500/10 text-lime-400' : 'bg-red-500/10 text-red-500'}`}>
              {isUnlocked ? <Unlock className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-black text-base sm:text-lg">
                Painel Restrito da Agência <span className="text-red-500">Frame Mídia</span>
              </h3>
              <p className="text-xs text-zinc-400">
                {isUnlocked ? 'Selecione e compartilhe o formulário com o cliente' : 'Digite a senha da equipe para gerenciar briefings'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form lock state */}
        {!isUnlocked ? (
          <form onSubmit={handleUnlock} className="space-y-4">
            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
                Senha de Acesso da Equipe
              </label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Digite a sua senha de acesso"
                className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-black text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm tracking-widest"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-black rounded-xl shadow-lg shadow-red-500/20 text-sm transition-all"
            >
              Desbloquear Painel da Agência
            </button>
          </form>
        ) : (
          /* Unlocked Selection State */
          <div className="space-y-4">
            <div className="p-3 rounded-xl bg-lime-500/10 border border-lime-500/30 text-lime-400 text-xs flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-bold">
                <Sparkles className="w-4 h-4 text-red-500" /> Painel da Agência Desbloqueado
              </span>
              <span className="font-mono text-[10px] uppercase bg-lime-500/20 px-2 py-0.5 rounded">Equipe Frame Mídia</span>
            </div>

            <p className="text-xs text-zinc-300 font-semibold">
              Selecione e envie o link direto para o seu cliente preencher:
            </p>

            <div className="grid grid-cols-1 gap-3.5">
              {/* Option 1: Estética & Saúde */}
              <div
                className={`p-4 rounded-xl border transition-all space-y-3 ${
                  currentBriefingType === 'estetica'
                    ? 'border-red-500 bg-red-500/10 ring-2 ring-red-500/30'
                    : 'border-zinc-800 bg-zinc-900'
                }`}
              >
                <div className="flex items-center justify-between font-extrabold text-sm">
                  <span className="flex items-center gap-2 text-white">
                    <HeartPulse className="w-4 h-4 text-red-500" /> 1. Briefing de Estética & Saúde (09 Sessões)
                  </span>
                  {currentBriefingType === 'estetica' && (
                    <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded-full font-bold">Ativo na Tela</span>
                  )}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Questionário focado para Clínicas de Estética, Médicas e Saúde.
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => handleSelect('estetica')}
                    className="px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg text-xs transition-all"
                  >
                    Ativar no Site
                  </button>
                  <button
                    type="button"
                    onClick={() => copyLink('estetica')}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold rounded-lg text-xs transition-all border border-zinc-700"
                  >
                    <Copy className="w-3.5 h-3.5 text-lime-400" />
                    {copiedType === 'estetica' ? 'Link Copiado!' : 'Copiar Link do Cliente'}
                  </button>
                  <button
                    type="button"
                    onClick={() => sendWhatsAppLink('estetica')}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-xs transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Enviar no WhatsApp
                  </button>
                </div>
              </div>

              {/* Option 2: Geral de Negócios */}
              <div
                className={`p-4 rounded-xl border transition-all space-y-3 ${
                  currentBriefingType === 'geral'
                    ? 'border-red-500 bg-red-500/10 ring-2 ring-red-500/30'
                    : 'border-zinc-800 bg-zinc-900'
                }`}
              >
                <div className="flex items-center justify-between font-extrabold text-sm">
                  <span className="flex items-center gap-2 text-white">
                    <Building2 className="w-4 h-4 text-lime-400" /> 2. Briefing Geral de Negócios (11 Sessões)
                  </span>
                  {currentBriefingType === 'geral' && (
                    <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded-full font-bold">Ativo na Tela</span>
                  )}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Questionário completo corporativo/comercial amplo (11 sessões).
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => handleSelect('geral')}
                    className="px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg text-xs transition-all"
                  >
                    Ativar no Site
                  </button>
                  <button
                    type="button"
                    onClick={() => copyLink('geral')}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold rounded-lg text-xs transition-all border border-zinc-700"
                  >
                    <Copy className="w-3.5 h-3.5 text-lime-400" />
                    {copiedType === 'geral' ? 'Link Copiado!' : 'Copiar Link do Cliente'}
                  </button>
                  <button
                    type="button"
                    onClick={() => sendWhatsAppLink('geral')}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-xs transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Enviar no WhatsApp
                  </button>
                </div>
              </div>
              </div>
            </div>

            {/* Submissions Inbox History Section */}
            <div className="pt-3 border-t border-zinc-800 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-lime-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-red-500" /> Histórico de Briefings Recebidos no Navegador
                </span>
                <span className="text-[10px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-full font-mono">
                  {submittedList.length} registro(s)
                </span>
              </div>

              {submittedList.length === 0 ? (
                <p className="text-xs text-zinc-500 italic p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
                  Nenhum briefing preenchido neste dispositivo ainda. As respostas enviadas pelos clientes aparecerão aqui automaticamente.
                </p>
              ) : (
                <div className="max-h-48 overflow-y-auto space-y-2 pr-1">
                  {submittedList.map((item, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between text-xs space-y-0.5"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-white">{item.companyName}</span>
                          <span className="font-mono text-[10px] text-red-500 font-black">#{item.id}</span>
                        </div>
                        <p className="text-[11px] text-zinc-400">
                          {item.type === 'estetica' ? '🌸 Estética & Saúde' : '🚀 Geral de Negócios'} •{' '}
                          {new Date(item.submittedAt).toLocaleDateString('pt-BR')} às{' '}
                          {new Date(item.submittedAt).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={onClose}
                className="text-xs text-zinc-400 hover:text-white underline font-semibold"
              >
                Fechar Painel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
