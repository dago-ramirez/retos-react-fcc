import React, { Component } from 'react'

export default class ConciseConditional extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
        this.setState(state => ({
            display: !state.display
        }));
    }
    render() {
        return (
            <div className="div-challenge">
                <h1 className="challenge-tittle">Reto: Use && for a More Concise ConditionalPassed</h1>
                <button className="btn" onClick={this.toggleDisplay}>Toggle Display</button>
                {this.state.display && <h1 className="output-class">Displayed!</h1>}
            </div>
        );
    }
}
