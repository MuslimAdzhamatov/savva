import { t } from './i18n.js';
import { buildWhatsappLink } from './whatsapp.js';

/**
 * Липкая шапка: логотип, якорная навигация (скрыта на мобильном),
 * кнопка заказа через WhatsApp и переключатель языка.
 */
export function renderHeader(lang, onLangToggle) {
  const header = document.createElement('header');
  header.className = 'site-header';

  const inner = document.createElement('div');
  inner.className = 'site-header__inner';

  const logo = document.createElement('a');
  logo.href = '#top';
  logo.className = 'site-header__logo';
  logo.textContent = 'Savva';

  const nav = document.createElement('nav');
  nav.className = 'site-header__nav';
  nav.setAttribute('aria-label', 'Section navigation');

  const links = [
    { href: '#menu', key: 'nav.menu' },
    { href: '#about', key: 'nav.about' },
    { href: '#contacts', key: 'nav.contacts' },
  ];

  links.forEach(({ href, key }) => {
    const a = document.createElement('a');
    a.href = href;
    a.className = 'site-header__link';
    a.dataset.i18n = key;
    nav.append(a);
  });

  const actions = document.createElement('div');
  actions.className = 'site-header__actions';

  const waLink = document.createElement('a');
  waLink.className = 'site-header__whatsapp';
  waLink.href = buildWhatsappLink(lang);
  waLink.target = '_blank';
  waLink.rel = 'noopener';
  waLink.dataset.i18nAria = 'nav.whatsapp.aria';
  waLink.innerHTML = `
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.74.46 3.44 1.32 4.94L2.05 22l5.29-1.39a9.87 9.87 0 0 0 4.7 1.2h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.09c-.24.68-1.4 1.33-1.93 1.4-.49.07-1.11.1-1.79-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.08.99-2.37.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.68-.8.86-1.07.18-.28.36-.23.6-.14.24.09 1.55.73 1.82.86.27.14.44.2.51.32.07.12.07.68-.17 1.36Z"/>
    </svg>
    <span data-i18n="nav.whatsapp"></span>
  `;

  const langBtn = document.createElement('button');
  langBtn.type = 'button';
  langBtn.className = 'site-header__lang';
  langBtn.lang = lang === 'ar' ? 'en' : 'ar';
  langBtn.dataset.i18n = 'lang.switch';
  langBtn.addEventListener('click', onLangToggle);

  actions.append(waLink, langBtn);
  inner.append(logo, nav, actions);
  header.append(inner);

  return header;
}
