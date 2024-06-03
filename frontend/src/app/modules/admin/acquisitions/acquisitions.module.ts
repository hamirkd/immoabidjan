import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcquisitionComponent } from './acquisitions.component';
import { AddAcquisitionComponent } from './add-acquisitions/add-acquisitions.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { ShowAcquisitionComponent } from './show-acquisitions/show-acquisitions.component';
import { ShortListModule } from '../short-list/short-list.module';


const routes: Routes = [
  { path: '', component: AcquisitionComponent },
  { path: 'add', component: AddAcquisitionComponent },
  { path: 'show/:acquisition_id', component: ShowAcquisitionComponent }
];

@NgModule({
  declarations: [
    AcquisitionComponent,
    AddAcquisitionComponent,
    ShowAcquisitionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),SharedModule,ShortListModule
  ]
})
export class AcquisitionModule { }
