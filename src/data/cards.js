const noChange = 0;
const minorChange = 7;
const mediumChange = 14;
const majorChange = 21;
const giganticChange = 30;

const envMinorChange = 5;
const envMediumChange = 12;
const envMajorChange = 23;
const envGiganticChange = 35;



const cards =[
    {
        name: 0,
        description: "Les chasseurs veulent chasser de plus grandes quantités de renards.",
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
        event: false,
        img: "hunter"
    },
    {
        name: 1,
        description: "Les naturalistes souhaitent diffuser des photos de renards sur les réseaux dans le cadre du mouvement 'foxCare'.",
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
        event: false,
        img: "naturaliste"
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
            hay: -minorChange
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
        event: false,
        img: "fox"
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
        event: false,
        img: "vole"
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
        event: false,
        img: "hare"
    },
    {
        name: 5,
        description: "Les chercheurs cherchent à développer une méthodologie fondée sur l'astrologie.",
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
            hunter: noChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "researcher"
    },
    {
        name: 6,
        description: "Les chasseurs souhaitent organiser une battue pour éliminer les renards galeux.",
        desc_choice1: "Les soutenir",
        desc_choice2: "Les arrêter",
        choice1: {
            hunter: majorChange,
            naturalist: minorChange,
            farmer: noChange,
            researcher: noChange,
            vole: noChange,
            fox: -envGiganticChange,
            hare: envMinorChange,
            hay: noChange
        },
        choice2: {
            hunter: -minorChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: noChange,
            vole: noChange,
            fox: -envMediumChange,
            hare: envMinorChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "hunter"
    },
    {
        name: 7,
        description: "Suite à une croissance exponentielle du nombre de campagnols qui dégradent leurs cultures, Les agriculteurs souhaitent organiser une extermination de masse.",
        desc_choice1: "Les soutenir",
        desc_choice2: "Les arrêter",
        choice1: {
            hunter: mediumChange,
            naturalist: -giganticChange,
            farmer: majorChange,
            researcher: -mediumChange,
            vole: -envGiganticChange,
            fox: noChange,
            hare: -envMinorChange,
            hay: noChange
        },
        choice2: {
            hunter: 1,
            naturalist: -1,
            farmer: noChange,
            researcher: 1,
            vole: 2,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "farmer"
    },
    {
        name: 8,
        description: "Les naturalistes dénoncent un manque de déontologie de la part des chasseurs.",
        desc_choice1: "Faire une enquête sur les chasseurs",
        desc_choice2: "Ne pas s'immiscer dans leurs affaires",
        choice1: {
            hunter: -mediumChange,
            naturalist: minorChange,
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
        event: false,
        img: "naturalist"
    },
    {
        name: 9,
        description: "Les naturalistes souhaitent installer des nichoirs.",
        desc_choice1: "Autoriser",
        desc_choice2: "Interdire",
        choice1: {
            hunter: minorChange,
            naturalist: mediumChange,
            farmer: minorChange,
            researcher: minorChange,
            vole: -minorChange,
            fox: minorChange,
            hare: noChange,
            hay: minorChange
        },
        choice2: {
            hunter: -minorChange,
            naturalist: -mediumChange,
            farmer: noChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "naturalist"
    },
    {
        name: 10,
        description: "Les scientifiques veulent protéger les renards.",
        desc_choice1: "Les soutenir",
        desc_choice2: "Les ignorer",
        choice1: {
            hunter: -minorChange,
            naturalist: majorChange,
            farmer: noChange,
            researcher: mediumChange,
            vole: -envMediumChange,
            fox: envMediumChange,
            hare: -envMinorChange,
            hay: minorChange
        },
        choice2: {
            hunter: minorChange,
            naturalist: -mediumChange,
            farmer: -minorChange,
            researcher: -minorChange,
            vole: envMinorChange,
            fox: -envMinorChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "researcher"
    },
    {
        name: 11,
        description: "Un renard a mordu un homme. Le faire disparaître ?",
        desc_choice1: "Oui",
        desc_choice2: "Non",
        choice1: {
            hunter: mediumChange,
            naturalist: -mediumChange,
            farmer: minorChange,
            researcher: noChange,
            vole: envMinorChange,
            fox: -envMinorChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: noChange,
            naturalist: minorChange,
            farmer: -minorChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "fox"
    },
    {
        name: 12,
        description: "Les scientifiques demandent le financement d'une collecte de données.",
        desc_choice1: "Octroyer le financement",
        desc_choice2: "Ne pas octroyer le financement",
        choice1: {
            hunter: noChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: mediumChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: noChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: -mediumChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "researcher"
    },
    {
        name: 13,
        description: "Un stagiaire a fait tomber son café sur un ordinateur, certaines données des scientifiques sont perdues.",
        effect: {
            hunter: noChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: -envMajorChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: true,
        img: "researcher"
    },
    {
        name: 14,
        description: "Les naturalistes distribuent des tracts en faveur de la protection des renards.",
        effect: {
            hunter: -mediumChange,
            naturalist: mediumChange,
            farmer: -mediumChange,
            researcher: noChange,
            vole: -envMinorChange,
            fox: envMinorChange,
            hare: -envMinorChange,
            hay: minorChange
        },
        used: false,
        event: true,
        img: "naturalist"
    },
    {
        name: 15,
        description: "Nouvelle année de classement ESOD (Espèces Susceptibles d'Occasionner des Dégâts), le préfet demande de se prononcer sur le classement du renard en ESOD.",
        desc_choice1: "Le laisser sur la liste ESOD",
        desc_choice2: "Proposer de le retirer de la liste ESOD",
        choice1: {
            hunter: mediumChange,
            naturalist: -mediumChange,
            farmer: minorChange,
            researcher: noChange,
            vole: envMinorChange,
            fox: -envMediumChange,
            hare: envMinorChange,
            hay: noChange
        },
        choice2: {
            hunter: -mediumChange,
            naturalist: majorChange,
            farmer: -minorChange,
            researcher: noChange,
            vole: -envMinorChange,
            fox: envMediumChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "fox"
    },
    {
        name: 16,
        description: "Les naturalistes proposent de discuter du statut de la corneille (actuellement classé nuisible) dans le groupe Careli.",
        desc_choice1: "Careli refuse car la discussion est portée uniquement sur le renard",
        desc_choice2: "Le groupe propose d'en discuter",
        choice1: {
            hunter: noChange,
            naturalist: -minorChange,
            farmer: noChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: noChange,
            naturalist: mediumChange,
            farmer: -minorChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "naturalist"
    },
    {
        name: 17,
        description: "Les chasseurs veulent rajouter dans leur code de conduite : “Être un bon chasseur”, approuver leur décision ?",
        desc_choice1: "Approuvé !",
        desc_choice2: "C'est inutile, vous refusez",
        choice1: {
            hunter: mediumChange,
            naturalist: minorChange,
            farmer: noChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: -minorChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "hunter"
    },
    {
        name: 18,
        description: "Les agriculteurs demandent des subventions supplémentaires pour palier les dégâts causés par les campagnols.",
        desc_choice1: "Vous acceptez leur demande",
        desc_choice2: "Vous refusez",
        choice1: {
            hunter: noChange,
            naturalist: noChange,
            farmer: majorChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: noChange,
            naturalist: noChange,
            farmer: -mediumChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "farmer"
    },
    {
        name: 19,
        description: "Vous découvrez que les agriculteurs mettent en place des pièges à renard sans l'approbation du consortium, que faites vous ?",
        desc_choice1: "Vous envoyez la police de l'environnement",
        desc_choice2: "Vous décidez de passer l'éponge, cela permettra d'étudier l'impact sur les populations de renards aux environs",
        choice1: {
            hunter: noChange,
            naturalist: mediumChange,
            farmer: -mediumChange,
            researcher: noChange,
            vole: noChange,
            fox: minorChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: noChange,
            naturalist: -mediumChange,
            farmer: mediumChange,
            researcher: minorChange,
            vole: noChange,
            fox: -minorChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "farmer"
    },
    {
        name: 20,
        description: "Certains résultats d'études sur les lièvres effectuées par les chercheurs semblent douteux. Enquêter ?.",
        desc_choice1: "Vous acceptez d'enquêter",
        desc_choice2: "Vous refusez car cela pourrait être contre-productif",
        choice1: {
            hunter: noChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: -majorChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: noChange,
            naturalist: -minorChange,
            farmer: noChange,
            researcher: mediumChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "researcher"
    },
    {
        name: 21,
        description: "Le LVD (Laboratoire Vétérinaire Départemental) propose de faire des prélèvements sur des renards pour vérifier la présence de maladies.",
        desc_choice1: "Vous acceptez car cela peut s'avérer utile",
        desc_choice2: "Vous refusez",
        choice1: {
            hunter: noChange,
            naturalist: -minorChange,
            farmer: noChange,
            researcher: mediumChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: noChange,
            naturalist: minorChange,
            farmer: noChange,
            researcher: -minorChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "researcher"
    },
    {
        name: 22,
        description: "Intensifier le tir sur le renard sur un secteur pour voir l’impact de la chasse dans ce secteur.",
        desc_choice1: "Vous acceptez pour pouvoir récupérer des données",
        desc_choice2: "Vous refusez car cela est trop brutal",
        choice1: {
            hunter: mediumChange,
            naturalist: -mediumChange,
            farmer: minorChange,
            researcher: minorChange,
            vole: envMediumChange,
            fox: -envMajorChange,
            hare: envMediumChange,
            hay: -mediumChange
        },
        choice2: {
            hunter: noChange,
            naturalist: mediumChange,
            farmer: -minorChange,
            researcher: noChange,
            vole: noChange,
            fox: minorChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "hunter"
    },
    {
        name: 23,
        description: "Les chercheurs demandent des subventions afin de remplacer leur système de stockage de données.",
        desc_choice1: "Vous acceptez car cela permettra de récupérer plus de données",
        desc_choice2: "Vous refusez car ils en ont déjà reçu",
        choice1: {
            hunter: noChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: mediumChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: noChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: -giganticChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "researcher"
    },
    {
        name: 24,
        description: "Careli a besoin d'un finacement pour son projet de recherche.",
        desc_choice1: "Careli demande à la région",
        desc_choice2: "Careli demande alors à la 'Fondation François Sommer', une association privée",
        choice1: {
            hunter: minorChange,
            naturalist: minorChange,
            farmer: minorChange,
            researcher: minorChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: minorChange,
            naturalist: -minorChange,
            farmer: -minorChange,
            researcher: -minorChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "association"
    },
    {
        name: 25,
        description: "Le nouveau président de la commission des agriculteurs est élu, il ne connait pas Careli.",
        desc_choice1: "Vous continuez le projet comme tel, la transimission d'informations a été faite",
        desc_choice2: "Vous prenez le temps d'inviter le nouveau président à un groupe de travail",
        choice1: {
            hunter: noChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: noChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "association"
    },
    {
        name: 26,
        description: "Un agriculteur du zonage Careli à des renards qui se sont installés dans son bâtiment agricole et l’on détérioré, il demande une dérogation pour les piéger.",
        desc_choice1: "Careli lui accorde la dérogation",
        desc_choice2: "Careli refuse",
        choice1: {
            hunter: noChange,
            naturalist: minorChange,
            farmer: 1,
            researcher: noChange,
            vole: noChange,
            fox: -1,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: noChange,
            naturalist: 2,
            farmer: -1,
            researcher: noChange,
            vole: noChange,
            fox: 1,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "farmer"
    },
    {
        name: 27,
        description: "Un agriculteur demande à être reçu par le groupe, il est fermement opposé au tir sur le renard sur ces parcelles.",
        desc_choice1: "Careli accepte de le recevoir",
        desc_choice2: "Careli refuse de le recevoir",
        choice1: {
            hunter: noChange,
            naturalist: noChange,
            farmer: 1,
            researcher: noChange,
            vole: noChange,
            fox: 1,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: noChange,
            naturalist: noChange,
            farmer: -1,
            researcher: noChange,
            vole: noChange,
            fox: -1,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "farmer"
    },
    {
        name: 28,
        description: "Un agriculteur est inquiet et contacte le Groupe Careli, il est dans une zone ou le renard est protégé et ceux-ci commencent à jouer avec ses enfants.",
        desc_choice1: "Careli accepte de le recevoir",
        desc_choice2: "Careli refuse de le recevoir",
        choice1: {
            hunter: noChange,
            naturalist: noChange,
            farmer: 1,
            researcher: noChange,
            vole: noChange,
            fox: -1,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: noChange,
            naturalist: noChange,
            farmer: -1,
            researcher: noChange,
            vole: noChange,
            fox: 1,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "farmer"
    },
    {
        name: 29,
        description: "Une manifestation est organisée devant la maison des agriculteurs, lors de celle-ci un des membre de Careli dénonce les dérives de l’agriculture intensive, les référants agricoles demandent à parler de cet incident lors d’une réunion Careli.",
        desc_choice1: "Le groupe accepte, il faut apaiser les tensions",
        desc_choice2: "Le groupe refuse, Careli n’est pas le lieu pour débattre de cette question",
        choice1: {
            hunter: -1,
            naturalist: -1,
            farmer: 1,
            researcher: -1,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: 1,
            naturalist: 1,
            farmer: 1,
            researcher: 1,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "farmer"
    },
    {
        name: 30,
        description: "Il est proposé au groupe careli de participer au groupe 'les chercheurs à la ferme'.",
        desc_choice1: "Le groupe accepte malgré le temps de travail supplémentaire",
        desc_choice2: "Le groupe refuse, aucun participant n’est disponible à cette date",
        choice1: {
            hunter: 1,
            naturalist: 1,
            farmer: 1,
            researcher: 1,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: -1,
            naturalist: -1,
            farmer: -1,
            researcher: -1,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "researcher"
    },
    {
        name: 31,   
        description: "Les agriculteurs souhaitent que le projet avance plus vite, 10 ans c’est trop long, ils proposent de reduire la durée du projet à 5 ans.",
        desc_choice1: "Le groupe accepte d’échanger sur cette proposition, avec plus d’efforts on aura plus de résultats",
        desc_choice2: "Le groupe refuse, le temps de la recherche est un temps long",
        choice1: {
            hunter: noChange,
            naturalist: noChange,
            farmer: 1,
            researcher: -1,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: noChange,
            naturalist: noChange,
            farmer: -1,
            researcher: 1,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "farmer"
    },
    {
        name: 32,
        description: "Les sociologues proposent un article dans lequel les chasseurs sont présentés de manière favorable.",
        desc_choice1: "Careli accepte",
        desc_choice2: "Careli refuse",
        choice1: {
            hunter: mediumChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: -mediumChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "hunter"
    },
    {
        name: 33,
        description: "Les sociologues proposent un article dans lequel les naturalistes sont présentés de manière favorable.",
        desc_choice1: "Careli accepte",
        desc_choice2: "Careli refuse",
        choice1: {
            hunter: noChange,
            naturalist: mediumChange,
            farmer: noChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: noChange,
            naturalist: -mediumChange,
            farmer: noChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "naturalist"
    },
    {
        name: 34,
        description: "Les sociologues proposent un article dans lequel les fermiers sont présentés de manière favorable.",
        desc_choice1: "Careli accepte",
        desc_choice2: "Careli refuse",
        choice1: {
            hunter: noChange,
            naturalist: noChange,
            farmer: mediumChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: noChange,
            naturalist: noChange,
            farmer: -mediumChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "farmer"
    },
    {
        name: 35,
        description: "Les sociologues proposent un article dans lequel les chercheurs sont présenté de manière favorable.",
        desc_choice1: "Careli accepte",
        desc_choice2: "Careli refuse",
        choice1: {
            hunter: noChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: mediumChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: noChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: -mediumChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "researcher"
    },
    {
        name: 36,
        description: "Les sociologues proposent un article dans lequel les chasseurs sont présentés de manière défavorable.",
        desc_choice1: "Careli accepte",
        desc_choice2: "Careli refuse",
        choice1: {
            hunter: -mediumChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: mediumChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "hunter"
    },
    {
        name: 37,
        description: "Les sociologues proposent un article dans lequel les naturalistes sont présentés de manière défavorable.",
        desc_choice1: "Careli accepte",
        desc_choice2: "Careli refuse",
        choice1: {
            hunter: noChange,
            naturalist: -mediumChange,
            farmer: noChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: noChange,
            naturalist: mediumChange,
            farmer: noChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "naturalist"
    },
    {
        name: 38,
        description: "Les sociologues proposent un article dans lequel les fermiers sont présentés de manière défavorable.",
        desc_choice1: "Careli accepte",
        desc_choice2: "Careli refuse",
        choice1: {
            hunter: noChange,
            naturalist: noChange,
            farmer: -mediumChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: noChange,
            naturalist: noChange,
            farmer: mediumChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "farmer"
    },
    {
        name: 39,
        description: "Les sociologues proposent un article dans lequel les chercheurs sont présenté de manière défavorable.",
        desc_choice1: "Careli accepte",
        desc_choice2: "Careli refuse",
        choice1: {
            hunter: noChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: -mediumChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: noChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: mediumChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "researcher"
    },
    {
        name: 40,
        description: "Les naturalistes proposent d’adapter le dispositif careli sur la zone où les renard sont piégeables et tuables, il faut que ça ne soit qu'au niveau des poulaillers et des fermes.",
        desc_choice1: "Careli valide ce choix",
        desc_choice2: "Careli invalide ce choix",
        choice1: {
            hunter: -mediumChange,
            naturalist: majorChange,
            farmer: minorChange,
            researcher: -mediumChange,
            vole: noChange,
            fox: mediumChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: mediumChange,
            naturalist: -majorChange,
            farmer: -minorChange,
            researcher: mediumChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false,
        img: "naturalist"
    },
    {
        name: 41,
        description: "Une game-jam est organisée sur le projet Careli, les chasseurs sont très caricaturés dans un des jeux proposés.",
        desc_choice1: "Careli ne réagit pas, le projet est beau malgré la caricature",
        desc_choice2: "Careli demande à retravailler le projet avec plus de réalisme",
        choice1: {
            hunter: -minorChange,
            naturalist: minorChange,
            farmer: minorChange,
            researcher: minorChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: minorChange,
            naturalist: minorChange,
            farmer: minorChange,
            researcher: minorChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false
    },
    {
        name: 42,
        description: "Une game-jam est organisée sur le projet Careli, les naturalistes sont très caricaturés dans un des jeux proposés.",
        desc_choice1: "Careli ne réagit pas, le projet est beau malgré la caricature",
        desc_choice2: "Careli demande à retravailler le projet avec plus de réalisme",
        choice1: {
            hunter: minorChange,
            naturalist: -minorChange,
            farmer: minorChange,
            researcher: minorChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: minorChange,
            naturalist: minorChange,
            farmer: minorChange,
            researcher: minorChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false
    },
    {
        name: 43,
        description: "Une game-jam est organisée sur le projet Careli, les agriculteurs sont très caricaturés dans un des jeux.",
        desc_choice1: "Careli ne réagit pas, le projet est beau malgré la caricature",
        desc_choice2: "Careli demande à retravailler le projet avec plus de réalisme",
        choice1: {
            hunter: minorChange,
            naturalist: minorChange,
            farmer: -minorChange,
            researcher: minorChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: minorChange,
            naturalist: minorChange,
            farmer: minorChange,
            researcher: minorChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false
    },
    {
        name: 42,
        description: "Une game-jam est organisée sur le projet Careli, les chercheurs sont très caricaturés dans un des jeux.",
        desc_choice1: "Careli ne réagit pas, le projet est beau malgré la caricature",
        desc_choice2: "Careli demande à retravailler le projet avec plus de réalisme",
        choice1: {
            hunter: minorChange,
            naturalist: minorChange,
            farmer: minorChange,
            researcher: -minorChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: minorChange,
            naturalist: minorChange,
            farmer: minorChange,
            researcher: minorChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false
    },
    {
        name: 43,
        description: "Un naturaliste a reçu de multiples vidéos de caméras de surveillance où des renards attaquent des poulaillers.",
        desc_choice1: "Careli prend le temps d’en discuter",
        desc_choice2: "Careli n'en tient pas compte",
        choice1: {
            hunter: mediumChange,
            naturalist: majorChange,
            farmer: minorChange,
            researcher: minorChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: noChange,
            naturalist: -majorChange,
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
        name: 44,
        description: "Les naturalistes proposent de discuter du statut de loup (animal actuellement classé nuisible) dans le groupe Careli.",
        desc_choice1: "Le groupe refuse, car la discussion tourne uniquement autour du renard",
        desc_choice2: "Le groupe propose d'en discuter",
        choice1: {
            hunter: noChange,
            naturalist: -majorChange,
            farmer: noChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: -mediumChange,
            naturalist: majorChange,
            farmer: -minorChange,
            researcher: mediumChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false
    },
    {
        name: 45,
        description: "Les naturalistes proposent de discuter du statut de la fouine (animal actuellement classé nuisible) dans le groupe Careli.",
        desc_choice1: "Le groupe refuse, car la discussion est uniquement centrée autour du renard",
        desc_choice2: "Le groupe propose d'en discuter",
        choice1: {
            hunter: noChange,
            naturalist: -mediumChange,
            farmer: noChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: -mediumChange,
            naturalist: majorChange,
            farmer: -mediumChange,
            researcher: majorChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false
    },
    {
        name: 46,
        description: "Suite à un effondrement de mobilier urbain à cause des terrier de blaireau, les chasseurs demandent la permission d'en éliminer.",
        desc_choice1: "Vous leur indiquez que vous ne pouvez pas vous prononcer sur ce sujet",
        desc_choice2: "Vous leur autorisez à en éliminer une qantité importante",
        choice1: {
            hunter: -minorChange,
            naturalist: -minorChange,
            farmer: noChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: mediumChange,
            naturalist: mediumChange,
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
        name: 47,
        description: "Beaucoup de départs en retraite ont lieu, les chasseurs demandent une augmentation du quota de chasse par chasseur.",
        desc_choice1: "Careli accepte",
        desc_choice2: "Careli refuse",
        choice1: {
            hunter: majorChange,
            naturalist: -mediumChange,
            farmer: noChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: -mediumChange,
            naturalist: mediumChange,
            farmer: noChange,
            researcher: noChange,
            vole: mediumChange,
            fox: mediumChange,
            hare: mediumChange,
            hay: -majorChange
        },
        used: false,
        event: false
    },
    {
        name: 48,
        description: "Un agriculteur nourrit les renards, car il les adore.",
        desc_choice1: "Careli décide de lui en parler pour le dissuader",
        desc_choice2: "Careli décide de ne pas agir",
        choice1: {
            hunter: mediumChange,
            naturalist: noChange,
            farmer: -majorChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: -minorChange,
            naturalist: noChange,
            farmer: majorChange,
            researcher: noChange,
            vole: noChange,
            fox: majorChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false
    },
    {
        name: 55,
        description: "Le journal veut communiquer sur le projet careli chasseur-naturaliste.",
        desc_choice1: "Careli accepte",
        desc_choice2: "Careli refuse",
        choice1: {
            hunter: mediumChange,
            naturalist: mediumChange,
            farmer: noChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: -minorChange,
            naturalist: -minorChange,
            farmer: mediumChange,
            researcher: mediumChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false
    },
    {
        name: 49,
        description: "Le journal veut communiquer sur le projet careli chasseur-agriculteur.",
        desc_choice1: "Careli accepte",
        desc_choice2: "Careli refuse",
        choice1: {
            hunter: mediumChange,
            naturalist: noChange,
            farmer: mediumChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: -minorChange,
            naturalist: mediumChange,
            farmer: -minorChange,
            researcher: mediumChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false
    },
    {
        name: 50,
        description: "Le journal veut communiquer sur le projet careli chasseur-chercheur.",
        desc_choice1: "Careli accepte",
        desc_choice2: "Careli refuse",
        choice1: {
            hunter: mediumChange,
            naturalist: noChange,
            farmer: noChange,
            researcher: mediumChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: -minorChange,
            naturalist: mediumChange,
            farmer: mediumChange,
            researcher: -minorChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false
    },
    {
        name: 51,
        description: "Le journal veut communiquer sur le projet careli naturaliste-agriculteur.",
        desc_choice1: "Careli accepte",
        desc_choice2: "Careli refuse",
        choice1: {
            hunter: noChange,
            naturalist: mediumChange,
            farmer: mediumChange,
            researcher: noChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: mediumChange,
            naturalist: -minorChange,
            farmer: -minorChange,
            researcher: mediumChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false
    },
    {
        name: 52,
        description: "Le journal veut communiquer sur le projet careli naturaliste-chercheur.",
        desc_choice1: "Careli accepte",
        desc_choice2: "Careli refuse",
        choice1: {
            hunter: noChange,
            naturalist: mediumChange,
            farmer: noChange,
            researcher: mediumChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: mediumChange,
            naturalist: -minorChange,
            farmer: mediumChange,
            researcher: -minorChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false
    },
    {
        name: 53,
        description: "Le journal veut communiquer sur le projet careli agriculteur-chercheur.",
        desc_choice1: "Careli accepte",
        desc_choice2: "Careli refuse",
        choice1: {
            hunter: noChange,
            naturalist: noChange,
            farmer: mediumChange,
            researcher: mediumChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: mediumChange,
            naturalist: mediumChange,
            farmer: -minorChange,
            researcher: -minorChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false
    },
    {
        name: 54,
        description: "Des fermiers on aperçu des campagnols allumant des feux dans la forêt.",
        desc_choice1: "laisser faire la nature.",
        desc_choice2: "convoquer les campagnols.",
        choice1: {
            hunter: noChange,
            naturalist: noChange,
            farmer: mediumChange,
            researcher: mediumChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: mediumChange,
            naturalist: mediumChange,
            farmer: -minorChange,
            researcher: -minorChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false
    },
    {
        name: 55,
        description: "Les chasseurs souhaitent organiser des atelier d'introduction à la taxidermie dans les écoles.",
        desc_choice1: "vous acceptez, cela permettra de sensibiliser les jeunes",
        desc_choice2: "vous refusez, c'est inapproprié",
        choice1: {
            hunter: noChange,
            naturalist: noChange,
            farmer: mediumChange,
            researcher: mediumChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: mediumChange,
            naturalist: mediumChange,
            farmer: -minorChange,
            researcher: -minorChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false
    },
    {
        name: 56,
        description: "Les chercheurs souhaitent capturer des renards pour les mettre en cage.",
        desc_choice1: "acceptez, ils ont sûrement leurs raisons",
        desc_choice2: "refusez, pour des raisons éthiques",
        choice1: {
            hunter: noChange,
            naturalist: noChange,
            farmer: mediumChange,
            researcher: mediumChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: mediumChange,
            naturalist: mediumChange,
            farmer: -minorChange,
            researcher: -minorChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false
    },
    {
        name: 57,
        description: "Des naturalistes pratiquent du lobbying à la sortie des écoles.",
        desc_choice1: "interdire cette propagande",
        desc_choice2: "autoriser les naturalistes à faire de la sensibilisation",
        choice1: {
            hunter: noChange,
            naturalist: noChange,
            farmer: mediumChange,
            researcher: mediumChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: mediumChange,
            naturalist: mediumChange,
            farmer: -minorChange,
            researcher: -minorChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false
    },

    {
        name: 58,
        description: "Des pièges à ours retrouvés sur les sentiers de randonnée.",
        desc_choice1: "en rajouter, on ne sait jamais",
        desc_choice2: "les enlever, c'est dangereux pour les randonneurs",
        choice1: {
            hunter: noChange,
            naturalist: noChange,
            farmer: mediumChange,
            researcher: mediumChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: mediumChange,
            naturalist: mediumChange,
            farmer: -minorChange,
            researcher: -minorChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false
    },
    {
        name: 59,
        description: "Des campagnols géants ont été aperçus dans la forêt.",
        desc_choice1: "convoquer les chasseurs",
        desc_choice2: "c'est une création de la nature",
        choice1: {
            hunter: noChange,
            naturalist: noChange,
            farmer: mediumChange,
            researcher: mediumChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        choice2: {
            hunter: mediumChange,
            naturalist: mediumChange,
            farmer: -minorChange,
            researcher: -minorChange,
            vole: noChange,
            fox: noChange,
            hare: noChange,
            hay: noChange
        },
        used: false,
        event: false
    }
]