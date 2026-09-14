import './styles/main.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/menu.css';
import './styles/about.css';
import './styles/contacts.css';
import './styles/footer.css';
import { renderHeader } from './render-header.js';
import { renderHero } from './render-hero.js';
import { renderMenuSection } from './render-menu.js';
import { renderAbout } from './render-about.js';
import { renderContacts } from './render-contacts.js';
import { renderFooter } from './render-footer.js';
import { getInitialLang, persistLang, applyLangToDocument } from './i18n.js';

const app = document.querySelector('#app');

let lang = getInitialLang();

let scrollSpyObserver = null;

function wireTabs(section) {
  const tabs = [...section.querySelectorAll('.menu-tabs__tab')];
  const panels = [...section.querySelectorAll('.menu-category')];

  const selectTab = (categoryId) => {
    tabs.forEach((tEl) => tEl.setAttribute('aria-selected', tEl.dataset.categoryTab === categoryId ? 'true' : 'false'));
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      selectTab(tab.dataset.categoryTab);
      const target = section.querySelector(`#menu-${tab.dataset.categoryTab}`);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Scroll-spy: подсвечивает вкладку той категории, что сейчас читается,
  // независимо от того, докрутили ли до неё через вкладку или обычным свайпом.
  scrollSpyObserver?.disconnect();
  scrollSpyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) selectTab(entry.target.dataset.category);
      });
    },
    { rootMargin: '-140px 0px -60% 0px', threshold: 0 }
  );
  panels.forEach((panel) => scrollSpyObserver.observe(panel));
}

/**
 * Запоминает якорь прокрутки: среди элементов [data-scroll-anchor] (секции
 * и категории меню, вложенные друг в друга) берём самый «глубокий» из тех,
 * что уже начались (top <= 0) — то есть категорию, а не всю обёртку секции.
 * Если мы выше самого первого якоря, используем его.
 */
function captureScrollAnchor() {
  const candidates = [...document.querySelectorAll('[data-scroll-anchor]')].map((el) => ({
    id: el.dataset.scrollAnchor,
    top: el.getBoundingClientRect().top,
  }));
  if (!candidates.length) return null;
  const passed = candidates.filter((c) => c.top <= 0);
  const chosen = passed.length ? passed[passed.length - 1] : candidates[0];
  return { id: chosen.id, offset: chosen.top };
}

function restoreScrollAnchor(anchor) {
  if (!anchor) return;
  const el = document.getElementById(anchor.id);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const delta = rect.top - anchor.offset;
  window.scrollTo({ top: window.scrollY + delta, behavior: 'instant' });
}

function render() {
  app.innerHTML = '';

  const skipLink = document.createElement('a');
  skipLink.className = 'skip-link';
  skipLink.href = '#main';
  skipLink.dataset.i18n = 'a11y.skipToContent';

  const header = renderHeader(lang, () => setLang(lang === 'ar' ? 'en' : 'ar'));

  const main = document.createElement('main');
  main.id = 'main';

  const hero = renderHero();
  const menuSection = renderMenuSection(lang);
  const about = renderAbout();
  const contacts = renderContacts(lang);
  main.append(hero, menuSection, about, contacts);

  const footer = renderFooter(lang);

  app.append(skipLink, header, main, footer);
  wireTabs(menuSection);

  applyLangToDocument(lang);
}

function setLang(next) {
  if (next === lang) return;
  const anchor = captureScrollAnchor();
  lang = next;
  persistLang(lang);
  render();
  restoreScrollAnchor(anchor);
}

render();
