// ==========================================
// 1. BRIEFING DE ESTÉTICA & SAÚDE (09 SESSÕES)
// ==========================================
export interface BriefingEsteticaData {
  companyName: string;
  yearsInMarket: string;
  originStory: string;
  teamStructure: string;
  location: string;
  mainServices: string;
  topSellingService: string;
  serviceToSellMore: string;
  mainDifferential: string;

  goalsNextMonths: string;
  growthFocus: string[];
  protocolsToPromote: string;
  expansionPlans: string;
  monthlyRevenueTarget: string;
  newClientsMonthlyTarget: string;
  satisfactoryResultDefinition: string;

  idealClientProfile: string;
  ageRange: string;
  genderAudience: string;
  neighborhoodsCities: string;
  purchasingPower: string;
  aestheticComplaints: string;
  clientValues: string[];
  objectionsBeforeBuying: string;
  whyChooseYou: string;

  desiredBrandPerception: string;
  essenceWords: string;
  brandAttributes: string[];
  marketPositioning: string;
  brandStoryPurpose: string;
  elementsToKeep: string;
  whatNotToTransmit: string;
  referenceClinics: string;
  experienceDifferential: string;

  activeSocialNetworks: string[];
  topLeadChannel: string;
  paidAdsExperience: string;
  bestPerformingContent: string;
  videoComfortLevel: string;
  professionalMediaAvailable: string;
  frequentQuestions: string;
  communicationTone: string[];
  contentRestrictions: string;

  leadContactChannels: string[];
  salesAttendant: string;
  definedSalesProcess: string;
  avgResponseTime: string;
  followUpProcess: string;
  lostSalesReasons: string;
  winbackStrategy: string;
  conversionTracking: string;

  mainCompetitors: string;
  competitorsStrengths: string;
  whatYouCanDoBetter: string;
  competitorsPromotions: string;
  competitiveEdgeType: string;
  unmetLocalNeeds: string;

  agencyMonthlyBudget: string;
  paidAdsMonthlyBudget: string;
  approvalResponsible: string;
  mediaProductionFrequency: string;
  upcomingLaunchesDates: string;
  agendaCapacityLimits: string;
  agencyExpectations: string;
  monthlyReportingExpectations: string;

  highestProfitMarginServices: string;
  entryLeadMagnetServices: string;
  packagesToStrengthen: string;
  avgTicketPerClient: string;
  purchasePattern: string;
  seasonalityFactors: string;
  beforeAfterPolicy: string;
  professionalsCredentials: string;
  safetyResultsConcerns: string;
  capacityForIncreasedDemand: string;
}

