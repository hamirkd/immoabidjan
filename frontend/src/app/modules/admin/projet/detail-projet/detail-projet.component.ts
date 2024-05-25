import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {FormControl} from '@angular/forms'; 
import { fuseAnimations } from '@fuse/animations';
import { UserService } from 'app/core/user/user.service';
import { User } from 'app/core/user/user.types';
import { Utilisateur } from 'app/models/utilisateur.model'; 
import { environment } from 'environments/environment';
import { ProjetService } from 'app/core/services/projet.service';
import { ActivatedRoute } from '@angular/router';
import { Projet } from 'app/models/projet.model';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-detail-projet',
  templateUrl: './detail-projet.component.html',
  styleUrls: ['./detail-projet.component.scss']
})
export class DetailProjetComponent implements OnInit {

  @ViewChild('supportNgForm') supportNgForm: NgForm;
    @ViewChild('avatarFileInput') private _avatarFileInput: ElementRef;
    urlForBackend = ""
    token = ""
    alert: any;
    dialogRef: any;
    editMode:boolean = false;
    projetAvatarForm = new FormControl('');
    projet_id
    projet : Projet= new Projet({});
    /**
     * Constructor
     */
    constructor(
        private _matDialog: MatDialog,
        private _formBuilder: FormBuilder,
        private _projetService:ProjetService,private route: ActivatedRoute,private _authService: AuthService
    ) {
        this.urlForBackend = environment.urlApi
        this.token = this._authService.accessToken
        route.params.subscribe(d=>{
            this.projet_id = Number(d.projet_id);
          })
    }
    projetForm: any;
    
  createProjetForm(): FormGroup {
    return this._formBuilder.group({
        id: [this.projet.id],
        code: [this.projet.code], 
        intitule: [this.projet.intitule], 
        objectif: [this.projet.objectif], 
    });
}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {

        
        this._projetService.get(this.projet_id).subscribe((data) => {
            this.projet = new Projet(data);
            this.projetForm = this.createProjetForm();
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
        // Send your form here using an http request
        console.log('Your message has been sent!');

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
     
    
 
    toggleEditMode(){
        this.editMode = !this.editMode;
    }
    
    /**
     * Remove the avatar
     */
     removeAvatar(): void
     {
        this._projetService.removeAvatar(this.projet.id).subscribe(data=>{
            this.ngOnInit();
        })
     }
     
    uploadAvatar(fileList: FileList): void
    {
        // Return if canceled
        if ( !fileList.length )
        {
            return;
        }

        const allowedTypes = ['image/jpeg', 'image/png'];
        const file = fileList[0];

        // Return if the file is not allowed
        if ( !allowedTypes.includes(file.type) )
        {
            return;
        }

        // Upload the avatar
        this._projetService.uploadAvatar(this.projet.id+"", file).subscribe(data=>{
            this.projet = data
        });
    }
    onSubmit() {
        this._projetService.update(this.projetForm.getRawValue()).subscribe(data=>{
            console.log(data);
            this.ngOnInit();
            this.toggleEditMode();
        }) 
    }
  }