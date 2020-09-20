import React, { Component } from 'react'

export default class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            submit: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    handleSubmit(event) {
        // change code below this line
        event.preventDefault()
        this.setState(state => ({
            submit: state.input
        }))
        // change code above this line
    }
    render() {
        return (
            <div className="div-challenge">
                <h1 className="challenge-tittle">Reto: Create a Controlled Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input className="input-class" value={this.state.input} onChange={this.handleChange} />
                    <button className="btn" type='submit'>Submit!</button>
                </form>
                <p className="output-class">{this.state.submit}</p>
            </div>
        );
    }
}
