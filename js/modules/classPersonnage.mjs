  import Objet from "./classObjet.mjs";
  
  export default class Personnage {
    constructor(nom, prenom) {
      this.nom = nom;
      this.prenom = prenom;
      this.agillité = 0;
      this.force = 0;
      this.inteligence = 0;
      this.inventaire=[];
      this.inventaire[0] = new Objet("Pain et fromages", "De quoi se nourrir pour un repas", 1);
      this.inventaire[1] = new Objet("Chapeau", "L'indispensable à cette époque", 1);
    }
  
      getNom() {
        return this.nom;
    }
    
    setNom(nouvelleValeur){
        this.nom = nouvelleValeur;
    }
    
    setAgilité(nouvelleValeur){
      this.agilité = nouvelleValeur;
    }
  
    getAgilité(){
      return this.agilité;
    }
  
    gainAgilité(){
        this.agilité=this.agilité + 1
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
        for(i=0; i < inventaire.length(); i++ ) {
      if (inventaire[i].getNom() == nom) {
          return true
      }
      }
      return false
    }
    
    getObjet(nom) {
    for(i=0; i < inventaire.length(); i++ ) {
      if (inventaire[i].getNom() == nom) {
          return inventaire[i];
      }
      }
      return {};
    }
    
    deleteObjet(nom) {
        index = inventaire.indexOf(getObjet(nom));
      if (myIndex !== -1) {
      inventaire.splice(myIndex, 1);
  }
    }
    
    utiliserObjet(nom) {
        if (getObjet(nom).utiliserObjet() == true) {
          deleteObjet(nom);
      }
    }
  }
