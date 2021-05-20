import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  //private globalDataUrl =`https://corona.lmao.ninja/v2/all?yesterday`

  //private globalDataUrl = `https://api.caw.sh/v3/covid-19/countries`
  private globalDataUrl = `https://api.caw.sh/v3/covid-19/all`
  constructor(private http: HttpClient) { }

  // getGlobalData(){
  //   return this.http.get(this.globalDataUrl).pipe(
  //     map(result =>{
     
  //     })
  //   )
  // }

  getGlobalData():Observable<any>{
    //let globalDataUrl =`https://corona.lmao.ninja/v2/all?yesterday`;

    //let globalDataUrl=`https://api.caw.sh/v3/covid-19/countries`
   return this.http.get<any[]>(this.globalDataUrl);
  }
}
