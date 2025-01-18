import { createAction, props } from "@ngrx/store";
import { ProductModel } from "../../app/models/product.model";

export const addProductAction = createAction(
  "[Product Component] Add",
  props<{ product: ProductModel }>()
);
export const removeProductAction = createAction(
  "[Product Componnet] remove",
  props<{ id: string }>()
);
