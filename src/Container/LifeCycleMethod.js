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

// Total In-Built Method in Component Life-Cycle
//1. constructor
//2. getDerivedStateFromProps
//3. render
//4. componentDidMount
//5. shouldComponentUpdate
//6. getSnapshotBeforUpdate
//7. componentDidUpdate
//8. componentWillUnmount