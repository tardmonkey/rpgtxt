import { loadTextNodes } from "./modules/texte.mjs";
import Personnage from "./modules/classPersonnage.mjs";

let textContent = document.querySelector(".main");
let textButton = document.querySelector("button");

import { personnage } from "./modules/loadChar.mjs";

function startGame() {
  loadCharacter();
  showHideCharCreate();
  showTextNode(personnage.getIdLastNode());
  fillInventory();
}

function showTextNode(textNodeIndex) {
  //Mise à jour de l'id du dernier text node du joueur
  personnage.setIdLastNode(textNodeIndex)

  //Mise à jour de l'inventaire et de la fiche de perso à chaque boucle
  fillFichePerso();
  fillInventory();
  let textNodes = loadTextNodes()
  //trouve le texte via id et l'affiche
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  textContent.innerHTML = textNode.text;

  //affiche les options du texte
  textNode.options.forEach((element) => {
    if (element.require == null || element.require == true) {
      //si option n'a pas de require alors
      const button = document.createElement("button");
      button.innerHTML = element.text;
      button.addEventListener("click", () => selectOption(element));
      textContent.appendChild(button);

      //Si l'option a une clé statUp, alors invoke la function statUp avec la clé comme paramètre
      if (element.statUp) {
        button.onclick = () => statUp(element.statUp);
        button.innerHTML += " j'ai statUp ";
      }
      if (element.gainObj) {
        button.onclick = () => gainObj(element.gainObj);
        button.innerHTML += " j'ai gainObj ";
      }
      if (element.useObj) {
        button.onclick = () => useObj(element.useObj);
        button.innerHTML += " j'ai useObj ";
      }
    } else {
      return false;
    }
  });
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  showTextNode(nextTextNodeId);
}

//Check quelle est la stat concerné et l'incrémente de 1
function statUp(stat) {
  switch (stat) {
    case "str":
      personnage.gainForce();
      fillFichePerso();
      break;
    case "int":
      personnage.gainIntelligence();
      fillFichePerso();
      break;
    case "agi":
      personnage.gainAgilité();
      fillFichePerso();
      break;
  }
}

//Ajoute un objet au personnage
function gainObj(obj) {
  personnage.ajoutObjet(obj.nom, obj.description, obj.nombreUtilisationMax, obj.quantité)
}

//Utilise un objet
function useObj(obj) {
  personnage.utiliserObjet(obj)
}

//Si un Personnage est présent dans le localstorage, on enlève le formulaire de création de noms
function showHideCharCreate() {
  let form = document.getElementById("form__names");

  if (localStorage.getItem("Personnage") !== null) {
    form.style.display = "none";
    document.querySelector("article").style.display = "none";

  }
  else{
      document.querySelector("main").style.display = "none";
  }
}

// SECTION NAV
// SECTION NAV
// SECTION NAV

function fillInventory() {
  let inventaire = personnage.getInventaire();
  let divInventaire = document.getElementById("inventaire");
  divInventaire.innerHTML = "";

  inventaire.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = element.nom + " " + element.quantité;
    divInventaire.appendChild(li);
  });
}

function fillFichePerso() {
  ficheNom.innerHTML = `Nom : <span> ${personnage.getNom()} </span>`;
  ficheAgi.innerHTML = `Agilité : <span> ${personnage.getAgilité()}</span> `;
  ficheIntel.innerHTML = `Intelligence : <span> ${personnage.getIntelligence()}</span> `;
  ficheForce.innerHTML = `Force : <span> ${personnage.getForce()} </span>`;
}

//BOUTON FICHE PERSONNAGE
fichePersoBtn.addEventListener("click", () => showHideFiche());

function showHideFiche() {
  let divFichePerso = document.querySelector(".personnage");
  if (divFichePerso.style.display === "none") {
    divFichePerso.style.display = "flex";
  } else {
    divFichePerso.style.display = "none";
    
  }
}

//BOUTON INVENTAIRE

inventaireBtn.addEventListener("click", () => showHideInventaire());

function showHideInventaire() {
  let divInventaire = document.querySelector(".inventaire");
  if (divInventaire.style.display === "none") {
    divInventaire.style.display = "flex";
  } else {
    divInventaire.style.display = "none";
  }
}

function loadCharacter() {
  if (localStorage.getItem("Personnage") !== null) {
    let charStored = localStorage.getItem("Personnage");
    charStored = JSON.parse(charStored);
    personnage.setNom(charStored.nom);
    personnage.setPrenom(charStored.prenom);
    personnage.setAgilité(charStored.agilité);
    personnage.setForce(charStored.force);
    personnage.setIntelligence(charStored.intelligence);
    personnage.setIdLastNode(charStored.idLastNode)
    charStored.inventaire.forEach((element) => {
      personnage.ajoutObjet(
        element.nom,
        element.description,
        element.nombreUtilisationMax,
        element.quantité
      );
    });
  } else {
    //Ajoute la fonction création de perso sur le boutton envoyer
    function createChar() {
      //préviens le fonctionnement normal de <form>
      event.preventDefault();
      //on récupère les inputs
      let fieldName = document.getElementById("name").value;
      //on modifie l'objet Personnage
      personnage.setNom(fieldName);
      personnage.ajoutObjet(
        "Pain et fromages",
        "De quoi se nourrir pour un repas",
        1,
        1
      );
      personnage.ajoutObjet("Chapeau", "L'indispensable à cette époque", 1, 1);
      location.reload();
    }
    let button = document.getElementById("buttonChar");
    button.addEventListener("click", () => createChar());
  }
}

//BOUTON RESET
let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => showReset());

function showReset() {
  let divReset = document.getElementById("reset__modale");
  divReset.style.display = "flex";
}

let resetBtnNo = document.getElementById("resetBtn__no");
resetBtnNo.addEventListener("click", () => hideReset());

function hideReset() {
  let divReset = document.getElementById("reset__modale");
  divReset.style.display = "none";
}

let resetBtnYes = document.getElementById("resetBtn__yes");
resetBtnYes.addEventListener("click", () => resetGame());

function resetGame() {
  personnage.reset()
  hideReset()
  location.reload()
}

startGame();
