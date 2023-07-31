import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCitiesComponent } from 'src/shared/view-cities/view-cities.component'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ViewCitiesComponent
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
