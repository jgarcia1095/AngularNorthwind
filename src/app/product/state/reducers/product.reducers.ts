import { Product } from 'src/app/product/models/product';
import { ProductActionTypes } from '../actions/product.actions';
import * as ProductActions from '../actions/product.actions'

export interface State {
  products: Product[];
  totalRecords: number;
}

const initialState: State = {
  products: [],
  totalRecords: 0,
};

export function ProductReducer(state=initialState,action:ProductActions.Actions){
  switch (action.type) {
    case ProductActions.ProductActionTypes.LoadProducts:
    return state;
    case ProductActions.ProductActionTypes.LoadProductsComplete:
      return {
        //se genera una copia del estado anterior
        ...state,
          products: action.payload.Data,
          totalRecords: action.payload.TotalRecords
      };
    default:
      return state;
  }
}

export const getProducts=(state:State)=>state.products;
export const getTotalRecords=(state:State)=>state.totalRecords;
