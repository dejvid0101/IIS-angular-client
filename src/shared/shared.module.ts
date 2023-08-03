import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCitiesComponent } from 'src/shared/view-cities/view-cities.component'
import { HttpClientModule } from '@angular/common/http';
import { CitiesTempComponent } from './view-cities/cities-temp/cities-temp.component';


@NgModule({
  declarations: [
    ViewCitiesComponent,
    CitiesTempComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    ViewCitiesComponent
  ]
})
export class SharedModule { }
