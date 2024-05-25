import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProjetService } from 'app/core/services/projet.service';
import { Projet } from 'app/models/projet.model';
import { AddProjetComponent } from './add-projet/add-projet.component';

@Component({
  selector: 'app-Projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {
  constructor(
      private _matDialog: MatDialog,
      private _ProjetService: ProjetService
  ) {}

  searchControl: FormControl = new FormControl();
  dialogRef: any;

  dataSource: MatTableDataSource<Projet> = new MatTableDataSource();

  displayedColumns: string[] = [
      'id',
      'intitule',
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
    this._ProjetService.getAll().subscribe(data=>{
        this.dataSource.data = data;
      })
  }
  
  editer(Projet): void
  {
      this.dialogRef = this._matDialog.open(AddProjetComponent, {
          panelClass: '',
          data      : {
              Projet:Projet,
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
      this.dialogRef = this._matDialog.open(AddProjetComponent, {
          panelClass: '',
          data      : {
              Projet:{},
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
  supprimer(){}
}
