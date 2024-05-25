import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { TerrainService } from 'app/core/services/terrain.service';
import { Terrain } from 'app/models/terrain.model';
import { AddTerrainComponent } from './add-terrain/add-terrain.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.scss']
})
export class TerrainComponent implements OnInit {
  constructor(
      private _matDialog: MatDialog,
      private _terrainService: TerrainService
  ) {}

  searchControl: FormControl = new FormControl();
  dialogRef: any;

  dataSource: MatTableDataSource<Terrain> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatTable) table: MatTable<Terrain>;

  isLoading = false;
  totalRows = 0;
  pageSize = 10;
  currentPage = 0;
  pageSizeOptions: number[] = [5, 10, 25,50, 100,500];

  displayedColumns: string[] = [
    'id',
    'code',
    'site',
    'numero',
    'lot',
    'typeLogement',
    'superficie',
    'creation',
    'actions',
];
ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
}

  recherche(textRecherche) {
      textRecherche = textRecherche.trim(); // Remove whitespace
      textRecherche = textRecherche.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = textRecherche;
  }
  ngOnInit(): void {
      this._updateDataSource();
  }
  
  _updateDataSource(){
    if(sessionStorage.getItem("terrain")) {
        let data = JSON.parse(sessionStorage.getItem("terrain"))
        this.dataSource.data = data['data'];
        setTimeout(() => {
            this.paginator.pageIndex = this.currentPage;
            this.paginator.length = data['total'];
            // this.totalRows = data['total']
          },1); 
    }
    this._terrainService.getAllPaginate(this.pageSize,this.currentPage).subscribe(data=>{
        this.dataSource.data = data['data'];
        sessionStorage.setItem("terrain",JSON.stringify(data));
        setTimeout(() => {
            this.paginator.pageIndex = this.currentPage;
            this.paginator.length = data['total'];
            // this.totalRows = data['total']
          },1); 
      },err=>{ 
      })
  }
  
  editer(terrain): void
  {
      this.dialogRef = this._matDialog.open(AddTerrainComponent, {
          panelClass: '',
          data      : {
              terrain:terrain,
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
      this.dialogRef = this._matDialog.open(AddTerrainComponent, {
          panelClass: '',
          data      : {
              terrain:{},
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
  supprimer(element){
    this._terrainService.delete(element).subscribe(d=>{
        this._updateDataSource();
    })
  }
  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this._updateDataSource();
  }
}
