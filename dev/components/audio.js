import React from 'react';

export default class Audio extends React.Component{
  componentDidUpdate() {
    if(!this.props.isPlaying){
      this.refs.music.play();
    }else {
      this.refs.music.load();
    }
  }
  render() {
    return (
      <audio ref="music" src="img/Alarm03.wav" loop="loop"/>
    )
  }
}