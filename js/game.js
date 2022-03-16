import {loadChar} from "./modules/loadChar.mjs"
import {textNodes} from "./modules/texte.mjs"
import Personnage from "./modules/classPersonnage.mjs"

let textContent = document.querySelector(".main")
let textButton = document.querySelector("button")



function startGame(){
    loadChar()
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
  

  function createChar(){
    //préviens le fonctionnement normal de <form>
    event.preventDefault()
    //on récupère les inputs 
    let fieldName = document.getElementById("name").value
    let fieldFirstName = document.getElementById("first_name").value
    //on créer l'objet Personnage
    const character = new Personnage(fieldName, fieldFirstName)
    console.log(character)
    }



startGame()