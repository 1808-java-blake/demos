import * as React from 'react';
import { ClickerDisplay } from './clicker-display/clicker-display.component';
import { ClickerIncrementer } from './incrementers/clicker-incrementer.component';
import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { increment, buyJoke } from '../../actions/clicker/clicker.actions'

interface IProps {
  increment: (amount: number) => any,
  clicks: number
  buyJoke: () => void
}

export class ClickerComponent extends React.Component<IProps, {}> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>
        <ClickerDisplay clicks={this.props.clicks} />
        <ClickerIncrementer
          increment={this.props.increment}
          value={1}
          name="Click!" />
        {(this.props.clicks >= 20) && <ClickerIncrementer
          increment={this.props.increment}
          value={5}
          name="Big Click!" />}
        {(this.props.clicks >= 20) &&
          <button
            className="btn rev-btn"
            onClick={this.props.buyJoke}
          >
            Buy Joke
          </button>}
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => (state.clicker);

const mapDispatchToProps = {
  buyJoke,
  increment,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClickerComponent)
