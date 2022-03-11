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
            {
                text:"Se suicider",
                setState : {alive:false},
                nextText: 0
            }
        ]
    },
    {
        id:2,
        text:"Le vieil homme bourru vous toise de haut : Ton nom ?",
        options:[
            {
                text:"Ta mère",
                setState : {alive:true},
                nextText: 2
              },
            
        ]
    },
    
]