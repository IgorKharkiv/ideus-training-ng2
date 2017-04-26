import { Component } from '@angular/core';


// Declaration:
@Component({
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})


// Export:
export class AboutUsComponent {
  title = 'About us page';
  image = './assets/images/about-us-img.jpg';
  text = ('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos impedit ratione ad rem, eos cupiditate ipsum libero rerum tempora a, quo quia quam optio saepe, consequuntur cum vel repudiandae quisquam!\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos impedit ratione ad rem, eos cupiditate ipsum libero rerum tempora a, quo quia quam optio saepe, consequuntur cum vel repudiandae quisquam!\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos impedit ratione ad rem, eos cupiditate ipsum libero rerum tempora a, quo quia quam optio saepe, consequuntur cum vel repudiandae quisquam!').split('\n');
}
