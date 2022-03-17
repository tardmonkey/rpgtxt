import {loadChar} from "./modules/loadChar.mjs"
import {textNodes} from "./modules/texte.mjs"
import Personnage from "./modules/classPersonnage.mjs"

let textContent = document.querySelector(".main")
let textButton = document.querySelector("button")



function startGame(){
    let character = loadChar()
    fillFichePerso()
    showTextNode(1)
   
   
}



function showTextNode(textNodeIndex, character) {


    //trouve le texte via id et l'affiche
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
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
            let button = document.querySelector("button")
            button.addEventListener("click", () => statUp(element.statUp))
            console.log(element.statUp)
        }
    });
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    showTextNode(nextTextNodeId)
  }

//Check quelle est la stat concerné et l'incrémente de 1
  function statUp(stat){
      switch (stat){
          case "str":character.gainForce(); console.log(character); break;
          case "int":character.gainIntelligence(); console.log(character); break;
          case "agi":character.gainAgilité(); console.log(chcharacterar); break;
      }
  }


function fillFichePerso(){
    let character = loadChar()
    ficheNom.innerHTML = `Nom : <span> ${character.getNom()} </span>`
    ficheAgi.innerHTML = `Agilité : <span> ${character.getAgilité()}</span> `
    ficheIntel.innerHTML = `Intelligence : <span> ${character.getIntelligence()}</span> `
    ficheForce.innerHTML = `Force : <span> ${character.getForce()} </span>`

    fichePersoBtn.addEventListener("click", () => showHideFiche())

    function showHideFiche() {
        let divFichePerso = document.querySelector(".personnage")
        if (divFichePerso.style.display === "none") {
            divFichePerso.style.display = "block";
        } else {
            divFichePerso.style.display = "none";
        }
      }

}


startGame()