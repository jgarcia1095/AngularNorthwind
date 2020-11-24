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
  styleUrls: ['./product-list-container.component.scss'],
})
export class ProductListContainerComponent implements OnInit {
  constructor(private store: Store<fromReducer.ProductState>) {}
  products$: Observable<Product[]> = this.store.select(fromReducer.getProducts);
  totalRecords$: Observable<number> = this.store.select(
    fromReducer.totalRecords
  );

  pageSize = 10;
  pageSizeOptions: number[] = [10, 20, 30, 50];
  request: GetProduct;

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData(): void {
    this.request = new GetProduct(this.pageSizeOptions[0], 0);
    this.store.dispatch(new productActions.LoadProducts(this.request));
  }

  changePage(event: any): void {
    console.log(event);

    const offSet = event.pageIndex * event.pageSize;
    this.pageSize=event.pageSize;
    this.request=new GetProduct(event.pageSize,offSet);
    this.store.dispatch(new productActions.LoadProducts(this.request));
  }
}
