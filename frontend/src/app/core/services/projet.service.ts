import { Injectable } from '@angular/core';
import { Projet } from 'app/models/projet.model';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { map, Observable, ReplaySubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  constructor(private apiService: ApiService) {}
  
  private _projet: ReplaySubject<Projet> = new ReplaySubject<Projet>(1);

  getAll(): Observable<Projet[]> {
      return this.apiService.get('api/projet');
  }

  get(id): Observable<Projet> {
      return this.apiService.get('api/projet/' + id);
  }

  add(projet: Projet): Observable<Projet> {
      return this.apiService.post('api/projet', projet);
  }

  update(projet: Projet): Observable<Projet> {
      return this.apiService.put('api/projet/' + projet.id, projet);
  }

  delete(projet: Projet): Observable<any> {
      return this.apiService.delete('api/projet/' + projet.id);
  }

  removeAvatar(projet_id): Observable<any> {
    return this.apiService.get('api/projet/removeAvatar/' + projet_id);
}
  
     
  uploadAvatar(id: string, avatar: File): Observable<any>
  {    
      let file: File = avatar;
      let formData:FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      formData.append('id', id);
      let headers = new Headers();
      /** In Angular 5, including the header Content-Type can invalidate your request */
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json'); 

      return this.apiService.post3('api/projet/uploadAvatar',formData,{ headers: headers }).pipe(
          tap((response) => {
              this._projet.next(response);
          })
      );
  }
  /**
     * Setter & getter for user
     *
     * @param value
     */
  set projet(value: Projet)
  {
      localStorage.setItem("projet",JSON.stringify(value))
  }

  get projet(): Projet
  {
    if(localStorage.getItem("projet")){
        return JSON.parse(localStorage.getItem("projet"))
    }
      return new Projet({});
  }
}
