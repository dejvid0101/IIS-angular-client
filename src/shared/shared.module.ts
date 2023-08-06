import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCitiesComponent } from 'src/shared/view-cities/view-cities.component'
import { HttpClientModule } from '@angular/common/http';
import { CitiesTempComponent } from './view-cities/cities-temp/cities-temp.component';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    ViewCitiesComponent,
    CitiesTempComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    ProgressSpinnerModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    FormsModule
  ],
  exports:[
    ViewCitiesComponent
  ]
})
export class SharedModule { }
