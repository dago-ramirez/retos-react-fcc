import React, { Component } from 'react';
import Navbar from './Navbar';


export default class PassStateAsProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'CamperBot'
        }
    }
    render() {
        return (
            <div className="div-challenge">
                <h1 className="challenge-tittle">Reto: Pass State as Props to Child Components</h1>
                <Navbar name={this.state.name} />
            </div>
        );
    }
}
