import React, { Component } from 'react';
import BookingService from "./BookingApi/BookingService";
import { withRouter } from "react-router";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

class BookingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings : [],
      message : null,
      status : ""
    }
    
    // this.addAirportClicked = this.addAirportClicked.bind(this);
    // this.updateAirportClicked = this.updateAirportClicked.bind(this);
    this.deleteBookingClicked = this.deleteBookingClicked.bind(this);
    this.refreshBookings = this.refreshBookings.bind(this);
  }
//   addAirportClicked() {
//     console.log('update')
//     // const { history } = this.props;
//     // history.push(`/update/${id}`);
//     this.props.history.push('/create')
//     // this.props.history.push(`/update/${id}`)
//   }
//   updateAirportClicked(id) {
//     console.log('update' + id)
//     // const { history } = this.props;
//     // history.push(`/update/${id}`);
//     this.props.history.push(`/update/${id}`)
//   }
  deleteBookingClicked(id) {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
        BookingService.deleteBooking(id)
    .then(
        response =>{
          this.setState({message: `Booking with id ${id} is cancelled successfully!`})
          this.refreshBookings(this.props.match.params.uid)
        }
    )
      } 
    }

  componentDidMount() {
      console.log(this.props.match);
    this.refreshBookings(this.props.match.params.uid);
    // AirportService.retrieveAllAirports()
    //     .then(
    //         response=>
    //         {
    //           // console.log(response
    //           this.setState({airports : response.data})
    //         })
    //     // .catch()
  }

  refreshBookings(userId) {
    BookingService.retrieveAllBookings(userId)
    .then(
        response=>
        {
          // console.log(response)
          if(!response.data.length)
          this.setState({status : "You have no bookings!"})
          else
          this.setState({bookings : response.data})
        })
  }

  render() {
    return(
        <div>
            <br/><center>
            <div class="w-75 card shadow-lg rounded m-2">
                <div class="card-body">
                <div class="p-3 mb-3 bg-info text-white"><h2>Your Bookings</h2></div><br/>
          {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
          <div class="container">
            <table class="table">
              <thead>
                <tr>
                  <th>Booking Id</th>
                  <th>Booking Date</th>
                  <th>Ticket Cost</th>
                  <th>Flight</th>
                  <th>Number of Passengers</th>
                  <th>Cancel Booking</th>
                </tr>
              </thead>
              <tbody>
                  {
                    this.state.bookings.map(
                      booking=>
                    <tr key={booking.bookingId}>
                      <td>{booking.bookingId}</td>
                      <td>{booking.bookingDate}</td>
                      <td>Rs.{booking.ticketCost}</td>
                      <td>{booking.flight.carrierName}</td>
                      <td>{booking.noOfPassengers}</td>
                      
                      <td><button type="button" className="btn btn-danger" onClick={()=>{this.deleteBookingClicked(booking.bookingId)}}>Cancel</button></td>
                    </tr>
                  )}
              </tbody>
            </table>
            <br/>
            {this.state.status && <div className="alert alert-info">{this.state.status}</div>}
            {/* <div className="row">
              <button className="btn btn-success" onClick={this.addAirportClicked}>Add Airport</button>
            </div> */}
          </div>
        </div>
        </div>
        </center>
        </div>
    );
  }
}
export default withRouter(BookingList);
// export default ListAirports;
