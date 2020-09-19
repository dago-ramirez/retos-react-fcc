import React, { Component } from 'react'

export default class UseComponentDidMount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUsers: null
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                activeUsers: 1273
            });
        }, 2500);
    }
    render() {
        return (
            <div className="div-challenge">
                <h1 className="challenge-tittle">Reto: Use the Lifecycle Method componentDidMount:</h1>
                <h1 className="text-green-900 text-xl font-bold">Active Users: {this.state.activeUsers}</h1>
            </div>
        );
    }
}
