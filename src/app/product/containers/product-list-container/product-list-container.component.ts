import { Component, OnInit } from '@angular/core';
import * as fromReducer from '../../state/reducers';
import * as productActions from '../../state/actions/product.actions';
import { GetProduct } from '../../models/get-product';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss']
})
export class ProductListContainerComponent implements OnInit {

  constructor(private store : Store<fromReducer.ProductState>) {}
    products$: Observable<Product[]> = this.store.select(fromReducer.getProducts);
    totalRecords$: Observable<number> = this.store.select(fromReducer.totalRecords);


  ngOnInit(): void {
    let request = new GetProduct(10,10);
    this.store.dispatch(new productActions.LoadProducts(request));
  }

}
