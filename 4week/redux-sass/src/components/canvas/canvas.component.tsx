class MyCanvas extends React.Component {
  
  public componentDidMount() {
    const canvas: any = document.getElementById('can');
    if (canvas != null) {
      const ctx = canvas.getContext("2d")
      if (ctx !== null) {
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(0,0,150,75);
      }
    }
    
  }
  public render() {
    return(
      <div>
        <canvas id="can" width="400" height="400"></canvas>
      </div>
    )
  }
}