import React from"react";
import {Router, Route, Link, browserHistory} from 'react-router';
export default class FootBar extends React.Component {
  constructor() {
    super();
    this.state = {
      "hasDown": true,
    }
  };
  upTheFoot() {
    this.setState({
      "down": false,
    });
  }
  downTheFoot() {
    this.setState({
      "down": true,
    });
  }
  upDown() {
    this.setState({"hasDown": !this.state.hasDown});
  }
  quickEnd() {
    this.props.onComplete();
    this.props.hasQuickEnd();
  }
  refresh() {
    window.location.reload();
  }
  render() {
    const btnList = this.props.isPlaying ?
      <ul className="footbar_btn active">
        <li id="pause">
          <i className="fa fa-pause fa-lg" onClick={this.props.pause}/> 
        </li>
        <li id="end">
          <i className="fa fa-step-forward fa-lg" onClick={this.quickEnd.bind(this)} />
        </li>
        <li id="refresh">
          <i className= "fa fa-refresh fa-lg fa-spin" onClick={this.refresh.bind(this)}/>
        </li>
        <li id="up">
          <i className={this.state.hasDown ? "fa fa-chevron-up fa-lg" : "fa fa-chevron-down fa-lg"} onClick={this.upDown.bind(this)}/>
        </li>
      </ul>
    :
      <ul className="footbar_btn">
        <li id="pause">
          <i className="fa fa-pause fa-lg" /> 
        </li>
        <li id="end">
          <i className="fa fa-step-forward fa-lg" />
        </li>
        <li id="refresh">
          <i className= "fa fa-refresh fa-lg" onClick={this.refresh.bind(this)} />
        </li>
        <li id="up">
          <i className={this.state.hasDown ? "fa fa-chevron-up fa-lg" : "fa fa-chevron-down fa-lg"} onClick={this.upDown.bind(this)}/>
        </li>
      </ul>

    return (
      <footer className={this.state.hasDown ? "footbar footbar-down" : "footbar footbar-up"}>
        {btnList}
        <ul className="footbar_note">
          <li>暂停</li>
          <li>结束</li>
          <li>重置</li>
          <li></li>
        </ul>
      </footer>
    )
  }
}