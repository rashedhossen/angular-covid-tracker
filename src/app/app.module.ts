import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';
import { CountryListComponent } from './components/country-list/country-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list'; 
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CountriesComponent,
    CountryListComponent,
    CountryListComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatGridListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
