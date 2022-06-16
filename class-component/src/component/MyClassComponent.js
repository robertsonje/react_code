import React, { Component } from 'react';

class MyClassComponent extends Component {
    render() {
        return (
            <div>
                <h1>This content is from a class component!!</h1>
                <h3>{this.props.name} is passed from the parent component.</h3>
            </div>
        );
    }
}

export default MyClassComponent;