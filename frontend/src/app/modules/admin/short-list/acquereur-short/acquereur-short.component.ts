import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AcquereurService } from 'app/core/services/acquereur.service';
import { Acquereur } from 'app/models/acquereur.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { AcquisitionService } from 'app/core/services/acquisition.service';
import { Acquisition } from 'app/models/acquisition.model';

@Component({
  selector: 'app-acquereur-short',
  templateUrl: './acquereur-short.component.html',
  styleUrls: ['./acquereur-short.component.scss']
})
export class AcquereurShortComponent implements OnInit {
  constructor(
      private _matDialog: MatDialog,
      private _acquisitionService: AcquisitionService
  ) {}

  @ViewChild(MatTable) table: MatTable<Acquereur>;
  searchControl: FormControl = new FormControl();
  dataSource: MatTableDataSource<Acquereur> = new MatTableDataSource();
  @Input('terrain_id') terrain_id:number=0;

  isLoading = false;
  totalRows = 0;
  pageSize = 10;
  currentPage = 0;
  pageSizeOptions: number[] = [5, 10, 25,50, 100,500];

  displayedColumns: string[] = [
    'id',
    'nom',
    'docIdentification',
    'email',
    'telephone',
    'typeAcquereur',
    'montant',
    'dateAcquisition',
    'acquisition',
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
    // this.dataSource.data.;
    this._acquisitionService.findByTerrain(this.terrain_id).subscribe(data=>{
        const acquisitions = data as Acquisition[];
        const acquereurs = [];
        
        acquisitions.forEach(ac=>{
          acquereurs.push({...ac,...ac.acquereur, acquisition_id: ac.id});
        });
        this.dataSource.data = acquereurs;
      },err=>{
        this.dataSource.data = [];
      })
  }
}
