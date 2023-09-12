import React, { Component } from 'react';

class LifeCycleMethod extends Component {
    constructor(props) {
        super(props)
        this.state = {
            country: 'India'
        }
    }

    static getDerivedStateFromProps(props, state) {
        return { country: props.name }
    }

    render() {
        return (
            <div>
                <h1>Country: {this.state.country}</h1>
            </div>
        );
    }
}

export default LifeCycleMethod;