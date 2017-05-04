import { Component } from '@angular/core';


// Declaration:
@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})


// Export:
export class NavigationComponent {
  constructor() {
  	console.log(arguments);
  }
}