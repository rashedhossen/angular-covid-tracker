import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

 
  //let wordlwide 

  private globalDataUrlCountryWise = `https://api.caw.sh/v3/covid-19/countries`
  private globalDataUrl = `https://api.caw.sh/v3/covid-19/all`
 // private globalDataUrl = `https://api.caw.sh/v3/covid-19/countries`
  



  
  constructor(private http: HttpClient) { }



  getGlobalData():Observable<any>{
    
   return this.http.get<any[]>(this.globalDataUrl);
  }


  getListofCountry():Observable<any>{
  
   return this.http.get<any[]>(this.globalDataUrlCountryWise);
  }

}
