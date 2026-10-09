export interface BriefingEsteticaData {
  // 01. Sobre o negócio
  companyName: string;
  yearsInMarket: string;
  originStory: string;
  teamStructure: string;
  location: string;
  mainServices: string;
  topSellingService: string;
  serviceToSellMore: string;
  mainDifferential: string;

  // 02. Objetivos do negócio
  goalsNextMonths: string;
  growthFocus: string[]; // Novos clientes, Fidelizar atuais, Ticket médio
  protocolsToPromote: string;
  expansionPlans: string;
  monthlyRevenueTarget: string;
  newClientsMonthlyTarget: string;
  satisfactoryResultDefinition: string;

  // 03. Público-alvo e clientes
  idealClientProfile: string;
  ageRange: string;
  genderAudience: string;
  neighborhoodsCities: string;
  purchasingPower: string;
  aestheticComplaints: string;
  clientValues: string[]; // Preço, Confiança, Qualidade, Exclusividade, Resultados
  objectionsBeforeBuying: string;
  whyChooseYou: string;

  // 04. Identidade e posicionamento da marca
  desiredBrandPerception: string;
  essenceWords: string;
  brandAttributes: string[]; // Sofisticação, Acolhimento, Confiança, Modernidade, Naturalidade, Acessibilidade
  marketPositioning: string; // Popular, Intermediário, Premium
  brandStoryPurpose: string;
  elementsToKeep: string;
  whatNotToTransmit: string;
  referenceClinics: string;
  experienceDifferential: string;

  // 05. Presença digital e conteúdo
  activeSocialNetworks: string[];
  topLeadChannel: string;
  paidAdsExperience: string;
  bestPerformingContent: string;
  videoComfortLevel: string; // Sim, Às vezes, Não
  professionalMediaAvailable: string;
  frequentQuestions: string;
  communicationTone: string[]; // Educativa, Sofisticada, Próxima, Comercial
  contentRestrictions: string;

  // 06. Comercial e atendimento
  leadContactChannels: string[]; // WhatsApp, Instagram, Telefone, Site
  salesAttendant: string;
  definedSalesProcess: string;
  avgResponseTime: string;
  followUpProcess: string;
  lostSalesReasons: string;
  winbackStrategy: string;
  conversionTracking: string;

  // 07. Concorrência e mercado
  mainCompetitors: string;
  competitorsStrengths: string;
  whatYouCanDoBetter: string;
  competitorsPromotions: string;
  competitiveEdgeType: string; // Preço, Experiência, Especialização, Diferenciação
  unmetLocalNeeds: string;

  // 08. Investimento, recursos e expectativas
  agencyMonthlyBudget: string;
  paidAdsMonthlyBudget: string;
  approvalResponsible: string;
  mediaProductionFrequency: string;
  upcomingLaunchesDates: string;
  agendaCapacityLimits: string;
  agencyExpectations: string;
  monthlyReportingExpectations: string;

  // 09. Perguntas estratégicas específicas para estética
  highestProfitMarginServices: string;
  entryLeadMagnetServices: string;
  packagesToStrengthen: string;
  avgTicketPerClient: string;
  purchasePattern: string; // Recorrente, Pontual, Misto
  seasonalityFactors: string;
  beforeAfterPolicy: string;
  professionalsCredentials: string;
  safetyResultsConcerns: string;
  capacityForIncreasedDemand: string;
}

export const initialBriefingEsteticaData: BriefingEsteticaData = {
  // 01. Sobre o negócio
  companyName: '',
  yearsInMarket: '',
  originStory: '',
  teamStructure: 'Possuo uma equipe de profissionais',
  location: '',
  mainServices: '',
  topSellingService: '',
  serviceToSellMore: '',
  mainDifferential: '',

  // 02. Objetivos do negócio
  goalsNextMonths: '',
  growthFocus: ['Atrair novos clientes', 'Aumentar ticket médio'],
  protocolsToPromote: '',
  expansionPlans: '',
  monthlyRevenueTarget: '',
  newClientsMonthlyTarget: '',
  satisfactoryResultDefinition: '',

  // 03. Público-alvo e clientes
  idealClientProfile: '',
  ageRange: '25 a 50 anos',
  genderAudience: 'Predominantemente Feminino',
  neighborhoodsCities: '',
  purchasingPower: 'Médio / Alto (Classes A e B)',
  aestheticComplaints: '',
  clientValues: ['Resultados Visíveis', 'Confiança & Segurança', 'Qualidade dos Produtos'],
  objectionsBeforeBuying: '',
  whyChooseYou: '',

  // 04. Identidade e posicionamento da marca
  desiredBrandPerception: '',
  essenceWords: '',
  brandAttributes: ['Sofisticação', 'Confiança', 'Naturalidade'],
  marketPositioning: 'Premium',
  brandStoryPurpose: '',
  elementsToKeep: '',
  whatNotToTransmit: '',
  referenceClinics: '',
  experienceDifferential: '',

  // 05. Presença digital e conteúdo
  activeSocialNetworks: ['Instagram', 'WhatsApp Business'],
  topLeadChannel: 'WhatsApp',
  paidAdsExperience: 'Já investi anteriormente',
  bestPerformingContent: '',
  videoComfortLevel: 'Sim, me sinto confortável',
  professionalMediaAvailable: 'Sim, possuo fotos e vídeos da estrutura',
  frequentQuestions: '',
  communicationTone: ['Educativa', 'Sofisticada', 'Próxima'],
  contentRestrictions: '',

  // 06. Comercial e atendimento
  leadContactChannels: ['WhatsApp', 'Instagram Direct'],
  salesAttendant: '',
  definedSalesProcess: 'Sim, temos script de atendimento',
  avgResponseTime: 'Em até 15 minutos',
  followUpProcess: '',
  lostSalesReasons: '',
  winbackStrategy: '',
  conversionTracking: 'Acompanhamos parcialmente',

  // 07. Concorrência e mercado
  mainCompetitors: '',
  competitorsStrengths: '',
  whatYouCanDoBetter: '',
  competitorsPromotions: '',
  competitiveEdgeType: 'Experiência & Diferenciação',
  unmetLocalNeeds: '',

  // 08. Investimento, recursos e expectativas
  agencyMonthlyBudget: 'R$ 2.000 a R$ 4.000',
  paidAdsMonthlyBudget: 'R$ 1.000 a R$ 2.000',
  approvalResponsible: '',
  mediaProductionFrequency: 'Semanalmente',
  upcomingLaunchesDates: '',
  agendaCapacityLimits: '',
  agencyExpectations: '',
  monthlyReportingExpectations: '',

  // 09. Perguntas estratégicas específicas para estética
  highestProfitMarginServices: '',
  entryLeadMagnetServices: '',
  packagesToStrengthen: '',
  avgTicketPerClient: '',
  purchasePattern: 'Misto (Procedimentos pontuais e planos recorrentes)',
  seasonalityFactors: '',
  beforeAfterPolicy: '',
  professionalsCredentials: '',
  safetyResultsConcerns: '',
  capacityForIncreasedDemand: '',
};
