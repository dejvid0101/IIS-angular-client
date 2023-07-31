import { Component } from '@angular/core';
import { DataService } from 'src/shared/data.service'
import { parseString } from 'xml2js';

@Component({
  selector: 'view-cities',
  templateUrl: './view-cities.component.html',
  styleUrls: ['./view-cities.component.scss']
})
export class ViewCitiesComponent {
  constructor(private dataService: DataService) { 
    //fetch XML
    this.dataService.getData().subscribe((response) => {
      console.log(response);
      parseString(response, (err, result) => {
      if (err) {
        console.error('Error parsing XML:', err);
      } else {
        console.log('Parsed Object:', result);
        // You can now access the parsed object here
      }
    });
    });

    
  }

  

}
