import axios from 'axios';

class AirportService {
  retrieveAllAirports() {
    return axios.get('http://localhost:8080/airports/all')
  }
}
export default new AirportService();