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

  countries : string[] =[];
 

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
  
    this.dataService.getListofCountry()
    .subscribe(
      {
        next: (result =>{
        
       
          this.globalData = result;
          this.globalData.forEach(cs=>{
            this.countries.push(cs.country);
           
          })
        
          console.log(result);
         

        })

        
      }

     
    )
   
    


  }

  myFunction(country:any)  {

    this.globalData.forEach(cs=>{
      if(cs.country == country){
        
        this.totalConfirmed = cs.cases,
        this.totalActive = cs.active,
        this.totalDeath = cs.deaths,
        this.totalRecovered = cs.recovered
      }
    })

    //alert(country)
   }
  
}
