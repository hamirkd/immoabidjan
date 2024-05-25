//Matricule	NIF	Nom	Prénom	Emploi	Niveau	Nationalité	Age	Sexe	Enfants	Téléphone	Code postal	Ville	Emploi occupé	Situation familiale	DEB10	DEB11	FIN12	FIN13DAS
//BRUT	AVLOG	AV NOUR	PRIM IMPO	BRUT CONGE	TOTAL 20 à 24	TCS	IRPP	FNH	CFP	TOTAL26 à 29	IND NON IMPO


export class Utilisateur {
    id:number
    email:string
    password:string
    role:'ADMIN'|'USER'|'COLLECTE'|'VISITEUR'='VISITEUR'
    last_name:string
    first_name:string
    telephone:string
    avatar?
    background?

    constructor(utilisateur){
        utilisateur = utilisateur?utilisateur:{}
        this.id = utilisateur.id
        this.email = utilisateur.email
        this.password = utilisateur.password
        this.last_name = utilisateur.last_name
        this.first_name = utilisateur.first_name
        this.telephone = utilisateur.telephone
        this.role = utilisateur.role
        this.avatar = utilisateur.avatar
    }
}
