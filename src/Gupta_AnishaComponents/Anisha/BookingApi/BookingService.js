import axios from 'axios';

class BookingService {
  retrieveAllBookings(userId) {
    return axios.get(`http://localhost:8080/bookings/findBookingByUserId/${userId}`);
  }
  
  deleteBooking(id) {
    return axios.delete(`http://localhost:8080/bookings/deleteBooking/${id}`);
  }
  
}
export default new BookingService();