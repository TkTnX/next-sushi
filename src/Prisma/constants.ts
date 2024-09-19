export const categories = [
  {
    name: "Роллы",
    imageUrl: "/categories/01.svg",
  },
  {
    name: "Суши",
    imageUrl: "/categories/02.svg",
  },
  {
    name: "Сеты",
    imageUrl: "/categories/03.svg",
  },
  {
    name: "Закуски",
    imageUrl: "/categories/04.svg",
  },
  {
    name: "Напитки",
    imageUrl: "/categories/05.svg",
  },
];

export const products = [
  {
    imageUrl: "/products/01.png",
    name: "Гункан лосось",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 200,
    weight: 40,
    categoryId: 1,
    typeId: 7, // Random typeId
  },
  {
    imageUrl: "/products/02.png",
    name: "Гункан креветка",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло 2",
    price: 190,
    weight: 40,
    categoryId: 1,
    typeId: 2, // Random typeId
  },
  {
    imageUrl: "/products/03.png",
    name: "Нигири угорь",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло 2",
    price: 350,
    weight: 40,
    categoryId: 1,
    typeId: 3, // Random typeId
  },
  {
    imageUrl: "/products/04.png",
    name: "Нигири угорь",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло 2",
    price: 450,
    weight: 252,
    categoryId: 1,
    typeId: 4, // Random typeId
  },
  {
    imageUrl: "/products/05.png",
    name: "Гункан с тунцом и трюфелем",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло 2",
    price: 150,
    weight: 40,
    categoryId: 1,
    typeId: 5, // Random typeId
  },
  {
    imageUrl: "/products/06.png",
    name: "Гункан тунец спайси",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло 2",
    price: 250,
    weight: 40,
    categoryId: 1,
    typeId: 6, // Random typeId
  },
  {
    imageUrl: "/products/07.png",
    name: "Гункан угорь",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло 2",
    price: 350,
    weight: 40,
    categoryId: 1,
    typeId: 2, // Random typeId
  },
  {
    imageUrl: "/products/08.png",
    name: "Нигири тунец",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло 2",
    price: 550,
    weight: 40,
    categoryId: 1,
    typeId: 3, // Random typeId
  },
  {
    imageUrl: "/products/09.png",
    name: "Филадельфия с лососем",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    weight: 320,
    categoryId: 2,
    typeId: 5, // Random typeId
  },
  {
    imageUrl: "/products/10.png",
    name: "Филадельфия с угрем",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    weight: 320,
    categoryId: 2,
    typeId: 6, // Random typeId
  },
  {
    imageUrl: "/products/11.png",
    name: "Кратос",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    weight: 310,
    categoryId: 2,

    typeId: 7, // Random typeId
  },
  {
    imageUrl: "/products/12.png",
    name: "Ямамото",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    weight: 330,
    categoryId: 2,
    typeId: 2, // Random typeId
  },
  {
    imageUrl: "/products/13.png",
    name: "Запеченная креветка",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    weight: 350,
    categoryId: 2,
    typeId: 3, // Random typeId
  },
  {
    imageUrl: "/products/14.png",
    name: "Сырный с лососем",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    weight: 315,
    categoryId: 2,
    typeId: 4, // Random typeId
  },
  {
    imageUrl: "/products/15.png",
    name: "Микаса",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    weight: 235,
    categoryId: 2,
    typeId: 5, // Random typeId
  },
  {
    imageUrl: "/products/16.png",
    name: "Комбо Филадельфия",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    weight: 235,
    categoryId: 2,
    typeId: 6, // Random typeId
  },
  {
    imageUrl: "/products/17.png",
    name: "Сет #1",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: Math.floor(Math.random() * 100) + 100,
    weight: 950,
    categoryId: 3,
    typeId: 7, // Random typeId
  },
  {
    imageUrl: "/products/18.png",
    name: "Сет #2",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: Math.floor(Math.random() * 100) + 100,
    weight: 895,
    categoryId: 3,
    typeId: 2, // Random typeId
  },
  {
    imageUrl: "/products/19.png",
    name: "Сет #3",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: Math.floor(Math.random() * 100) + 100,
    weight: 1020,
    categoryId: 3,
    typeId: 3, // Random typeId
  },
  {
    imageUrl: "/products/20.png",
    name: "Сет #4",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: Math.floor(Math.random() * 100) + 100,
    weight: 1100,
    categoryId: 3,
    typeId: 4, // Random typeId
  },
  {
    imageUrl: "/products/21.png",
    name: "Сет #5",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: Math.floor(Math.random() * 100) + 100,
    weight: 1200,
    categoryId: 3,
    typeId: 5, // Random typeId
  },
  {
    imageUrl: "/products/22.png",
    name: "Сет #6",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: Math.floor(Math.random() * 100) + 100,
    weight: 1350,
    categoryId: 3,
    typeId: 6, // Random typeId
  },
  {
    imageUrl: "/products/23.png",
    name: "Сет #7",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: Math.floor(Math.random() * 100) + 100,
    weight: 1400,
    categoryId: 3,
    typeId: 7, // Random typeId
  },
  {
    imageUrl: "/products/24.png",
    name: "Сет #8",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: Math.floor(Math.random() * 100) + 100,
    weight: 1500,
    categoryId: 3,
    typeId: 2, // Random typeId
  },
  {
    imageUrl: "/products/25.png",
    name: "Сет #9",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: Math.floor(Math.random() * 100) + 100,
    weight: 1600,
    categoryId: 4,
    typeId: 3, // Random typeId
  },
  {
    imageUrl: "/products/26.png",
    name: "Сет #10",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: Math.floor(Math.random() * 100) + 100,
    weight: 1700,
    categoryId: 4,
    typeId: 4, // Random typeId
  },
  {
    imageUrl: "/products/27.png",
    name: "Сет #11",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: Math.floor(Math.random() * 100) + 100,
    weight: 1800,
    categoryId: 4,
    typeId: 5, // Random typeId
  },
  {
    imageUrl: "/products/28.png",
    name: "Сет #12",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: Math.floor(Math.random() * 100) + 100,
    weight: 1900,
    categoryId: 4,
    typeId: 6, // Random typeId
  },
  {
    imageUrl: "/products/29.png",
    name: "Сет #13",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: Math.floor(Math.random() * 100) + 100,
    weight: 2000,
    categoryId: 4,

    typeId: 7, // Random typeId
  },
  {
    imageUrl: "/products/30.png",
    name: "Сет #14",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: Math.floor(Math.random() * 100) + 100,
    weight: 2100,
    categoryId: 4,
    typeId: 2, // Random typeId
  },
  {
    imageUrl: "/products/31.png",
    name: "Инаги с лососем и авокадо",
    description: "рис, лосось, авокадо, манго, имбирь, арахис, пряный соус",
    price: Math.floor(Math.random() * 100) + 100,
    weight: 60,
    categoryId: 4,

    typeId: 3, // Random typeId
  },
  {
    imageUrl: "/products/32.png",
    name: "Тартар микс",
    description:
      "лосось, тунец, морской гребешок, имбирь, японский лук, кунжут, чука-вакаме",
    price: Math.floor(Math.random() * 100) + 100,
    weight: 225,
    categoryId: 4,
    typeId: 4, // Random typeId
  },

  {
    imageUrl: "/products/33.png",
    name: "Coca-Cola 0.25(ст)",
    description: "",
    price: Math.floor(Math.random() * 100) + 100,
    weight: 250,
    categoryId: 5,
    typeId: 1,
  },
  {
    imageUrl: "/products/34.png",
    name: "Fanta",
    description: "",
    price: Math.floor(Math.random() * 100) + 100,
    weight: 500,
    categoryId: 5,
    typeId: 1,
  },
  {
    imageUrl: "/products/35.png",
    name: "Моршинская негаз.",
    description: "",
    price: Math.floor(Math.random() * 100) + 100,
    weight: 500,
    categoryId: 5,
    typeId: 1,
  },
  {
    imageUrl: "/products/36.png",
    name: "Бёрн",
    description: "",
    price: Math.floor(Math.random() * 100) + 100,
    weight: 500,
    categoryId: 5,
    typeId: 1,
  },
  {
    imageUrl: "/products/37.png",
    name: "Coca-Cola Vanilla",
    description: "",
    price: Math.floor(Math.random() * 100) + 100,
    weight: 330,
    categoryId: 5,
    typeId: 1,
  },
  {
    imageUrl: "/products/38.png",
    name: "Dr Pepper вишня",
    description: "",
    price: Math.floor(Math.random() * 100) + 100,
    weight: 330,
    categoryId: 5,
    typeId: 1,
  },
  {
    imageUrl: "/products/39.png",
    name: "Dr Pepper классический",
    description: "",
    price: Math.floor(Math.random() * 100) + 100,
    weight: 330,
    categoryId: 5,
    typeId: 1,
  },
  {
    imageUrl: "/products/40.png",
    name: "Sprite",
    description: "",
    price: Math.floor(Math.random() * 100) + 100,
    weight: 500,
    categoryId: 5,
    typeId: 1,
  },
];

