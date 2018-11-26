import { clickerTypes } from "./clicker.types";
import { chuckNorrisTypes } from "../chuck-norris/chuck-norris.types";

export const increment = (amount: number) => {
  return {
    payload: {
      amount
    },
    type: clickerTypes.INCREMENT
  }
}

export const buyJoke = () => (dispatch: any) => {
  dispatch({
    payload: {
      buyJokeEnabled: false
    },
    type: chuckNorrisTypes.TOGGLE_BUY_JOKE
  })
  const getJoke: any = fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]');
  getJoke
    .then((resp: any) => {
      return resp.json();
    })
    .then((respObj: any) => {
      console.log(respObj);
      dispatch({
        payload: {
          joke: respObj.value.joke
        },
        type: clickerTypes.BUY_JOKE,
      });
    })
    .catch((err: any) => {
      console.log(err);
    })
    .finally(() => {
      dispatch({
        payload: {
          buyJokeEnabled: true
        },
        type: chuckNorrisTypes.TOGGLE_BUY_JOKE
      })
    })
}
