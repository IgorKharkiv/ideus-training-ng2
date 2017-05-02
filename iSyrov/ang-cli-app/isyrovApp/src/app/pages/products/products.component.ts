import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../../services/product-list.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ ProductListService ]
})
export class ProductsComponent implements OnInit {

  data : {};
  productList : any[];

  constructor( private _productListService : ProductListService ) { }

  ngOnInit() {

    this._productListService.getProducts().then((data) => {
      console.log("what is in the data ", data);
      this.data = data;
      this.productList = this.data['products'];
    });

  }

}