export const initialBriefingEsteticaData: BriefingEsteticaData = {
  companyName: '',
  yearsInMarket: '',
  originStory: '',
  teamStructure: 'Possuo equipe de profissionais',
  location: '',
  mainServices: '',
  topSellingService: '',
  serviceToSellMore: '',
  mainDifferential: '',

  goalsNextMonths: '',
  growthFocus: ['Atrair novos clientes', 'Aumentar ticket médio'],
  protocolsToPromote: '',
  expansionPlans: '',
  monthlyRevenueTarget: '',
  newClientsMonthlyTarget: '',
  satisfactoryResultDefinition: '',

  idealClientProfile: '',
  ageRange: '25 a 50 anos',
  genderAudience: 'Predominantemente Feminino',
  neighborhoodsCities: '',
  purchasingPower: 'Médio / Alto (Classes A e B)',
  aestheticComplaints: '',
  clientValues: ['Resultados Visíveis e Rápidos', 'Confiança, Segurança e Credibilidade'],
  objectionsBeforeBuying: '',
  whyChooseYou: '',

  desiredBrandPerception: '',
  essenceWords: '',
  brandAttributes: ['Sofisticação & Elegância', 'Confiança & Segurança Médica'],
  marketPositioning: 'Premium / Alta Gama (Exclusiva)',
  brandStoryPurpose: '',
  elementsToKeep: '',
  whatNotToTransmit: '',
  referenceClinics: '',
  experienceDifferential: '',

  activeSocialNetworks: ['Instagram', 'WhatsApp Business'],
  topLeadChannel: 'WhatsApp',
  paidAdsExperience: 'Sim, invisto atualmente de forma contínua',
  bestPerformingContent: '',
  videoComfortLevel: 'Sim, me sinto confortável e gravo com frequência',
  professionalMediaAvailable: 'Sim, possuo acervo profissional',
  frequentQuestions: '',
  communicationTone: ['Educativa', 'Sofisticada', 'Próxima e Acolhedora'],
  contentRestrictions: '',

  leadContactChannels: ['WhatsApp', 'Instagram Direct'],
  salesAttendant: '',
  definedSalesProcess: 'Sim, temos script padrão e tabela de preços fácil',
  avgResponseTime: 'Em até 15 minutos',
  followUpProcess: '',
  lostSalesReasons: '',
  winbackStrategy: '',
  conversionTracking: '',

  mainCompetitors: '',
  competitorsStrengths: '',
  whatYouCanDoBetter: '',
  competitorsPromotions: '',
  competitiveEdgeType: 'Experiência do Cliente & Ambiente',
  unmetLocalNeeds: '',

  agencyMonthlyBudget: 'R$ 2.500 / mês',
  paidAdsMonthlyBudget: 'R$ 1.500 / mês',
  approvalResponsible: '',
  mediaProductionFrequency: 'Semanalmente',
  upcomingLaunchesDates: '',
  agendaCapacityLimits: '',
  agencyExpectations: '',
  monthlyReportingExpectations: '',

  highestProfitMarginServices: '',
  entryLeadMagnetServices: '',
  packagesToStrengthen: '',
  avgTicketPerClient: '',
  purchasePattern: 'Misto (Procedimentos pontuais e planos de tratamento)',
  seasonalityFactors: '',
  beforeAfterPolicy: '',
  professionalsCredentials: '',
  safetyResultsConcerns: '',
  capacityForIncreasedDemand: '',
};

// ==========================================
// 2. BRIEFING GERAL DE NEGÓCIOS (11 SESSÕES)
// ==========================================
export interface BriefingGeralData {
  // 01. Identificação e história do negócio
  companyName: string;
  industrySegment: string;
  locationCoverage: string;
  timeInBusiness: string;
  businessIdeaOrigin: string;
  mainProductService: string;
  businessModel: string;
  currentPhase: string; // Início, Crescimento, Consolidação, Expansão, Reposicionamento
  currentMainChallenges: string;
  futurePlans: string;

  // 02. Identidade, essência e posicionamento
  brandPurpose: string;
  customerProblemSolved: string;
  missionVisionValues: string;
  brandPersonalityTraits: string[];
  desiredPeopleDescription: string;
  mainDifferentials: string;
  admiredBrandsWhy: string;
  desiredMarketPositioning: string;
  perceptionToAvoid: string;
  brandIfPersonPersonality: string;

  // 03. Produtos, serviços e proposta de valor
  productsServicesList: string;
  topSellingProducts: string;
  growthOpportunityProducts: string;
  mainConsumerBenefit: string;
  whyChooseUsOverOthers: string;
  priceRange: string;
  priorityProductsOffers: string;
  capacityInventoryLimits: string;
  purchaseContractProcess: string;
  frequentCustomerDoubts: string;

  // 04. Público-alvo e comportamento do consumidor
  currentAudienceProfile: string;
  idealClientToConquer: string;
  ageAndSocioeconomicProfile: string;
  audienceRegions: string;
  needsWantsDifficulties: string;
  buyingMotivations: string;
  decisionFactors: string;
  purchaseObjections: string;
  whereAudienceSeeksInfo: string;
  currentPerceptionByClients: string;

