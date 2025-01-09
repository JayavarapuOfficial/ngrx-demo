import { createReducer, on } from "@ngrx/store";
import * as CounterActions from "./counter.actions";
import { initialCounterState } from "./coutner.state";

export const counterReducer = createReducer(
  initialCounterState,
  on(CounterActions.incrementAction, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(CounterActions.decrementAction, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(CounterActions.resetAction, (state) => {
    return {
      ...state,
      counter: 0,
    };
  })
);
