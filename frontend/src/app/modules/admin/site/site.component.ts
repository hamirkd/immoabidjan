import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SiteService } from 'app/core/services/site.service';
import { Site } from 'app/models/site.model';
import { AddSiteComponent } from './add-site/add-site.component';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {
  constructor(
      private _matDialog: MatDialog,
      private _siteService: SiteService
  ) {}

  searchControl: FormControl = new FormControl();
  dialogRef: any;

  dataSource: MatTableDataSource<Site> = new MatTableDataSource();

  displayedColumns: string[] = [
      'id',
      'libelle',
      'creation',
      'actions',
  ];
  recherche(textRecherche) {
      textRecherche = textRecherche.trim(); // Remove whitespace
      textRecherche = textRecherche.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = textRecherche;
  }

  ngOnInit(): void {
      this._updateDataSource();
  }
  
  _updateDataSource(){
    if(sessionStorage.getItem("sites")) {
        let data = JSON.parse(sessionStorage.getItem("sites"))
        this.dataSource.data = data; 
    }
    this._siteService.getAll().subscribe(data=>{
        this.dataSource.data = data;
        sessionStorage.setItem("sites",JSON.stringify(data));
      })
  }
  
  editer(site): void
  {
      this.dialogRef = this._matDialog.open(AddSiteComponent, {
          panelClass: '',
          data      : {
              site:site,
              action: 'edit'
          } 
      });

      this.dialogRef.afterClosed()
          .subscribe((response: FormGroup) => {
              if ( !response )
              {
                  return;
              }
              
              this._updateDataSource();
          });
  }
  
  ajouter(): void
  {
      this.dialogRef = this._matDialog.open(AddSiteComponent, {
          panelClass: '',
          data      : {
              site:{},
              action: 'new'
          } 
      });

      this.dialogRef.afterClosed()
          .subscribe((response: FormGroup) => {
              if ( !response )
              {
                  return;
              }
              
              this._updateDataSource();
          });
  }
  supprimer(site){
        this._siteService.delete(site).subscribe(d=>{
            this._updateDataSource();
        })
  }
}
