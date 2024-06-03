import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { AcquereurShortComponent } from './acquereur-short/acquereur-short.component';
import { RouterModule } from '@angular/router';
import { TerrainShortComponent } from './terrain-short/terrain-short.component';
import { MediaComponent } from './media/media.component';
import { MediaAddComponent } from './media/media-add/media-add.component';
import { VersementShortComponent } from './versement-short/versement-short.component';
import { CaisseVersementModule } from '../caisse-versement/caisse-versement.module';



@NgModule({
  declarations: [AcquereurShortComponent, TerrainShortComponent,MediaComponent,MediaAddComponent,
    VersementShortComponent
  ],
  imports: [
    CommonModule,SharedModule,RouterModule,CaisseVersementModule
  ],
  exports: [AcquereurShortComponent, TerrainShortComponent,MediaComponent,MediaAddComponent,
    VersementShortComponent,CaisseVersementModule
  ]
})
export class ShortListModule { }
