import React, { Component } from 'react'

export default class AddEventListener extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            count: 1
        };
        this.handleEnter = this.handleEnter.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleEnter() {
        this.setState((state) => ({
            message: 'You have pressed the enter key! ' + state.count + ' times',
            count: state.count + 1
        }));
    }

    handleKeyPress(event) {
        if (event.keyCode === 13) {
            this.handleEnter();
        }
    }

    render() {
        return (
            <div className="div-challenge">
                <h1 className="challenge-tittle">Reto: Add Event Listeners</h1>
                <h1 className="output-class">{this.state.message}</h1>
            </div>
        );
    }
}
