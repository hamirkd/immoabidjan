import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ProjetsComponent } from 'app/layout/common/projets/projets.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    declarations: [
        ProjetsComponent
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        SharedModule
    ],
    exports     : [
        ProjetsComponent
    ]
})
export class ProjetsModule
{
}
