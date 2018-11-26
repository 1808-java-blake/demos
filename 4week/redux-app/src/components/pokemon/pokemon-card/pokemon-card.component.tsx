import * as React from 'react';

export const PokemonCard: React.StatelessComponent<any> = (props: any) => {
  // ToDo: Create this component
  return (
    <div className="card col-md-6 col-lg-3 pokemon-card">
      <img className="card-img-top sprite-image" src={props.sprite.url} alt="Card image cap" />
      <div className="card-body">
        <p className="card-text sprite-label">{props.sprite.label}</p>
      </div>
    </div>
  )
}
