import {
    Component,
    ElementRef,
    Inject,
    OnInit,
    ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { AnneeService } from 'app/core/services/annee.service';
import jsPDF from 'jspdf';
import * as moment from 'moment';
import { AuthService } from 'app/core/auth/auth.service';
import { environment } from 'environments/environment';
import { Versement } from 'app/models/versement.model';
import { PaiementComponent } from '../../caisse-versement/paiement/paiement.component';
import { VersementsService } from 'app/core/services/versements.service';
import { ProjetService } from 'app/core/services/projet.service';
import { CaisseVersementMotifAnnulationComponent } from '../../caisse-versement/caisse-versement-motif-annulation/caisse-versement-motif-annulation.component';

@Component({
    selector: 'app-eleve-detail',
    templateUrl: './eleve-detail.component.html',
    styleUrls: ['./eleve-detail.component.scss'],
})
export class EleveDetailComponent implements OnInit {
   
    dataSourceversement: MatTableDataSource<Versement> =
        new MatTableDataSource();
    displayedColumnsversement: string[] = [
        'id',
        'montant',
        'createdAt',
        'actions',
    ];
    dialogRef: any;
    constructor(
        private route: ActivatedRoute,
        private _matDialog: MatDialog,
        private _fuseConfirmationService: FuseConfirmationService,
        private _snackBar: MatSnackBar,
        private _projetService:ProjetService,
        private _authService: AuthService,
        private _versementService: VersementsService
    ) {
        
    }

    ngOnInit(): void {
    }
    

    addVersement(): void {
        this.dialogRef = this._matDialog.open(PaiementComponent, {
            panelClass: '',
            data: {
                versement: {
                    inscription_id: '',
                    classe_id: '',
                },
            },
        });

        this.dialogRef.afterClosed().subscribe((response: FormGroup) => {
            if (!response) {
                return;
            }

            this.getHistoriqueVersement();
        });
    }
    montant_scolarite;
    montant_verse;
    getHistoriqueVersement() {
        this._versementService
            .getEleveDetailVersementByAnneeAndEleve({
                eleve_id: '',
                annee_id: this._projetService.projet.id,
            })
            .subscribe(
                (data) => {
                    this.dataSourceversement.data = data[
                        'versements'
                    ] as Versement[];
                    this.montant_scolarite = data['montant_scolarite'];
                    this.montant_verse = data['montant_verse'];
                },
                (err) => {
                    this.dataSourceversement.data = [];
                    console.log(err);
                }
            );
    }

    restorer(element: Versement) {
        this.dialogRef = this._fuseConfirmationService.open({
            title: 'Restauration de versement',
            message:
                'Voulez-vous restaurer le versement N ' + element.id + ' ?',
        });

        this.dialogRef.afterClosed().subscribe((response) => {
            if (response === 'confirmed') {
                //***Restaure */
                this._versementService
                    .restore({ id: element.id })
                    .subscribe((data) => {
                        console.log(data);
                        this.getHistoriqueVersement();
                    });
            }
        });
    }
    annuler(element: Versement) {
        this.dialogRef = this._matDialog.open(
            CaisseVersementMotifAnnulationComponent,
            {
                data: {
                    id: element.id,
                },
            }
        );

        this.dialogRef.afterClosed().subscribe((response: any) => {
            if (!response) {
                return;
            }
            console.log(response);
            this._versementService.cancelle(response).subscribe(
                (d) => {
                    this.getHistoriqueVersement();
                    console.log(d);
                },
                (err) => {
                    console.log(err);
                }
            );
        });
    }

    supprimer2(element: Versement) {
        this.dialogRef = this._fuseConfirmationService.open({
            title: 'Suppression de versement',
            message:
                'Voulez-vous supprimer le versement N ' + element.id + ' ?',
        });

        this.dialogRef.afterClosed().subscribe((response) => {
            if (response === 'confirmed') {
                //***DELETE ONE */
                this._versementService.delete(element).subscribe((data) => {
                    console.log(data);
                    this.getHistoriqueVersement();
                });
            }
        });
    }
}
