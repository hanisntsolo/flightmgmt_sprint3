import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Table} from 'react-bootstrap';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import FlightService from './FlightService';

class ListFlights extends Component {
  constructor(props) {
    super(props);
    this.state = {

      flights : [],
      message : null

    }
    this.addFlightClicked = this.addFlightClicked.bind(this);
    this.updateFlightClicked = this.updateFlightClicked.bind(this);
    this.deleteFlightClicked = this.deleteFlightClicked.bind(this);
    this.refreshFlights = this.refreshFlights.bind(this);
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
          <h1>Flights List</h1>
          {this.state.message && <div className="alert alert-success">{this.state.message}</div>}

          <div class="container">
          <div className = "row">
                    <Button variant="contained" color="secondary" onClick={this.addFlightClicked}> Add Flight</Button>
                 </div><br />
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

