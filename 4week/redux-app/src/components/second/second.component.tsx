import * as React from 'react';
import { FirstComponent } from '../first/first.component';

export class SecondComponent extends React.Component {
  public render() {
    return (
      <div>
        <p>
          second component
        </p>
        <FirstComponent />
        <p>
          below first in second
        </p>
      </div>
    );
  }
}

