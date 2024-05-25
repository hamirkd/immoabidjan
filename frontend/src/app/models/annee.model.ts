export class Annee {
    id:number
    annee:number;
    createdAt?:any
    UpdatedAt?:any
    createdBy?:any
    UpdatedBy?:any

    constructor(annee){
        this.id = annee.id 
        this.annee=annee.annee;
        this.createdAt=annee.createdAt
        this.UpdatedAt=annee.UpdatedAt
        this.createdBy=annee.createdBy
        this.UpdatedBy=annee.UpdatedBy
    }
}
