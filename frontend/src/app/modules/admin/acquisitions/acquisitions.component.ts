import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';  
import {MatTable, MatTableDataSource } from '@angular/material/table'; import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AcquisitionService } from 'app/core/services/acquisition.service';
import { Acquisition } from 'app/models/acquisition.model';
import { AddAcquisitionComponent } from './add-acquisitions/add-acquisitions.component';
import { MatPaginator,PageEvent } from '@angular/material/paginator'; 

@Component({
  selector: 'app-acquisitions',
  templateUrl: './acquisitions.component.html',
  styleUrls: ['./acquisitions.component.scss']
})
export class AcquisitionComponent implements OnInit {
  constructor(
      private _matDialog: MatDialog,
      private _acquisitionService: AcquisitionService
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchControl: FormControl = new FormControl();
  dialogRef: any;

  @ViewChild(MatTable) table: MatTable<Acquisition>;
  dataSource: MatTableDataSource<Acquisition> = new MatTableDataSource([]);

  isLoading = false;
  totalRows = 0;
  pageSize = 10;
  currentPage = 0;
  pageSizeOptions: number[] = [5, 10, 25,50, 100,500];

  displayedColumns: string[] = [
    'id',
    'acquereur',
    'site',
    'terrain',
    'montant',
    'dateAcquisition',
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
    if(sessionStorage.getItem("acquisitions")) {
        let data = JSON.parse(sessionStorage.getItem("acquisitions"))
        this.dataSource.data = data['data'];
        sessionStorage.setItem("acquisitions",JSON.stringify(data['data']));
        setTimeout(() => {
            this.paginator.pageIndex = this.currentPage;
            this.paginator.length = data['total'];
            // this.totalRows = data['total']
          },1); 
    }
    this._acquisitionService.getAllPaginate(this.pageSize,this.currentPage).subscribe(data=>{
        sessionStorage.setItem("acquisitions",JSON.stringify(data));
        this.dataSource.data = data['data'];
        setTimeout(() => {
            this.paginator.pageIndex = this.currentPage;
            this.paginator.length = data['total'];
          },1); 
      },err=>{ 
        sessionStorage.removeItem("acquisitions");
      })
  }
  
  editer(acquisition): void
  {
      this.dialogRef = this._matDialog.open(AddAcquisitionComponent, {
          panelClass: '',
          disableClose:true,
          data      : {
              acquisition:acquisition,
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
      this.dialogRef = this._matDialog.open(AddAcquisitionComponent, {
          panelClass: '',
          disableClose:true,
          data      : {
              acquisition:{},
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
    this._acquisitionService.delete(element).subscribe(d=>{
        this._updateDataSource();
    })
  }
  
  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this._updateDataSource();
  }
}
