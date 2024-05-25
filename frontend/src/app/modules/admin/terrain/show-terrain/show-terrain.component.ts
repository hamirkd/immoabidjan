import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { environment } from 'environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { TerrainService } from 'app/core/services/terrain.service';
import { Terrain } from 'app/models/terrain.model';
import { AddTerrainComponent } from '../add-terrain/add-terrain.component';

@Component({
    selector: 'app-show-terrain',
    templateUrl: './show-terrain.component.html',
    styleUrls: ['./show-terrain.component.scss']
})
export class ShowTerrainComponent implements OnInit {

    @ViewChild('supportNgForm') supportNgForm: NgForm;
    @ViewChild('avatarFileInput') private _avatarFileInput: ElementRef;
    urlForBackend = ""
    token = ""
    alert: any;
    dialogRef: any;
    editMode: boolean = false;
    terrainAvatarForm = new FormControl('');
    terrain_id
    terrain: Terrain = new Terrain({});
    firstElement = "";
    geoJSON: any = null
    /**
     * Constructor
     */
    constructor(
        private _matDialog: MatDialog, private _snackBar: MatSnackBar,
        private _formBuilder: FormBuilder,
        private _terrainService: TerrainService, private route: ActivatedRoute, private _authService: AuthService
    ) {
        this.urlForBackend = environment.urlApi
        this.token = this._authService.accessToken
        route.params.subscribe(d => {
            this.terrain_id = Number(d.terrain_id);
        })
    }
    terrainForm: any;
    /**
     * On init
     */
    ngOnInit(): void {

        this._terrainService.get(this.terrain_id).subscribe((data) => {
            this.terrain = new Terrain(data);
        });
    }

    editer(): void {
        this.dialogRef = this._matDialog.open(AddTerrainComponent, {
            panelClass: '',
            data: {
                terrain: this.terrain,
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