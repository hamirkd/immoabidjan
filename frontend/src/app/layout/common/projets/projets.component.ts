import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { take } from 'rxjs';
import { AvailableLangs, TranslocoService } from '@ngneat/transloco';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { ProjetService } from 'app/core/services/projet.service';
import { Projet } from 'app/models/projet.model';
import { environment } from 'environments/environment';
import { AuthService } from 'app/core/auth/auth.service'; 
import { Router } from '@angular/router';

@Component({
    selector       : 'projets',
    templateUrl    : './projets.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'projets'
})
export class ProjetsComponent implements OnInit, OnDestroy
{ 
    listeProjets:Projet[]=[]
    activeProjet:Projet = new Projet({});
    urlForBackend = ""
    token = ""

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseNavigationService: FuseNavigationService,
        private _projectService:ProjetService,
        private _authService:AuthService,
        private router:Router
    )
    {   this.urlForBackend = environment.urlApi
        this.token = this._authService.accessToken
        this.activeProjet = this._projectService.projet;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    { 

        this._projectService.getAll().subscribe(data=>{
            this.listeProjets = data;
            if(!this._projectService.projet?.id && this.listeProjets.length>0) {
                this.setActiveProjet(this.listeProjets[0]);
            }
            else
            this._updateNavigation();
        }) 
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    setActiveProjet(projet: Projet): void
    {
        // Set the active lang
        this._projectService.projet = projet;
        this.activeProjet = projet
        this._updateNavigation(); 
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Update the navigation
     *
     * @param lang
     * @private
     */
    

    private _updateNavigation(): void
    { 
        const lastLink = this.router.url;
        let urlRefresh = this.router.url!="/dashboard"?'/signed-in-redirect':'example';
         this.router.navigateByUrl(urlRefresh).then(data => {
            this.router.navigate([lastLink]);
            console.log(data)
        },err=>{
            console.log(err)
        });  
    }
}
