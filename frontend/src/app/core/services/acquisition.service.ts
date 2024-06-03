import { Injectable } from '@angular/core';
import { Acquisition } from 'app/models/acquisition.model';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { ProjetService } from './projet.service';

@Injectable({
    providedIn: 'root',
})
export class AcquisitionService {
    constructor(private apiService: ApiService,
        private _projetService: ProjetService) {}

    getAll(): Observable<Acquisition[]> {
        return this.apiService.get('api/acquisition');
    }

    findBySite(site_id): Observable<Acquisition[]> {
        return this.apiService.get('api/acquisition/findBySite/'+site_id);
    }

    findByTerrain(terrain_id): Observable<Acquisition[]> {
        return this.apiService.get('api/acquisition/findByTerrain/'+terrain_id);
    }

    findByAcquereur(acquereur_id): Observable<Acquisition[]> {
        return this.apiService.get('api/acquisition/findByAcquereur/'+acquereur_id);
    }
    

    // {data,current_page,from,last_page,per_page,}
    getAllPaginate(per_page,pageIndex): Observable<any[]> {
        return this.apiService.get('api/acquisition/paginate/'+per_page+"/"+pageIndex);
    }

    get(id): Observable<Acquisition> {
        return this.apiService.get('api/acquisition/' + id);
    }

    add(acquisition: Acquisition): Observable<Acquisition> {
        acquisition['projet_id'] =this._projetService.projet?.id
        return this.apiService.post('api/acquisition', acquisition);
    }

    update(acquisition: Acquisition): Observable<Acquisition> {
        return this.apiService.put('api/acquisition/' + acquisition.id, acquisition);
    }

    delete(acquisition: Acquisition): Observable<any> {
        return this.apiService.delete('api/acquisition/' + acquisition.id);
    }
}
