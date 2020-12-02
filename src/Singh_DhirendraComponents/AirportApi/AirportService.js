import axios from 'axios';

class AirportService {
  retrieveAllAirports() {
    return axios.get('http://localhost:8080/airports/all');
  }
  deleteAirport(id) {
    return axios.delete(`http://localhost:8080/airports/deleteAirport/${id}`);
  }
  updateAirport(id, resp) {
    return axios.put(`http://localhost:8080/airports/updateAirport/${id}`, resp);
  }
  createAirport(resp) {
    return axios.post('/airports/newAirport', resp);
  }
}
export default new AirportService();