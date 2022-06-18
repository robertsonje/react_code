import React, { Component } from 'react';

// Create a car component which will have model, make, year, and color
// as state and it will get its country of origin from the parent component
// It will display all of these in a well-formatted sentence.
class CarComponent extends Component {
    constructor() {
        super();
        this.state = {
            model: "Mustang GT",
            make: "Ford",
            year: 1966,
            color: "Crimson"
        };
    }
    changeColor = (event) => {
        this.setState({
            color: event.target.value
        });
    }
    render() {
        return (
            <div>
                <p>This car is a {this.state.color} {this.state.year} {this.state.make} {this.state.model}. It's home country is {this.props.country}.</p>
                <button value = 'red' onClick = {this.changeColor}>Red</button>
                <button value = 'green' onClick = {this.changeColor}>Green</button>
                <button value = 'blue' onClick = {this.changeColor}>Blue</button>
                <button value = 'yellow' onClick = {this.changeColor}>Yellow</button>
            </div>
        );
    }
}

export default CarComponent;