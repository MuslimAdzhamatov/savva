// Общая точка для ссылок заказа через WhatsApp.
// Формат ссылки без "+" и пробелов, как указано в требованиях проекта.

export const WHATSAPP_NUMBER = '966564370303';

const greeting = {
  en: 'Hello Savva! I would like to place an order.',
  ar: 'مرحباً سافا! أود تقديم طلب.',
};

export function buildWhatsappLink(lang) {
  const text = encodeURIComponent(greeting[lang] ?? greeting.en);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
