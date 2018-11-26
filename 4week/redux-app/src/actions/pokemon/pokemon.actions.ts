import { PokemonSprite } from "../../model/PokemonSprite";

export const pokemonTypes = {
  UPDATE_ID: 'UPDATE_POKEMON_ID',
  UPDATE_POKEMON: 'UPDATE_POKEMON',
}

export const updateId = (id: number) => {
  return {
    payload: {
      pokeId: id
    },
    type: pokemonTypes.UPDATE_ID
  }
}

export const fetchPokemon = (id: number) => (dispatch: any) => {
  const getPokemon: any = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  getPokemon
    .then((resp: any) => {
      return resp.json();
    })
    .then((respObj: any) => {
      const sprites = [];
      for(const label in respObj.sprites) {
        if (label) {
          sprites.push(new PokemonSprite(label, respObj.sprites[label]));
        }
      }

      dispatch({
        payload: {
          pokemon: {
            name: respObj.name,
            sprites
          }
        },
        type: pokemonTypes.UPDATE_POKEMON,
      });
    })
    .catch((err: any) => {
      console.log(err);
    })
}
