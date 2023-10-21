import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment } from '../../Redux/Action/counter.action';

function Counter(props) {
    const count = useSelector(state => state.counter)
    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(Increment())
    }

    const handleDecrement = () => {
        dispatch(Decrement())
    }

    return (
        <div>
            <button type='button' onClick={handleIncrement}>+</button>{count.count}<button type='button' onClick={handleDecrement}>-</button>
        </div>
    );
}

export default Counter;