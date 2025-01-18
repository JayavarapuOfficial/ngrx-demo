import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-top-nav></app-top-nav>
    <div class="container">
      <router-outlet />
    </div>
  `,
  standalone: false,
  styles: [],
})
export class AppComponent {
  title = "ngrx-demo";
}
