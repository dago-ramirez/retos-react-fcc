import React, { Component } from 'react';

export default class ControlledInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
          input: ''
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        this.setState({
          input: event.target.value
        });
    }
    
    render() {
        return (
            <div className="div-challenge">
                <h1 className="challenge-tittle">Reto: Create a Controlled Input</h1>
                <label className="label" htmlFor="grid-first-name">
                    Controlled Input:
                </label>
                <input className="input-class" id="grid-first-name" value={this.state.input} onChange={this.handleOnChange} />
                <p className="output-class">{this.state.input}</p>
            </div>
        )
    }
}
