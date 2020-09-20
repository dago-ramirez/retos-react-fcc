import React, { Component } from 'react'

export default class GameOfChance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    render() {
        const expression = Math.random() >= 0.5 ? true : false;
        return (
            <div className="div-challenge">
                <h1 className="challenge-tittle">Reto: Render Conditionally from PropsPassed</h1>
                <button className="btn" onClick={this.handleClick}>Play Again</button>
                <Results fiftyFifty={expression} />
                <p className="output-class">{'Turn: ' + this.state.counter}</p>
            </div>
        );
    }
}

class Results extends Component {
    render() {
        return <h1 className="output-class">{this.props.fiftyFifty ? "You Win!" : "You Lose!"}</h1>;
    }
}