'use client';

import React from 'react';
import { ShieldCheck, Cloud, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-900 bg-white/50 dark:bg-black/50 backdrop-blur-sm py-6 mt-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 text-center sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <Cloud className="w-4 h-4 text-lime-400" />
          <span><strong>Frame Mídia</strong> • Consultoria de Estratégia, Audiovisual & Design</span>
        </div>

        <div className="mt-3 sm:mt-0 flex items-center justify-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <ShieldCheck className="w-4 h-4 text-lime-500" />
          <span>Diagnóstico de projetos qualificados</span>
          <span className="mx-1">•</span>
          <span className="flex items-center gap-1">
            Feito com <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> para sua marca
          </span>
        </div>
      </div>
    </footer>
  );
};
