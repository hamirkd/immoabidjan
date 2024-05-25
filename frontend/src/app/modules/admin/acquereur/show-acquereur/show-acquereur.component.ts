import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { environment } from 'environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { AcquereurService } from 'app/core/services/acquereur.service';
import { Acquereur } from 'app/models/acquereur.model';
import { AddAcquereurComponent } from '../add-acquereur/add-acquereur.component';

@Component({
    selector: 'app-show-acquereur',
    templateUrl: './show-acquereur.component.html',
    styleUrls: ['./show-acquereur.component.scss']
})
export class ShowAcquereurComponent implements OnInit {

    @ViewChild('supportNgForm') supportNgForm: NgForm;
    @ViewChild('avatarFileInput') private _avatarFileInput: ElementRef;
    urlForBackend = ""
    token = ""
    alert: any;
    dialogRef: any;
    editMode: boolean = false;
    acquereurAvatarForm = new FormControl('');
    acquereur_id
    acquereur: Acquereur = new Acquereur({});
    firstElement = "";
    geoJSON: any = null
    /**
     * Constructor
     */
    constructor(
        private _matDialog: MatDialog, private _snackBar: MatSnackBar,
        private _formBuilder: FormBuilder,
        private _acquereurService: AcquereurService, private route: ActivatedRoute, private _authService: AuthService
    ) {
        this.urlForBackend = environment.urlApi
        this.token = this._authService.accessToken
        route.params.subscribe(d => {
            this.acquereur_id = Number(d.acquereur_id);
        })
    }
    acquereurForm: any;
    /**
     * On init
     */
    ngOnInit(): void {

        this._acquereurService.get(this.acquereur_id).subscribe((data) => {
            this.acquereur = new Acquereur(data);
        });
    }

    editer(): void {
        this.dialogRef = this._matDialog.open(AddAcquereurComponent, {
            panelClass: '',
            data: {
                acquereur: this.acquereur,
                action: 'edit'
            }
        });

        this.dialogRef.afterClosed()
            .subscribe((response: FormGroup) => {
                if (!response) {
                    return;
                }

                this.ngOnInit();
            });
    }
}