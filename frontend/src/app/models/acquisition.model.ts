import { Acquereur } from "./acquereur.model";
import { Projet } from "./projet.model";
import { Site } from "./site.model";
import { Terrain } from "./terrain.model";


export class Acquisition {
    id:number;
    code:string;
    acquereur_id:number;
    acquisition_id?:number;
    acquereur?:Acquereur;
    site_id:number;
    site?:Site;
    terrain_id:number;
    projet_id:number;
    projet?:Projet;
    terrain?:Terrain;
    dateAcquisition:number;
    montant:string;
    created_at?:any
    updated_at?:any
    createdauteur?:any;
    updatedauteur?:any;
    constructor (acquisition){
        this.id =   acquisition.id;
        this.acquisition_id = acquisition.id;
        this.acquereur_id = acquisition.acquereur_id;
        this.acquereur = acquisition.acquereur;
        this.code = acquisition.code;
        this.site_id = acquisition.site_id;
        this.site = acquisition.site;
        this.terrain_id = acquisition.terrain_id;
        this.terrain = acquisition.terrain;
        this.dateAcquisition = acquisition.dateAcquisition;
        this.montant = acquisition.montant;
        this.created_at = acquisition.created_at;
        this.updated_at = acquisition.updated_at;
        this.createdauteur = acquisition.createdauteur;
        this.updatedauteur = acquisition.updatedauteur;
        this.projet_id = acquisition.projet_id;
        this.projet = acquisition.projet;
    }
}
