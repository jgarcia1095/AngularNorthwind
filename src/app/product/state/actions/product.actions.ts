import { Action } from '@ngrx/store'
import { GetProduct } from 'src/app/product/models/get-product';
import { ProductList } from 'src/app/product/models/product-list';

export enum ProductActionTypes{
  LoadProducts = '[Product] Load Products',
  LoadProductsComplete = '[Product] Load Products Complete',
}

export class LoadProducts implements Action{
  readonly type = ProductActionTypes.LoadProducts;
  constructor(public request:GetProduct){}
}
export class LoadProductsComplete implements Action{
  readonly type = ProductActionTypes.LoadProductsComplete;
  constructor(public payload: ProductList){}
}
export type Actions = LoadProducts | LoadProductsComplete;
