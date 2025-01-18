import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { MatButton } from "@angular/material/button";
import {
  decrementAction,
  incrementAction,
  resetAction,
} from "../../../state/counter/counter.actions";

@Component({
  selector: "app-counter",
  standalone: false,

  template: ` Counter display Value: {{ counterDisplay }}
    <br />

    <button mat-raised-button color="primary" (click)="handleIncrement()">
      Increment(+)
    </button>
    <button mat-raised-button color="accent" (click)="handleReset()">
      Reset
    </button>

    <button (click)="handleDecrementI()" mat-raised-button color="warn">
      Decrement(-)
    </button>`,
  styles: `
  button{
    margin:2px;
  }`,
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
