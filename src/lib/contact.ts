// Ao definir o número real, regenere o QR (public/contact/whatsapp-qr.svg) com:
// npx --yes qrcode -t svg -d 0B0E14FF -l FFFFFFFF -o public/contact/whatsapp-qr.svg "https://wa.me/<número>"
// O QR aponta só para o número, sem a mensagem pré-preenchida (mais simples de ler).

export const contact = {
  whatsappNumber: "5500000000000", // TODO: substituir pelo número real (formato 55 + DDD + número, só dígitos)
  whatsappMessage:
    "Olá! Vim pelo site da Stellaris Sistemas e gostaria de conversar sobre um projeto.",
  email: "contato@stellarissistemas.com.br", // TODO: confirmar o e-mail real
  instagramHandle: "stellarissistemas", // TODO: confirmar o perfil real
  instagramUrl: "https://www.instagram.com/stellarissistemas/", // TODO: confirmar o perfil real
  hours: "Seg. a sex., das 8h às 18h · Atendimento em todo o Brasil", // TODO: confirmar o horário real
};

export function whatsappHref() {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`;
}
