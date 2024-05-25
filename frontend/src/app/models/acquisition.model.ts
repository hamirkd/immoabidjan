import { Acquereur } from "./acquereur.model";
import { Site } from "./site.model";
import { Terrain } from "./terrain.model";


export class Acquisition {
    id:number
    acquereur_id:number;
    acquereur?:Acquereur;
    site_id:number;
    site?:Site;
    terrain_id:number;
    terrain?:Terrain;
    dateAcquisition:number;
    montant:string;
    createdAt?:any
    UpdatedAt?:any
    createdBy?:any
    UpdatedBy?:any

    constructor (acquisition){
        this.id =   acquisition.id;
        this.acquereur_id = acquisition.acquereur_id;
        this.acquereur = acquisition.acquereur;
        this.site_id = acquisition.site_id;
        this.site = acquisition.site;
        this.terrain_id = acquisition.terrain_id;
        this.terrain = acquisition.terrain;
        this.dateAcquisition = acquisition.dateAcquisition;
        this.montant = acquisition.montant;
        this.createdAt = acquisition.createdAt;
        this.UpdatedAt = acquisition.UpdatedAt;
        this.createdBy = acquisition.createdBy;
        this.UpdatedBy = acquisition.UpdatedBy;
    }
}
