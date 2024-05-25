import { Injectable } from '@angular/core';
import { Acquereur } from 'app/models/acquereur.model';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { ProjetService } from './projet.service';

@Injectable({
    providedIn: 'root',
})
export class AcquereurService {
    constructor(private apiService: ApiService,
        private _projetService: ProjetService) {}

    getAll(): Observable<any> {
        return this.apiService.get('api/acquereur');
    }
    // {data,current_page,from,last_page,per_page,}
    getAllPaginate(per_page,pageIndex): Observable<any[]> {
        return this.apiService.get('api/acquereur/paginate/'+per_page+"/"+pageIndex);
    }

    get(id): Observable<Acquereur> {
        return this.apiService.get('api/acquereur/' + id);
    }

    add(acquereur: Acquereur): Observable<Acquereur> {
        acquereur['projet_id'] =this._projetService.projet?.id
        return this.apiService.post('api/acquereur', acquereur);
    }

    update(acquereur: Acquereur): Observable<Acquereur> {
        return this.apiService.put('api/acquereur/' + acquereur.id, acquereur);
    }

    delete(acquereur: Acquereur): Observable<any> {
        return this.apiService.delete('api/acquereur/' + acquereur.id);
    }
}
