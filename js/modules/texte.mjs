import Personnage from "./classPersonnage.mjs";

import { personnage } from "./loadChar.mjs";

export function loadTextNodes(){
  let textNodes = [
      {
          id:1,
          text:`Oh oui ! Bien sûr ! Suis-je bête… Vous savez avec toutes les personnes que je vois défiler, parfois j’ai la mémoire qui flanche. <br />
          Est-ce que cela vous ennuie si nous parlons un peu plus de vous ? <br/> J’ai besoin d’un peu plus d’informations. `,
          options:[
              {
                  text:'Non, pas de problème. ',
                  nextText: 1.1                
                },
                {
                  text:'Oui, ça m’ennuie. ',
                  nextText: 1.2                
                }, {
                  text:'Pourquoi avez-vous d’informations ?  ',
                  nextText: 1.3             
                },
          ]
      },
      {
          id:1.1,
          text:"Parfait ! ",
          options:[
              {
                  
                },
            
          ]
      },
      {
          id:1.2,
          text:"Vous-êtes sûr ? Cela pourrait vous êtres bien utile, aux regards ce qu’il vous attend …",
          options:[
              {
                  text:"Oui, je ne veux pas répondre à vos questions.",
                  
                  nextText: 0
                },
              {
                  text:"En fait non, je veux bien répondre à vos question",
                  
                  nextText: 0
                },
              
          ]
      },
      {
          id:1.3,
          text:"Disons que vos réponses pourraient se trouver très utile aux regards de ce qu’il vous attend … ",
          options:[
              {
                  text:"je ne veux pas répondre à vos questions.",
                  
                  nextText: 0
                },
              {
                  text:"je veux bien répondre à vos questions. ",
                  
                  nextText: 0
                },
              
          ]
      },
      {
          id:3.1,
          text:"Les murs de la pièce sont à nus, le sol gris semble être fait de papier de verre tellement il vous écorche les pieds",
          options:[
              {
                  text:"Chercher des détails",
                  
                  nextText: 4
                },
              {
                  text:"Observer l'homme",
                  
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
                  statUp: "int",
                  nextText: 5.1
                },
              {
                  text:"Qu'est-ce que je fais ici ?",
                  statUp: "agi",
                  
                  nextText: 5.2
                },
              {
                  text:"Qui le demande ?",
                  statUp: "str",
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
                  
                  nextText: 5.1
                },
              {
                  text:"J'en sais rien !",
                  
                  nextText: 5.2
                },
              {
                  text:"Va te faire foutre",
                  
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
                  
                  nextText: 5.1
                },
              {
                  text:"J'en sais rien !",
                  
                  nextText: 5.2
                },
              {
                  text:"Va te faire foutre",
                  
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
                  
                  nextText: 5.1
                },
              {
                  text:"J'en sais rien !",
                  
                  nextText: 5.2
                },
              {
                  text:"Va te faire foutre",
                  
                  nextText: 5.3
                },
              
          ]
      },
      
  ]

 return textNodes
}