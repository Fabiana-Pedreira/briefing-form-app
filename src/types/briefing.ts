export interface BriefingData {
  // Step 1: Informações do Cliente
  clientName: string;
  companyName: string;
  email: string;
  phone: string;
  website: string;
  industry: string;

  // Step 2: Objetivos do Projeto
  projectType: string;
  mainGoals: string[];
  targetAudience: string;
  competitors: string;
  differentials: string;

  // Step 3: Identidade Visual & Design
  brandStyle: string[];
  primaryColor: string;
  secondaryColor: string;
  references: string;
  toneOfVoice: string;

  // Step 4: Requisitos Técnicos & Escopo
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

  projectType: 'Website Institucional',
  mainGoals: ['Aumentar Vendas', 'Melhorar Imagem da Marca'],
  targetAudience: '',
  competitors: '',
  differentials: '',

  brandStyle: ['Moderno', 'Clean'],
  primaryColor: '#6366f1',
  secondaryColor: '#d946ef',
  references: '',
  toneOfVoice: 'Profissional & Confiável',

  requiredPages: ['Home', 'Sobre Nós', 'Serviços/Produtos', 'Contato'],
  features: ['Formulário de Contato', 'Integração com WhatsApp', 'SEO Otimizado'],
  budgetRange: 'R$ 5.000 a R$ 10.000',
  deadline: '30 dias',
  additionalNotes: '',
};
