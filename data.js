// ============================================
// DONNÉES DU SITE - Modifiables via l'admin
// ============================================
const SITE_DATA = {
  // Infos personnelles
  hero: {
    nom: "Gracielle",
    prenom: "Agbeve M.",
    titre: "Éducatrice à la Petite Enfance",
    tagline: "Passionnée par l'éveil et le développement des enfants",
    photo: "", // URL ou base64 de la photo
    accentColor: "#E8A87C"
  },

  // À propos
  apropos: {
    texte: "Professionnelle dévouée avec une formation solide en gestion internationale et en éducation à la petite enfance. Je crois profondément que les premières années de vie sont fondatrices, et je m'engage à créer des environnements sécurisants, stimulants et bienveillants pour chaque enfant.",
    photo2: ""
  },

  // Compétences
  competences: [
    { nom: "Français", niveau: 95, type: "langue" },
    { nom: "Anglais", niveau: 65, type: "langue" },
    { nom: "Service à la clientèle", niveau: 90, type: "soft" },
    { nom: "Esprit d'équipe", niveau: 88, type: "soft" },
    { nom: "Communication", niveau: 85, type: "soft" },
    { nom: "Autonomie & Responsabilité", niveau: 92, type: "soft" },
    { nom: "Souci du détail", niveau: 87, type: "soft" }
  ],

  // Expériences
  experiences: [
    {
      poste: "Éducatrice à la Petite Enfance (Stage)",
      entreprise: "Garderie « Les Rayons du Soleil »",
      periode: "Août 2025 – Décembre 2025",
      couleur: "#E8A87C",
      icone: "🌞",
      taches: [
        "Accompagner et encadrer les enfants",
        "Observer et apprécier l'évolution et le comportement des enfants",
        "Guider les enfants dans les gestes de la vie quotidienne",
        "Développer une relation avec les parents",
        "Veiller à la santé, à la sécurité et au bien-être des enfants"
      ]
    },
    {
      poste: "Préposée au Service Alimentaire",
      entreprise: "CIUSSS de l'Ouest de l'île de Montréal",
      periode: "Mai 2024 – Actuellement",
      couleur: "#7CB9E8",
      icone: "🏥",
      taches: [
        "Collaborer à la conception des menus",
        "Assurer la qualité et l'utilisation optimale des aliments",
        "Gérer l'approvisionnement et l'inventaire des denrées",
        "Participer à la distribution des repas",
        "Respecter les normes d'hygiène et de sécurité"
      ]
    },
    {
      poste: "Commis à la Caisse",
      entreprise: "Pétro Canada",
      periode: "Août 2023 – Mars 2024",
      couleur: "#A8E87C",
      icone: "⛽",
      taches: [
        "Service à la clientèle",
        "Enregistrement des ventes",
        "Gestion des retours de produits",
        "Entretien et nettoyage du magasin"
      ]
    },
    {
      poste: "Assistante Conseillère en Assurance",
      entreprise: "NSIA Assurance",
      periode: "Mars 2019 – Juin 2021",
      couleur: "#E87CB9",
      icone: "📋",
      taches: [
        "Élaboration de plans de prospection clients",
        "Détermination et compréhension des besoins clients",
        "Proposition de services et produits adaptés",
        "Rédaction de contrats d'assurance",
        "Gestion des tâches administratives"
      ]
    }
  ],

  // Formation
  formations: [
    {
      diplome: "AEC en Éducatrice à la Petite Enfance",
      etablissement: "Groupe Scolaire René-Martine",
      lieu: "Lomé, Togo",
      annee: "2014 – 2016",
      icone: "👶"
    },
    {
      diplome: "Baccalauréat en Gestion International",
      etablissement: "ESGIS",
      lieu: "Lomé, Togo",
      annee: "2016 – 2019",
      icone: "🎓"
    }
  ],

  // Contact
  contact: {
    telephone: "438-985-4295",
    email: "agbevegracia4@gmail.com",
    ville: "Montréal, QC"
  },

  // Anniversaire
  anniversaire: {
    jour: 26,   // jour du mois
    mois: 5,    // mois (1-12) — MAI = 5
    message: "Joyeux Anniversaire Gracielle ! 🎂✨",
    sousMessage: "Que cette nouvelle année t'apporte bonheur, santé et succès dans tout ce que tu entreprends !",
    actif: true
  }
};

// Sauvegarder et charger depuis localStorage
function sauvegarderDonnees() {
  localStorage.setItem('siteData', JSON.stringify(SITE_DATA));
}

function chargerDonnees() {
  const saved = localStorage.getItem('siteData');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      Object.assign(SITE_DATA, parsed);
    } catch(e) {}
  }
}
