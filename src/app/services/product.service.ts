import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../domain/product';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProductService {

  constructor(private _service: HttpClient) { }

  url: string = 'http://localhost:3000/products';

  public getListProduct(): Observable<Product[]> {
    return this._service.get<Product[]>(this.url);
  }
}