export const types = [
  {
    name: "Все",
  },
  {
    name: "Классические",
  },
  {
    name: "Маки",
  },
  {
    name: "Драконы",
  },
  {
    name: "Запеченные",
  },
  {
    name: "Феликсы",
  },
  {
    name: "Сладкие",
  },
];

export const exceptions = [
  {
    imageUrl: "/exceptions/00.svg",
    name: "Все",
    id: 0,
  },
  {
    imageUrl: "/exceptions/01.svg",
    name: "Острые",
  },
  {
    imageUrl: "/exceptions/02.svg",
    name: "Вегетарианские",
  },
  {
    imageUrl: "/exceptions/03.svg",
    name: "Безлактозные",
  },
];

export const ingredients = [
  {
    imageUrl: "/ingredients/01.svg",
    name: "Лосось",
  },
  {
    imageUrl: "/ingredients/02.svg",
    name: "Угорь",
  },
  {
    imageUrl: "/ingredients/03.svg",
    name: "Тунец",
  },
  {
    imageUrl: "/ingredients/04.svg",
    name: "Куриное филе",
  },
  {
    imageUrl: "/ingredients/05.svg",
    name: "Сливочный сыр",
  },
  {
    imageUrl: "/ingredients/06.svg",
    name: "Тофу",
  },
  {
    imageUrl: "/ingredients/07.svg",
    name: "Авокадо",
  },
  {
    imageUrl: "/ingredients/08.svg",
    name: "Помидор",
  },
];

