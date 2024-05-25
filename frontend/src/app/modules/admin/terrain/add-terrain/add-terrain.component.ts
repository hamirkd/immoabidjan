import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TerrainService } from 'app/core/services/terrain.service'; 
import { SiteService } from 'app/core/services/site.service';
import { Terrain } from 'app/models/terrain.model';
import { Site } from 'app/models/site.model';
import { _TYPE_LOGEMENT_LIST } from 'app/core/config/Constants';

@Component({
  selector: 'app-add-terrain',
  templateUrl: './add-terrain.component.html',
  styleUrls: ['./add-terrain.component.scss']
})
export class AddTerrainComponent implements OnInit  {
  @Input() name;

  terrain: Terrain;
  action: 'edit' | 'new' = 'new';

  formFieldHelpers: string[] = [''];
  constructor(
      private _formBuilder: FormBuilder,
      @Inject(MAT_DIALOG_DATA) private _data: any,
      public matDialogRef: MatDialogRef<AddTerrainComponent>,
      private _terrainService:TerrainService,
      private _siteService:SiteService
  ) {
      this.action = _data.action;
      this.terrain = new Terrain(_data.terrain);
      this.terrainForm = this.createTerrainForm();
  } 
  terrainForm: any;
  listeSite:Site[]=[];
  typeLogmentList:string[] =_TYPE_LOGEMENT_LIST

  ngOnInit(): void {
    this._siteService.getAll().subscribe(data=>{
      this.listeSite = data as Site[];
    })
  }
  /**
   * Create user form
   *
   * @returns {FormGroup}
   */

  createTerrainForm(): FormGroup {
      return this._formBuilder.group({
          id: [this.terrain.id],
          code: [this.terrain.code],
          numero: [this.terrain.numero],
          lot: [this.terrain.lot],
          superficie: [this.terrain.superficie],
          typeLogement: [this.terrain.typeLogement],
          site_id: [this.terrain.site_id]
      });
  }
  
  onSubmit() {

    if(this.action=='new')
    {
      let terrain = this.terrainForm.getRawValue();
        this._terrainService.add(terrain).subscribe(data=>{
          console.log(data)
            this.matDialogRef.close(this.terrainForm);
        },err=>{
          console.log(err)
        })
    }
    else
    {
        this._terrainService.update(this.terrainForm.getRawValue()).subscribe(data=>{
            console.log(data);
            this.matDialogRef.close(this.terrainForm);
        })
    }
    
}
}
