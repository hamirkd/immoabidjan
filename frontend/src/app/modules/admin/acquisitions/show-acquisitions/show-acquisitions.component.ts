import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { environment } from 'environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { AcquisitionService } from 'app/core/services/acquisition.service';
import { Acquisition } from 'app/models/acquisition.model';
import { AddAcquisitionComponent } from '../add-acquisitions/add-acquisitions.component';

@Component({
    selector: 'app-show-acquisition',
    templateUrl: './show-acquisitions.component.html',
    styleUrls: ['./show-acquisitions.component.scss']
})
export class ShowAcquisitionComponent implements OnInit {

    @ViewChild('supportNgForm') supportNgForm: NgForm;
    @ViewChild('avatarFileInput') private _avatarFileInput: ElementRef;
    urlForBackend = ""
    token = ""
    alert: any;
    dialogRef: any;
    editMode: boolean = false;
    acquisitionAvatarForm = new FormControl('');
    acquisition_id
    acquisition: Acquisition = new Acquisition({});
    firstElement = "";
    geoJSON: any = null;
    data:any={};
    /**
     * Constructor
     */
    constructor(
        private _matDialog: MatDialog, private _snackBar: MatSnackBar,
        private _formBuilder: FormBuilder,
        private _acquisitionService: AcquisitionService, private route: ActivatedRoute, private _authService: AuthService
    ) {
        this.urlForBackend = environment.urlApi
        this.token = this._authService.accessToken
        route.params.subscribe(d => {
            this.acquisition_id = Number(d.acquisition_id);
        })
    }
    acquisitionForm: any;
    /**
     * On init
     */
    ngOnInit(): void {

        this._acquisitionService.get(this.acquisition_id).subscribe((data) => {
            this.acquisition = new Acquisition(data);
        });
    }

    editer(): void {
        this.dialogRef = this._matDialog.open(AddAcquisitionComponent, {
            panelClass: '',
            data: {
                acquisition: this.acquisition,
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
    genererContrat() {
        this.data['refreshContrat']=true
        this._acquisitionService.downloadGenererContrat(this.acquisition).subscribe(blob=>{
            window.open(URL.createObjectURL(blob), '_blank');
            this._snackBar.open('Téléchargement terminé', 'Splash', {
                    horizontalPosition: 'right',
                    verticalPosition: 'top',
                    duration: 2000
                });
                
            this.data['refreshContrat']=false;

            },err=>{    
            this.data['refreshContrat']=false;
            });
    }
}