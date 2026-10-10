'use client';

import React from 'react';
import { Moon, Sun, Eye, Film, Sparkles, Lock } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenPreview: () => void;
  onOpenAgencyAdmin: () => void;
  currentBriefingType: 'estetica' | 'geral';
  onSelectBriefingType?: (type: 'estetica' | 'geral') => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
  onOpenPreview,
  onOpenAgencyAdmin,
  currentBriefingType,
  onSelectBriefingType,
}) => {
  const toggleBriefingType = () => {
    if (onSelectBriefingType) {
      const nextType = currentBriefingType === 'estetica' ? 'geral' : 'estetica';
      onSelectBriefingType(nextType);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-black/90 backdrop-blur-md transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 via-red-500 to-lime-500 flex items-center justify-center text-white font-black shadow-lg shadow-red-500/20">
            <Film className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight text-white">
                Briefing <span className="text-red-500 font-black">Frame Mídia</span>
              </span>
              <button
                type="button"
                onClick={toggleBriefingType}
                title="Clique para alternar o formulário de briefing"
                className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-lime-500/15 hover:bg-lime-500/25 text-lime-400 border border-lime-500/40 transition-all cursor-pointer"
              >
                <Sparkles className="w-3 h-3 text-red-400" />
                {currentBriefingType === 'estetica' ? 'Estética & Saúde (09 Sessões)' : 'Geral de Negócios (11 Sessões)'}
                <span className="text-[9px] text-red-500 font-black ml-1">⇄ Alternar</span>
              </button>
            </div>
            <p className="text-xs text-zinc-400 hidden sm:block font-medium">
              Menos ruído, mais posicionamento.
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Agency Restricted Area Password Button */}
          <button
            onClick={onOpenAgencyAdmin}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-lime-400 bg-lime-500/10 hover:bg-lime-500/20 rounded-xl transition-all border border-lime-500/30"
            title="Acesso Restrito da Agência Frame Mídia"
          >
            <Lock className="w-3.5 h-3.5 text-red-500" />
            <span className="hidden sm:inline">Área da Agência</span>
          </button>

          <button
            onClick={onOpenPreview}
            className="flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 rounded-xl transition-all border border-zinc-800"
            title="Visualizar Resumo do Briefing"
          >
            <Eye className="w-4 h-4 text-red-500" />
            <span className="hidden xs:inline">Ver Resumo</span>
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl text-zinc-300 hover:bg-zinc-900 transition-colors border border-transparent hover:border-zinc-800"
            aria-label="Alternar Tema"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-zinc-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
