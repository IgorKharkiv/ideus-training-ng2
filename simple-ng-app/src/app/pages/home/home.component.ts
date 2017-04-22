import { Component } from '@angular/core';


// Declaration:
@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  title = 'Home page';
  text = 'Lorem ipsum dolor sit amet...';
}
