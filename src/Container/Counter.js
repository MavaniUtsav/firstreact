import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    
    handleInc = () => {
        if (this.state.count < 5) {
            this.setState({
                count: this.state.count + 1
            })
        }
    }

    handleDec = () => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            })   
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleDec}> - </button>
                <span>{this.state.count}</span>
                <button onClick={this.handleInc}> + </button>
            </div>
        );
    }
}

export default Counter;