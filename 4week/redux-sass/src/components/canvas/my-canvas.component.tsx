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
    const current = this.canvas.current;
    current.width = window.innerWidth;
    current.height = window.innerHeight;
    this.windowSubscription = windowStream.subscribe(newDimension => {
      const ctx = this.getContext();
      const savedRect = ctx.getImageData(0, 0, current.width, current.height);
      current.width = newDimension.width;
      current.height = newDimension.height;
      ctx.putImageData(savedRect, 0, 0);
    })
  }

  public getContext(): CanvasRenderingContext2D {
    return this.canvas.current.getContext("2d");
  }

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
      <canvas id="my-canvas"
        ref={this.canvas} 
        onMouseMove={this.draw} 
        onMouseDown={this.startDraw}
        onMouseUp={this.stopDraw}
        onMouseOut={this.stopDraw}> </canvas>
    );
  }

  public componentWillUnmount() {
    this.windowSubscription.unsubscribe();
  }
}

