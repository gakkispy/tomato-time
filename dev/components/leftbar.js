import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';
export default class LeftBar extends React.Component {
    constructor() {
    super();
    this.state = {
      "hide": true,
    }
  };
  showTheLeft() {
    this.setState({
      "hide": false,
    });
  }
  hideTheLeft() {
    this.setState({
      "hide": true,
    });
  }
  render() {
    return (
      <nav className={this.state.hide ? "leftbar leftbar-hide" : "leftbar leftbar-show"}>
        <ul>
          <li id="more-left">
            <i id="more__left" className={this.state.hide ? "fa fa-chevron-up fa-rotate-90 fa-lg" : "hide"} onClick={this.showTheLeft.bind(this)} />
            <i id="more__right" className={this.state.hide ? "hide" : "fa fa-chevron-down fa-rotate-90 fa-lg"} onClick={this.hideTheLeft.bind(this)} />
          </li>
          <li id="home">
            <Link to={`/`} activeClassName="">
             <i className="fa fa-home fa-lg" /><span>主页</span>
            </Link>
            </li>
          <li id="setting">
            <Link to={`/setting`} activeClassName="">
            <i className="fa fa-cog fa-lg fa-spin" /><span>设置</span>
            </Link>
            </li>
        </ul>
      </nav>
    )
  }
}