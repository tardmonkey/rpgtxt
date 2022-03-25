import Objet from "./classObjet.mjs";
  
export default class Personnage {
  constructor(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
    this.agilité = 0;
    this.force = 0;
    this.intelligence = 0;
    this.inventaire=[];
    this.inventaire[0] = new Objet("Pain et fromages", "De quoi se nourrir pour un repas", 1, 1);
    this.inventaire[1] = new Objet("Chapeau", "L'indispensable à cette époque", 1, 1);
    localStorage.setItem("Personnage", JSON.stringify(this));
  }

    getNom() {
      return this.nom;
  }
  
  setNom(nouvelleValeur){
      this.nom = nouvelleValeur;
  }
  
  
  setAgilité(nouvelleValeur){
    this.agilité = nouvelleValeur;
    let charStored = localStorage.getItem("Personnage")
    charStored = JSON.parse(charStored)
    console.log(charStored)
    charStored.agilité = nouvelleValeur
    console.log(charStored)
    localStorage.setItem("Personnage", JSON.stringify(charStored))
    
  }

  getAgilité(){
    return this.agilité;
  }

  gainAgilité(){
      this.agilité++
      let charStored = localStorage.getItem("Personnage")
      charStored = JSON.parse(charStored)
      charStored.agilité = this.agilité
      localStorage.setItem("Personnage", JSON.stringify(charStored))
      
  }

  setForce(nouvelleValeur) {
    this.force = nouvelleValeur;
  }
  getForce(){
    return this.force;
  }

  gainForce(){
      this.force=this.force + 1
  }

  setIntelligence(nouvelleValeur){
    this.intelligence = nouvelleValeur;
  }

  getIntelligence(){
    return this.intelligence;
  }

  gainIntelligence(){
      this.intelligence=this.inteligence + 1
  }
  
  presenceObjet(nom){
      for(let i=0; i < this.inventaire.length; i++ ) {
    if (this.inventaire[i].getNom() == nom) {
        return true
    }
    }
    return false
  }
  
  getObjet(nom) {
    for(let i=0; i < this.inventaire.length; i++ ) {
      if (this.inventaire[i].getNom() == nom) {
        return this.inventaire[i];
      }
    }
    return {};
  }
  
  deleteObjet(nom) {
    let index = this.inventaire.indexOf(this.getObjet(nom));
    if (index !== -1) {
      this.inventaire.splice(index, 1);
    }
  }
  
  utiliserObjet(nom) {
    let objet = this.getObjet(nom);
    objet.utiliserObjet();
    if(objet.getQuantité() == 0){
        this.deleteObjet(nom);
    }
  }

  ajoutObjet(nom, description, nombreUtilisationMax, quantité){
    if (this.presenceObjet(nom)) {
      this.getObjet(nom).gainQuantité(quantité);
    } else {
      let objet = new Objet(nom,description,nombreUtilisationMax, quantité);
      this.inventaire.push(objet);
    }
  }
}
