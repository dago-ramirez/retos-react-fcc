import React, { Component } from 'react';

export default class MyComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        name: 'React Rocks!'
      })
    }
    render() {
      return (
        <div className="div-challenge">
          <h1 className="challenge-tittle">Reto: Set State with this.setState</h1>
          <button className="btn" onClick={this.handleClick}>Click Me</button>
          <h1 className="output-class">{this.state.name}</h1>
        </div>
      );
    }
  };