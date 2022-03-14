import {textNodes} from "./modules/texte.mjs"
import {char} from "./modules/char.mjs"

let textContent = document.querySelector(".main")
let textButton = document.querySelector("button")



function startGame(){
    showTextNode(1)
    // création localStorage au startGame
    createStorageCharInventoryChoices()
}

// Création de 3 localStorages "Char" qui contient stats, "Inventory" qui contient l'inventaire et "Choices" qui contient les choix
function createStorageCharInventoryChoices() {
    localStorage.setItem("Char", JSON.stringify({
        name:"",
        pv:0,
        str:0,
        agi:0,
        int:0
    })),
    localStorage.setItem("Inventory", JSON.stringify(["Chemise"])),
    localStorage.setItem("Choices", JSON.stringify([]))
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
        if(element.newItem) {
            button.addEventListener("click", () => newItem(element.newItem))
            console.log(element.newItem)
        }
    });
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    showTextNode(nextTextNodeId)
    console.log(char)
  }

//Check quelle est la stat concernée et l'incrémente de 1 dans le localStorage
  function statUp(stat){
      switch (stat){
          case "str":localStorage.Char.str++; console.log(char); break;
          case "int":localStorage.Char.int++; console.log(char); break;
          case "agi":localStorage.Char.agi++; console.log(char); break;
      }
  }

//Ajout de l'item dans le localStorage
function newItem(item){
        let originInventory = JSON.parse(localStorage.getItem("Inventory"));
        let newitem = item;
        originInventory.push(newitem);
        localStorage.setItem("Inventory", JSON.stringify(originInventory));
};

startGame()