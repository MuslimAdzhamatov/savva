// Словари UI-строк и логика переключения языка (EN/AR, LTR/RTL) на месте.

export const dict = {
  en: {
    'menu.heading': 'Menu',
    'lang.switch': 'العربية',
  },
  ar: {
    'menu.heading': 'المنيو',
    'lang.switch': 'English',
  },
};

const STORAGE_KEY = 'savva-lang';

export function t(key, lang) {
  return dict[lang]?.[key] ?? dict.en[key] ?? key;
}

/** Определяет стартовый язык: сохранённый выбор → язык браузера → en. */
export function getInitialLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'ar') return stored;
  } catch {
    // localStorage недоступен (приватный режим и т.п.) — используем язык браузера.
  }
  return navigator.language?.toLowerCase().startsWith('ar') ? 'ar' : 'en';
}

export function persistLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Недоступность хранилища не должна ломать переключение языка.
  }
}

/** Применяет lang/dir к документу и обновляет все узлы с data-i18n. */
export function applyLangToDocument(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n, lang);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria, lang));
  });
}
