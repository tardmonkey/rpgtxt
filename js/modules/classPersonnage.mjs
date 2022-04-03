import Objet from "./classObjet.mjs";
  
export default class Personnage {
  constructor(nom, prenom, agi, force, intel) {
    this.nom = nom;
    this.prenom = prenom;
    this.agilité = agi;
    this.force = force;
    this.intelligence = intel;
    this.inventaire=[];
    this.idLastNode=1;
    // this.inventaire[0] = new Objet("Pain et fromages", "De quoi se nourrir pour un repas", 1, 1);
    // this.inventaire[1] = new Objet("Chapeau", "L'indispensable à cette époque", 1, 1);
  }

  getIdLastNode() {
    return this.idLastNode;
}

  setIdLastNode(nouvelleValeur){
    this.idLastNode = nouvelleValeur;
    localStorage.setItem("Personnage", JSON.stringify(this));
}

  getNom() {
      return this.nom;
  }
  
  setNom(nouvelleValeur){
      this.nom = nouvelleValeur;
      localStorage.setItem("Personnage", JSON.stringify(this));
  }

  getPrenom() {
    return this.prenom;
  }

  setPrenom(nouvelleValeur){
    this.prenom = nouvelleValeur;
    localStorage.setItem("Personnage", JSON.stringify(this));
  }
  
  
  setAgilité(nouvelleValeur){
    this.agilité = nouvelleValeur;
    localStorage.setItem("Personnage", JSON.stringify(this));
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
    localStorage.setItem("Personnage", JSON.stringify(this));
  }
  getForce(){
    return this.force;
  }

  gainForce(){
    console.log(this)
    this.force=this.force + 1
    localStorage.setItem("Personnage", JSON.stringify(this));
    console.log(this)
  }

  setIntelligence(nouvelleValeur){
    this.intelligence = nouvelleValeur;
    localStorage.setItem("Personnage", JSON.stringify(this));
  }

  getIntelligence(){
    return this.intelligence;
  }

  gainIntelligence(){
    this.intelligence=this.intelligence + 1
    localStorage.setItem("Personnage", JSON.stringify(this));
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
    localStorage.setItem("Personnage", JSON.stringify(this));
  }
  
  utiliserObjet(nom) {
    let objet = this.getObjet(nom);
    objet.utiliserObjet();
    if(objet.getQuantité() == 0){
        this.deleteObjet(nom);
    }
    localStorage.setItem("Personnage", JSON.stringify(this));
  }

  ajoutObjet(nom, description, nombreUtilisationMax, quantité){
    if (this.presenceObjet(nom)) {
      this.getObjet(nom).gainQuantité(quantité);
    } else {
      let objet = new Objet(nom,description,nombreUtilisationMax, quantité);
      this.inventaire.push(objet);
    }
    localStorage.setItem("Personnage", JSON.stringify(this));
  }

  getInventaire(){
    return this.inventaire
    
  }

  reset(){
    this.nom = "Temp";
    this.prenom = "Temp";
    this.agilité = 0;
    this.force = 0;
    this.intelligence = 0;
    this.inventaire=[];
    localStorage.clear()
  }
}
