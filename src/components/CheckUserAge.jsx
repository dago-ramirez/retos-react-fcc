import React, { Component } from 'react'

export default class CheckUserAge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            userAge: ''
        }   
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            input: e.target.value,
            userAge: ''
        });
    }
    submit() {
        this.setState(state => ({
            userAge: state.input
        }));
    }
    render() {
        const buttonOne = <button className="btn" onClick={this.submit}>Submit</button>;
        const buttonTwo = <button className="btn">You May Enter</button>;
        const buttonThree = <button className="btn">You Shall Not Pass</button>;
        return (
            <div className="div-challenge">
                <h1 className="challenge-tittle">Reto: Use a Ternary Expression for Conditional Rendering</h1>
                <h3 className="label">Enter Your Age to Continue</h3>
                <input className="input-class"
                    type='number'
                    value={this.state.input}
                    onChange={this.handleChange}
                />
                <br />
                {
                    this.state.userAge === '' ? buttonOne :
                        this.state.userAge < 18 ? buttonThree : buttonTwo
                }
            </div>
        );
    }
}
