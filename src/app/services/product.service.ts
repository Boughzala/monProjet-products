import { Injectable } from '@angular/core';
import { Product } from '../domain/product';

@Injectable()
export class ProductService {

  constructor() { }

  public getListProduct(): Product[] {
    return [
      {code: 'p1', label : 'From service Cafe', unitPrice: 500.5},
      {code: 'p2', label : 'Tea', unitPrice: 800.5},
      {code: 'p3', label : 'Jus', unitPrice: 400.5},
      {code: 'p4', label : 'Coca-cola', unitPrice: 600.5},
      {code: 'p5', label : 'Water', unitPrice: 600.5}
  ];
  }
}
