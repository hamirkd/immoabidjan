export class Acquereur {
    id:number;
    nom:string;
    prenom:string;
    typeDoc:string;
    docIdentification:string;
    genre:string;
    telephone:string;
    typeAcquereur:string;
    email:string;
    acquereur_id?: number;
    

    constructor(terrain){
        this.id = terrain?.id;
        this.acquereur_id = terrain?.id;
        this.nom = terrain?.nom;
        this.prenom = terrain?.prenom;
        this.docIdentification = terrain?.docIdentification;
        this.typeDoc = terrain?.typeDoc;
        this.telephone = terrain?.telephone;
        this.typeAcquereur = terrain?.typeAcquereur;
        this.email = terrain?.email;
        this.genre = terrain?.genre;
    }
}
