import React, { useState } from 'react';

function CounterFun(props) {

    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    }

    const Decrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <button onClick={Decrement}> - </button>
            <span>{count}</span>
            <button onClick={Increment}> + </button>
        </div>
    );
}

export default CounterFun;