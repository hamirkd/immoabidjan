//Matricule	NIF	Nom	Prénom	Emploi	Niveau	Nationalité	Age	Sexe	Enfants	Téléphone	Code postal	Ville	Emploi occupé	Situation familiale	DEB10	DEB11	FIN12	FIN13DAS
//BRUT	AVLOG	AV NOUR	PRIM IMPO	BRUT CONGE	TOTAL 20 à 24	TCS	IRPP	FNH	CFP	TOTAL26 à 29	IND NON IMPO


export class Projet {
    id:number
    code:string;
    intitule:string;
    objectif:string;
    avatar:string;
    createdAt?:any
    UpdatedAt?:any
    createdBy?:any
    UpdatedBy?:any

    constructor(projet){
        this.id = projet.id
        this.code=projet.code;
        this.intitule=projet.intitule;
        this.objectif=projet.objectif;
        this.avatar=projet.avatar;
        this.createdAt=projet.createdAt
        this.UpdatedAt=projet.UpdatedAt
        this.createdBy=projet.createdBy
        this.UpdatedBy=projet.UpdatedBy
    }
}
