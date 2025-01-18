import { createReducer, on } from "@ngrx/store";
import { initialProductState } from "./product.store";
import * as productActions from "./product.actions";

export const productsReducer = createReducer(
  initialProductState,
  on(productActions.addProductAction, (state, action) => {
    return {
      ...state,
    };
  })
);
