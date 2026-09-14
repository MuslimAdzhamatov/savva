// Словари UI-строк и логика переключения языка (EN/AR, LTR/RTL) на месте.

export const dict = {
  en: {
    'meta.title': 'Savva — Menu',
    'meta.description': 'Savva specialty coffee in Madinah — menu with prices and calories, location and WhatsApp ordering.',
    'a11y.skipToContent': 'Skip to content',
    'menu.heading': 'Menu',
    'lang.switch': 'العربية',
    'nav.menu': 'Menu',
    'nav.about': 'About',
    'nav.contacts': 'Contacts',
    'nav.whatsapp': 'Order',
    'nav.whatsapp.aria': 'Order via WhatsApp',
    'hero.tagline': 'Specialty coffee in the heart of Madinah',
    'hero.cta': 'View Menu',
    'about.heading': 'About Savva',
    'about.text':
      'Savva is a quiet corner in Madinah, built around good coffee and a calm, considered atmosphere. Every cup — from a classic espresso to our own Savva Matcha — is made with care, in a space meant for slowing down.',
    'about.photo.alt': 'Photo from Savva coffee shop coming soon',
    'contacts.heading': 'Contacts',
    'contacts.address.label': 'Address',
    'contacts.address.value': 'Zubairah Al Roumiah, Bir Uthman, Madinah 42331, Saudi Arabia',
    'contacts.map.link': 'Open in Google Maps',
    'contacts.instagram.link': 'Instagram',
    'contacts.whatsapp.cta': 'Order via WhatsApp',
    'contacts.phone.label': 'Phone',
    'footer.rights': 'Savva Specialty Coffee. All rights reserved.',
  },
  ar: {
    'meta.title': 'سافا — المنيو',
    'meta.description': 'سافا قهوة مختصة في المدينة المنورة — المنيو بالأسعار والسعرات، الموقع والطلب عبر واتساب.',
    'a11y.skipToContent': 'تخطَّ إلى المحتوى',
    'menu.heading': 'المنيو',
    'lang.switch': 'English',
    'nav.menu': 'المنيو',
    'nav.about': 'من نحن',
    'nav.contacts': 'تواصل معنا',
    'nav.whatsapp': 'اطلب',
    'nav.whatsapp.aria': 'اطلب عبر واتساب',
    'hero.tagline': 'قهوة مختصة في قلب المدينة المنورة',
    'hero.cta': 'شاهد المنيو',
    'about.heading': 'عن سافا',
    'about.text':
      'سافا ركن هادئ في المدينة المنورة، بُني حول قهوة مميزة وأجواء هادئة ومدروسة. كل كوب — من الإسبريسو الكلاسيكي إلى ماتشا سافا الخاصة بنا — يُحضّر بعناية، في مساحة صُممت لتمنحك لحظة هدوء.',
    'about.photo.alt': 'صورة من مقهى سافا قريباً',
    'contacts.heading': 'تواصل معنا',
    'contacts.address.label': 'العنوان',
    'contacts.address.value': 'الزبيرة الرومية، بئر عثمان، المدينة المنورة 42331، المملكة العربية السعودية',
    'contacts.map.link': 'افتح في خرائط جوجل',
    'contacts.instagram.link': 'إنستغرام',
    'contacts.whatsapp.cta': 'اطلب عبر واتساب',
    'contacts.phone.label': 'الهاتف',
    'footer.rights': 'سافا قهوة مختصة. جميع الحقوق محفوظة.',
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

  document.title = t('meta.title', lang);
  document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description', lang));
}
