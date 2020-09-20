import React, { Component } from 'react'

export default class SimpleCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    increment() {
        this.setState(state => ({
            count: state.count + 1
        }));
    }

    decrement() {
        this.setState(state => ({
            count: state.count - 1
        }));
    }

    reset() {
        this.setState({
            count: 0
        });
    }
    render() {
        return (
            <div className="div-challenge">
              <h1 className="challenge-tittle">Reto: Write a Simple Counter</h1>
                <button className="btn" onClick={this.increment}>Increment!</button>
                <button className="btn mx-2" onClick={this.decrement}>Decrement!</button>
                <button className="btn" onClick={this.reset}>Reset</button>
                <h1 className="output-class">Current Count: {this.state.count}</h1>
            </div>
        );
    }
}
