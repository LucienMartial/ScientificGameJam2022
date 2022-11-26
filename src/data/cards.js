const cards =[
    {
        name: 0,
        description: "Les chasseurs veulent chasser de plus grandes quantités de renards",
        desc_choice1: "Leur autoriser",
        desc_choice2: "Leur interdire",
        choice1: {
            hunter: 1,
            naturalist: -1,
            farmer: -1,
            researcher: -1,
            vole: 1,
            fox: -1,
            hare: 1,
            hay: 1
        },
        choice2: {
            hunter: -1,
            naturalist: 1,
            farmer: 1,
            researcher: 1,
            vole: 1,
            fox: -1,
            hare: 1,
            hay: 1
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
            hunter: 0,
            naturalist: 1,
            farmer: 0,
            researcher: 0,
            vole: 0,
            fox: 0,
            hare: 0,
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
        name: 2,
        description: "On remarque une baisse significativedu nombre de renards dans la région.",
        desc_choice1: "Enquêter",
        desc_choice2: "Ne pas en tenir compte",
        choice1: {
            hunter: 0,
            naturalist: 0,
            farmer: 0,
            researcher: 1,
            vole: 1,
            fox: -1,
            hare: 1,
            hay: 0
        },
        choice2: {
            hunter: 0,
            naturalist: 0,
            farmer: 0,
            researcher: -1,
            vole: 1,
            fox: -1,
            hare: 1,
            hay: 0
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
            hunter: 0,
            naturalist: 0,
            farmer: 0,
            researcher: 1,
            vole: 1,
            fox: -1,
            hare: 1,
            hay: 0
        },
        choice2: {
            hunter: 0,
            naturalist: 0,
            farmer: 0,
            researcher: -1,
            vole: 1,
            fox: -1,
            hare: 1,
            hay: 0
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
            hunter: 0,
            naturalist: 0,
            farmer: 0,
            researcher: 1,
            vole: 0,
            fox: 0,
            hare: 1,
            hay: 0
        },
        choice2: {
            hunter: 0,
            naturalist: 0,
            farmer: 0,
            researcher: -1,
            vole: 0,
            fox: 0,
            hare: 1,
            hay: 0
        },
        used: false,
        event: false
    },
    {
        name: 5,
        description: "Les chercheurs cherchent à développer une méthodologie fondée à partir de l'astrologie",
        desc_choice1: "Les arrêter",
        desc_choice2: "Les soutenir",
        choice1: {
            hunter: 0,
            naturalist: 0,
            farmer: 0,
            researcher: -1,
            vole: 0,
            fox: 0,
            hare: 1,
            hay: 0
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
        description: "Les naturalistes proposent de discuter du statut de la corneille (animal actuellement classé nuisible) dans le groupe Careli",
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

]