import React from "react";
export default class Counter extends React.Component {
    // 定义属性

 
    //这里面的操作可以移动到componentWillMount()里面去
    constructor(...pa) {
        super(...pa);
        this.state     = {
          "count": 0
        }
        this.interval  = 0;
        this.step      = this.props.step || 1;
       
 
    }
    
    stop() {
        clearInterval(this.interval);
    }
    
    start() {
        this.stop();
        this.interval = setInterval(()=> {
            var count = this.state.count + this.step;
            if (this.props.onStep) {
                this.props.onStep(count);
                // console.log('------------------------------------');
                // console.log(count);
                // console.log('------------------------------------');
            }
            if (count == (10 * this.props.value)) {
                this.props.onComplete && this.props.onComplete();
                this.stop();
                this.setState({count: 0});
            }else{
                this.setState({count});
            }
           
        }, 100);
    }
    
    restart() {
        this.stop();
        this.setState({count:0});
        this.start();
    }
    componentWillReceiveProps(){

    }
    componentWillUnmount(){
        this.stop();
    }
    componentDidUpdate(){
        if(this.props.isPlaying){
          this.start();
        }else {
          this.stop();
        }
    }
    render() {
        return (
          <div></div>
        )}
}

    Counter.propTypes = {
       
        onStep:React.PropTypes.func,
        onComplete:React.PropTypes.func,
        value:React.PropTypes.number,
        step:React.PropTypes.number,
        isPlaying:React.PropTypes.bool,
    };
 