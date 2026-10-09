'use client';

import React, { useState } from 'react';
import { BriefingEsteticaData } from '@/types/briefing';
import { X, Copy, Check, FileText, Code } from 'lucide-react';

interface BriefingPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: BriefingEsteticaData;
}

export const BriefingPreviewModal: React.FC<BriefingPreviewModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  const [copied, setCopied] = useState(false);
  const [viewFormat, setViewFormat] = useState<'markdown' | 'json'>('markdown');

  if (!isOpen) return null;

  const generateMarkdown = () => {
    return `# 📄 BRIEFING ESTRATÉGICO DE ESTÉTICA & SAÚDE - FRAME MÍDIA
**Empresa / Clínica:** ${data.companyName || 'Não informada'}
**Tempo de Atuação:** ${data.yearsInMarket || 'Não informado'}
**Localização:** ${data.location || 'Não informada'}

---

## 01. Sobre o Negócio
- **História & Origem:** ${data.originStory || 'Não informado'}
- **Estrutura de Equipe:** ${data.teamStructure}
- **Serviços Oferecidos:** ${data.mainServices || 'Não informado'}
- **Serviço Mais Vendido:** ${data.topSellingService || 'Não informado'}
- **Serviço que Deseja Vender Mais:** ${data.serviceToSellMore || 'Não informado'}
- **Diferencial Competitivo:** ${data.mainDifferential || 'Não informado'}

## 02. Objetivos do Negócio
- **Objetivos Próximos 6-12 Meses:** ${data.goalsNextMonths || 'Não informado'}
- **Foco de Crescimento:** ${data.growthFocus.join(', ')}
- **Protocolos para Divulgação:** ${data.protocolsToPromote || 'Nenhum'}
- **Planos de Expansão:** ${data.expansionPlans || 'Nenhum'}
- **Meta Mensal Faturamento:** ${data.monthlyRevenueTarget || 'Não informado'}
- **Meta Novos Clientes/mês:** ${data.newClientsMonthlyTarget || 'Não informado'}
- **Resultado Satisfatório:** ${data.satisfactoryResultDefinition || 'Não informado'}

## 03. Público-Alvo e Clientes
- **Perfil Cliente Ideal:** ${data.idealClientProfile || 'Não informado'}
- **Faixa Etária & Gênero:** ${data.ageRange} (${data.genderAudience})
- **Região/Bairros:** ${data.neighborhoodsCities || 'Não informado'}
- **Poder Aquisitivo:** ${data.purchasingPower || 'Não informado'}
- **Queixas Estéticas:** ${data.aestheticComplaints || 'Não informado'}
- **Valores Mais Apreciados:** ${data.clientValues.join(', ')}
- **Objeções Antes de Fechar:** ${data.objectionsBeforeBuying || 'Não informado'}
- **Por que Escolhem Você:** ${data.whyChooseYou || 'Não informado'}

## 04. Identidade e Posicionamento
- **Percepção Desejada:** ${data.desiredBrandPerception || 'Não informado'}
- **3 Palavras de Essência:** ${data.essenceWords || 'Não informado'}
- **Atributos Transmitidos:** ${data.brandAttributes.join(', ')}
- **Posicionamento:** ${data.marketPositioning}
- **História & Propósito:** ${data.brandStoryPurpose || 'Não informado'}
- **Elementos Visuais a Manter:** ${data.elementsToKeep || 'Nenhum'}
- **O que NÃO Transmitir:** ${data.whatNotToTransmit || 'Não informado'}
- **Referências:** ${data.referenceClinics || 'Nenhuma'}
- **Diferencial de Experiência:** ${data.experienceDifferential || 'Não informado'}

## 05. Presença Digital e Conteúdo
- **Canais Ativos:** ${data.activeSocialNetworks.join(', ')}
- **Canal Mais Efetivo:** ${data.topLeadChannel || 'Não informado'}
- **Anúncios Pagos:** ${data.paidAdsExperience}
- **Conforto em Vídeos:** ${data.videoComfortLevel}
- **Mídias Profissionais:** ${data.professionalMediaAvailable}
- **Tom de Comunicação:** ${data.communicationTone.join(', ')}
- **Restrições:** ${data.contentRestrictions || 'Nenhuma'}

## 06. Comercial e Atendimento
- **Canais de Entrada:** ${data.leadContactChannels.join(', ')}
- **Atendente Comercial:** ${data.salesAttendant || 'Não informado'}
- **Processo Comercial:** ${data.definedSalesProcess}
- **Tempo Médio Resposta:** ${data.avgResponseTime}
- **Processo de Follow-up:** ${data.followUpProcess || 'Não informado'}
- **Motivos de Perda de Vendas:** ${data.lostSalesReasons || 'Não informado'}
- **Estratégia de Retorno Pós-venda:** ${data.winbackStrategy || 'Não informado'}

## 07. Concorrência e Mercado
- **Concorrentes Regionais:** ${data.mainCompetitors || 'Não informado'}
- **Pontos Fortes dos Concorrentes:** ${data.competitorsStrengths || 'Não informado'}
- **Seu Fator Competitivo:** ${data.competitiveEdgeType}
- **Necessidades Não Atendidas:** ${data.unmetLocalNeeds || 'Não informado'}

## 08. Investimento e Expectativas
- **Orçamento Mensal Gestão:** ${data.agencyMonthlyBudget}
- **Verba Mensal Anúncios Ads:** ${data.paidAdsMonthlyBudget}
- **Aprovação Responsável:** ${data.approvalResponsible || 'Não informado'}
- **Frequência de Captação:** ${data.mediaProductionFrequency}
- **Datas/Eventos Futuros:** ${data.upcomingLaunchesDates || 'Nenhum'}
- **Expectativas com Agência:** ${data.agencyExpectations || 'Não informado'}

## 09. Perguntas Estratégicas para Estética
- **Maior Margem de Lucro:** ${data.highestProfitMarginServices || 'Não informado'}
- **Serviços Porta de Entrada (Chama-cliente):** ${data.entryLeadMagnetServices || 'Não informado'}
- **Protocolos para Fortalecer:** ${data.packagesToStrengthen || 'Não informado'}
- **Ticket Médio:** ${data.avgTicketPerClient || 'Não informado'}
- **Perfil de Compra:** ${data.purchasePattern}
- **Política de Antes/Depois:** ${data.beforeAfterPolicy || 'Não informado'}
- **Habilitação dos Profissionais:** ${data.professionalsCredentials || 'Não informado'}
- **Capacidade Operacional:** ${data.capacityForIncreasedDemand || 'Não informado'}
`;
  };

  const copyToClipboard = () => {
    const textToCopy =
      viewFormat === 'markdown' ? generateMarkdown() : JSON.stringify(data, null, 2);
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-zinc-950 rounded-2xl shadow-2xl border border-zinc-800 flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-zinc-800 flex items-center justify-between bg-black">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-white">
                Resumo do Diagnóstico (09 Sessões)
              </h3>
              <p className="text-xs text-zinc-400">
                Briefing de Estética & Saúde • Frame Mídia
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex bg-zinc-900 p-1 rounded-lg text-xs font-semibold border border-zinc-800">
              <button
                onClick={() => setViewFormat('markdown')}
                className={`px-3 py-1 rounded-md transition-all flex items-center gap-1 ${
                  viewFormat === 'markdown'
                    ? 'bg-red-600 text-white shadow-sm font-bold'
                    : 'text-zinc-400'
                }`}
              >
                <FileText className="w-3.5 h-3.5" /> Markdown
              </button>
              <button
                onClick={() => setViewFormat('json')}
                className={`px-3 py-1 rounded-md transition-all flex items-center gap-1 ${
                  viewFormat === 'json'
                    ? 'bg-red-600 text-white shadow-sm font-bold'
                    : 'text-zinc-400'
                }`}
              >
                <Code className="w-3.5 h-3.5" /> JSON
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 font-mono text-xs text-zinc-200 bg-zinc-950">
          <pre className="whitespace-pre-wrap leading-relaxed">
            {viewFormat === 'markdown'
              ? generateMarkdown()
              : JSON.stringify(data, null, 2)}
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-zinc-800 flex items-center justify-between bg-black">
          <span className="text-xs text-zinc-400 hidden xs:block">
            Copie em Markdown para exportar diretamente para Notion ou e-mail.
          </span>
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-red-600 hover:bg-red-500 rounded-xl transition-all shadow-md shadow-red-500/20"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-lime-400" /> Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" /> Copiar Resumo
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
