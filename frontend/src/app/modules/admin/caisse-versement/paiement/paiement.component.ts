import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AcquereurService } from 'app/core/services/acquereur.service';
import { AcquisitionService } from 'app/core/services/acquisition.service';
import { SiteService } from 'app/core/services/site.service';
import { TerrainService } from 'app/core/services/terrain.service';
import { VersementsService } from 'app/core/services/versements.service';
import { Acquereur } from 'app/models/acquereur.model';
import { Site } from 'app/models/site.model';
import { Terrain } from 'app/models/terrain.model';
import { Versement } from 'app/models/versement.model';
import moment from 'moment';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss']
})
export class PaiementComponent implements OnInit {

  
  @Input() name;


  formFieldHelpers: string[] = [''];
  
  listeTerrains: Terrain[]= [];
  listeSites: Site[]= []
  listeAcquereurs: Acquereur[]= [];
  versement:Versement = new Versement({});
  constructor(
      private _formBuilder: FormBuilder,
      @Inject(MAT_DIALOG_DATA) private _data: any,
      private _acquisitionService:AcquisitionService,
      private _terrainService:TerrainService,
      private _siteService:SiteService,
      private _acquereurService:AcquereurService,
      private _versementService: VersementsService,
      public matDialogRef: MatDialogRef<PaiementComponent>,
      ) {
      this.versement = new Versement(_data.versement);
   
      this.versement.dateversement =  moment().format('YYYY-MM-DD');
      this.versementForm = this.createPaiementEleveForm();
  }
  versementForm: any;

  ngOnInit(): void { 
    this._terrainService.getAll().subscribe(data=>{
      this.listeTerrains.push(new Terrain({}));
      this.listeTerrains.push(...data as Terrain[]);
    });
    this._siteService.getAll().subscribe(data=>{
      this.listeSites.push(new Site({}));
      this.listeSites.push(...data as Site[]);
    });
    this._acquereurService.getAll().subscribe(data=>{
      this.listeAcquereurs.push(new Acquereur({}));
      this.listeAcquereurs.push(...data as Acquereur[]);
    });
  }
  filterBySite(data){

  }

  
  /**
   * Create user form
   *
   * @returns {FormGroup}
   */

  createPaiementEleveForm(): FormGroup {
      return this._formBuilder.group({
          acquisition_id: new FormControl({value: this.versement.acquisition_id, disabled: !!this.versement.acquisition_id}, Validators.required),
          terrain_id: [this.versement.terrain_id],
          acquereur_id: [this.versement.acquereur_id],
          projet_id: [this.versement.projet_id],
          dateversement: new FormControl(this.versement.dateversement, Validators.required),
          montant: new FormControl(this.versement.montant, Validators.required),
      });
  }
  
  onSubmit() {
      let versement = this.versementForm.getRawValue();
      this._versementService.addOrUpdate(versement).subscribe(data=>{
            this.matDialogRef.close(this.versementForm);
            console.log(data)
        },err=>{
          console.log(err)
        });
    }
}
