'use client';

import React, { useState } from 'react';
import { Lock, Unlock, Check, Sparkles, X, ShieldAlert, HeartPulse, Building2 } from 'lucide-react';

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

  const handleSelect = (type: 'estetica' | 'geral') => {
    onSelectBriefingType(type);
    alert(`Briefing alterado com sucesso para: ${type === 'estetica' ? 'Estética & Saúde (09 Sessões)' : 'Geral de Negócios (11 Sessões)'}`);
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
                {isUnlocked ? 'Selecione o formulário ativo para o cliente' : 'Digite a senha da equipe para gerenciar briefings'}
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
                <Sparkles className="w-4 h-4 text-red-500" /> Painel Desbloqueado
              </span>
              <span className="font-mono text-[10px] uppercase bg-lime-500/20 px-2 py-0.5 rounded">Equipe Frame Mídia</span>
            </div>

            <p className="text-xs text-zinc-300 font-semibold">
              Selecione qual briefing ficará visível para a cliente preencher nesta página:
            </p>

            <div className="grid grid-cols-1 gap-3">
              {/* Option 1: Estética & Saúde */}
              <button
                type="button"
                onClick={() => handleSelect('estetica')}
                className={`p-4 rounded-xl border text-left transition-all space-y-1.5 ${
                  currentBriefingType === 'estetica'
                    ? 'border-red-500 bg-red-500/10 ring-2 ring-red-500/30'
                    : 'border-zinc-800 bg-zinc-900 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between font-extrabold text-sm">
                  <span className="flex items-center gap-2 text-white">
                    <HeartPulse className="w-4 h-4 text-red-500" /> 1. Briefing de Estética & Saúde (09 Sessões)
                  </span>
                  {currentBriefingType === 'estetica' && (
                    <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded-full font-bold">Ativo</span>
                  )}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed pl-6">
                  Questionário focado para Clínicas Estéticas, Médicas e Saúde (Margem de lucro, normas de fotos, tratamentos porta de entrada, etc).
                </p>
              </button>

              {/* Option 2: Geral de Negócios */}
              <button
                type="button"
                onClick={() => handleSelect('geral')}
                className={`p-4 rounded-xl border text-left transition-all space-y-1.5 ${
                  currentBriefingType === 'geral'
                    ? 'border-red-500 bg-red-500/10 ring-2 ring-red-500/30'
                    : 'border-zinc-800 bg-zinc-900 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between font-extrabold text-sm">
                  <span className="flex items-center gap-2 text-white">
                    <Building2 className="w-4 h-4 text-lime-400" /> 2. Briefing Geral de Negócios (11 Sessões)
                  </span>
                  {currentBriefingType === 'geral' && (
                    <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded-full font-bold">Ativo</span>
                  )}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed pl-6">
                  Questionário completo de diagnóstico corporativo/comercial amplo (11 sessões: História, Posicionamento, Produtos, Mercado, Relacionamento, etc).
                </p>
              </button>
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
