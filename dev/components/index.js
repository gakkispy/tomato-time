import React from 'react';
import LeftBar from './leftbar';
import FootBar from './footerbar';
import RingsBg from './rings_bg';
import RingsCanvas from'./rings_canvas';
import Counter from './count';
import Audio from './audio';

export default class Index extends React.Component {
  constructor() {
    super();
    const timeList = localStorage.timeList.split(',');
    this.state = {
      "value": Number(timeList[0]) *60 ,
      "step":0,
      "isPlaying": false,
      "rate": 1,
      "quickEnd": false,
    }
  }
  onStep(count) {
    this.setState({"step": count})
  }
  onComplete() {
    const timeList = localStorage.timeList.split(',');
    this.setState({value: Number(timeList[this.state.rate]) * 60,rate: this.state.rate + 1,isPlaying: false,step: 0});
    // console.log('------------------------------------');
    // console.log("complete!" +this.state.value);
    // console.log('------------------------------------');
  }

  hasQuickEnd() {
    this.setState({"quickEnd": true});
  }

  playing() {
    this.setState({"isPlaying": true,"quickEnd":false});

  }
  pause() {
    this.setState({"isPlaying": false});
  }
componentDidUpdate() {

}
// props在render时期传递给子组件，当setState时，父组件发生更新，但是第一次更新是传递的props还未更新，所以在这个代码中会需要点击两次。

  render() {
    return (
      <div>
        <Counter onStep={this.onStep.bind(this)} value={this.state.value} isPlaying={this.state.isPlaying} onComplete={this.onComplete.bind(this)} />
        <LeftBar/>
        <RingsCanvas step={this.state.step} onComplete={this.onComplete.bind(this)} value={this.state.value}/>
        <RingsBg step={this.state.step} value={this.state.value} playing={this.playing.bind(this)} isPlaying={this.state.isPlaying} rate={this.state.rate} quickEnd = {this.state.quickEnd}/>
        <FootBar isPlaying={this.state.isPlaying} pause={this.pause.bind(this)} onComplete={this.onComplete.bind(this)} hasQuickEnd = {this.hasQuickEnd.bind(this)}/>
        <Audio isPlaying={this.state.isPlaying}/>
      </div>
    )
  }
}