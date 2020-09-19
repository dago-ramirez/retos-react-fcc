import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <h1 className="text-green-900 text-xl font-bold">Hello, my name is: {this.props.name} </h1>
            </div>
        );
    }
}
