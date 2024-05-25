export class Site {
    id:number
    libelle:string
    description?:string;
    createdAt?:any
    UpdatedAt?:any
    createdBy?:any
    UpdatedBy?:any
    geoJSON?:any

    constructor(site){
        this.id = site.id
        this.libelle = site.libelle
        this.description = site.description
        this.createdAt=site.createdAt
        this.UpdatedAt=site.UpdatedAt
        this.createdBy=site.createdBy
        this.UpdatedBy=site.UpdatedBy
        this.geoJSON = site.geoJSON
    }
}
