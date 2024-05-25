import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcquisitionComponent } from './acquisitions.component';
import { AddAcquisitionComponent } from './add-acquisitions/add-acquisitions.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';


const routes: Routes = [
  { path: '', component: AcquisitionComponent },
  { path: 'add', component: AddAcquisitionComponent }
];

@NgModule({
  declarations: [
    AcquisitionComponent,
    AddAcquisitionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),SharedModule
  ]
})
export class AcquisitionModule { }
