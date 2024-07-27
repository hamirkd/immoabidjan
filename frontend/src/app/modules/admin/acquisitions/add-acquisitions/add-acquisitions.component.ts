import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AcquisitionService } from 'app/core/services/acquisition.service'; 
import { TerrainService } from 'app/core/services/terrain.service';
import { SiteService } from 'app/core/services/site.service';
import { Acquisition } from 'app/models/acquisition.model';
import { Terrain } from 'app/models/terrain.model';
import { Site } from 'app/models/site.model';
import { Acquereur } from 'app/models/acquereur.model';
import { AcquereurService } from 'app/core/services/acquereur.service';

@Component({
  selector: 'app-add-acquisitions',
  templateUrl: './add-acquisitions.component.html',
  styleUrls: ['./add-acquisitions.component.scss']
})
export class AddAcquisitionComponent implements OnInit  {
  @Input() name;
  acquisition: Acquisition;
  action: 'edit' | 'new' = 'new';

  formFieldHelpers: string[] = [''];
  constructor(
      private _formBuilder: FormBuilder,
      @Inject(MAT_DIALOG_DATA) _data: any,
      public matDialogRef: MatDialogRef<AddAcquisitionComponent>,
      private _acquisitionService:AcquisitionService,
      private _terrainService:TerrainService,
      private _siteService:SiteService,
      private _acquereurService:AcquereurService
  ) {
      this.action = _data.action;
      this.acquisition = new Acquisition(_data.acquisition);
      this.acquisitionForm = this.createAcquisitionForm();
  }

  acquisitionForm: any;

  listeTerrain: Terrain[]= [];
  listeTerrainD: Terrain[]= [];
  listeSite: Site[]= []
  listeAcquereur: Acquereur[]= [];

  ngOnInit(): void{
    this._terrainService.getAll().subscribe(data=>{
      this.listeTerrain.push(new Terrain({}));
      this.listeTerrain.push(...data as Terrain[]);
      this.listeTerrainD.push(...data as Terrain[]);
    });
    this._siteService.getAll().subscribe(data=>{
      this.listeSite.push(new Site({}));
      this.listeSite.push(...data as Site[]);
    });
    this._acquereurService.getAll().subscribe(data=>{
      this.listeAcquereur.push(new Acquereur({}));
      this.listeAcquereur.push(...data as Acquereur[]);
    });
  }

  /**
   *
   * @returns {FormGroup}
   */
  createAcquisitionForm(): FormGroup {
      return this._formBuilder.group({
          id: [this.acquisition.id],
          acquereur_id: [this.acquisition.acquereur_id],
          dateAcquisition: [this.acquisition.dateAcquisition],
          site_id: [this.acquisition.site_id],
          terrain_id: [this.acquisition.terrain_id],
          montant: [this.acquisition.montant],
      });
  }
  
  onSubmit() {

    if(this.action=='new')
    {
      let acquisition = this.acquisitionForm.getRawValue();
        this._acquisitionService.add(acquisition).subscribe(data=>{
          console.log(data)
            this.matDialogRef.close(this.acquisitionForm);
        },err => {
          console.log(err)
        });
    } else
    {
        this._acquisitionService.update(this.acquisitionForm.getRawValue()).subscribe(data=>{
            this.matDialogRef.close(this.acquisitionForm);
        });
    }
    
}
  filterTerrain(site_id){
      this.listeTerrainD = this.listeTerrain.filter(terrain=> terrain.site_id == site_id);
  }
}
