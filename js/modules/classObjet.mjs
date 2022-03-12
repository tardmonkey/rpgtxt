export default class Objet{
    constructor(nom, description, nombreUtilisationMax){
      this.nom = nom;
      this.description = description;
      this.nombreUtilisation = 0;
      this.nombreUtilisationMax = nombreUtilisationMax;
    }
    
    getNom(){
    return this.nom;
    }
    
    setNom(nouvelleValeur){
    this.nom = nouvelleValeur;
    }
    
    getDescription(){
    return this.description;
    }
    
    setDescription(nouvelleValeur){
    this.description = nouvelleValeur;
    }
    
    getNombreUtilisation(){
    return this.nombreUtilisation;
    }
    
    setNombreUtilisation(nouvelleValeur){
    this.nombreUtilisation = nouvelleValeur;
    }
    
    getNombreUtilisationMax(){
    return this.nombreUtilisationMax;
    }
    
    setNombreUtilisationMax(nouvelleValeur){
    this.nombreUtilisationMax = nouvelleValeur;
    }
    
    utiliserObjet(){
    this.nombreUtilisation = this.nombreUtilisation + 1;
    if (this.nombreUtilisation == this.nombreUtilisationMax) {
        return true;
    }
    return false;
    }
  }
  