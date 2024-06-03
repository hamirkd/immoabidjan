import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { AcquereurShortComponent } from './acquereur-short/acquereur-short.component';
import { RouterModule } from '@angular/router';
import { TerrainShortComponent } from './terrain-short/terrain-short.component';
import { MediaComponent } from './media/media.component';
import { MediaAddComponent } from './media/media-add/media-add.component';



@NgModule({
  declarations: [AcquereurShortComponent, TerrainShortComponent,MediaComponent,MediaAddComponent],
  imports: [
    CommonModule,SharedModule,RouterModule
  ],
  exports: [AcquereurShortComponent, TerrainShortComponent,MediaComponent,MediaAddComponent]
})
export class ShortListModule { }
