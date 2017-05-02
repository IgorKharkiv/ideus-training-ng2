import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {

  constructor(private http: Http) {

  }

  public getProducts(): Promise<any> {
    return this.http.get("http://localhost:4200/products.json")
    .toPromise()
    .then(data => data.json());
  }

}
