import { Injectable } from '@angular/core';
import { Annee } from 'app/models/annee.model';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root',
})
export class AnneeService {
    constructor(private apiService: ApiService) {}

    getAll(): Observable<Annee[]> {
        return this.apiService.get('api/annee');
    }

    get(id): Observable<Annee> {
        return this.apiService.get('api/annee/' + id);
    }

    add(annee: Annee): Observable<Annee> {
        return this.apiService.post('api/annee', annee);
    }

    update(annee: Annee): Observable<Annee> {
        return this.apiService.put('api/annee/' + annee.id, annee);
    }

    delete(annee: Annee): Observable<any> {
        return this.apiService.delete('api/annee/' + annee.id);
    }
}