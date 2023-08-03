import { Component, Input } from '@angular/core';

@Component({
  selector: 'cities-temp',
  templateUrl: './cities-temp.component.html',
  styleUrls: ['./cities-temp.component.scss']
})
export class CitiesTempComponent {

@Input() temps:string[]=[];

constructor(){
  setInterval(()=>console.log(this.temps),1000);
}

}
