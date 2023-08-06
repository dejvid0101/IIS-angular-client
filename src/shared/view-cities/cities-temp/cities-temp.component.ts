import { Component, Input } from '@angular/core';

@Component({
  selector: 'cities-temp',
  templateUrl: './cities-temp.component.html',
  styleUrls: ['./cities-temp.component.scss']
})
export class CitiesTempComponent {

@Input() temps:string[]=[];

//to show/hide error dialog
@Input() unauthorized:boolean=false;

public cities=['Zagreb (HR)','Hannover (DE)','Sheffield (UK)','Linz (AT)','Plovdiv (BG)','Malaga (ES)','Aalborg (DK)', 'Innsbruck (AT)', 'Milano (IT)', 'Craiova (RO)']

constructor(){
  console.log(this.temps)
}

}
