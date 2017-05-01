import React from 'react';
import LeftBar from './leftbar';
import FootBar from './footerbar';
import {Router, Route, Link, browserHistory} from 'react-router';
export default class Setting extends React.Component {
  constructor() {
    super();
    this.state = {
      workTime: 25,
      breakTime: 5,
      longBreakTime: 15,
    }
  }
  setWorkTime(e) {
    this.setState({workTime: e.target.value})
  }
  setBreakTime(e) {
    this.setState({breakTime: e.target.value})
  }
  setLongBreakTime(e) {
    this.setState({longBreakTime: e.target.value})
  }
  setTimeList() {
    let timeList = 
    [this.state.workTime, this.state.breakTime,this.state.workTime, this.state.breakTime,this.state.workTime, this.state.breakTime,this.state.workTime, this.state.longBreakTime];
    localStorage.timeList = timeList;
  }
  componentWillMount() {
    this.setTimeList();

  }
  componentDidUpdate() {
    this.setTimeList();
  }
  render() {
    return (
      <div>
        <LeftBar/>
        <section className="setting wrap" >
          <h1>设置</h1>
          <div className="select--group  ">
            <div className="select">
              <span>工作时间</span><br />
              <select value={this.state.workTime} onChange={this.setWorkTime.bind(this)}>
                <option value={1}>1</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={25}>25</option>
                <option value={30}>30</option>
                <option value={35}>35</option>
                <option value={40}>40</option>
                <option value={45}>45</option>
                <option value={50}>50</option>
                <option value={55}>55</option>
              </select>
            </div>
            <div className="select" >
              <span>休息时间</span><br />
              <select value={this.state.breakTime} onChange={this.setBreakTime.bind(this)}>
                <option value={1}>1</option>
                <option value={3}>3</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
            </div>
            <div className="select">
              <span>长歇时间</span><br />
              <select value={this.state.longBreakTime} onChange={this.setLongBreakTime.bind(this)}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={25}>25</option>
                <option value={30}>30</option>
                <option value={35}>35</option>
                <option value={40}>40</option>
                <option value={45}>45</option>
                <option value={50}>50</option>
                <option value={55}>55</option>
              </select>
            </div>
          </div>
        </section>
        <FootBar/>
      </div>

    )
  }
}