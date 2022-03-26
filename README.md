# Rpgtxt

Rien à installer pour l'instant

## Fait

* Afficher les textes de textNodes dans text.mjs
* Afficher les options liées au texte en questions (clé options)
Les choix sont affichés avec forEach, donc il n'y a pas de limites de choix
* Allez de textNodes en textNodes grâce à selectOption(option)
* L'objet char contient des clefs pour le personnage. Le but étant d'avoir des caractérstiques en fonction des choix
* Certains choix (ceux qui ont une clef Statup) font augmenter les stats (int, str, agi) grâce à la function statUp 

## Todo

* Function qui check les caracs du personnage avant de d'afficher l'option 
* Passer tout les choix ainsi que les changements sur le personnage dans le localStorage pour sauvegarde 
* TOUT le CSS
* Ajouter images ?
* Ajouter musiques ainsi que sons pour certains events ?
* Ajouter méthode getInventaire aux objets
* L'inventaire et la fiche perso doit se refresh quand on ajoute ou change anythings
* Fonctionnement fillInvetory() pas bon, doit écraser ce qui existe déjà et non additionner
* Pourquoi double click sur fiche perso et inventaire ?