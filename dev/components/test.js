/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

export default class AnimateDemo extends Component {
  constructor(props){
    super(props);
    this.state={
      data:1000
    }
    this._index=1000;
    this._timer=null;
  }
  countTime(){
    this._timer=setInterval(()=>{this.setState({data:this._index--}); if(this.state.data<=0){
        this._timer && clearInterval(this._timer);
        alert("时间到了");
    }},1000);
  }
  stopTime(){
      clearInterval(this._timer);
  }
  componentWillUnmount() {
     clearInterval(this._timer);
  }
 render() {
    return (
      <div>
        <button onClick={this.countTime.bind(this)}>start</button>
        <button onClick={this.stopTime.bind(this)}>pause</button>
        <span>{this.state.data}</span>
      </div>
    );
  }
}
