import axios from 'axios';

class FlightService {
  retrieveAllFlights() {
    return axios.get('http://localhost:8080/flights/all');
  }
  retrieveFlight(flightId) {
    return axios.get(`http://localhost:8080/flights/getFlights/${flightId}`)
  }
  deleteFlight(flightId) {
    return axios.delete(`http://localhost:8080/flights/deleteFlights/${flightId}`);
  }
  updateFlight(flightId, resp) {
    return axios.put(`http://localhost:8080/flights/updateFlight/${flightId}`, resp);
  }
  createFlight(resp) {
    return axios.post('http://localhost:8080/flights/newflight', resp);
  }
}
export default new FlightService();