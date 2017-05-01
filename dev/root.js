
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import  { Router,
      Route,
      IndexRoute,
      IndexLink,
      hashHistory,
      Link } from 'react-router';

import Index from './components/index';
import Setting from './components/setting';
import AnimateDemo from'./components/test';
import Counter from './components/count';

export default class Root extends React.Component{
  componentWillMount() {
    localStorage.timeList = [25,5,25,5,25,5,25,15];
  }
  render(){
    return (
      
      <Router history={hashHistory}>
        <Route path="/" component={Index}/>
        <Route path="/setting" component={Setting}/>
      </Router>
    );
  };
}
ReactDOM.render(
  <Root/>,
  document.querySelector("#container")
);

