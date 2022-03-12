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
        console.log(char.str)
    });
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    showTextNode(nextTextNodeId)
    console.log(char)
  }

  function statUp(stat){
      if stat = str = str++
      let statIncrement = char.stat
      statIncrement++
  }

startGame()