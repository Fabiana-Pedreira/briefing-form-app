import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Briefing de Projeto | Formulário Interativo',
  description: 'Preencha o briefing do seu projeto de forma simples, rápida e interativa. Gerado com Next.js & hospedado na Vercel.',
  openGraph: {
    title: 'Briefing de Projeto | Formulário Interativo',
    description: 'Envie as especificações do seu projeto de maneira profissional.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-brand-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
