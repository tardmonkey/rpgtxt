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
                  text:"...",
                  nextText: 2,
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
                  
                  nextText: 2
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
                  
                  nextText: 2
                },
              
          ]
      },
      {
          id:2,
          text:`Mes questions vous peut-être vous sembler quelque peu singulières, mais elles vont grandement nous aider à faire la lumière sur votre personnalité …<br/>
          Première question : …. Eh bien … disons … (silence) … Quelle est votre couleur préférée ? `,
          options:[
              {
                  text:"Bleu",
                  
                  nextText: 3
                },
              {
                  text:"Rouge",
                  
                  nextText: 3
                },
              {
                  text:"C'est une blague ?",
                  
                  nextText: 2.1
                },
              
          ]
      },
      {
        id:2.1,
        text:"Non absolument pas ! Alors ? Quelle est votre couleur préférée ? C’est normal entre amis de se dire ce genre de choses … ",
        options:[
            {
                text:"Nous ne sommes pas amis",
                nextText: 2.12
              },
            {
                text:"Bon disons ... Jaune ?",
                nextText: 3
              },
           
        ]
    },
      {
        id:2.12,
        text:"Je vous trouve bien cruel, je ne cherche qu’à vous apporter mon aide. Si vous ne souhaiter pas répondre à une question aussi simple, je doute que vous souhaitiez répondre aux autres. Souhaitez-vous tout de même continuer ? ",
        options:[
            {
                text:"e souhaite tout de même répondre aux autres questions",
                nextText: 3
              },
            {
                text:"Non, vos questions sont stupides ! Je ne souhaite pas y répondre",
                statUp: "str",
                nextText: 6
              },
           
        ]
    },
      {
          id:3,
          text:`Oh [insérer la couleur choisie] ! C’est aussi ma couleur préférée ! Nous avons tellement de chose en commun … <br/><br/>
          Ma deuxième question  nécessite une mise en situation : Imaginez-vous chevalier, ou disons plutôt prince charmant… Une belle princesse attend dans sa tour que vous veniez la libérer, sauf qu’un dragon terrifiant se trouve être le gardien des lieux… Que faîtes-vous ?`,
          options:[
              {
                  text:"Je combats le dragon afin de sauver la princesse ! ",
                  statUp: "str",
                  nextText: 4
                },
              {
                  text:"J’escalade la tour où est enfermé la princesse afin de la libérer sans nous faire remarquer",
                  statUp: "agi",
                  
                  nextText: 4
                },
              {
                  text:"Je déclenche une diversion à l’extérieur pour que le dragon soit attiré au loin. Cela me permettra de libérer la princesse sans me faire repérer.",
                  statUp: "int",
                  nextText: 4
                },
              
          ]
      },
      {
          id:4,
          text:`Très bien, je vois … <br />
          Ma dernière question est sûrement la plus importante. Je vous demanderai donc de prendre votre temps afin d’y répondre… Pourquoi êtes-vous ici ? `,
          options:[
              {
                  text:"Je veux m’amuser ! Et puis j’ai un peu de temps libre …",
                  
                  nextText: 5
                },
              {
                  text:"Je suis ici parce que je suis curieux de voir de connaître la suite.",
                  
                  nextText: 5
                },
              {
                  text:"Je ne sais pas … A-t-on vraiment besoin d’une raison pour tout ?",
                  
                  nextText: 5
                },
              
          ]
      },
      {
          id:5,
          text:`En voilà une bonne réponse ! Très bien les question sont finis, nous allons pouvoir commencer... 
          Oh ! Et un petit conseil pour la suite : Ne tenez pas pour acquis les choses que vous pensez savoir … Du réel ou du rêve, qui peut vraiment faire la différence ? Si c’est votre imagination, alors pourquoi sentez vous ce souffle sur votre nuque… ? `,
          options:[
              {
                  text:"Euh… d’accord, je ferai attention !",
                  statUp: "agi",
                  nextText: 6
                },
              {
                  text:"Qu’est-ce que vous racontez ?! ",
                  
                  nextText: 6
                },
              {
                  text:"Je ne comprends rien ? Commencer quoi ? ",
                  
                  nextText: 6
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