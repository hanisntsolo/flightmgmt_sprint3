import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Table} from 'react-bootstrap';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import FlightService from './FlightService';
import {Icon} from "@material-ui/core";

class ListFlights extends Component {
  constructor(props) {
    super(props);
    this.state = {

      flights : [],
      message : null

    }
    this.addFlightClicked = this.addFlightClicked.bind(this);
    this.backClicked = this.backClicked.bind(this);
    this.updateFlightClicked = this.updateFlightClicked.bind(this);
    this.deleteFlightClicked = this.deleteFlightClicked.bind(this);
    this.refreshFlights = this.refreshFlights.bind(this);
  }
  backClicked() {
      console.log('update')
      // const { history } = this.props;
      // history.push(`/update/${id}`);
      this.props.history.push('/update')
      // this.props.history.push(`/update/${id}`)
  }
  addFlightClicked() {
    console.log('update')
    // const { history } = this.props;
    // history.push(`/update/${id}`);
    this.props.history.push('/createFlight')
    // this.props.history.push(`/update/${id}`)
  }
  updateFlightClicked(flightId) {
    console.log('update' + flightId)

    this.props.history.push(`/updateFlight/${flightId}`)
  }
  deleteFlightClicked(flightId) {

    FlightService.deleteFlight(flightId)
    .then(
        response =>{
          this.setState({message: `Delete of flightId ${flightId} is successful`})
          this.refreshFlights()
        }
    )
  }
  componentDidMount() {
    this.refreshFlights();

  }
  refreshFlights() {
    FlightService.retrieveAllFlights()
    .then(
        response=>
        {

          this.setState({flights : response.data})
        })
  }

  render() {
    return(
        <div>
          {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
          <div class="container">
          <div className = "row">
                    <Button variant="contained" color="secondary" onClick={this.addFlightClicked}> Add Flight</Button>

            </div><br />
              <section id="actions" className="py-4 mb-4 bg-light">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-2">
                              <button className="btn btn-outline-primary btn-block" data-toggle="modal" onClick={this.backClicked}><i className="fas fa-plus"></i>
                                  Go Back <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-90deg-left"
                                       fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd"
                                            d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
                                  </svg>
                                  </button>
                          </div>
                          <div className="col-md-3">
                              <button className="btn btn-success btn-block" data-toggle="modal" onClick={this.addFlightClicked}><i className="fas fa-plus"></i>
                                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-box-arrow-in-up-right"
                                       fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd"
                                            d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"/>
                                      <path fill-rule="evenodd"
                                            d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"/>
                                  </svg>
                                  Create New Flight </button>
                          </div>
                          <div className="col-md-3">
                              <button className="btn btn-warning btn-block" data-toggle="modal" onClick={this.addScheduleClicked}><i className="fas fa-plus"></i>
                                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-box-arrow-in-up-right"
                                       fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd"
                                            d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"/>
                                      <path fill-rule="evenodd"
                                            d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"/>
                                  </svg>
                                  Schedule Flights </button>
                          </div>
                      </div>
                  </div>
              </section>
          <h1 className="display-4">Flights List</h1>
          <Table>
              <thead className="btn-info">
                <tr>
                  <th>Flight Identity Number</th>
                  <th>Carrier Name</th>
                  <th>Flight Model</th>
                  <th>Seat Capacity</th>
                  <th>Update</th>
                  <th>Delete</th>

                </tr>
              </thead>
              <tbody>
                  {
                    this.state.flights.map(
                      flight=>
                    <tr key={flight.flightId}>
                      <td>{flight.flightId}</td>
                      <td>{flight.carrierName}</td>
                      <td>{flight.flightModel}</td>
                      <td>{flight.seatCapacity}</td>
                      <td><button className="btn btn-info" onClick={()=>{this.updateFlightClicked(flight.flightId)}}>Update</button></td>

                      <td><button className="btn btn-danger" onClick={()=>{this.deleteFlightClicked(flight.flightId)}}>Delete</button></td>
                    </tr>
                  )}
              </tbody>
            </Table>

          </div>
        </div>
    );
  }
}
export default withRouter(ListFlights);

