import * as React from 'react';
import { shallow } from 'enzyme';
import { PokemonComponent } from './pokemon.component';
import { PokemonCard } from './pokemon-card/pokemon-card.component';

describe('<PokemonComponent />', () => {
  const filler: any = null;

  it('Should call fetchPokemon with the appropriate id', () => {
    const id = 5;
    const fetchPokemon = jest.fn();
    const wrapper = shallow(
      <PokemonComponent
        pokeId={5}
        pokemon={filler}
        fetchPokemon={fetchPokemon}
        updateId={filler} />);

    const button = wrapper.find('#fetch-pokemon');
    button.simulate('click');
    expect(fetchPokemon).toBeCalledWith(id);
  });

  it('Should call update id appriate id when user enters input', () => {
    const id = 5;
    const updatePokemon = jest.fn();
    const wrapper = shallow(
      <PokemonComponent
        pokeId={id}
        pokemon={filler}
        fetchPokemon={filler}
        updateId={updatePokemon} />);

    const input = wrapper.find('#input-pokemon-id')
    input.simulate('change', { target: { value: 15 } });
    expect(updatePokemon).toBeCalledWith(15);
  });

  it('Should contain a <PokemonCard /> for each sprite', () => {
    const pokemon: any = {
      name: '',
      sprites: [
        {
          label: "back_default",
          url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
        },
        {
          label: "back_female",
          url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png",
        },
        {
          label: "back_shiny",
          url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png",
        },
        {
          label: "back_shiny_female",
          url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png",
        },
        {
          label: "front_default",
          url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        },
        {
          label: "front_female",
          url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png",
        },
        {
          label: "front_shiny",
          url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
        },
        {
          label: "front_shiny_female",
          url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png",
        }
      ]
    }
    const wrapper = shallow(
    <PokemonComponent
      pokeId={filler}
      pokemon={pokemon}
      fetchPokemon={filler}
      updateId={filler} />);
  expect(wrapper.find(PokemonCard)).toHaveLength(8);
});
})