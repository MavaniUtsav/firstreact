import { ADD_TO_CART } from "../ActionType";

const initialState = {
    isLoading: false,
    cart: [],
    error: null
}

export const cartReducer = (state=initialState, action) => {
    console.log(action);

    switch (action.type) {
        case ADD_TO_CART:
            let check = state.cart.some((v) => v.id === action.payLoad.id)

            if (check) {
                let index = state.cart.findIndex((v) => v.id === action.payLoad.id)
                state.cart[index].qty++;
                console.log("true");
            } else {
                state.cart.push(action.payLoad)
                console.log("false");
            }

            return {
                isLoading: false,
                cart: state.cart,
                error: null
            }
    
        default:
            return state
    }
    
}