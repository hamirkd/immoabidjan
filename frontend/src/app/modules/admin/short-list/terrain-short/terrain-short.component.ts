import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { TerrainService } from 'app/core/services/terrain.service';
import { Terrain } from 'app/models/terrain.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { AcquisitionService } from 'app/core/services/acquisition.service';
import { Acquisition } from 'app/models/acquisition.model';

@Component({
  selector: 'app-terrain-short',
  templateUrl: './terrain-short.component.html',
  styleUrls: ['./terrain-short.component.scss']
})
export class TerrainShortComponent implements OnInit {
  constructor(
    private _acquisitionService: AcquisitionService
  ) {}

  searchControl: FormControl = new FormControl();
  dialogRef: any;

  dataSource: MatTableDataSource<Terrain> = new MatTableDataSource();

  @ViewChild(MatTable) table: MatTable<Terrain>;
  @Input('acquereur_id') acquereur_id:number=0;

  displayedColumns: string[] = [
    'id',
    'site',
    'code',
    'lot',
    'typeLogement',
    'superficie',
    'montant',
    'dateAcquisition',
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
    this._acquisitionService.findByAcquereur(this.acquereur_id).subscribe(data=>{
        const acquisitions = data as Acquisition[];
        const terrains = [];
        acquisitions.forEach(ac=>{
          terrains.push({...ac,...ac.terrain});
        });
        this.dataSource.data = terrains;
      },err=>{
        this.dataSource.data = [];
      })
  }
}
