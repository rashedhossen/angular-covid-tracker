import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { GlobalDataSummery } from 'src/app/models/global-data';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalConfirmed = 0;
  totalActive = 0;
  totalDeath = 0;
  totalRecovered = 0;


  //globalData!: GlobalDataSummery[];

  //data: any;

  globalData!: GlobalDataSummery[];
  
   constructor(private dataService : DataServiceService) { }

  ngOnInit(): void {

    this.dataService.getGlobalData()
    .subscribe(
      {
        next: (result =>{
        
          this.globalData = result;

          this.totalConfirmed = result.cases,
          this.totalActive = result.active,
          this.totalDeath = result.deaths,
          this.totalRecovered = result.recovered
          console.log(result);
         

        })
      }
    )
  
   
    


  }

}
