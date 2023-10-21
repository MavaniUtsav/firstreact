const initialState = {
    isLoading: false,
    medicines: [],
    errorMessage: null
}

export const medicineReducer = (state=initialState, action) => {
    console.log(action);

    return state
}