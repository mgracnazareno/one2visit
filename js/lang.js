const translations = {
  en: {
    home: "Home",
    activities: "Activities",
    testimonials: "Testimonials",
    contact: "Contact Us",
    language: "Language",
    allActivities: "All Activities",
    categories: "Categories",
    all: "All",
    fitness: "Fitness",
    cooking: "Cooking",
    morningYoga: "Morning Yoga",
    yogaDesc: "Relaxing yoga session to start your day right.",
    join: "Join",
    cookingClass: "Cooking Class",
    cookingDesc: "Learn delicious recipes in our group cooking sessions.",
    register: "Register",
    copyright: "© 2025 BrandName. All rights reserved.",
  },
  fr: {
    home: "Accueil",
    activities: "Activités",
    testimonials: "Témoignages",
    contact: "Contactez-nous",
    language: "Langue",
    allActivities: "Toutes les activités",
    categories: "Catégories",
    all: "Tout",
    fitness: "Remise en forme",
    cooking: "Cuisine",
    morningYoga: "Yoga du matin",
    yogaDesc: "Séance de yoga relaxante pour bien commencer la journée.",
    join: "Participer",
    cookingClass: "Cours de cuisine",
    cookingDesc: "Apprenez de délicieuses recettes lors de sessions de groupe.",
    register: "S'inscrire",
    copyright: "© 2025 BrandName. Tous droits réservés.",
  },
};

function updateLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.querySelectorAll(".lang-select").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const lang = this.getAttribute("data-lang");
    updateLanguage(lang);
  });
});
