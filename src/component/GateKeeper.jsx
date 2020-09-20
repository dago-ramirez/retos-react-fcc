import React, { Component } from 'react'

export default class GateKeeper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ input: event.target.value })
    }
    render() {
        let inputStyle = {
            border: '1px solid black'
        };
        // change code below this line
        console.log(this.state.input.length);
        if ( this.state.input.length > 10 ) {
            inputStyle.border = '3px solid red'
        };
        // change code above this line
        return (
            <div className="div-challenge">
                <h1 className="challenge-tittle">Reto: Change Inline CSS Conditionally Based on Component State</h1>
                <h3 className="label">Don't Type Too Much:</h3>
                <input
                    type="text"
                    style={inputStyle}
                    value={this.state.input}
                    onChange={this.handleChange} />
            </div>
        );
    }
}
