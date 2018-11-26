import * as React from 'react';
import { shallow } from 'enzyme';
import { PokemonCard } from './pokemon-card.component';

describe('<PokemonCard /> ', () => {

  it ('should contain the card, image, and label', () => {
    const sprite = {
      label: "back default",
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"
    }
    const wrapper = shallow(<PokemonCard sprite={sprite} />)
    expect(wrapper.find('.pokemon-card').exists()).toEqual(true);
    expect(wrapper.find('img.sprite-image').exists()).toEqual(true);
    expect(wrapper.find('p.sprite-label').exists()).toEqual(true);
  })


})
