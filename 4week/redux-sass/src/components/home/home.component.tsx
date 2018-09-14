import * as React from 'react';
declare let CanvasDraw: any;
import CanvasDraw from "react-canvas-draw";

export class HomeComponent extends React.Component {

  public render() {
    return (
      <div>
        <CanvasDraw />
      </div>
    );
  }
}

