import {textNodes} from "./modules/texte.mjs"
import {char} from "./modules/char.mjs"
import Personnage from "./modules/classPersonnage.mjs"

let textContent = document.querySelector(".main")
let textButton = document.querySelector("button")
let state = {}



function startGame(){
    let joueur = new Personnage("Lenoir","Robin");
    console.log(JSON.stringify(joueur));
    console.log(joueur.getForce());
    joueur.gainForce();
    console.log(joueur.getForce());
    joueur.ajoutObjet("Pain et fromages","De quoi se nourrir pour un repas",1,1);
    console.log(joueur.presenceObjet("Pain et fromages"));
    joueur.utiliserObjet("Pain et fromages");
    console.log(joueur.presenceObjet("Pain et fromages"));
    joueur.utiliserObjet("Pain et fromages");
    console.log(joueur.presenceObjet("Pain et fromages"));
    joueur.ajoutObjet("Pain et fromages","De quoi se nourrir pour un repas",1,1);
    console.log(joueur.presenceObjet("Pain et fromages"));
    state = {}
    showTextNode(1)
}


function showTextNode(textNodeIndex) {

    //trouve le texte via id et l'affiche
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    console.log(textNode)
    textContent.innerHTML = textNode.text

    //affiche les options du texte
    textNode.options.forEach(element => {
        if(!element.require){       //si option n'a pas de require alors
        const button = document.createElement('button')
        button.innerHTML = element.text
        button.addEventListener('click', () => selectOption(element))
        textContent.appendChild(button)
        }
        else{
            //Ici il faut check quel est le prérequis (clé require) pour afficher l'option
            //Puis l'afficher ou non
            return false;
        }
        //Si l'option a une clé statUp, alors invoke la function statUp avec la clé comme paramètre
        if(element.statUp) {
            button.addEventListener("click", () => statUp(element.statUp))
            console.log(element.statUp)
        }
    });
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    showTextNode(nextTextNodeId)
    console.log(char)
  }

//Check quelle est la stat concerné et l'incrémente de 1
  function statUp(stat){
      switch (stat){
          case "str":char.str++; console.log(char); break;
          case "int":char.int++; console.log(char); break;
          case "agi":char.agi++; console.log(char); break;
      }
  }

startGame()