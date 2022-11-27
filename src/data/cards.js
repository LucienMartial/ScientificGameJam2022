const noChange = 0;
const minorChange = 3;
const mediumChange = 5;
const majorChange = 8;
const giganticChange = 15;

const envMinorChange = 5;
const envMediumChange = 12;
const envMajorChange = 23;
const envGiganticChange = 35;



const cards =[
    {
        name: 0,
        description: "Les chasseurs veulent chasser de plus grandes quantités de renards",
        desc_choice1: "Leur autoriser",
        desc_choice2: "Leur interdire",
        choice1: {
            hunter: majorChange,
            naturalist: -giganticChange,
            farmer: -minorChange,
            researcher: -minorChange,
            vole: envMediumChange,
            fox: -envMajorChange,
            hare: envMediumChange,
            hay: -envMediumChange
        },
        choice2: {
            hunter: -minorChange,
            naturalist: mediumChange,
            farmer: minorChange,
            researcher: noChange,
            vole: envMinorChange,
            fox: -envMinorChange,
            hare: envMinorChange,
            hay: -envMinorChange
        },
        used: false,
        event: false
    },
    {
        name: 1,
        description: "Les naturalistes souhaitent diffuser des photos de renards sur les réseaux dans le cadre du mouvement 'foxCare'",
        desc_choice1: "Approuver",
        desc_choice2: "Désapprouver",
        choice1: {
            hunter: noChange,
            naturalist: mediumChange,
            farmer: noChange,
            researcher: noChange,
            vole: noChange,
            fox: envMinorChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: noChange,
            naturalist: -minorChange,
            farmer: noChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false
    },
    {
        name: 2,
        description: "On remarque une baisse significative du nombre de renards dans la région.",
        desc_choice1: "Enquêter",
        desc_choice2: "Ne pas en tenir compte",
        choice1: {
            hunter: noChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: mediumChange,
            vole: envMinorChange,
            fox: -envMediumChange,
            hare: envMinorChange,
            hay: -aminorChange
        },
        choice2: {
            hunter: noChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: -minorChange,
            vole: envMinorChange,
            fox: -envMediumChange,
            hare: envMinorChange,
            hay: -envMinorChange
        },
        used: false,
        event: false
    },
    {
        name: 3,
        description: "On remarque une baisse significative du nombre de campagnols dans la région.",
        desc_choice1: "Enquêter",
        desc_choice2: "Ne pas en tenir compte",
        choice1: {
            hunter: noChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: minorChange,
            vole: -envMediumChange,
            fox: noChange,
            hare: -envMinorChange,
            hay: envMinorChange
        },
        choice2: {
            hunter: noChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: -minorChange,
            vole: -envMediumChange,
            fox: noChange,
            hare: -envMinorChange,
            hay: envMinorChange
        },
        used: false,
        event: false
    },
    {
        name: 4,
        description: "On remarque une baisse significative du nombre de lièvres dans la région.",
        desc_choice1: "Enquêter",
        desc_choice2: "Ne pas en tenir compte",
        choice1: {
            hunter: noChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: -minorChange,
            vole: -envMinorChange,
            fox: noChange,
            hare: -envMediumChange,
            hay: envMinorChange
        },
        choice2: {
            hunter: noChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: -minorChange,
            vole: -envMinorChange,
            fox: noChange,
            hare: -envMediumChange,
            hay: envMinorChange
        },
        used: false,
        event: false
    },
    {
        name: 5,
        description: "Les chercheurs cherchent à développer une méthodologie fondée à partir de l'astrologie.",
        desc_choice1: "Les arrêter",
        desc_choice2: "Les soutenir",
        choice1: {
            hunter: noChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: -minorChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: 0,
            naturalist: 0,
            farmer: 0,
            researcher: 1,
            vole: 0,
            fox: 0,
            hare: 1,
            hay: 0
        },
        used: false,
        event: false
    },
    {
        name: 6,
        description: "Les chasseurs souhaitent organiser une battue pour éliminer les renards galeux.",
        desc_choice1: "Les soutenir",
        desc_choice2: "Les arrêter",
        choice1: {
            hunter: -1,
            naturalist: 1,
            farmer: 0,
            researcher: 0,
            vole: 0,
            fox: -2,
            hare: 1,
            hay: 0
        },
        choice2: {
            hunter: 1,
            naturalist: -1,
            farmer: 0,
            researcher: 0,
            vole: 0,
            fox: -1,
            hare: 1,
            hay: 0
        },
        used: false,
        event: false
    },
    {
        name: 7,
        description: "Suite à une croissance exponentielle du nombre de campagnols qui dégradent leurs cultures, Les agriculteurs souhaitent organiser une extermination de masse.",
        desc_choice1: "Les soutenir",
        desc_choice2: "Les arrêter",
        choice1: {
            hunter: 0,
            naturalist: -1,
            farmer: 1,
            researcher: -1,
            vole: -1,
            fox: 0,
            hare: 1,
            hay: 0
        },
        choice2: {
            hunter: 1,
            naturalist: -1,
            farmer: 0,
            researcher: 1,
            vole: 2,
            fox: 0,
            hare: 0,
            hay: 0
        },
        used: false,
        event: false
    },
    {
        name: 8,
        description: "Les naturalistes dénoncent un manque de déontologie de la part des chasseurs.",
        desc_choice1: "Faire une enquête sur les chasseurs",
        desc_choice2: "Ne pas s'immiscer dans leurs affaires",
        choice1: {
            hunter: -1,
            naturalist: 1,
            farmer: 0,
            researcher: 0,
            vole: 0,
            fox: 1,
            hare: 0,
            hay: 0
        },
        choice2: {
            hunter: 1,
            naturalist: -1,
            farmer: 0,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        used: false,
        event: false
    },
    {
        name: 9,
        description: "Les naturalistes souhaitent installer des nichoirs.",
        desc_choice1: "Autoriser",
        desc_choice2: "Interdire",
        choice1: {
            hunter: 0,
            naturalist: 1,
            farmer: 1,
            researcher: 0,
            vole: -1,
            fox: 1,
            hare: 0,
            hay: 1
        },
        choice2: {
            hunter: 1,
            naturalist: -1,
            farmer: 0,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        used: false,
        event: false
    },
    {
        name: 10,
        description: "Les scientifique veulent protéger les renards",
        desc_choice1: "Les soutenir",
        desc_choice2: "Les ignorer",
        choice1: {
            hunter: -1,
            naturalist: 1,
            farmer: 0,
            researcher: 0,
            vole: -1,
            fox: 1,
            hare: -1,
            hay: 0
        },
        choice2: {
            hunter: 0,
            naturalist: -1,
            farmer: 0,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        used: false,
        event: false
    },
    {
        name: 11,
        description: "Un renard a mordu un homme. Le faire disparaître ?",
        desc_choice1: "Oui",
        desc_choice2: "Non",
        choice1: {
            hunter: 1,
            naturalist: -1,
            farmer: 0,
            researcher: 0,
            vole: -1,
            fox: 1,
            hare: -1,
            hay: 0
        },
        choice2: {
            hunter: 0,
            naturalist: -1,
            farmer: 0,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        used: false,
        event: false
    },
    {
        name: 11,
        description: "Les scientifiques demandent le financement d'une collecte de données",
        desc_choice1: "Octroyer le financement",
        desc_choice2: "Ne pas octroyer le financement",
        choice1: {
            hunter: 0,
            naturalist: 0,
            farmer: 0,
            researcher: 1,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        choice2: {
            hunter: 0,
            naturalist: 0,
            farmer: 0,
            researcher: -1,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        used: false,
        event: false
    },
    {
        name: 11,
        description: "Un stagiaire a fait tomber son café sur un ordinateur, certaines données des scientifiques sont perdues.",
        effect: {
            hunter: 0,
            naturalist: 0,
            farmer: 0,
            researcher: -2,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        used: false,
        event: true
    },
    {
        name: 11,
        description: "Les naturalistes distribuent des tracts en faveur de protection des renards",
        effect: {
            hunter: 0,
            naturalist: 1,
            farmer: 0,
            researcher: -2,
            vole: 0,
            fox: 1,
            hare: -1,
            hay: -1
        },
        used: false,
        event: true
    },
    {
        name: 11,
        description: "Les scientifiques demande un financement afin d'aller effectuer des prélèvements sur le terrain",
        desc_choice1: "Octroyer le financement",
        desc_choice2: "Ne pas octroyer le financement",
        choice1: {
            hunter: 0,
            naturalist: 0,
            farmer: 0,
            researcher: 1,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        choice2: {
            hunter: 0,
            naturalist: 0,
            farmer: 0,
            researcher: -1,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        used: false,
        event: false
    },
    {
        name: 12,
        description: "Nouvelle année de classement ESOD (Espèces Susceptible d'Occasionner des Dégâts), le préfet demande de se prononcer sur le classement du renard en ESOD",
        desc_choice1: "Le laisser sur la liste ESOD",
        desc_choice2: "Proposer de le retirer de la liste ESOD",
        choice1: {
            hunter: 2,
            naturalist: 1,
            farmer: 2,
            researcher: 2,
            vole: -1,
            fox: 1,
            hare: -1,
            hay: 1
        },
        choice2: {
            hunter: -1,
            naturalist: 3,
            farmer: -1,
            researcher: -1,
            vole: 1,
            fox: -1,
            hare: 0,
            hay: -1
        },
        used: false,
        event: false
    },
    {
        name: 13,
        description: "Les naturalistes proposent de discuter du statut de la corneille (env actuellement classé nuisible) dans le groupe Careli",
        desc_choice1: "Careli refuse car la discussion est portée uniquement sur le renard",
        desc_choice2: "Le groupe propose d'en discuter",
        choice1: {
            hunter: 0,
            naturalist: -1,
            farmer: 0,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        choice2: {
            hunter: 0,
            naturalist: 2,
            farmer: -1,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        used: false,
        event: false
    },
    {
        name: 14,
        description: "Les chasseurs veulent rajouter dans leur code de conduite : “Le bon chasseur c’est le bon chasseur mais le mauvais chasseur c’est le mauvais chasseur”, approuver leur décision ?",
        desc_choice1: "Possédant la référence, vous approuvez",
        desc_choice2: "C'est inutile, vous refusez",
        choice1: {
            hunter: 0,
            naturalist: -1,
            farmer: 0,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        choice2: {
            hunter: 0,
            naturalist: 2,
            farmer: -1,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        used: false,
        event: false
    },
    {
        name: 15,
        description: "Les agriculteurs demandent des subventions supplémentaires pour palier les dégâts causés par les campagnols",
        desc_choice1: "Vous acceptez leur demande",
        desc_choice2: "Vous refusez",
        choice1: {
            hunter: 0,
            naturalist: -1,
            farmer: 0,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        choice2: {
            hunter: 0,
            naturalist: 2,
            farmer: -1,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        used: false,
        event: false
    },
    {
        name: 16,
        description: "Vous découvrez que les agriculteurs mettent en place des pièges à renard sans l'approbation du consortium, que faites vous ?",
        desc_choice1: "Vous envoyez la police de l'environnement",
        desc_choice2: "Vous décidez de passer l'éponge, cela permettra d'étudier l'impact sur les populations de renards aux environs",
        choice1: {
            hunter: 0,
            naturalist: -1,
            farmer: 0,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        choice2: {
            hunter: 0,
            naturalist: 2,
            farmer: -1,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        used: false,
        event: false
    },
    {
        name: 17,
        description: "Certains résultats d'enquête semblent douteux, on vous propose de faire une enquête au niveau des chercheurs",
        desc_choice1: "Vous acceptez d'enquêter",
        desc_choice2: "Vous refusez car cela pourrait être contre-productif",
        choice1: {
            hunter: 0,
            naturalist: -1,
            farmer: 0,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        choice2: {
            hunter: 0,
            naturalist: 2,
            farmer: -1,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        used: false,
        event: false
    },
    {
        name: 18,
        description: "Le LVD (Laboratoire Vétérinaire Départemental) propose de faire des prélèvements sur des cadavres de renards pour vérifier la présence de maladies",
        desc_choice1: "Vous acceptez car cela peut s'avérer utile",
        desc_choice2: "Vous refusez car cela coûte trop cher",
        choice1: {
            hunter: 0,
            naturalist: -1,
            farmer: 0,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        choice2: {
            hunter: 0,
            naturalist: 2,
            farmer: -1,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        used: false,
        event: false
    },
    {
        name: 19,
        description: "Intensifier le tir sur le renard sur un secteur pour voir l’impact de la chasse dans ce secteur",
        desc_choice1: "Vous acceptez pour pouvoir récupérer des données",
        desc_choice2: "Vous refusez car cela est trop brutal",
        choice1: {
            hunter: 0,
            naturalist: -1,
            farmer: 0,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        choice2: {
            hunter: 0,
            naturalist: 2,
            farmer: -1,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        used: false,
        event: false
    },
    {
        name: 20,
        description: "Les chercheurs demandent des subventions afin de remplacer leur système de stockage de données",
        desc_choice1: "Vous acceptez car cela permettra de récupérer plus de données",
        desc_choice2: "Vous refusez car cela n'en vaut pas la peine",
        choice1: {
            hunter: 0,
            naturalist: -1,
            farmer: 0,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        choice2: {
            hunter: 0,
            naturalist: 2,
            farmer: -1,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        used: false,
        event: false
    },
    {
        name: 21,
        description: "Careli a besoin d'un finacement pour son projet de recherche",
        desc_choice1: "Vous acceptez de lui fournir",
        desc_choice2: "Careli demande alors à la 'Fondation François Sommer', une association privée", //-- tout le monde sauf chasseurs
        choice1: {
            hunter: 0,
            naturalist: -1,
            farmer: 0,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        choice2: {
            hunter: 0,
            naturalist: 2,
            farmer: -1,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        used: false,
        event: false
    },
    {
        name: 22,
        description: "Nouveau président de la commission des agriculteurs ne connaissant pas Careli",
        desc_choice1: "Vous continuez le projet comme tel, la transimission d'informations a été faite",
        desc_choice2: "Vous prenez le temps d'inviter le nouveau président à un groupe de travail",
        choice1: {
            hunter: 0,
            naturalist: -1,
            farmer: 0,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        choice2: {
            hunter: 0,
            naturalist: 2,
            farmer: -1,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        used: false,
        event: false
    },
    {
        name: 23,
        description: "",
        desc_choice1: "Vous continuez le projet comme tel, la transmission d'informations a été faite.",
        desc_choice2: "Vous prenez le temps d'inviter le nouveau président à un groupe de travail.",
        choice1: {
            hunter: 0,
            naturalist: -1,
            farmer: 0,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        choice2: {
            hunter: 0,
            naturalist: 2,
            farmer: -1,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
            hay: 0
        },
        used: false,
        event: false
    },


]