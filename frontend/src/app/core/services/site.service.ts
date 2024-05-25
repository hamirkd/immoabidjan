import { Injectable } from '@angular/core';
import { Site } from 'app/models/site.model';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { ProjetService } from './projet.service';

@Injectable({
    providedIn: 'root',
})
export class SiteService {
    constructor(private apiService: ApiService,
        private _projetService: ProjetService) {}

    getAll(): Observable<Site[]> {
        return this.apiService.get('api/site');
    }

    get(id): Observable<Site> {
        return this.apiService.get('api/site/' + id);
    }

    add(site: Site): Observable<Site> {
        site['projet_id'] =this._projetService.projet?.id
        return this.apiService.post('api/site', site);
    }

    update(site: Site): Observable<Site> {
        return this.apiService.put('api/site/' + site.id, site);
    }

    delete(site: Site): Observable<any> {
        return this.apiService.delete('api/site/' + site.id);
    }
      
     
    uploadGeoJSON(id: string, geoJSON: File): Observable<any>
    {    
        let file: File = geoJSON;
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        formData.append('id', id);
        let headers = new Headers();
        /** In Angular 5, including the header Content-Type can invalidate your request */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json'); 

        return this.apiService.post3('api/site/uploadGeoJSON',formData,{ headers: headers });
    }

    getGeoJSON(geoJSON:string): Observable<any> {
        return this.apiService.get2('api/site/getGeoJSON/' + geoJSON);
    }

    getGeoJSONAsJSON(geoJSON:string): Observable<any> {
        return this.apiService.get('api/site/getGeoJSON/' + geoJSON);
    }

    removeGeoJSON(niveau_localisation_id): Observable<any> {
        return this.apiService.get('api/site/removeGeoJSON/' + niveau_localisation_id);
    }
}