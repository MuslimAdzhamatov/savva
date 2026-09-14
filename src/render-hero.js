import heroImage from './assets/hero.jpg';

/** Hero-блок: фото фасада, логотип, слоган, кнопка перехода к меню. */
export function renderHero() {
  const section = document.createElement('section');
  section.id = 'top';
  section.className = 'hero';
  section.dataset.scrollAnchor = 'top';
  section.style.backgroundImage = `linear-gradient(180deg, rgba(44,42,36,0.35) 0%, rgba(116,122,97,0.55) 60%, rgba(92,97,80,0.85) 100%), url(${heroImage})`;

  const content = document.createElement('div');
  content.className = 'hero__content';

  const logo = document.createElement('p');
  logo.className = 'hero__logo';
  logo.innerHTML = 'SAVVA <span lang="ar">سافا</span>';

  const tagline = document.createElement('p');
  tagline.className = 'hero__tagline';
  tagline.dataset.i18n = 'hero.tagline';

  const cta = document.createElement('a');
  cta.href = '#menu';
  cta.className = 'hero__cta';
  cta.dataset.i18n = 'hero.cta';

  content.append(logo, tagline, cta);
  section.append(content);

  return section;
}