export const promocodes = [
  {
    code: "FIRSTPROMO",
    discount: 50,
  },
  {
    code: "SECONDPROMO",
    discount: 30,
  },
  {
    code: "TIMURTOP",
    discount: 100,
  },
];

export const profileSidebarItems = [
  {
    title: "История заказов",
    imageUrl: "/icons/01.svg",
  },
  {
    title: "Избранные товары",
    imageUrl: "/icons/02.svg",
  },
  {
    title: "Адрес доставки",
    imageUrl: "/icons/03.svg",
  },
];

export const newsItews = [
  {
    image: "/news/01.jpg",
    title: "Ninja вернули лосось",
    category: "Обновления в меню",
    description: "Мы вернули набор лосося в меню",
  },
  {
    image: "/news/02.jpg",
    title: "Привет! Мы уже на правом!",
    category: "Обновления в меню",
    description: "Мы на правой части России",
  },
  {
    image: "/news/03.jpg",
    title: "Что посмотреть на Netflix?",
    category: "Фильмы",
    description: "Что посмотреть на Netflix?",
  },
  {
    image: "/news/04.jpg",
    title: "Романтичный плейлист от Ninja!",
    category: "Музыка",
    description: "Описание про музыку",
  },
  {
    image: "/news/05.jpg",
    title: "Таинственное исчезновение роллов с лососем",
    category: "Обновления в меню",
    description: "Мы потеряли набор лосося",
  },
  {
    image: "/news/07.jpg",
    title: "Идеи для свидания на 14 февраля",
    category: "Рекомендации",
    description: "Идеи для свидания на 14 февраля ",
  },
  {
    image: "/news/06.jpg",
    title: "Ninja Sushi в Москве!",
    category: "Новости",
    description: "Ninja Sushi в Москве!",
  },
  {
    image: "/news/08.jpg",
    title: "Кто пойдёт на романтическое свидание от Ninja?",
    category: "Рекомендации",
    description: "Кто пойдёт на романтическое свидание от Ninja?",
  },
];
