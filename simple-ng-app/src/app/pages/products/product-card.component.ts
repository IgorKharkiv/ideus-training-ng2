import { Component, Input } from '@angular/core';


// Declaration:
@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./products.component.scss']
})


// Export:
export class ProductCardComponent {  
  @Input() image: string;
  @Input() title: string;
  @Input() descr: string;
  @Input() price: string;
  @Input() tags:  any;
  @Input() state: boolean;
}