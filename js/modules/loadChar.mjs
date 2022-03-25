import Personnage from "./classPersonnage.mjs  "
//Si Personnage existe dans le localstorage
//On le charge
//On n'affiche pas la création de perso
//On reprend au bon noeud de texte
export function loadChar(){
  if(localStorage.getItem("Personnage") !== null){
      let charStored = localStorage.getItem("Personnage")
      charStored = JSON.parse(charStored)
      let character = new Personnage(charStored.nom)
     

    return character

  }else{
      //Ajoute la fonction création de perso sur le boutton envoyer
      function createChar(){
        //préviens le fonctionnement normal de <form>
        event.preventDefault()
        //on récupère les inputs 
        let fieldName = document.getElementById("name").value
        //on créer l'objet Personnage
        const character = new Personnage(fieldName)
        location.reload()
      }
  let button = document.getElementById("buttonChar")
  button.addEventListener("click", () => createChar())
  }
}