import { DECREMENT_COUNT, INCREMENT_COUNT } from "../ActionType";

const initialValue = {
    count: 0
}

export const counterReducer = (state=initialValue, action) => {
    console.log(action);

    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                count: state.count + 1
            }

        case DECREMENT_COUNT:
            return {
                count: state.count - 1
            }
    
        default:
            return state;
    }
}