import { createAction } from "@ngrx/store";

export const incrementAction = createAction(
  "[Counter Component ] incrementAction"
);
export const decrementAction = createAction("[Counter Component ] decrement");
export const resetAction = createAction("[Counter Component] Reset");
