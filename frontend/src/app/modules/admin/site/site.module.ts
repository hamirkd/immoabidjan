import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteComponent } from './site.component'; 
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { AddSiteComponent } from './add-site/add-site.component';
import { ShowSiteComponent } from './show-site/show-site.component';
import { CarteSiteComponent } from './carte-site/carte-site.component';


const routes: Routes = [
  { path: '', component: SiteComponent },
  { path: 'show/:site_id', component: ShowSiteComponent }
];

@NgModule({
  declarations: [
    SiteComponent,
    AddSiteComponent,ShowSiteComponent,CarteSiteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),SharedModule,
  ]
})
export class SiteModule { }
