import { Component, Input, OnInit } from '@angular/core';
import { GlobalDataSummery } from 'src/app/models/global-data';

@Component({
  selector: 'country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  @Input() countryData : GlobalDataSummery[] =[];
  constructor() { }

  ngOnInit(): void {

    let tt = this.countryData;
  }

}
