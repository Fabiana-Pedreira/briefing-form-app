# 🚀 Formulário de Briefing Interativo - Vercel Ready

Aplicação moderna e interativa de **Página de Briefing de Projetos**, desenvolvida com **Next.js 14**, **React**, **TypeScript** e **Tailwind CSS**, perfeitamente configurada para ser hospedada na **Vercel**.

## ✨ Recursos

- 📝 **Wizard Multi-Etapas**: Formulário dividido em 5 etapas intuitivas (Cliente, Objetivos, Identidade Visual, Escopo e Envio/Exportação).
- 🎨 **Seletor de Estilo Visual**: Paleta de cores dinâmica, upload drag-and-drop simulado e botões interativos.
- 📄 **Exportação Instantânea**: Baixe o briefing em **PDF** formatado ou copie o resumo em **Markdown / JSON**.
- ⚡ **API Serverless Vercel**: Rota `/api/briefing` pronta para receber respostas e enviar para Webhooks (Discord, Slack, Zapier) ou e-mail.
- 🌓 **Design Dark & Light Mode**: Interface moderna com glassmorphism, gradientes elegantes e suporte a tema escuro/claro.
- 📱 **Totalmente Responsivo**: Otimizado para desktop, tablets e dispositivos móveis.

---

## 🛠️ Como Executar Localmente

1. Entre no diretório do projeto:
```bash
cd briefing-form-app
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra no navegador: [http://localhost:3000](http://localhost:3000)

---

## ☁️ Como Hospedar na Vercel

### Opção 1: Via Vercel CLI (Recomendado & Mais Rápido)

1. Instale o Vercel CLI globalmente (caso ainda não tenha):
```bash
npm i -g vercel
```

2. Dentro da pasta `briefing-form-app`, execute:
```bash
vercel
```

3. Siga as instruções no terminal. O link da aplicação será gerado automaticamente!

---

### Opção 2: Via GitHub / Dashboard Vercel

1. Suba este projeto para um repositório no seu GitHub.
2. Acesse [vercel.com/new](https://vercel.com/new).
3. Importe o repositório `briefing-form-app`.
4. Clique em **Deploy**! A Vercel detectará automaticamente o framework **Next.js** e o comando de build `npm run build`.

---

## 🔒 Variáveis de Ambiente (Opcionais)

No painel da Vercel (`Settings > Environment Variables`), você pode adicionar:

| Variável | Descrição |
| --- | --- |
| `WEBHOOK_URL` | URL de Webhook para receber notificações no Discord / Slack / Zapier |
| `NOTIFICATION_EMAIL` | Endereço de e-mail para receber notificações |

---

Desenvolvido com ❤️ para agências, freelancers e equipes de produtos.
