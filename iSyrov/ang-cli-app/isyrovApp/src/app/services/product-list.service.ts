import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class ProductListService {

  constructor(public http:Http) {}

  getProducts() {
    console.log('json called');


    return new Promise(resolve => {
      this.http.get('assets/data/products.json').map((res:Response) => res.json()).subscribe((data) => {
        resolve( data );
      });
    });


  }
}
