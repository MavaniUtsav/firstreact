import React, { Component } from 'react';

class Clock extends Component {

    //1. initialize state Value
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }
    }

    tick = () => {
        this.setState({ time: new Date() });
    }

    //3. Call tickFunction One second at time by setInterval Method
    componentDidMount = () => {
        console.log("componentDidMount");
        this.timer = setInterval(() => this.tick(), 1000);
    }

    //4. 
    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.time !== prevState.time) {
            console.log("componentDidUpdate");
        }
    }

    //5.
    componentWillUnmount = () => {
        console.log("componentWillUnmount");
        clearInterval(this.timer)
    }

    //2. Dispaly data
    render() {
        return (
            <div>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;