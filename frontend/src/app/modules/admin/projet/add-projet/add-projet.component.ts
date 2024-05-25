import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjetService } from 'app/core/services/projet.service'; 
import { Projet } from 'app/models/projet.model';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.scss']
})
export class AddProjetComponent implements OnInit  {
  @Input() name;

  Projet: Projet;
  action: 'edit' | 'new' = 'new';

  formFieldHelpers: string[] = [''];
  constructor(
      private _formBuilder: FormBuilder,
      @Inject(MAT_DIALOG_DATA) private _data: any,
      public matDialogRef: MatDialogRef<AddProjetComponent>,
      private _ProjetService:ProjetService
  ) {
      this.action = _data.action;
      this.Projet = new Projet(_data.Projet);
      this.ProjetForm = this.createProjetForm();
  } 
  ProjetForm: any;

  ngOnInit(): void {
 
  }
  /**
   * Create user form
   *
   * @returns {FormGroup}
   */

  createProjetForm(): FormGroup {
      return this._formBuilder.group({
          id: [this.Projet.id],
          code: [this.Projet.code], 
          intitule: [this.Projet.intitule], 
          objectif: [this.Projet.objectif], 
      });
  }
  
  onSubmit() {

    if(this.action=='new')
    {
      let Projet = this.ProjetForm.getRawValue();
        this._ProjetService.add(Projet).subscribe(data=>{
          console.log(data)
            this.matDialogRef.close(this.ProjetForm);
        },err=>{
          console.log(err)
        })
    }
    else
    {
        this._ProjetService.update(this.ProjetForm.getRawValue()).subscribe(data=>{
            console.log(data);
            this.matDialogRef.close(this.ProjetForm);
        })
    }
    
}
}
