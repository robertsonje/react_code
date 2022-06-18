import React, { Component } from 'react';

class MyClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            name: "Jehrick",
            city: "Milwaukee",
        }
    }
    handleChange = (event) => {
        this.setState({
            city: event.target.value
        });
    }
    render() {
        return (
            <div>
                <h1>This content is from a class component!!</h1>
                <h3>{this.props.name} is passed from the parent component.</h3>
                <h3>Name: {this.state.name}</h3>
                <h3>City: {this.state.city}</h3>
                <button onChange={this.handleChange}>Click me</button>
                <input type="text" name="test" id="name" onChange={this.handleChange}/>
            </div>
        );
    }
}

export default MyClassComponent;