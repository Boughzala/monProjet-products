import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 // data:string ['Cafe', 'Tea' , 'Jus', 'Coca-cola'];
  data: Product [];

  constructor() {
    this.data = [
      {code: 'p1', label : 'Cafe', unitPrice: 500.5},
      {code: 'p2', label : 'Tea', unitPrice: 800.5},
      {code: 'p3', label : 'Jus', unitPrice: 400.5},
      {code: 'p3', label : 'Coca-cola', unitPrice: 600.5}
  ];

   }

  ngOnInit() {
  }

}
