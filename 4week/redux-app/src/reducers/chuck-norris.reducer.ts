import { clickerTypes } from "../actions/clicker/clicker.types";
import { IChuckNorrisState } from ".";
import { chuckNorrisTypes } from "../actions/chuck-norris/chuck-norris.types";


const initialState: IChuckNorrisState = {
  buyJokeEnabled: true,
  joke: `This reducer won't work, you cannot reduce Chuck Norris`
}

export const chuckNorrisReducer = (state = initialState, action: any) => {
  switch (action.type) {

    case clickerTypes.BUY_JOKE:
      return {
        ...state,
        joke: action.payload.joke
      }

    case chuckNorrisTypes.TOGGLE_BUY_JOKE:
      return {
        ...state,
        buyJokeEnabled: action.payload.buyJokeEnabled
      }
  }
  return state;
}
