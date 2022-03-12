import {textNodes} from "./modules/texte.mjs"
import {char} from "./modules/char.mjs"

let textContent = document.querySelector(".main")
let textButton = document.querySelector("button")
let state = {}



function startGame(){
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
        const button = document.createElement('button')
        button.innerHTML = element.text
        button.addEventListener('click', () => selectOption(element))
        textContent.appendChild(button)
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