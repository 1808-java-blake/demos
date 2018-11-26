import * as React from 'react';
import { ClickerDisplay } from './clicker-display/clicker-display.component';
import { ClickerIncrementer } from './incrementers/clicker-incrementer.component';
import { clickStreamObservable, publishNewClicks } from '../../streams/click-stream';
import { Subscription } from 'rxjs';

interface IState {
  clicks: number;
  subscriptions: Subscription[];
}

export class ClickerComponent extends React.Component<any, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      clicks: 0,
      subscriptions: []
    };
  }

  public componentDidMount() {
    const clickSubscription = clickStreamObservable.subscribe(next => {
      console.log('nav component subscription to click stream invoked');
      this.setState({
        ...this.state, 
        clicks: next
      })
    });
    this.setState({
      ...this.state,
      subscriptions: [...this.state.subscriptions, clickSubscription]
    })
  }

  public componentWillUnmount() {
    this.state.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    })
  }

  public increment = (value: number) => {
    publishNewClicks(value + this.state.clicks);
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

