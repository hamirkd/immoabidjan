import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {FormControl} from '@angular/forms'; 
import { environment } from 'environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { SiteService } from 'app/core/services/site.service';
import { Site } from 'app/models/site.model';
import { AddSiteComponent } from '../add-site/add-site.component';

@Component({
  selector: 'app-show-site',
  templateUrl: './show-site.component.html',
  styleUrls: ['./show-site.component.scss']
})
export class ShowSiteComponent implements OnInit {

  @ViewChild('supportNgForm') supportNgForm: NgForm;
    @ViewChild('avatarFileInput') private _avatarFileInput: ElementRef;
    urlForBackend = ""
    token = ""
    alert: any;
    dialogRef: any;
    editMode:boolean = false;
    siteAvatarForm = new FormControl('');
    site_id
    site : Site = new Site({});
    firstElement = "";
    geoJSON:any = null
    /**
     * Constructor
     */
    constructor(
        private _matDialog: MatDialog,private _snackBar: MatSnackBar,
        private _formBuilder: FormBuilder,
        private _siteService:SiteService,private route: ActivatedRoute,private _authService: AuthService
    ) {
        this.urlForBackend = environment.urlApi
        this.token = this._authService.accessToken
        route.params.subscribe(d=>{
            this.site_id = Number(d.site_id);
          });
    }
    siteForm: any;


    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {

        this._siteService.get(this.site_id).subscribe((data) => {
            this.site = new Site(data);
            this.firstElement = this.site?this.site.libelle?this.site.libelle.charAt(0):'':'';
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Clear the form
     */
    clearForm(): void {
        // Reset the form
        this.supportNgForm.resetForm();
    }

    /**
     * Send the form
     */
    sendForm(): void {

        // Show a success message (it can also be an error message)
        // and remove it after 5 seconds
        this.alert = {
            type: 'success',
            message:
                'Your request has been delivered! A member of our support staff will respond as soon as possible.',
        };

        setTimeout(() => {
            this.alert = null;
        }, 7000);

        // Clear the form
        this.clearForm();
    }
     
    
 
    editer(): void
  {
      this.dialogRef = this._matDialog.open(AddSiteComponent, {
          panelClass: '',
          data      : {
              site:this.site,
              action: 'edit'
          } 
      });

      this.dialogRef.afterClosed()
          .subscribe((response: FormGroup) => {
              if ( !response )
              {
                  return;
              }
              
              this.ngOnInit();
          });
  }
    
    /**
     * Remove the avatar
     */
     removeFile(): void
     {
        this._siteService.removeGeoJSON(this.site.id).subscribe(data=>{
            this.ngOnInit();
        })
     }

     downloadFile(){
        this._siteService.getGeoJSON(this.site.geoJSON).subscribe(data=>{
            console.log(data)
            if(this.site.geoJSON.lastIndexOf('.')>=0)
            this.site.geoJSON.substring(this.site.geoJSON.lastIndexOf('.'));
            const blob = data as Blob;
            window.open(URL.createObjectURL(blob), '_blank');
            // this.data['btno'+this.site.id] = false;
            this._snackBar.open('Téléchargement terminé', 'Splash', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration:2000
            });
        },err=>{
            console.log(err)
            // this.data['btno'+element.id] = false;
        })
     }
     
    uploadAvatar(fileList: FileList): void
    {
        // Return if canceled
        if ( !fileList.length )
        {
            return;
        }

         const file = fileList[0];
         console.log(file)
        // Upload the avatar
        this._siteService.uploadGeoJSON(this.site.id+"", file).subscribe(data=>{
            this.site = data
        },err=>{
            console.log(err)
            this._snackBar.open('Veuillez verifier la taille et le type de votre fichier', 'Splash', {
                horizontalPosition: 'right',
                verticalPosition: 'top',
                duration:10000
                });
        });
    }
    visualiser(){
        this._siteService.getGeoJSONAsJSON(this.site.geoJSON).subscribe(data=>{
            this.geoJSON = null;
            
            setTimeout(() => {
                this.geoJSON = data;
            }, 1);
        },err=>{
            console.log(err)
            this.geoJSON = null
        })
    }
    onSubmit() {
        this._siteService.update(this.siteForm.getRawValue()).subscribe(data=>{
            console.log(data);
            this.ngOnInit();
        }) 
    }
  }