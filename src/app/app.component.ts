import { Component } from '@angular/core';
import * as DashedElements from './dashed-elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    Object.keys(DashedElements).forEach(key => {
      console.log(DashedElements[key].name);
      if (key == 'DashedButton') {
        console.log('customProperties', DashedElements[key].prototype);
      }
    });
  }
}
