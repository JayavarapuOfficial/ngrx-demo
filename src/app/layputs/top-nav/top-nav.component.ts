import { Component } from "@angular/core";

@Component({
  selector: "app-top-nav",
  standalone: false,

  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">NGRX Demo </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" routerLinkActive="active" routerLink="/counter"
              >Counter</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLinkActive="active" routerLink="/product"
              >Product</a
            >
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: `
  `,
})
export class TopNavComponent {}
