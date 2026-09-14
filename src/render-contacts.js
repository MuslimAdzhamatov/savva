import { buildWhatsappLink } from './whatsapp.js';
import { GOOGLE_MAPS_URL, GOOGLE_MAPS_EMBED_URL, INSTAGRAM_URL, PHONE_TEL } from './links.js';

/** Секция «Контакты»: адрес, карта, Instagram, телефон и кнопка WhatsApp. */
export function renderContacts(lang) {
  const section = document.createElement('section');
  section.id = 'contacts';
  section.className = 'contacts';
  section.dataset.scrollAnchor = 'contacts';

  const inner = document.createElement('div');
  inner.className = 'contacts__inner';

  const heading = document.createElement('h2');
  heading.className = 'contacts__heading';
  heading.dataset.i18n = 'contacts.heading';

  const details = document.createElement('div');
  details.className = 'contacts__details';

  const addressLabel = document.createElement('span');
  addressLabel.className = 'contacts__label';
  addressLabel.dataset.i18n = 'contacts.address.label';

  const address = document.createElement('p');
  address.className = 'contacts__address';
  address.dataset.i18n = 'contacts.address.value';

  const mapLink = document.createElement('a');
  mapLink.className = 'contacts__map-link';
  mapLink.href = GOOGLE_MAPS_URL;
  mapLink.target = '_blank';
  mapLink.rel = 'noopener';
  mapLink.dataset.i18n = 'contacts.map.link';

  const phoneLink = document.createElement('a');
  phoneLink.className = 'contacts__phone';
  phoneLink.href = PHONE_TEL;
  phoneLink.dir = 'ltr';
  phoneLink.textContent = '+966 56 437 0303';

  const instagramLink = document.createElement('a');
  instagramLink.className = 'contacts__instagram';
  instagramLink.href = INSTAGRAM_URL;
  instagramLink.target = '_blank';
  instagramLink.rel = 'noopener';
  instagramLink.dataset.i18n = 'contacts.instagram.link';

  details.append(addressLabel, address, mapLink, phoneLink, instagramLink);

  const map = document.createElement('iframe');
  map.className = 'contacts__map';
  map.src = GOOGLE_MAPS_EMBED_URL;
  map.loading = 'lazy';
  map.referrerPolicy = 'no-referrer-when-downgrade';
  map.title = 'Savva — Google Maps';

  const waButton = document.createElement('a');
  waButton.className = 'contacts__whatsapp';
  waButton.href = buildWhatsappLink(lang);
  waButton.target = '_blank';
  waButton.rel = 'noopener';
  waButton.innerHTML = `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.74.46 3.44 1.32 4.94L2.05 22l5.29-1.39a9.87 9.87 0 0 0 4.7 1.2h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.09c-.24.68-1.4 1.33-1.93 1.4-.49.07-1.11.1-1.79-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.08.99-2.37.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.68-.8.86-1.07.18-.28.36-.23.6-.14.24.09 1.55.73 1.82.86.27.14.44.2.51.32.07.12.07.68-.17 1.36Z"/>
    </svg>
    <span data-i18n="contacts.whatsapp.cta"></span>
  `;

  inner.append(heading, details, map, waButton);
  section.append(inner);

  return section;
}
