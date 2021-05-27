import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
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
  selectedCountry : string = "";

  countries : any[] =[];



  globalData: GlobalDataSummery[] = [];
  countryWiseData : GlobalDataSummery[] =[];
  pieChart : GoogleChartInterface = {
    chartType : 'PieChart'

  }



   constructor(private dataService : DataServiceService) { }



  ngOnInit(): void {
    this.getWordwideData();
    this.getCoutryList();
  }

  getWordwideData() {
    let self = this;
    this.selectedCountry = "Worldwide";
    this.dataService.getGlobalData()
    .subscribe(
      {
        next: (result) =>{

          self.globalData = result;

          self.totalConfirmed = result.cases,
          self.totalActive = result.active,
          self.totalDeath = result.deaths,
          self.totalRecovered = result.recovered


          console.log(result);



        }
      })
 }

  getCoutryList(){

    let self = this;
    this.dataService.getListofCountry()
    .subscribe(
      {
        next: (result =>{


          self.countryWiseData = result;
          //this.globalData.push(result);
          self.countryWiseData.forEach(cs=>{
            self.countries.push(cs.country);

          })

          console.log(result);
          self.initCountryChart();
        })
      }
    )
  }

  initCountryChart(){

    let datatable = [];
    datatable.push(["Country","Cases"])
    this.countryWiseData.forEach(cs=>{
      datatable.push([
        cs.country , cs.active
      ])
    })
    console.log(datatable);

    this.pieChart = {
      chartType: 'PieChart',
      dataTable: datatable,
      //firstRowIsData: true,
      options: {'Country': 'Cases'},
    };
  }


  initChart(){

    let datatable = [];
    datatable.push(["Country","Cases"])
    this.globalData.forEach(cs=>{
      datatable.push([
        cs.country , cs.active
      ])
    })
    console.log(datatable);

    this.pieChart = {
      chartType: 'PieChart',
      dataTable: datatable,
      //firstRowIsData: true,
      options: {'Country': 'Cases'},
    };
  }




  myFunction(country:any)  {

    this.countryWiseData.forEach(cs=>{
      if(cs.country == country){

        this.totalConfirmed = cs.cases,
        this.totalActive = cs.active,
        this.totalDeath = cs.deaths,
        this.totalRecovered = cs.recovered
        this.selectedCountry = cs.country;
      }
    })

    console.log(country);

   }

}
