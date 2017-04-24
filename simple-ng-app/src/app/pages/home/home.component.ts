import { Component } from '@angular/core';


// Declaration:
@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


// Export:
export class HomeComponent {
  // Data:
  private data = {
    title: 'Home page',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos impedit ratione ad rem, eos cupiditate ipsum libero rerum tempora a, quo quia quam optio saepe, consequuntur cum vel repudiandae quisquam!'
  };

  title = this.data.title;
  text = this.data.text.split('\n');
}
