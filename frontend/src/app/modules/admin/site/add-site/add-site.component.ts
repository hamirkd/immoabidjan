import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SiteService } from 'app/core/services/site.service'; 
import { Site } from 'app/models/site.model';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.scss']
})
export class AddSiteComponent implements OnInit  {
  @Input() name;

  site: Site;
  action: 'edit' | 'new' = 'new';

  formFieldHelpers: string[] = [''];
  constructor(
      private _formBuilder: FormBuilder,
      @Inject(MAT_DIALOG_DATA) private _data: any,
      public matDialogRef: MatDialogRef<AddSiteComponent>,
      private _siteService:SiteService
  ) {
      this.action = _data.action;
      this.site = new Site(_data.site);
      this.siteForm = this.createSiteForm();
  } 
  siteForm: any;

  ngOnInit(): void {
 
  }
  /**
   * Create user form
   *
   * @returns {FormGroup}
   */

  createSiteForm(): FormGroup {
      return this._formBuilder.group({
          id: [this.site.id],
          libelle: [this.site.libelle],
          description: [this.site.description]
      });
  }
  
  onSubmit() {

    if(this.action=='new')
    {
      let site = this.siteForm.getRawValue();
        this._siteService.add(site).subscribe(data=>{
            this.matDialogRef.close(this.siteForm);
        },err=>{
          console.log(err)
        })
    }
    else
    {
        this._siteService.update(this.siteForm.getRawValue()).subscribe(data=>{
            this.matDialogRef.close(this.siteForm);
        })
    }
}
}
