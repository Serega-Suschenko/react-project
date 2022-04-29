import React from 'react';
import './clicker.css'

export default class Clicker extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      count: props.count
    }

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleClick = this.handleClick.bind(this);
        
  }
  
  handleIncrement(){
    this.setState((prev) => ({ count: prev.count + 1 }));
  }

  handleDecrement(){
    if(this.state.count === 0) return ;
    this.setState((prev) => ({ count: prev.count - 1 }));
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }


  render(){
    return (
      <div className="container ">
        <div className="">{this.state.count}</div>
                <div>
                <button className="btn green " onClick={this.handleIncrement}>
                Больше
                </button>
                <button onClick={this.handleClick} className='btn black'>
                  {this.state.isToggleOn ? '+2' : '+1'}
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
