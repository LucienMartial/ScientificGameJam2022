const cards =[
    {
        name: 0,
        description: "Les chasseurs veulent chasser de plus grande quantité de renard",
        desc_choice1: "Autoriser",
        desc_choice2: "Interdire",
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
        event: true
    },
    {
        name: 1,
        description: "Les naturalistes souhaitent diffuser des photo de renard sur les réseaux dans le cadre du mouvement 'foxCare'",
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
        description: "On remarque une baisse significative de renard dans la région.",
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
        description: "On remarque une baisse significative de campagnol dans la région.",
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
        description: "On remarque une baisse significative de lièvre dans la région.",
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
        description: "Les chercheurs cherchent à développer une méthodologie à partir d’une méthode appelée “l’astrologie”.",
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
        description: "Suite à une croissance exponentielle de campagnol qui augmente les dégradations dans leurs cultures, Les agriculteurs souhaitent utiliser des pesticides pour les décimer.",
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
        desc_choice2: "Ne pas en tenir compte",
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
        description: "Les agriculteurs souhaitent installer des nichoirs.",
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
        desc_choice1: "Oui",
        desc_choice2: "Non",
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
        description: "Un renard a mordu un homme. Le tuez?",
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
        description: "Les scientifiques demande un financement",
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
        description: "Un stagiaire a fait tombé son café, certaine données des scientifiques ont été effacées.",
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
        description: "Les scientifiques demande un financement",
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
        description: "Nouvelle Année de classement ESOD (Espèces Susceptible d'Occasionner des Dégâts), le préfet demande de se prononcer sur le classement du renard en ESOD",
        desc_choice1: "Garder la situation actuelle",
        desc_choice2: "Proposer de retirer le renard de la liste ESOD",
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
        description: "Les naturaliste propose de discuter du statut de la corneille (animal actuellement classé nuisible)  dans le groupe Careli",
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