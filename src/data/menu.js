// Меню кофейни Savva — единственный источник данных для секции «Меню».
// Названия, цены (SAR) и калории соответствуют фирменному меню (CLAUDE.md / PDF).

export const menu = [
  {
    id: 'hot',
    title: { en: 'Hot Drinks', ar: 'المشروبات الحارة' },
    items: [
      { id: 'espresso', name: { en: 'Espresso', ar: 'إسبريسو' }, price: 11, cal: 2 },
      { id: 'americano', name: { en: 'Americano', ar: 'أمريكانو' }, price: 12, cal: 2 },
      { id: 'cortado', name: { en: 'Cortado', ar: 'كورتادو' }, price: 14, cal: 50 },
      { id: 'macchiato', name: { en: 'Macchiato', ar: 'ميكاتو' }, price: 13, cal: 13 },
      { id: 'flat-white', name: { en: 'Flat White', ar: 'فلات وايت' }, price: 15, cal: 50 },
      { id: 'latte', name: { en: 'Latte', ar: 'لاتيه' }, price: 16, cal: 75 },
      { id: 'cappuccino', name: { en: 'Cappuccino', ar: 'كابتشينو' }, price: 16, cal: 60 },
      { id: 'spanish-latte', name: { en: 'Spanish Latte', ar: 'سبانش لاتيه' }, price: 18, cal: 178 },
      { id: 'matcha-latte', name: { en: 'Matcha Latte', ar: 'ماتشا لاتيه' }, price: 16, cal: 75 },
      { id: 'white-mocha', name: { en: 'White Mocha', ar: 'وايت موكا' }, price: 16, cal: 230 },
      { id: 'hot-chocolate', name: { en: 'Hot Chocolate', ar: 'هوت شوكليت' }, price: 15, cal: 237 },
      { id: 'english-tea', name: { en: 'English Tea', ar: 'شاي إنجليزي' }, price: 6, cal: 2 },
      { id: 'turkish-coffee', name: { en: 'Turkish Coffee', ar: 'تركي سادة' }, price: 11, cal: 50 },
      {
        id: 'turkish-coffee-milk',
        name: { en: 'Turkish Coffee with Milk', ar: 'تركي حليب' },
        price: 13,
        cal: 50,
      },
      {
        id: 'coffee-of-day',
        name: { en: 'Coffee of the Day (Hot / Iced)', ar: 'قهوة اليوم حار / بارد' },
        price: { from: 10, to: 13 },
        cal: null,
      },
      {
        id: 'v60-drip',
        name: { en: 'V60 / Iced Drip Coffee', ar: 'قهوة المقطرة' },
        price: 18,
        cal: null,
      },
    ],
  },
  {
    id: 'cold',
    title: { en: 'Cold Drinks', ar: 'المشروبات الباردة' },
    items: [
      { id: 'iced-americano', name: { en: 'Iced Americano', ar: 'ايس أمريكانو' }, price: 15, cal: 2 },
      { id: 'alfredo', name: { en: 'Alfredo', ar: 'ألفريدو' }, price: 14, cal: 100 },
      { id: 'iced-latte', name: { en: 'Iced Latte', ar: 'ايس لاتيه' }, price: 17, cal: 100 },
      {
        id: 'iced-spanish-latte',
        name: { en: 'Iced Spanish Latte', ar: 'ايس سبانيش لاتيه' },
        price: 19,
        cal: 230,
      },
      {
        id: 'iced-matcha-latte',
        name: { en: 'Iced Matcha Latte', ar: 'ايس ماتشا لاتيه' },
        price: 17,
        cal: 130,
      },
      {
        id: 'iced-matcha-spanish-latte',
        name: { en: 'Iced Matcha Spanish Latte', ar: 'ايس ماتشا سبانيش لاتيه' },
        price: 19,
        cal: 230,
      },
      { id: 'savva-matcha', name: { en: 'Savva Matcha', ar: 'سافا ماتشا' }, price: 22, cal: 2 },
      { id: 'matcha-berry', name: { en: 'Matcha Berry', ar: 'ماتشا بيري' }, price: 24, cal: 230 },
      { id: 'ice-tea-savva', name: { en: 'Ice Tea Savva', ar: 'ايس تي سافا' }, price: 17, cal: 189 },
      {
        id: 'ice-hibiscus-savva',
        name: { en: 'Iced Hibiscus Savva', ar: 'ايس كركديه سافا' },
        price: 17,
        cal: 180,
      },
      {
        id: 'hibiscus-slush-savva',
        name: { en: 'Hibiscus Slush Savva', ar: 'سلاش كركديه سافا' },
        price: 17,
        cal: 180,
      },
      { id: 'ice-shaken', name: { en: 'Ice Shaken', ar: 'ايس شيكن' }, price: 20, cal: 231 },
      { id: 'ice-white-mocha', name: { en: 'Iced White Mocha', ar: 'ايس وايت موكا' }, price: 19, cal: 230 },
      { id: 'ice-chocolate', name: { en: 'Iced Chocolate', ar: 'ايس شوكليت' }, price: 17, cal: 230 },
      { id: 'savva-melon', name: { en: 'Savva Melon', ar: 'شمام سافا' }, price: 16, cal: 50 },
    ],
  },
  {
    id: 'desserts',
    title: { en: 'Desserts', ar: 'الحلى' },
    items: [
      { id: 'madini-cookies', name: { en: 'Madini Cookies', ar: 'مديني كوكيز' }, price: 12, cal: 170 },
      { id: 'cinnamon-danish', name: { en: 'Cinnamon Danish', ar: 'دانيش سينابون' }, price: 19, cal: 170 },
      { id: 'marble-cake', name: { en: 'Marble Cake', ar: 'ماربل كيك' }, price: 11, cal: 170 },
      {
        id: 'crunchy-chocolate',
        name: { en: 'Crunchy Chocolate', ar: 'كرانشي شوكليت' },
        price: 8,
        cal: 170,
      },
      {
        id: 'blueberry-cheesecake',
        name: { en: 'Blueberry Cheesecake', ar: 'تشيز كيك بلوبيري' },
        price: 27,
        cal: 170,
      },
      { id: 'pecan-cake', name: { en: 'Pecan Cake', ar: 'كيكة البيكان' }, price: 21, cal: 170 },
      { id: 'chocolate-cake', name: { en: 'Chocolate Cake', ar: 'كيكة شوكليت' }, price: 18, cal: 170 },
    ],
  },
  {
    id: 'breakfast',
    title: { en: 'Breakfast', ar: 'الفطور' },
    items: [
      { id: 'turkey-sandwich', name: { en: 'Turkey Sandwich', ar: 'ساندوتش تركي' }, price: 19, cal: 300 },
      {
        id: 'halloumi-sandwich',
        name: { en: 'Halloumi Sandwich', ar: 'ساندوتش حلوم' },
        price: 18,
        cal: 300,
      },
    ],
  },
];

/** Форматирует цену позиции меню под язык. price: number | { from, to } */
export function formatPrice(price, lang) {
  const currency = lang === 'ar' ? 'ر.س' : 'SAR';
  if (typeof price === 'object' && price !== null) {
    return `${price.from}–${price.to} ${currency}`;
  }
  return `${price} ${currency}`;
}
