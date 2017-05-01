import React from 'react';

export default class RingsBg extends React.Component {
  constructor() {
    super();
    this.state = {
      "showTime": "00:00",
      "playingTime": 1,
    }
    // const timeList = localStorage.timeList.split(',');
    // this.rateTime = timeList.reduce((x,y)=> {return Number(x) + Number(y)},0);
  }
  getTime() {
    let maxtime = this.props.value ;
    let time = this.props.step % 10 == 0? this.props.step / 10 : this.state.playingTime ;
    
    // Math.floor(this.props.step % (1000/this.props.value)) == 0 ? Math.floor(this.props.step/(1000/this.props.value)) : this.state.playingTime ;

    let min = Math.floor((maxtime-time)/60),
        sec = Math.floor((maxtime-time)%60);
    let msg = (min <10 ? "0" : "") + min + ":" +(sec < 10 ? + "0" : "") + sec;
    if(this.props.step === (10 * this.props.value-1)) {
      // console.log('------------------------------------');
      // console.log(this.props.step);
      // console.log('------------------------------------');
      this.setState({"showTime": "00:00"});
    }else {
      this.setState({"showTime": msg,"playingTime":time});
    }
  }
  playingButton(e) {
    this.props.playing();
  }

  setRateTimeList() {
    let rateList = this.refs.rateBlock.childNodes;
    // let timeList = localStorage.timeList.split(',');
    rateList[this.props.rate-1].style.animationDuration = this.props.value + .5+ "s";
    rateList[this.props.rate-1].style.display = "inline-block";
    if (this.props.quickEnd && this.props.rate >1) {
      rateList[this.props.rate-2].style.animation = "";
      // this.setState({playingTime:1,showTime: "00:00"});
    }
  }

  componentWillReceiveProps() {
    this.getTime();
       
  }
  componentDidMount() {
    this.setRateTimeList();
  }
  componentDidUpdate(prevProps,prevState) {
      this.setRateTimeList();
    if(this.props.quickEnd && prevState.showTime != "00:00"){
      this.setState({playingTime:1,showTime: "00:00"});
      
    }
    
  }
  render() {
    
    const startBtn = this.props.isPlaying 
    ? 
    <span className=" start--bg bg">
      <i className="fa fa-play fa-3x" />
    </span>
    :
    <span id="start" onClick={this.playingButton.bind(this)}>
      <i className="fa fa-play fa-3x" />
    </span>;
    const rateStyle = this.props.isPlaying
    ?
    {animationPlayState:"running"}
    :
    {animationPlayState:"paused"}
    return (
      <section className="main--wrap ">
        <header className="rate--wrap" >
          <ul className="rate--block" ref="rateBlock">
            <li style={rateStyle}></li>
            <li style={rateStyle}></li>
            <li style={rateStyle}></li>
            <li style={rateStyle}></li>
            <li style={rateStyle}></li>
            <li style={rateStyle}></li>
            <li style={rateStyle}></li>
            <li style={rateStyle}></li>
          </ul>
        </header>
        <section className="main">
          <span id="time" key="time">
            {this.state.showTime}
          </span>
        </section>
        <aside className="aside">
          {startBtn}  
        </aside>
      </section>
    )
   
  }
}