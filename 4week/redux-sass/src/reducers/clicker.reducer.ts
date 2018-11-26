import { clickerTypes } from "../actions/clicker/clicker.types";
import { IClickerState } from ".";

const initialState: IClickerState = {
  clicks: 0
}

export const clickerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case clickerTypes.INCREMENT:
      return {
        ...state,
        clicks: action.payload.amount + state.clicks
      }

    case clickerTypes.BUY_JOKE:
      return {
        ...state,
        clicks: state.clicks - 20
      }
  }
  return state;
}
