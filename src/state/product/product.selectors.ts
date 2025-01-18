import { createFeatureSelector } from "@ngrx/store";
import { ProductModel } from "../../app/models/product.model";

export const productsSelector =
  createFeatureSelector<ProductModel[]>("products");
