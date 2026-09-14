import './styles/main.css';
import './styles/menu.css';
import { renderMenuSection } from './render-menu.js';

const app = document.querySelector('#app');

function mountMenu(lang) {
  app.innerHTML = '';
  const section = renderMenuSection(lang);
  app.append(section);
  wireTabs(section);
}

function wireTabs(section) {
  const tabs = section.querySelectorAll('.menu-tabs__tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.setAttribute('aria-selected', 'false'));
      tab.setAttribute('aria-selected', 'true');
      const target = section.querySelector(`#menu-${tab.dataset.categoryTab}`);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

mountMenu('en');
