import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UtilisateurService } from 'app/core/services/utilisateur.service'; 
import { UserService } from 'app/core/user/user.service';
import { Utilisateur } from 'app/models/utilisateur.model';
 
@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.scss']
})
export class AddUtilisateurComponent implements OnInit  {
  @Input() name;

  utilisateur: Utilisateur;
  action: 'edit' | 'new' = 'new';
  user:any

  formFieldHelpers: string[] = [''];
  constructor(
      private _formBuilder: FormBuilder,
      @Inject(MAT_DIALOG_DATA) private _data: any,
      public matDialogRef: MatDialogRef<AddUtilisateurComponent>,
      private _utilisateurService:UtilisateurService,
      private _userService:UserService
  ) {
      this.action = _data.action;
      this.utilisateur = new Utilisateur(_data.utilisateur);
      this.utilisateurForm = this.createUtilisateurForm();
      this._userService.user$.subscribe(user=>{this.user=user;})
  }
  existingEmail:{value:boolean}={value:false}
  utilisateurForm: FormGroup;

  ngOnInit(): void {
 
  }
  /**
   * Create user form
   *
   * @returns {FormGroup}
   */

  createUtilisateurForm(): FormGroup {
      return this._formBuilder.group({
          id: [this.utilisateur.id],
          first_name     : [this.utilisateur.first_name, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
          last_name     : [this.utilisateur.last_name, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
          telephone     : [this.utilisateur.telephone, [Validators.required, Validators.minLength(4), Validators.maxLength(18)]],
          role     : [this.utilisateur.role],
          password: [this.utilisateur.password],
          password_confirmation: [''],
          email     : [{ value: this.utilisateur.email, disabled: this.action!=='new' }, [Validators.required, Validators.email, Validators.minLength(2), Validators.maxLength(100)]]});
  }
   
  onSubmit() {
    console.log(this.utilisateurForm.get('last_name'))
    if(this.action=='new')
    {
      let utilisateur = this.utilisateurForm.getRawValue();
        this._utilisateurService.add(utilisateur).subscribe(data=>{
          this.utilisateurForm.get("email").hasError("duplicate")
          // this.utilisateurForm.get("email").setErrors(Validators.);
          console.log(data)
            this.matDialogRef.close(this.utilisateurForm);
        },err=>{
          console.log(err.error)
          let message:string = err.error + ""; 
          // this.utilisateurForm.get("email").hasError("duplicate")
          // this.utilisateurForm.get("email").addAsyncValidators
          
          this.existingEmail.value = message.includes("The email has already been taken");
        })
    }
    else
    {
        this._utilisateurService.update(this.utilisateurForm.getRawValue()).subscribe(data=>{
            console.log(data);
            this.matDialogRef.close(this.utilisateurForm);
        })
    }
    
}
}
