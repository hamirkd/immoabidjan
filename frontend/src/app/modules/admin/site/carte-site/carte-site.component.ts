import { Component, OnInit, Input} from '@angular/core';
import { Acquisition } from 'app/models/acquisition.model';

import Highcharts from "highcharts/highmaps";
 
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

 

@Component({
  selector: 'app-carte-site', 
  templateUrl: './carte-site.component.html',
  styleUrls: ['./carte-site.component.scss']
})
export class CarteSiteComponent implements OnInit {

  @Input() geoJSON;
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = "mapChart";
   isRefresh = true;
  
   dataSource: MatTableDataSource<{code,name}> = new MatTableDataSource();

   displayedColumns: string[] = [
       'code',
       'name',
       'contenance'
   ];
  constructor(private http: HttpClient) {
    // this.ngOnInit();
   }

  ngOnInit(){
    console.log(this.geoJSON)
    let st : string ="dao"
    let dataSource = []
    this.geoJSON['features'].forEach(o=>{
      dataSource.push({code:o.properties.code,name:o.properties.name,contenance:o.properties.contenance})
    })
    dataSource.sort((a,b)=>a.name.localeCompare(b.name))
    this.dataSource.data = dataSource
      this.chartOptions = 
      {
       chart: {
         map: this.geoJSON
       },
       title: {
         text: "Highmaps basic demo"
       },
       subtitle: { },
       mapNavigation: {
         enabled: true,
         buttonOptions: {
           alignTo: "spacingBox"
         }
       },
       legend: {
         enabled: true
       },
       colorAxis: {
         min: 0
       },
       series: [
         {
           type: "map",
           name: "Random data",
           states: {
             hover: {
               color: "#BADA55"
             }
           },
           dataLabels: {
             enabled: true,
             format: "{point.name}"
           },
           allAreas: true
         }
       ],
       
    exporting: {
      showTable: true,
      allowHTML: true
    }
     };

     this.isRefresh = false;
     setTimeout(() => {
     this.isRefresh = true;
     }, 1);
    
    
  }
  enPleinEcran=false
  chartOptions: Highcharts.Options ={};
  togglePleinEcran() {
    this.enPleinEcran = !this.enPleinEcran;
    // Highcharts.chart(this.chartOptions).reflow();
    this.isRefresh = false;
     setTimeout(() => {
     this.isRefresh = true;
     }, 1);
  }
}
