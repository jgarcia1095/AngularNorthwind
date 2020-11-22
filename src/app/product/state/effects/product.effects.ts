import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from 'src/app/product/services/product.service';
import * as productActions from '../actions/product.actions'
import {map, switchMap} from 'rxjs/operators';

@Injectable()
export class ProductEffects{
constructor(private productService:ProductService,
            private actions$:Actions){}

@Effect()
getProducts$ = this.actions$.pipe(
  ofType<productActions.LoadProducts>(productActions.ProductActionTypes.LoadProducts),
  switchMap(action=>this.productService.getProducts(action.request)
                          .pipe(
                            map(data=>new productActions.LoadProductsComplete(data))
                          ))
)
}
