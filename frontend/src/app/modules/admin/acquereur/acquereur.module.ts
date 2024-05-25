import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcquereurComponent } from './acquereur.component';
import { AddAcquereurComponent } from './add-acquereur/add-acquereur.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { ShowAcquereurComponent } from './show-acquereur/show-acquereur.component';


const routes: Routes = [
  { path: '', component: AcquereurComponent },
  { path: 'show/:acquereur_id', component: ShowAcquereurComponent }

];

@NgModule({
  declarations: [
    AcquereurComponent,
    AddAcquereurComponent,
    ShowAcquereurComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),SharedModule
  ]
})
export class AcquereurModule { }
