import React from 'react';
import './clicker.css'

class Clicker extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      count: props.count
    }

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
        
  }
  
  handleIncrement(){
    this.setState((prev) => ({ count: prev.count + 1 }));
  }

  handleDecrement(){
    if(this.state.count === 0) return ;
    this.setState((prev) => ({ count: prev.count - 1 }));
  }


  render(){
    return (
      <div className="container ">
        <div className="">{this.state.count}</div>
              <div className="">
                <button className="btn green " onClick={this.handleIncrement}>
                Больше
                </button>
                <button className="btn red" onClick={this.handleDecrement}>
                  Меньше
                </button>
              </div>
          </div>
    );
  }
}

Clicker.defaultProps={
  count:0
}


export default Clicker;