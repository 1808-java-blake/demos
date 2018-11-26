import * as React from 'react';
import { PokemonCard } from './pokemon-card/pokemon-card.component';
import { IState, IPokemonState } from '../../reducers';
import { connect } from 'react-redux';
import { fetchPokemon, updateId } from '../../actions/pokemon/pokemon.actions';

interface IProps extends IPokemonState {
  fetchPokemon: (id: number) => any,
  updateId: (id: number) => any
}

export class PokemonComponent extends React.Component<IProps, any> {

  public render() {
    const { pokeId, pokemon } = this.props;
    return (
      <div>
        <input id="input-pokemon-id"
          value={pokeId}
          onChange={(event: any) => { this.props.updateId(event.target.value) }} />
        <button id="fetch-pokemon"
          className="btn btn-primary"
          onClick={() => { this.props.fetchPokemon(pokeId) }}>
          Fetch Pokemon
        </button>
        <br />
        <div className="container">
          <div className="row">
            {pokemon && pokemon.sprites &&
              pokemon.sprites.map((sprite: any) =>
                <PokemonCard key={sprite.label} sprite={sprite} />
              )
            }
          </div>
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => state.pokemon;
const mapDispatchToProps = {
  fetchPokemon,
  updateId
}

export default connect(mapStateToProps, mapDispatchToProps)
  (PokemonComponent);