  // 05. Objetivos e expectativas
  goals6to12Months: string;
  marketingExpectations: string;
  primaryGrowthFocus: string[]; // Aumentar vendas, Atrair clientes, Fortalecer marca, Fidelizar, Lançar produtos
  revenueGrowthTarget: string;
  priorityResults: string;
  impedimentsToGoals: string;
  timedGoals: string;
  satisfactory3MonthsResult: string;
  frameMidiaExpectations: string;
  nonNegotiablePriority: string;

  // 06. Identidade visual e comunicação
  hasVisualIdentity: string;
  elementsToKeepVisual: string;
  rebrandingInterest: string;
  brandToneOfVoice: string[]; // Formal, Descontraído, Educativo, Técnico, Próximo, Inspirador
  coreMessagesToTransmit: string;
  topicsToAvoid: string;
  visualReferencesStyle: string;
  existingMediaAssets: string;
  approvalResponsiblePerson: string;

  // 07. Presença digital e canais de comunicação
  currentDigitalChannels: string[];
  priorityChannels: string;
  topPerformingChannel: string;
  hasWebsiteLandingPage: string;
  toolsUsed: string[]; // Google Ads, Meta Ads, E-mail marketing, CRM
  previousCampaignsResults: string;
  topPerformingContent: string;
  postingFrequency: string;
  ownMediaProductionAvailable: string;
  interestInNewChannels: string;

  // 08. Marketing, vendas e relacionamento
  howClientsArriveNow: string;
  salesServiceProcess: string;
  attendantResponsible: string;
  structuredFollowUpProcess: string;
  postPurchaseRelationship: string;
  loyaltyReferralActions: string;
  reasonsForLostSales: string;
  seasonalityPeriods: string;
  kpiTrackingStatus: string;
  resultsEvaluationMethod: string;

  // 09. Concorrência e mercado
  directCompetitors: string;
  indirectCompetitors: string;
  whatCompetitorsDoWell: string;
  whatCanBeDoneDifferently: string;
  competitorsPositioningCommunication: string;
  segmentTrendsImpact: string;
  unmetMarketNeeds: string;
  marketOpportunitiesIdentified: string;
  consumerBehaviorChanges: string;
  desiredMarketSpace: string;

  // 10. Estrutura, recursos e investimento
  teamSizeAndRoles: string;
  frameMidiaMainContact: string;
  decisionMakersApproval: string;
  teamAvailabilityForContent: string;
  monthlyMarketingBudget: string;
  monthlyPaidAdsBudget: string;
  existingResourcesForExecution: string;
  operationalFinancialLimits: string;
  calendarImportantEvents: string;
  toolsPlatformsUsed: string;

  // 11. Expectativas, alinhamento e próximos passos
  motivationForFrameMidiaNow: string;
  pastMarketingExperiences: string;
  expectationsFromAgency: string;
  agencyResponsibilities: string;
  companyResponsibilities: string;
  meetingAvailability: string;
  reportingFormatFrequency: string;
  unaddressedConcerns: string;
  additionalImportantInfo: string;
}

