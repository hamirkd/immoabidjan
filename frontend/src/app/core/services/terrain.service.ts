import { Injectable } from '@angular/core';
import { Terrain } from 'app/models/terrain.model';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { ProjetService } from './projet.service';

@Injectable({
    providedIn: 'root',
})
export class TerrainService {
    constructor(private apiService: ApiService,
        private _projetService: ProjetService) {}

    getAll(): Observable<any> {
        return this.apiService.get('api/terrain');
    }
    // {data,current_page,from,last_page,per_page,}
    getAllPaginate(per_page,pageIndex): Observable<any[]> {
        return this.apiService.get('api/terrain/paginate/'+per_page+"/"+pageIndex);
    }

    get(id): Observable<Terrain> {
        return this.apiService.get('api/terrain/' + id);
    }

    add(terrain: Terrain): Observable<Terrain> {
        terrain['projet_id'] =this._projetService.projet?.id
        return this.apiService.post('api/terrain', terrain);
    }

    update(terrain: Terrain): Observable<Terrain> {
        return this.apiService.put('api/terrain/' + terrain.id, terrain);
    }

    delete(terrain: Terrain): Observable<any> {
        return this.apiService.delete('api/terrain/' + terrain.id);
    }
}
