import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { _TYPE_ACQUEREUR_LIST, _TYPE_DOC_LIST, _TYPE_GENRE_LIST } from 'app/core/config/Constants';
import { AcquereurService } from 'app/core/services/acquereur.service'; 
import { SiteService } from 'app/core/services/site.service';
import { Acquereur } from 'app/models/acquereur.model';
import { Site } from 'app/models/site.model';

@Component({
  selector: 'app-add-acquereur',
  templateUrl: './add-acquereur.component.html',
  styleUrls: ['./add-acquereur.component.scss']
})
export class AddAcquereurComponent implements OnInit  {
  @Input() name;

  acquereur: Acquereur;
  action: 'edit' | 'new' = 'new';
  typeAcquereurList: string[] = _TYPE_ACQUEREUR_LIST;
  typeDocList: string[] = _TYPE_DOC_LIST;
  typeGenreList: string[] = _TYPE_GENRE_LIST;

  formFieldHelpers: string[] = [''];
  constructor(
      private _formBuilder: FormBuilder,
      @Inject(MAT_DIALOG_DATA) private _data: any,
      public matDialogRef: MatDialogRef<AddAcquereurComponent>,
      private _acquereurService:AcquereurService,
      private _siteService:SiteService
  ) {
      this.action = _data.action;
      this.acquereur = new Acquereur(_data.acquereur);
      this.acquereurForm = this.createAcquereurForm();
  } 
  acquereurForm: any;
  listeSite:Site[]=[];

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

  createAcquereurForm(): FormGroup {
      return this._formBuilder.group({
          id: [this.acquereur.id],
          nom: [this.acquereur.nom],
          prenom: [this.acquereur.prenom],
          docIdentification: [this.acquereur.docIdentification],
          typeAcquereur: [this.acquereur.typeAcquereur],
          telephone: [this.acquereur.telephone],
          email: [this.acquereur.email],
          genre: [this.acquereur.genre],
          typeDoc: [this.acquereur.typeDoc]
      });
  }
  
  onSubmit() {

    if(this.action=='new')
    {
      let acquereur = this.acquereurForm.getRawValue();
        this._acquereurService.add(acquereur).subscribe(data=>{
          console.log(data)
            this.matDialogRef.close(this.acquereurForm);
        },err=>{
          console.log(err)
        })
    }
    else
    {
        this._acquereurService.update(this.acquereurForm.getRawValue()).subscribe(data=>{
            console.log(data);
            this.matDialogRef.close(this.acquereurForm);
        })
    }
    
}
}
