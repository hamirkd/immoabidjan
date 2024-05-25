import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { MatChipsModule } from '@angular/material/chips';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartsModule } from 'ng2-charts';
import { CartoComponent } from './carto/carto.component';
import { FuseFullscreenModule } from '@fuse/components/fullscreen';



const routes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  declarations: [DashboardComponent, CartoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),SharedModule,
    MatChipsModule,
    NgApexchartsModule,NgChartsModule,FuseFullscreenModule
  ]
})
export class DashboardModule { }
