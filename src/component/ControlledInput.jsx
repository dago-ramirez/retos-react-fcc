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
                <h1 className="challenge-tittle">Reto: Create a Controlled Input:</h1>
                <label className="block uppercase tracking-wide text-azul text-md font-bold mb-2" htmlFor="grid-first-name">
                    Controlled Input:
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" value={this.state.input} onChange={this.handleOnChange} />
                <p className="text-green-900 text-xl font-bold">{this.state.input}</p>
            </div>
        )
    }
}
