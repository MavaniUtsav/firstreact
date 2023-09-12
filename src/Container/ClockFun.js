import React, { useEffect, useState } from 'react';

function ClockFun(props) {
    //1. constructor
    const [time, setTime] = useState(new Date());

    const tick = () => {
        console.log("tick");
        setTime(new Date());
    }

    useEffect(() => {
        //3. componentDidMount //5. componentDidUpdate
        setInterval(() => tick(), 1000)
        console.log("DidMount/Didupdate");

        //6.componentWillUnmount
        return () => {
            console.log("componentWillUnmount");
        }

    }, [time]);

    //2.render  //4.
    return (
        <div>
            <h2>{time.toLocaleTimeString()}</h2>
        </div>
    );
}

export default ClockFun;