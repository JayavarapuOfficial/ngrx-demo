import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <!-- 
    <div class="container">
      <router-outlet />
    </div> -->
    <app-top-nav></app-top-nav>
    <h1>The App1</h1>
    <router-outlet></router-outlet>
  `,
  standalone: false,
  styles: [],
})
export class AppComponent {
  title = "ngrx-demo";
}
