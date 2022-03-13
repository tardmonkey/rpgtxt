import {textNodes} from "./modules/texte.mjs"
import {char} from "./modules/char.mjs"

let textContent = document.querySelector(".main")
let textButton = document.querySelector("button")
let state = {}



function startGame(){
    state = {}
    showTextNode(1)
}

/**
 * Affiche le texte
 * @param {number} textNodeIndex - Le chiffre de l'index du texte dans le tableau textNodes
 */
function showTextNode(textNodeIndex){
    
    //Affiche le texte h1
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textContent.innerText = textNode.text
    
    //Affiche le texte des boutons
    textNode.options.forEach(option => {
            console.log(option)
            let button = document.createElement("button")
            button.innerText = option.text
            button.addEventListener("click", function(){selectOption(option.nextText)})
            textContent.appendChild(button)
    })
}



function selectOption(option){
   const nextTextId = option.nextText
   state = Object.assign(state, option.setState)
   showTextNode(nextTextId)
}

function showOptions(option){
    return option.requireState == null || option.requiredState(state)
}


startGame()