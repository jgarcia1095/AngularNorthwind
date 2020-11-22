import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProductReducer from '../reducers/product.reducers';

export interface ProductState {
  product: fromProductReducer.State;
}

export const reducers: ActionReducerMap<ProductState> = {
  product:fromProductReducer.ProductReducer
}

export const getProductModuleState=createFeatureSelector<ProductState>('product');
export const getProductState=createSelector(getProductModuleState,state=>state.product);

export const getProducts=createSelector(getProductState,fromProductReducer.getProducts);
export const totalRecords=createSelector(getProductState,fromProductReducer.getTotalRecords);

