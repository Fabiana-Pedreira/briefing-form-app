'use client';

import React from 'react';
import { Sparkles, Moon, Sun, Eye, Layers } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenPreview: () => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode, onOpenPreview }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-500 to-accent-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight gradient-text">
                Briefing Studio
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                <Sparkles className="w-3 h-3" /> Vercel Ready
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
              Especificação Interativa de Projetos
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenPreview}
            className="flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-all border border-slate-200 dark:border-slate-700"
            title="Visualizar Resumo Atual"
          >
            <Eye className="w-4 h-4 text-brand-500" />
            <span className="hidden xs:inline">Ver Resumo</span>
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
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
