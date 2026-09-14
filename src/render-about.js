const PLACEHOLDER_COUNT = 4;

/**
 * Секция «О кофейне»: короткий текст + сетка фото-плейсхолдеров.
 * Плейсхолдеры заменяются на реальные фото из Instagram кофейни одной правкой.
 */
export function renderAbout() {
  const section = document.createElement('section');
  section.id = 'about';
  section.className = 'about';
  section.dataset.scrollAnchor = 'about';

  const inner = document.createElement('div');
  inner.className = 'about__inner';

  const heading = document.createElement('h2');
  heading.className = 'about__heading';
  heading.dataset.i18n = 'about.heading';

  const text = document.createElement('p');
  text.className = 'about__text';
  text.dataset.i18n = 'about.text';

  const gallery = document.createElement('div');
  gallery.className = 'about__gallery';

  for (let i = 0; i < PLACEHOLDER_COUNT; i += 1) {
    const figure = document.createElement('figure');
    figure.className = 'about__placeholder';
    figure.setAttribute('role', 'img');
    figure.dataset.i18nAria = 'about.photo.alt';
    figure.innerHTML = `
      <svg viewBox="0 0 48 48" width="32" height="32" fill="none" aria-hidden="true">
        <path d="M10 18h22v10a11 11 0 0 1-11 11 11 11 0 0 1-11-11Z" stroke="currentColor" stroke-width="2"/>
        <path d="M32 20h3a5 5 0 0 1 0 10h-3" stroke="currentColor" stroke-width="2"/>
        <path d="M14 10c0 2-2 2-2 4M21 10c0 2-2 2-2 4M28 10c0 2-2 2-2 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `;
    gallery.append(figure);
  }

  inner.append(heading, text, gallery);
  section.append(inner);

  return section;
}
