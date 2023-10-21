import { combineReducers } from "redux";
import { counterReducer } from "./Reducer/counter.reducer";
import { medicineReducer } from "./Reducer/medicines.reducer";
import { cartReducer } from "./Reducer/cart.reducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
    medicines: medicineReducer,
    cart: cartReducer
})