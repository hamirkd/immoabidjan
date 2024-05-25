import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetComponent } from './projet.component';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { DetailProjetComponent } from './detail-projet/detail-projet.component';


const routes: Routes = [
  { path: '', component: ProjetComponent },
  { path: 'detail/:projet_id', component: DetailProjetComponent }
];

@NgModule({
  declarations: [
    ProjetComponent,
    AddProjetComponent,
    DetailProjetComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),SharedModule
  ]
})
export class ProjetModule { }
