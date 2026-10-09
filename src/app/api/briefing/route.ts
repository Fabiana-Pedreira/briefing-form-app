import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    status: 'online',
    service: 'Frame Mídia Briefing API',
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validação básica dos campos obrigatórios
    if (!data.clientName || !data.email || !data.companyName) {
      return NextResponse.json(
        { success: false, error: 'Nome, E-mail e Empresa são campos obrigatórios.' },
        { status: 400 }
      );
    }

    const briefingId = `BRF-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    const payload = {
      id: briefingId,
      timestamp,
      data,
    };

    console.log('✅ Briefing recebido com sucesso:', briefingId, payload);

    // Se houver WEBHOOK_URL configurado nas variáveis de ambiente da Vercel, envia o webhook
    if (process.env.WEBHOOK_URL) {
      try {
        await fetch(process.env.WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `🚀 **Novo Briefing Recebido!** (#${briefingId})`,
            embeds: [
              {
                title: `Briefing de ${data.companyName}`,
                fields: [
                  { name: 'Cliente', value: data.clientName, inline: true },
                  { name: 'E-mail', value: data.email, inline: true },
                  { name: 'Frente de Atuação', value: data.projectType, inline: true },
                  { name: 'Investimento', value: data.budgetRange, inline: true },
                  { name: 'Prazo Desejado', value: data.deadline, inline: true },
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
      message: 'Briefing enviado com sucesso! A equipe da Frame Mídia entrará em contato em breve.',
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
