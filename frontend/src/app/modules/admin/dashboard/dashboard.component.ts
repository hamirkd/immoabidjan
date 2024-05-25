import { Component, OnInit, ViewEncapsulation } from '@angular/core'; 
import { FormControl } from '@angular/forms';
import { DashboardService } from 'app/core/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  
 constructor() { }

  ngOnInit(): void {
     
  }

}
