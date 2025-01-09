import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  decrementAction,
  incrementAction,
  resetAction,
} from "../../../state/counter/counter.actions";

@Component({
  selector: "app-counter",
  standalone: false,

  template: ` Hello {{ counterDisplay }}
    <button (click)="handleIncrement()">+</button
    ><button (click)="handleDecrementI()" )>-</button>`,
  styles: ``,
})
export class CounterComponent implements OnInit {
  counterDisplay!: number;
  constructor(private store: Store<{ counter: { counter: number } }>) {
    console.log(typeof this.store.select("counter"));
  }
  ngOnInit(): void {
    this.store.select("counter").subscribe((_) => {
      this.counterDisplay = _.counter;
    });
  }

  handleIncrement() {
    this.store.dispatch(incrementAction());
  }
  handleDecrementI() {
    this.store.dispatch(decrementAction());
  }
  handleReset() {
    this.store.dispatch(resetAction());
  }
}
