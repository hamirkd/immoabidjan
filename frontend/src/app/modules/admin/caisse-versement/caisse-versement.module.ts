import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { ShortListModule } from '../short-list/short-list.module';
import { CaisseVersementComponent } from './caisse-versement.component';
import { PaiementComponent } from './paiement/paiement.component';
import { CaisseVersementMotifAnnulationComponent } from './caisse-versement-motif-annulation/caisse-versement-motif-annulation.component';


const routes: Routes = [
  { path: 'versement', component: CaisseVersementComponent },
  { path: 'paiement', component: PaiementComponent },
];

@NgModule({
  declarations: [
    CaisseVersementComponent,
    PaiementComponent, CaisseVersementMotifAnnulationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),SharedModule
  ]
})
export class CaisseVersementModule { }
