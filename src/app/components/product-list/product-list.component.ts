import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { Services } from '@angular/core/src/view';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // providers: [ProductService]
})
export class ProductListComponent implements OnInit {
 // data:string ['Cafe', 'Tea' , 'Jus', 'Coca-cola'];
  data: Product [];

  constructor(private _service: ProductService) { // declarer un dépendancz
    // this.data = Services.

   }

  ngOnInit() { // equivalent @postConstruct de Java EE
   // this.data = this._service.getListProduct();

   this._service.getListProduct().subscribe(
result => {this.data = result; }

   );
  }

}
