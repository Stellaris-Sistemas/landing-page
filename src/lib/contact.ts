// O QR usa a mesma URL do botão (número + mensagem pré-preenchida), então os
// dois abrem a conversa exatamente do mesmo jeito. Ao mudar o número ou a
// mensagem abaixo, regenere o QR (public/contact/whatsapp-qr.svg):
// 1. Gere a URL: node -e "console.log(require('./src/lib/contact.ts').whatsappHref())" (requer um loader de TS, ex. tsx/ts-node)
//    ou monte à mão: https://wa.me/<número>?text=<mensagem codificada com encodeURIComponent>
// 2. npx --yes qrcode -t svg -d 0B0E14FF -l FFFFFFFF -o public/contact/whatsapp-qr.svg "<URL do passo 1>"

export const contact = {
  whatsappNumber: "554399214052",
  whatsappMessage:
    "Olá! Vim pelo site da Stellaris Sistemas e gostaria de conversar sobre um projeto.",
  email: "stellarissistemas@gmail.com",
  instagramHandle: "stellaris.sistemas",
  instagramUrl: "https://www.instagram.com/stellaris.sistemas/",
  hours: "Seg. a sex., das 8h às 18h · Atendimento em todo o Brasil", // TODO: confirmar o horário real
};

export function whatsappHref(customMessage?: string) {
  const message = customMessage ?? contact.whatsappMessage;
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
