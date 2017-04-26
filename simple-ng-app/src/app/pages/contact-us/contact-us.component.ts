import { Component } from '@angular/core';


// Declaration:
@Component({
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent {
  title = 'Contact us page';
  text = 'Lorem ipsum dolor sit amet...';
  map = {
  	markers: [
	  	{ lat: 51.678418, lng: 7.809007, info: 'Super awesome marker!' }
  	],
  	zoom: 4,
  	mapClick() {
  		console.log('Map is clicked...');
  	}
  };
}
