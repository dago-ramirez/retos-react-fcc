import React, { Component } from 'react';

export default class MagicEightBall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            randomIndex: ''
        };
        this.ask = this.ask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    ask() {
        if (this.state.userInput) {
            this.setState({
                randomIndex: this.state.userInput,
                userInput: ''
            });
        }
    }
    handleChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }
    render() {
        const possibleAnswers = [
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes, definitely',
            'You may rely on it',
            'As I see it, yes',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            "Don't count on it",
            'My reply is no',
            'My sources say no',
            'Most likely',
            'Outlook not so good',
            'Very doubtful'
        ];
        const answer = possibleAnswers[this.state.randomIndex - 1];
        return (
            <div className="div-challenge">
                <h1 className="challenge-tittle">Reto: Use Advanced JavaScript in React Render Method</h1>
                <h1 className="label">Enter a number between 1 and 20</h1>
                <input className="input-class"
                    min="1" max="20"
                    placeholder="Enter a number"
                    type='number'
                    value={this.state.userInput}
                    onChange={this.handleChange}
                />
                <br />
                <button className="btn" onClick={this.ask}>Ask the Magic Eight Ball!</button>
                <br />
                <h3 className="label">Answer:</h3>
                <p className="output-class">
                    {answer}
                </p>
            </div>
        );
    }
}
