const { FETCH_FLIGHT_REQUEST, FETCH_FLIGHT_SUCCESS, FETCH_FLIGHT_FAILURE } = require("./FlightActionTypes")

const initialState = {
    loading: false,
    flights: [],
    error: ''
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_FLIGHT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_FLIGHT_SUCCESS:
            return {
                loading: false,
                flights: action.payload,
                error: ''
            }

        case FETCH_FLIGHT_FAILURE:
            return {
                loading: false,
                flights: [],
                error: action.payload
            }

        default:
            return state
    }
}

export default reducer;