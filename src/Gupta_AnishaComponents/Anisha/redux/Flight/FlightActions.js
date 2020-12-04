import axios from "axios"
import { FETCH_FLIGHT_FAILURE, FETCH_FLIGHT_REQUEST, FETCH_FLIGHT_SUCCESS } from "./FlightActionTypes"

export const fetchFlightRequest = () => {
    return {
        type: FETCH_FLIGHT_REQUEST
    }
}

export const fetchFlightSuccess = flights => {
    return {
        type: FETCH_FLIGHT_SUCCESS,
        payload: flights
    }
}

export const fetchFlightFailure = error => {
    return {
        type: FETCH_FLIGHT_FAILURE,
        payload: error
    }
}

export const fetchFlights = ({from,to,date}) => {
    return dispatch => {
        axios.get(`http://localhost:8080/scheduledFlight/getFlight/`+ from +'/'+to+'/'+date)
            .then(response => {
                const flights = response.data
                console.log("res for search box #P1",flights);
                dispatch(fetchFlightSuccess(flights))
            })
            .catch(error => {
                const errorMsg = error.messge
                dispatch(fetchFlightFailure(errorMsg))
            })
    }
}

export const postFlights = (flight) => {
    return dispatch => {
        axios.post("http://localhost:8080/",flight)
            .then(response => {
                console.log(response)
                const flights = [response.data]
                dispatch(fetchFlightSuccess(flights))
            })
            .catch(error => {
                console.log(error)
                const errorMsg = error.message
                dispatch(fetchFlightFailure(errorMsg))
            })
    }
}