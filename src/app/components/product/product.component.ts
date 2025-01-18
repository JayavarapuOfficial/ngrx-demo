import { Component, OnInit } from "@angular/core";
import { ProductModel } from "../../models/product.model";
import { Store } from "@ngrx/store";
import { productsSelector } from "../../../state/product/product.selectors";

@Component({
  selector: "app-product",
  standalone: false,

  template: `
    <ul>
      <li *ngFor="let product of products">
        {{ product.title }}
      </li>
      '
    </ul>
  `,
  styles: ``,
})
export class ProductComponent implements OnInit {
  constructor(
    private store: Store<{ products: ReadonlyArray<ProductModel> }>
  ) {}
  products!: ProductModel[];
  ngOnInit(): void {
    this.store.select(productsSelector).subscribe((_) => {
      this.products = _;
    });
  }
}
