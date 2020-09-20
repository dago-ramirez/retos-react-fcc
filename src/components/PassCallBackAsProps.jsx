import React, { Component } from 'react'

export default class PassCallBackAsProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }
    render() {
        return (
            <div className="div-challenge">
                <h1 className="challenge-tittle">Reto: Pass a Callback as Props</h1>
                <GetInput input={this.state.inputValue} handleChange={this.handleChange} />
                <RenderInput input={this.state.inputValue} />
            </div>
        );
    }
}

class GetInput extends Component {
    render() {
        return (
            <div>
                <label className="label">
                    Get Input:
                </label>
                <input className="input-class"
                    value={this.props.input}
                    onChange={this.props.handleChange} />
            </div>
        );
    }
};

class RenderInput extends Component {
    render() {
        return (
            <div>
                <h3 className="label">Input Render:</h3>
                <p className="output-class">{this.props.input}</p>
            </div>
        );
    }
};