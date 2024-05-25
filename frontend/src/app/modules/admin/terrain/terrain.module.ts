import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerrainComponent } from './terrain.component';
import { AddTerrainComponent } from './add-terrain/add-terrain.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { ShowTerrainComponent } from './show-terrain/show-terrain.component';


const routes: Routes = [
  { path: '', component: TerrainComponent },
  { path: 'show/:terrain_id', component: ShowTerrainComponent }
];

@NgModule({
  declarations: [
    TerrainComponent,
    AddTerrainComponent,
    ShowTerrainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),SharedModule
  ]
})
export class TerrainModule { }
