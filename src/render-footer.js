import { buildWhatsappLink } from './whatsapp.js';
import { INSTAGRAM_URL } from './links.js';

/** Футер: копирайт + ссылки на Instagram и WhatsApp. */
export function renderFooter(lang) {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';

  const inner = document.createElement('div');
  inner.className = 'site-footer__inner';

  const rights = document.createElement('p');
  rights.className = 'site-footer__rights';
  rights.innerHTML = `© ${new Date().getFullYear()} <span data-i18n="footer.rights"></span>`;

  const links = document.createElement('div');
  links.className = 'site-footer__links';

  const instagram = document.createElement('a');
  instagram.href = INSTAGRAM_URL;
  instagram.target = '_blank';
  instagram.rel = 'noopener';
  instagram.dataset.i18nAria = 'contacts.instagram.link';
  instagram.innerHTML = `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.2" cy="6.8" r="1"/>
    </svg>
  `;

  const whatsapp = document.createElement('a');
  whatsapp.href = buildWhatsappLink(lang);
  whatsapp.target = '_blank';
  whatsapp.rel = 'noopener';
  whatsapp.dataset.i18nAria = 'nav.whatsapp.aria';
  whatsapp.innerHTML = `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.74.46 3.44 1.32 4.94L2.05 22l5.29-1.39a9.87 9.87 0 0 0 4.7 1.2h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.09c-.24.68-1.4 1.33-1.93 1.4-.49.07-1.11.1-1.79-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.08.99-2.37.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.68-.8.86-1.07.18-.28.36-.23.6-.14.24.09 1.55.73 1.82.86.27.14.44.2.51.32.07.12.07.68-.17 1.36Z"/>
    </svg>
  `;

  links.append(instagram, whatsapp);
  inner.append(rights, links);
  footer.append(inner);

  return footer;
}
