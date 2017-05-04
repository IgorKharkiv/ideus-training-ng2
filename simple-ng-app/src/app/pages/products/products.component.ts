import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


// Declaration:
@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})


// Export:
export class ProductsComponent {
  title = 'Products page';
  text = 'Lorem ipsum dolor sit amet...';
  products = [];

  constructor(http: Http) {
    http.get('./json/products.json')
      .map(res => res.json())
      .subscribe(products => {
      	this.products = products;
      });
  }
}
