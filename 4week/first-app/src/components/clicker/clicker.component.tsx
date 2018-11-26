import * as React from 'react';
import { ClickerDisplay } from './clicker-display/clicker-display.component';
import { ClickerIncrementer } from './incrementers/clicker-incrementer.component';

interface IState {
  clicks: number;
}

export class ClickerComponent extends React.Component<any, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      clicks: 5
    };
  }

  public increment = (value: number) => {
    this.setState({
      ...this.state,
      clicks: this.state.clicks + value
    });
  }

  public render() {
    return (
      <div>
        <ClickerDisplay clicks={this.state.clicks} />
        <ClickerIncrementer
          increment={this.increment}
          value={1}
          name="Click!" />
        {(this.state.clicks >= 20) && <ClickerIncrementer
          increment={this.increment}
          value={5}
          name="Big Click!" />}
      </div>
    );
  }
}

