export class Versement {
    id?:number;
   acquisition_id:number;
   site_id:number;
   terrain_id:number;
   projet_id:number;
   acquereur_id:number;
   montant:number;
   dateversement
   updated_by: string;
   created_by: string;
   updated_at: Date;
   created_at: Date;
    constructor(versement) {
        this.id = versement.id;
        this.acquisition_id = versement.acquisition_id;
        this.terrain_id = versement.terrain_id;
        this.projet_id = versement.projet_id;
        this.acquereur_id = versement.acquereur_id;
        this.montant = versement.montant;
        this.dateversement = versement.dateversement;
        this.updated_by = versement.updated_by;
        this.created_by = versement.created_by;
        this.updated_at = versement.updated_at;
        this.created_at = versement.created_at;
    }
    
}
