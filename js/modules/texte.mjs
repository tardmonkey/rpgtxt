export const textNodes = [
    {
        id:1,
        text:"Dans les ténèbres d'un lointain futur, il n'y a que la guerre",
        options:[
            {
                text:'Commencer',
                setState : {alive:true},
                nextText: 2
              },
           
        ]
    },
    {
        id:2,
        text:"La pièce est froide, humide et vide si on omet l'homme immense qui meumble un quart de l'endroit à lui tout seul.",
        options:[
            {
                text:"Observer la pièce",
                setState : {alive:true},
                nextText: 3.1
              },
            {
                text:"Observer l'homme",
                setState : {alive:true},
                nextText: 3
              },
            
        ]
    },
    {
        id:3,
        text:"L'homme au crâne parfaitement rasé et à la tunique blanche rudimantaire vous mets mal à l'aise. Hormis sa taille et sa carrure, parfaitement hors norme -est ce qu'un être humain est réelement capable d'atteindre telles proportions ?- son âge est impossible à placer. Ses traits sont assez jeunes, la trentaine peut être, mais ses yeux perçants semblent porter en eux le fardeau de siècles de souffrances.",
        options:[
            {
                text:"Chercher des détails",
                setState : {alive:true},
                nextText: 4
              },
            {
                text:"Observer la pièce",
                setState : {alive:true},
                nextText: 4
              },
            
        ]
    },
    {
        id:3.1,
        text:"Les murs de la pièce sont à nus, le sol gris semble être fait de papier de verre tellement il vous écorche les pieds",
        options:[
            {
                text:"Chercher des détails",
                setState : {alive:true},
                nextText: 4
              },
            {
                text:"Observer l'homme",
                setState : {alive:true},
                nextText: 4
              },
            
        ]
    },
    {
        id:4,
        text:"L'homme ne vous laisse pas le temps de vous concentrer d'avantage. D'une voix rocailleuse et bien trop grave, plusieurs octave sous celle d'un être humain normale il s'exprime sans émotions : Ton nom ?",
        options:[
            {
                text:"Je ne sais pas",
                setState : {alive:true},
                nextText: 5.1
              },
            {
                text:"Qu'est-ce que je fais ici ?",
                setState : {alive:true},
                nextText: 5.2
              },
            {
                text:"Qui le demande ?",
                setState : {alive:true},
                nextText: 5.2
              },
            
        ]
    },
    {
        id:5.1,
        text:"",
        options:[
            {
                text:"Je ne sais pas",
                setState : {alive:true},
                nextText: 5.1
              },
            {
                text:"J'en sais rien !",
                setState : {alive:true},
                nextText: 5.2
              },
            {
                text:"Va te faire foutre",
                setState : {alive:true},
                nextText: 5.3
              },
            
        ]
    },
    {
        id:5.1,
        text:"",
        options:[
            {
                text:"Je ne sais pas",
                setState : {alive:true},
                nextText: 5.1
              },
            {
                text:"J'en sais rien !",
                setState : {alive:true},
                nextText: 5.2
              },
            {
                text:"Va te faire foutre",
                setState : {alive:true},
                nextText: 5.3
              },
            
        ]
    },
    {
        id:5.2,
        text:"Avec la même voix sans emotion, ne semblant pas prêter attention outre mesure à ce que vous dites, il répète simplement : Ton nom ?",
        options:[
            {
                text:"Je ne sais pas",
                setState : {alive:true},
                nextText: 5.1
              },
            {
                text:"J'en sais rien !",
                setState : {alive:true},
                nextText: 5.2
              },
            {
                text:"Va te faire foutre",
                setState : {alive:true},
                nextText: 5.3
              },
            
        ]
    },
    
]