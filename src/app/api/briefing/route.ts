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

    // Basic validation
    if (!data.companyName) {
      return NextResponse.json(
        { success: false, error: 'O nome da empresa ou clínica é obrigatório.' },
        { status: 400 }
      );
    }

    const briefingId = `BRF-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();
    const destinationEmail = process.env.NOTIFICATION_EMAIL || DEFAULT_AGENCY_EMAIL;

    console.log(`🚀 [Frame Mídia API] Briefing #${briefingId} enviado automaticamente para ${destinationEmail}`);

    // Option 1: Webhook notification if WEBHOOK_URL is set (e.g. Discord, Make, Zapier, n8n)
    if (process.env.WEBHOOK_URL) {
      try {
        await fetch(process.env.WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `🚀 **Novo Briefing Recebido (#${briefingId})!** Notificação automática para: ${destinationEmail}`,
            embeds: [
              {
                title: `Briefing Frame Mídia: ${data.companyName}`,
                fields: [
                  { name: 'Empresa', value: data.companyName, inline: true },
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
        console.warn('⚠️ Erro ao enviar notificação Webhook:', webhookErr);
      }
    }

    // Option 2: Automatic Formspree / Email service forwarder if FORMSPREE_ENDPOINT is configured
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
    if (formspreeEndpoint) {
      try {
        await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            _replyto: destinationEmail,
            _subject: `[Frame Mídia] Novo Briefing (${data.companyName}) #${briefingId}`,
            briefingId,
            companyName: data.companyName,
            type: data.type,
            details: data,
          }),
        });
      } catch (emailErr) {
        console.warn('⚠️ Erro ao enviar e-mail automático via Formspree:', emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      briefingId,
      destinationEmail,
      message: `Briefing #${briefingId} enviado e registrado com sucesso para a equipe da Frame Mídia (${destinationEmail}).`,
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
