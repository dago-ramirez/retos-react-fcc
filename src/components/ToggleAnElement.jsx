import React, { Component } from 'react'

export default class ToggleAnElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
          visibility: false
        };
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    toggleVisibility() {
        this.setState(state => ({
            visibility: !state.visibility
        }))
    }

    render() {
        if (this.state.visibility) {
          return (
            <div className="div-challenge">
              <h1 className="challenge-tittle">Reto: Use State to Toggle an ElementPassed:</h1>
              <button className="btn" onClick={this.toggleVisibility}>Click Me</button>
              <h1 className="text-3xl text-green-900 font-bold mb-2">Now you see me!</h1>
            </div>
          );
        } else {
          return (
            <div className="div-challenge">
              <h1 className="text-xl text-blue-900 font-bold mb-2">Reto: Use State to Toggle an ElementPassed</h1>
              <button className="btn" onClick={this.toggleVisibility}>Click Me</button>
            </div>
          );
        }
    }
}
