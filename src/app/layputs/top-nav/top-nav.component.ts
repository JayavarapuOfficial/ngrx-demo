import { Component } from "@angular/core";

@Component({
  selector: "app-top-nav",
  standalone: false,
  template: `<div class="menu">
    <button [routerLink]="['/home']" routerLinkActive="router-link-active">
      Home
    </button>
    <button [routerLink]="['/event']" routerLinkActive="router-link-active">
      Event
    </button>
  </div>`,
  styles: `
  .menu{
    display: flex
  }
  .router-link-active {
    color: blue
  }
  `,
})
export class TopNavComponent {}
