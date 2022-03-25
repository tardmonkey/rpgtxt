import {loadChar} from "./modules/loadChar.mjs"
import {textNodes} from "./modules/texte.mjs"
import Personnage from "./modules/classPersonnage.mjs"

let textContent = document.querySelector(".main")
let textButton = document.querySelector("button")



function startGame(){
    let character = loadChar()
    fillFichePerso()
    showTextNode(1)
    showHideCharCreate()
    fillInventory()
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

            //Si l'option a une clé statUp, alors invoke la function statUp avec la clé comme paramètre
            if(element.statUp) {
                button.onclick = () => statUp(element.statUp)
                button.innerHTML += " j'ai statUp "
            }
        }
        else{
            //Ici il faut check quel est le prérequis (clé require) pour afficher l'option
            //Puis l'afficher ou non
            return false;
        }
       
        
    });
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    showTextNode(nextTextNodeId)
  }

//Check quelle est la stat concerné et l'incrémente de 1
  function statUp(stat){
    let character = loadChar()
    character.gainAgilité();console.log("statUp fired, agi = " + character.agilité);
    //   switch (stat){
    //       case "str":character.gainForce();console.log(character); break;
    //       case "int":character.gainIntelligence(); console.log(character); break;
    //       case "agi ":character.gainAgilité(); console.log(character); break;
    //   }
  }

 //Si un Personnage est présent dans le localstoage, on enlève le formulaire de création de noms
function showHideCharCreate(){
    let form = document.getElementById("form__names")
   
    if(localStorage.getItem("Personnage") !== null){
        form.style.display = "none"
        }
    }
   
function fillInventory(){
    let character = loadChar()
    let inventaire = character.inventaire
    let divInventaire = document.getElementById("inventaire")
    

    inventaire.forEach(element => {

        const li = document.createElement('li')
        console.log(element.nom)
        li.innerHTML = element.nom
        divInventaire.appendChild(li)
        
    });

    inventaireBtn.addEventListener("click", () => showHideInventaire())

    function showHideInventaire() {
        let divInventaire = document.querySelector(".inventaire")
        if (divInventaire.style.display === "none") {
            divInventaire.style.display = "flex";
        } else {
            divInventaire.style.display = "none";
        }
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
            divFichePerso.style.display = "flex";
        } else {
            divFichePerso.style.display = "none";
        }
      }

}


startGame()