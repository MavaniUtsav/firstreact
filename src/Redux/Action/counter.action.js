import { DECREMENT_COUNT, INCREMENT_COUNT } from "../ActionType"


export const Increment = () => (dispatch) => {
    dispatch({type: INCREMENT_COUNT})
}

export const Decrement = () => (dispatch) => {
    dispatch({ type: DECREMENT_COUNT })
}