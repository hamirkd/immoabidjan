//Matricule	NIF	Nom	Prénom	Emploi	Niveau	Nationalité	Age	Sexe	Enfants	Téléphone	Code postal	Ville	Emploi occupé	Situation familiale	DEB10	DEB11	FIN12	FIN13DAS
//BRUT	AVLOG	AV NOUR	PRIM IMPO	BRUT CONGE	TOTAL 20 à 24	TCS	IRPP	FNH	CFP	TOTAL26 à 29	IND NON IMPO


export class Groupe {
    id:number
    libelle:string;
    projet_id?:number;
    createdAt?:any
    UpdatedAt?:any
    createdBy?:any
    UpdatedBy?:any

    constructor(groupe){
        this.id = groupe.id
        this.libelle=groupe.libelle;
        this.createdAt=groupe.createdAt
        this.UpdatedAt=groupe.UpdatedAt
        this.createdBy=groupe.createdBy
        this.UpdatedBy=groupe.UpdatedBy
    }
}
