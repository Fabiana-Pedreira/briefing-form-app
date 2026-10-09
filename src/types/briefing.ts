export interface BriefingData {
  // Step 1: Informações do Cliente & Empresa
  clientName: string;
  companyName: string;
  email: string;
  phone: string;
  website: string;
  industry: string;

  // Step 2: Objetivos do Projeto & Pilares Frame Mídia
  projectType: string;
  mainGoals: string[];
  targetAudience: string;
  competitors: string;
  differentials: string;

  // Step 3: Identidade Visual & Tom de Voz
  brandStyle: string[];
  primaryColor: string;
  secondaryColor: string;
  references: string;
  toneOfVoice: string;

  // Step 4: Escopo & Requisitos Técnicos
  requiredPages: string[];
  features: string[];
  budgetRange: string;
  deadline: string;
  additionalNotes: string;
}

export const initialBriefingData: BriefingData = {
  clientName: '',
  companyName: '',
  email: '',
  phone: '',
  website: '',
  industry: 'Tecnologia & Inovação',

  projectType: 'Ecossistema Integrado (Estratégia + Audiovisual + Design)',
  mainGoals: [
    'Elevar percepção de valor (parar de disputar preço)',
    'Construir narrativa audiovisual de alto impacto',
  ],
  targetAudience: '',
  competitors: '',
  differentials: '',

  brandStyle: ['Moderno', 'Clean', 'High-tech / Premium'],
  primaryColor: '#a3e635',
  secondaryColor: '#ff5e36',
  references: '',
  toneOfVoice: 'Profissional, Autêntico & Estratégico',

  requiredPages: ['Home', 'Posicionamento & Quem Somos', 'Soluções & Pilares', 'Contato / Aplicação'],
  features: ['Formulário de Aplicação Qualificado', 'Integração com WhatsApp', 'SEO Otimizado'],
  budgetRange: 'R$ 5.000 a R$ 10.000',
  deadline: '30 dias',
  additionalNotes: '',
};
