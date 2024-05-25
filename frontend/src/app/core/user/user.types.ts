export interface User
{
    id: string;
    name: string;
    email: string;
    avatar?: string;
    password:string
    role:'ADMIN'|'USER'|'COLLECTE'|'VISITEUR'
    last_name:string
    first_name:string
    telephone:string 
}
