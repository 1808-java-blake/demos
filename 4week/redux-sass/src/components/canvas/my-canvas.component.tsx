import * as React from 'react';
import { windowStream } from '../../streams/window-side.steam';
import { Subscription } from 'rxjs';

export class MyCanvas extends React.Component<any, {}> {

  public canvas: any;
  public isDrawing = false;
  private windowSubscription: Subscription;

  constructor(props: any) {
    super(props);
    this.canvas = React.createRef();
    // this.canvas.
  }

  public componentDidMount() {

    // initialize the size of the canvas based off the window size
    const modifier = 0.80;
    const current = this.canvas.current;
    current.width = modifier * window.innerWidth;
    current.height = modifier * window.innerHeight;

    // update the size of the canvas everytime the window size changes
    this.windowSubscription = windowStream.subscribe(newDimension => {
      const ctx = this.getContext();
      const savedRect = ctx.getImageData(0, 0, current.width, current.height);
      current.width = modifier * newDimension.width;
      current.height = modifier * newDimension.height;
      ctx.putImageData(savedRect, 0, 0);
    })
  }

  /**
   * Helper method to retreive the reference for the canvas context
   */
  public getContext(): CanvasRenderingContext2D {
    return this.canvas.current.getContext("2d");
  }

  /**
   * logic to draw based on connecting the points between current point and last point when events are registered
   */
  public draw = (e: any) => {
    if (this.isDrawing) {
      const current = this.canvas.current;
      const context: CanvasRenderingContext2D = current.getContext("2d");
      context.strokeStyle = '#ff4141';
      context.lineWidth = 10;
      context.lineCap = "round";
      context.lineTo(e.pageX - current.offsetLeft, e.pageY - current.offsetTop)
      context.stroke()
    }
  }

  
  public stopDraw = () => {
    this.isDrawing = false;
  }

  public startDraw = (e: any) => {
    this.isDrawing = true;
    const context = this.getContext();
    const current = this.canvas.current;
    context.moveTo(e.pageX - current.offsetLeft, e.pageY - current.offsetTop);
    context.beginPath();
  }

  public render() {
    return (
      <div className="canvas-container">
        <canvas id="my-canvas"
          ref={this.canvas}
          onMouseMove={this.draw}
          onMouseDown={this.startDraw}
          onMouseUp={this.stopDraw}
          onMouseOut={this.stopDraw}> 
        </canvas>
        <div className="side-bar">
          <div> Upgrade 1 </div>
          <div> Upgrade 2 </div>
          <div> Upgrade 3 </div>
          <div> Upgrade 4 </div>
          <div> Upgrade 5 </div>
          <div> Upgrade 6 </div>
        </div>
      </div>
    );
  }

  public componentWillUnmount() {
    this.windowSubscription.unsubscribe();
  }
}

