import { IPokemonState } from ".";
import { pokemonTypes } from "../actions/pokemon/pokemon.actions";

const initialState: IPokemonState = {
 pokeId: 0,
 pokemon: null
}

export const pokemonReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case pokemonTypes.UPDATE_ID:
      return {
        ...state,
        pokeId: action.payload.pokeId
      }
    case pokemonTypes.UPDATE_POKEMON:
      return {
        ...state,
        pokemon: action.payload.pokemon
      }
  }

  return state;
}