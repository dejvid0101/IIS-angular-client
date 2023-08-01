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
  constructor(private dataService: DataService) { 
    //fetch cities with auth token after fetching with getToken
    this.dataService.getToken().pipe(
      switchMap((resToken) => this.dataService.getCities(resToken))
    ).subscribe(
      (resCities) => {
        parseString(resCities, (err, result) => {
          if (err) {
            console.error('Error parsing XML:', err);
          } else {
            console.log('Parsed Object:', result);
            // You can now access the parsed object here
          }
        });
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

    
  }

  

}
