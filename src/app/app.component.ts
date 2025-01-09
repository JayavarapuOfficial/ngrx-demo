import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: ` <app-counter></app-counter> <router-outlet /> `,
  standalone: false,
  styles: [],
})
export class AppComponent {
  title = "ngrx-demo";
}
