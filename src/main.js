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

function wireTabs(section) {
  const tabs = section.querySelectorAll('.menu-tabs__tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((tEl) => tEl.setAttribute('aria-selected', 'false'));
      tab.setAttribute('aria-selected', 'true');
      const target = section.querySelector(`#menu-${tab.dataset.categoryTab}`);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
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

  const header = renderHeader(lang, () => setLang(lang === 'ar' ? 'en' : 'ar'));
  const hero = renderHero();
  const menuSection = renderMenuSection(lang);
  const about = renderAbout();
  const contacts = renderContacts(lang);
  const footer = renderFooter(lang);

  app.append(header, hero, menuSection, about, contacts, footer);
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
