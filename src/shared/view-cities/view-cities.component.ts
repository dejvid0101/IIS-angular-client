import { Component } from '@angular/core';
import { switchMap } from 'rxjs';
import { DataService } from 'src/shared/data.service'
import { parseString } from 'xml2js';

@Component({
  selector: 'view-cities',
  templateUrl: './view-cities.component.html',
  styleUrls: ['./view-cities.component.scss']
})
export class ViewCitiesComponent {

  //set to true if code is incorrect according to server
  error401:boolean=false;

  public temps:string[]=[];

  inputCode:string="";

  constructor(private dataService: DataService) {
  }

  makeRequest(){
    //fetch cities with auth token after fetching with getToken
    this.dataService.getToken(this.inputCode).pipe(
      switchMap((resToken) => this.dataService.getCities(resToken))
    ).subscribe(
      (resCities) => {
        console.log(resCities);
        parseString(resCities, (err, result) => {
          
          if (err) {
            console.error('Error parsing XML:', err);
          } else {
            console.log('Parsed Object:', result);

            // You can now access the parsed object here
            this.temps=result.weatherCollection.weather.map((city:any)=>
            {
              return city.temperature[0];
            }
            )
          }
        });
      },
      (error) => {

        if(error.status===401){
          this.error401=true;
        }

        console.error('Error fetching data:', error);
      }
    );
  }

}
