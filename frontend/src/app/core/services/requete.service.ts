import { Injectable } from '@angular/core';
import { Donnee } from 'app/models/acquisition.model';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RequeteService {
  constructor(private apiService: ApiService) {}

  getAll(): Observable<Donnee[]> {
      return this.apiService.get('api/requete');
  }

  findBy(data:{listindicateur?:[],listannee?:[],niveau_localisation?:number,listdesagregation_geographique?:[]}):Observable<Donnee[]>{
    console.log(data)
    return this.apiService.post('api/requete/findBy',data);
  }

  get(id): Observable<Donnee> {
      return this.apiService.get('api/requete/' + id);
  }

  add(requete: Donnee): Observable<Donnee> {
      return this.apiService.post('api/requete', requete);
  }

  update(requete: Donnee): Observable<Donnee> {
      return this.apiService.put('api/requete/' + requete.id, requete);
  }

  delete(requete: Donnee): Observable<any> {
      return this.apiService.delete('api/requete/' + requete.id);
  }
}
