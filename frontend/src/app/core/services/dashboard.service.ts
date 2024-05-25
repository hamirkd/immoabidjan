import { Injectable } from '@angular/core';
import { Annee } from 'app/models/annee.model';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private apiService: ApiService) {}

    getAll(): Observable<any> {
        return this.apiService.get('api/dashboard');
    }

    get(id): Observable<any> {
        return this.apiService.get('api/dashboard/' + id);
    }

    add(annee: any): Observable<any> {
        return this.apiService.post('api/dashboard', annee);
    }

    update(annee: any): Observable<any> {
        return this.apiService.put('api/dashboard/' + annee.id, annee);
    }

    delete(annee: any): Observable<any> {
        return this.apiService.delete('api/dashboard/' + annee.id);
    }
}