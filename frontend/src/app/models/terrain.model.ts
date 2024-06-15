import { Site } from "./site.model";

export class Terrain {
    id:number;
    site_id:number;
    site?:Site;
    code:string;
    numero:string;
    lot:string;
    typeLogement:string;
    superficie:string;
    terrain_id?: number;

    constructor(terrain){
        this.id = terrain?.id
        this.terrain_id = terrain?.id
        this.site_id = terrain?.site_id
        this.numero = terrain?.numero
        this.code = terrain?.code
        this.site = terrain?.site
        this.lot = terrain?.lot
        this.typeLogement = terrain?.typeLogement
        this.superficie = terrain?.superficie
    }
}
