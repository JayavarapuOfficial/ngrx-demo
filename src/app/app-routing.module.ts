import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./components/counter/counter.component";
import { ProductComponent } from "./components/product/product.component";
import { HomeComponent } from "./home/containers/home/home.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  {
    path: "home",
    loadChildren: async () =>
      import("./home/home.module").then((_) => _.HomeModule),
  },
  {
    path: "event",
    loadChildren: async () =>
      import("./event/event.module").then((_) => _.EventModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
