import React from 'react';
import Canvas from 'react-canvas-component';
import PropTypes from 'prop-types';

export default class CanvasCircle extends React.Component {

  drawCanvas({ctx,time}) {
    const {width, height} = ctx.canvas;
    ctx.save()
    let currentTime = this.props.step/(this.props.value*10);
    currentTime = currentTime < 1 ? currentTime : 0;
    // console.log(currentTime);
    ctx.lineCap = "round";
    ctx.lineWidth = 6.0;
    let imd = ctx.createImageData(414,414);
    let fullCir = Math.PI*2,
        quart = Math.PI/2;
    ctx.strokeStyle = "#03a9f4";
    ctx.putImageData(imd,0,0);
    ctx.beginPath();
    ctx.arc(206,206,203,(-quart),(fullCir*(1-currentTime)-quart),false);
    ctx.stroke();
    ctx.restore();
  }

  render() {
    return (
      
      <Canvas id="circle" draw={this.drawCanvas.bind(this)} width={414} height={414} realtime/>
    )
  }
}