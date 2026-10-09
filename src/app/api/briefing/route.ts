import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const DEFAULT_AGENCY_EMAIL = 'framemidiamkt@gmail.com';

export async function GET() {
  return NextResponse.json({
    status: 'online',
    service: 'Frame Mídia Briefing API',
    agencyEmail: DEFAULT_AGENCY_EMAIL,
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validação básica dos campos obrigatórios
    if (!data.companyName) {
      return NextResponse.json(
        { success: false, error: 'O nome da empresa ou clínica é obrigatório.' },
        { status: 400 }
      );
    }

    const briefingId = `BRF-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();
    const destinationEmail = process.env.NOTIFICATION_EMAIL || DEFAULT_AGENCY_EMAIL;

    const payload = {
      id: briefingId,
      timestamp,
      destinationEmail,
      data,
    };

    console.log(`✅ [Frame Mídia API] Briefing #${briefingId} registrado para enviar para ${destinationEmail}`);

    // Se houver WEBHOOK_URL configurado nas variáveis de ambiente da Vercel (ex: Make, Zapier ou Discord)
    if (process.env.WEBHOOK_URL) {
      try {
        await fetch(process.env.WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `🚀 **Novo Briefing Recebido (#${briefingId})!** Destino: ${destinationEmail}`,
            embeds: [
              {
                title: `Briefing Frame Mídia: ${data.companyName}`,
                fields: [
                  { name: 'Empresa', value: data.companyName, inline: true },
                  { name: 'E-mail Cliente', value: data.email || 'Não informado', inline: true },
                  { name: 'E-mail Agência', value: destinationEmail, inline: true },
                  { name: 'Tipo', value: data.type === 'estetica' ? 'Estética & Saúde (09 Sessões)' : 'Geral de Negócios (11 Sessões)', inline: true },
                  { name: 'Investimento', value: data.monthlyMarketingBudget || data.agencyMonthlyBudget || 'A definir', inline: true },
                ],
                color: 0xef4444,
              },
            ],
          }),
        });
      } catch (webhookErr) {
        console.warn('⚠️ Não foi possível enviar para o Webhook:', webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      briefingId,
      destinationEmail,
      message: `Briefing #${briefingId} processado com sucesso! E-mail de notificação direcionado para ${destinationEmail}`,
      timestamp,
    });
  } catch (error) {
    console.error('❌ Erro no processamento do briefing:', error);
    return NextResponse.json(
      { success: false, error: 'Erro interno ao processar formulário.' },
      { status: 500 }
    );
  }
}
