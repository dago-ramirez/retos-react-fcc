import React, { Component } from 'react';

const textAreaStyles = {
    width: 235,
    margin: 5
};

export default class MyToDoList extends Component {
    constructor(props) {
        super(props);
        // change code below this line
        this.state = {
            userInput: '',
            toDoList: []
        }
        // change code above this line
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        const itemsArray = this.state.userInput.split(',');
        this.setState({
            toDoList: itemsArray
        });
    }
    handleChange(e) {
        this.setState({
            userInput: e.target.value
        });
    }
    render() {
        const items = this.state.toDoList.map((item, i) => <li className="output-class" key={i}>{item}</li>);
        return (
            <div className="div-challenge">
                <h1 className="challenge-tittle">Reto: Use Array.map() to Dynamically Render Elements</h1>
                <textarea
                    className="border border-blue-500 rounded py-3 px-4 mb-3"
                    onChange={this.handleChange}
                    value={this.state.userInput}
                    style={textAreaStyles}
                    placeholder='Separate Items With Commas'
                />
                <br />
                <button className="btn" onClick={this.handleSubmit}>Create List</button>
                <h1 className="label">My "To Do" List:</h1>
                <ul>{items}</ul>
            </div>
        );
    }
}
