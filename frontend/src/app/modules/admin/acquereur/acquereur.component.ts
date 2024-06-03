import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AcquereurService } from 'app/core/services/acquereur.service';
import { Acquereur } from 'app/models/acquereur.model';
import { AddAcquereurComponent } from './add-acquereur/add-acquereur.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-acquereur',
  templateUrl: './acquereur.component.html',
  styleUrls: ['./acquereur.component.scss']
})
export class AcquereurComponent implements OnInit {
  constructor(
      private _matDialog: MatDialog,
      private _acquereurService: AcquereurService
  ) {}

  searchControl: FormControl = new FormControl();
  dialogRef: any;

  dataSource: MatTableDataSource<Acquereur> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatTable) table: MatTable<Acquereur>;

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
    if(sessionStorage.getItem("acquereurs")) {
        let data = JSON.parse(sessionStorage.getItem("acquereurs"))
        this.dataSource.data = data['data'];
        setTimeout(() => {
            this.paginator.pageIndex = this.currentPage;
            this.paginator.length = data['total'];
            // this.totalRows = data['total']
          },1); 
    }
    this._acquereurService.getAllPaginate(this.pageSize,this.currentPage).subscribe(data=>{

        this.dataSource.data = data['data'];
        sessionStorage.setItem("acquereurs",JSON.stringify(data));
        setTimeout(() => {
            this.paginator.pageIndex = this.currentPage;
            this.paginator.length = data['total'];
            // this.totalRows = data['total']
          },1); 
      },err=>{ 
      })
  }
  
  editer(acquereur): void
  {
      this.dialogRef = this._matDialog.open(AddAcquereurComponent, {
          panelClass: '',
          data      : {
              acquereur:acquereur,
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
      this.dialogRef = this._matDialog.open(AddAcquereurComponent, {
          panelClass: '',
          data      :   {
            acquereur:  {},
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
    this._acquereurService.delete(element).subscribe(d=>{
        this._updateDataSource();
    })
  }
  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this._updateDataSource();
  }
}
