import { menu, formatPrice } from './data/menu.js';

/**
 * Строит DOM-разметку секции «Меню»: табы категорий + списки позиций.
 * lang передаётся при первом рендере и при каждом обновлении языка.
 */
export function renderMenuSection(lang) {
  const section = document.createElement('section');
  section.id = 'menu';
  section.className = 'menu-section';

  const heading = document.createElement('h2');
  heading.className = 'menu-section__heading';
  heading.dataset.i18n = 'menu.heading';
  section.append(heading);

  const tabs = document.createElement('div');
  tabs.className = 'menu-tabs';
  tabs.setAttribute('role', 'tablist');

  const panels = document.createElement('div');
  panels.className = 'menu-panels';

  menu.forEach((category, index) => {
    const tab = document.createElement('button');
    tab.className = 'menu-tabs__tab';
    tab.type = 'button';
    tab.dataset.categoryTab = category.id;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
    tab.textContent = category.title[lang];
    tabs.append(tab);

    const panel = document.createElement('div');
    panel.className = 'menu-category';
    panel.id = `menu-${category.id}`;
    panel.dataset.category = category.id;
    panel.style.scrollMarginTop = 'var(--header-h)';

    const panelTitle = document.createElement('h3');
    panelTitle.className = 'menu-category__title';
    panelTitle.textContent = category.title[lang];
    panel.append(panelTitle);

    const list = document.createElement('ul');
    list.className = 'menu-list';

    category.items.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'menu-item';

      const name = document.createElement('span');
      name.className = 'menu-item__name';
      name.textContent = item.name[lang];

      const price = document.createElement('span');
      price.className = 'menu-item__price';
      price.textContent = formatPrice(item.price, lang);

      const row = document.createElement('div');
      row.className = 'menu-item__row';
      row.append(name, price);

      li.append(row);

      if (item.cal !== null && item.cal !== undefined) {
        const cal = document.createElement('span');
        cal.className = 'menu-item__cal';
        cal.textContent = lang === 'ar' ? `${item.cal} سعرة حرارية` : `${item.cal} cal`;
        li.append(cal);
      }

      list.append(li);
    });

    panel.append(list);
    panels.append(panel);
  });

  section.append(tabs, panels);
  return section;
}
