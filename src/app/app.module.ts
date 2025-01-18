import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "../state/counter/counter.reducer";
import { CounterComponent } from "./components/counter/counter.component";
import { TopNavComponent } from "./layputs/top-nav/top-nav.component";
import { ProductComponent } from "./components/product/product.component";
import { productsReducer } from "../state/product/product.reducer";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { MaterialModule } from "./mat.module";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TopNavComponent,
    ProductComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer, products: productsReducer }),
    MaterialModule,
    EffectsModule.forRoot([]),
    HttpClientModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