export const initialBriefingGeralData: BriefingGeralData = {
  // 01
  companyName: '',
  industrySegment: '',
  locationCoverage: '',
  timeInBusiness: '',
  businessIdeaOrigin: '',
  mainProductService: '',
  businessModel: '',
  currentPhase: 'Crescimento',
  currentMainChallenges: '',
  futurePlans: '',

  // 02
  brandPurpose: '',
  customerProblemSolved: '',
  missionVisionValues: '',
  brandPersonalityTraits: ['Inovadora', 'Confiável', 'Profissional'],
  desiredPeopleDescription: '',
  mainDifferentials: '',
  admiredBrandsWhy: '',
  desiredMarketPositioning: 'Referência e Autoridade no Segmento',
  perceptionToAvoid: '',
  brandIfPersonPersonality: '',

  // 03
  productsServicesList: '',
  topSellingProducts: '',
  growthOpportunityProducts: '',
  mainConsumerBenefit: '',
  whyChooseUsOverOthers: '',
  priceRange: '',
  priorityProductsOffers: '',
  capacityInventoryLimits: '',
  purchaseContractProcess: '',
  frequentCustomerDoubts: '',

  // 04
  currentAudienceProfile: '',
  idealClientToConquer: '',
  ageAndSocioeconomicProfile: '',
  audienceRegions: '',
  needsWantsDifficulties: '',
  buyingMotivations: '',
  decisionFactors: '',
  purchaseObjections: '',
  whereAudienceSeeksInfo: '',
  currentPerceptionByClients: '',

  // 05
  goals6to12Months: '',
  marketingExpectations: '',
  primaryGrowthFocus: ['Aumentar as vendas', 'Atrair clientes qualificados'],
  revenueGrowthTarget: '',
  priorityResults: '',
  impedimentsToGoals: '',
  timedGoals: '',
  satisfactory3MonthsResult: '',
  frameMidiaExpectations: '',
  nonNegotiablePriority: '',

  // 06
  hasVisualIdentity: 'Sim, possuímos identidade e manual de marca completos',
  elementsToKeepVisual: '',
  rebrandingInterest: 'Não, apenas atualizar e profissionalizar a comunicação',
  brandToneOfVoice: ['Profissional', 'Educativo', 'Inspirador'],
  coreMessagesToTransmit: '',
  topicsToAvoid: '',
  visualReferencesStyle: '',
  existingMediaAssets: '',
  approvalResponsiblePerson: '',

  // 07
  currentDigitalChannels: ['Instagram', 'WhatsApp', 'Site Oficial'],
  priorityChannels: 'Instagram & WhatsApp',
  topPerformingChannel: '',
  hasWebsiteLandingPage: 'Sim, possuímos site institucional',
  toolsUsed: ['Meta Ads (Instagram/Facebook)', 'Google Ads'],
  previousCampaignsResults: '',
  topPerformingContent: '',
  postingFrequency: '3 a 5 vezes por semana',
  ownMediaProductionAvailable: '',
  interestInNewChannels: '',

  // 08
  howClientsArriveNow: '',
  salesServiceProcess: '',
  attendantResponsible: '',
  structuredFollowUpProcess: '',
  postPurchaseRelationship: '',
  loyaltyReferralActions: '',
  reasonsForLostSales: '',
  seasonalityPeriods: '',
  kpiTrackingStatus: 'Acompanhamos métricas básicas',
  resultsEvaluationMethod: '',

  // 09
  directCompetitors: '',
  indirectCompetitors: '',
  whatCompetitorsDoWell: '',
  whatCanBeDoneDifferently: '',
  competitorsPositioningCommunication: '',
  segmentTrendsImpact: '',
  unmetMarketNeeds: '',
  marketOpportunitiesIdentified: '',
  consumerBehaviorChanges: '',
  desiredMarketSpace: '',

  // 10
  teamSizeAndRoles: '',
  frameMidiaMainContact: '',
  decisionMakersApproval: '',
  teamAvailabilityForContent: '',
  monthlyMarketingBudget: 'R$ 3.000 a R$ 5.000 / mês',
  monthlyPaidAdsBudget: 'R$ 2.000 a R$ 4.000 / mês',
  existingResourcesForExecution: '',
  operationalFinancialLimits: '',
  calendarImportantEvents: '',
  toolsPlatformsUsed: '',

  // 11
  motivationForFrameMidiaNow: '',
  pastMarketingExperiences: '',
  expectationsFromAgency: '',
  agencyResponsibilities: '',
  companyResponsibilities: '',
  meetingAvailability: '',
  reportingFormatFrequency: 'Relatório Mensal com Reunião de Alinhamento',
  unaddressedConcerns: '',
  additionalImportantInfo: '',
};
