import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <h1 className="output-class">Hello, my name is: {this.props.name} </h1>
            </div>
        );
    }
}
