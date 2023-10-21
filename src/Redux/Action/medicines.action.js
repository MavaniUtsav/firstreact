import { GET_MEDICINES } from "../ActionType"

export const getMedicines = () => (dispatch) => {
    fetch('https://fakestoreapi.com/carts')
        .then((response) => response.json())
        .then((data) => dispatch({ type: GET_MEDICINES, payLoad: data }))
        .catch((error) => console.log(error))
}