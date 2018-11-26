import * as React from 'react';
import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { buyJoke } from '../../actions/clicker/clicker.actions';

class ChuckNorrisComponent extends React.Component<any, {}> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>
        {this.props.norris.joke}

        {(this.props.clicks >= 20) &&
          <button
            className="btn btn-primary"
            onClick={this.props.buyJoke}
            disabled={!this.props.norris.buyJokeEnabled}
          >
            Buy Joke
          </button>}
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    clicks: state.clicker.clicks,
    norris: state.chuckNorris
  }
}

const mapDispatchToProps = {
  buyJoke
}

export default connect(mapStateToProps, mapDispatchToProps)(ChuckNorrisComponent);
