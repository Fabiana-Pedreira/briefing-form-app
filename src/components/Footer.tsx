'use client';

import React from 'react';
import { ShieldCheck, Cloud, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm py-6 mt-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 text-center sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <Cloud className="w-4 h-4 text-brand-500" />
          <span>Hospedado na <strong>Vercel Serverless Edge Platform</strong></span>
        </div>

        <div className="mt-3 sm:mt-0 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Dados seguros e privados</span>
          <span className="mx-1">•</span>
          <span className="flex items-center gap-1">
            Feito com <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> para sua agência
          </span>
        </div>
      </div>
    </footer>
  );
};
