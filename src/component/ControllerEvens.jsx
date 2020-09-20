import React, { Component } from 'react'

class OnlyEvens extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should I update?', nextProps.value % 2);
        return nextProps.value % 2 === 0 ? true : false;
    }

    componentDidUpdate() {
        console.log('Component re-rendered.');
    }

    render() {
        return <h1 className="output-class">{this.props.value}</h1>;
    }
}

export default class ControllerEvens extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.addValue = this.addValue.bind(this);
    }

    addValue() {
        this.setState(state => ({
            value: state.value + 1
        }));
    }

    render() {
        return (
            <div className="div-challenge">
                <h1 className="challenge-tittle">Reto: Optimize Re-Renders with shouldComponentUpdate</h1>
                <h1 className="label">Render only evens</h1>
                <button className="btn" onClick={this.addValue}>Add</button>
                <OnlyEvens value={this.state.value} />
            </div>
        );
    }
}
