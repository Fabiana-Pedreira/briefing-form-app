'use client';

import React from 'react';
import { Moon, Sun, Eye, Film, Sparkles } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenPreview: () => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode, onOpenPreview }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800/80 bg-white/80 dark:bg-[#080c14]/80 backdrop-blur-md transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-lime-500 via-lime-400 to-coral-500 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-lime-500/20">
            <Film className="w-5 h-5 text-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">
                Briefing <span className="text-lime-500 font-black">Frame Mídia</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-lime-500/10 text-lime-600 dark:text-lime-400 border border-lime-500/30">
                <Sparkles className="w-3 h-3 text-coral-500" /> Aplicação de Projetos
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block font-medium">
              Menos ruído, mais posicionamento.
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenPreview}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-all border border-slate-200 dark:border-slate-700/80"
            title="Visualizar Resumo do Briefing"
          >
            <Eye className="w-4 h-4 text-lime-500" />
            <span className="hidden xs:inline">Ver Resumo</span>
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
            aria-label="Alternar Tema"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
