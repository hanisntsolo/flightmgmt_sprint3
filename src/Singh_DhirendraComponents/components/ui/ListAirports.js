import React, { Component } from 'react';
import AirportService from "../../AirportApi/AirportService";
import { withRouter } from "react-router";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

class ListAirports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demo : [ {
        "airportId": 1,
        "airportName": "Sardar Vallabhbhai Patel International Airport",
        "airportLocation": "Ahmedabad Gujrat"
      },
        {
          "airportId": 2,
          "airportName": "Chaudhary Charan Singh International Airport",
          "airportLocation": "Lucknow Uttar Pradesh"
        },
        {
          "airportId": 3,
          "airportName": "Dr Babasaheb Ambedkar International Airport",
          "airportLocation": "Nagpur Maharashtra"
        },
        {
          "airportId": 4,
          "airportName": "Chhatrapati Shivaji Maharaj International Airport",
          "airportLocation": "Mumbai Maharashtra"
        },
        {
          "airportId": 5,
          "airportName": "Lal Bahadur Shastri International Airport",
          "airportLocation": "Varanasi Uttar Pradesh"
        },
        {
          "airportId": 6,
          "airportName": "Chaudary Charan Singh Internation Airport",
          "airportLocation": "Lucknow Uttar Pradesh"
        }],
      airports : [],
      message : null

    }
    this.addAirportClicked = this.addAirportClicked.bind(this);
    this.updateAirportClicked = this.updateAirportClicked.bind(this);
    this.deleteAirportClicked = this.deleteAirportClicked.bind(this);
    this.refreshAirports = this.refreshAirports.bind(this);
  }
  addAirportClicked() {
    console.log('update')
    // const { history } = this.props;
    // history.push(`/update/${id}`);
    this.props.history.push('/create')
    // this.props.history.push(`/update/${id}`)
  }
  updateAirportClicked(id) {
    console.log('update' + id)
    // const { history } = this.props;
    // history.push(`/update/${id}`);
    this.props.history.push(`/update/${id}`)
  }
  deleteAirportClicked(id) {
    // console.log(id);
    AirportService.deleteAirport(id)
    .then(
        response =>{
          this.setState({message: `Delete of id ${id} is successful`})
          this.refreshAirports()
        }
    )
  }
  componentDidMount() {
    this.refreshAirports();
    // AirportService.retrieveAllAirports()
    //     .then(
    //         response=>
    //         {
    //           // console.log(response
    //           this.setState({airports : response.data})
    //         })
    //     // .catch()
  }
  refreshAirports() {
    AirportService.retrieveAllAirports()
    .then(
        response=>
        {
          // console.log(response)
          this.setState({airports : response.data})
        })
  }

  render() {
    return(
        <div>
          <h1>List Airports</h1>
          {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
          <div class="container">
            <table class="table">
              <thead>
                <tr>
                  <th>Airport Identity Number</th>
                  <th>Airport Name</th>
                  <th>Airport Location</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                  {
                    this.state.airports.map(
                      airport=>
                    <tr key={airport.airportId}>
                      <td>{airport.airportId}</td>
                      <td>{airport.airportName}</td>
                      <td>{airport.airportLocation}</td>
                      <td><button className="btn btn-success" onClick={()=>{this.updateAirportClicked(airport.airportId)}}>Update</button></td>
                      {/*<td>*/}
                      {/*   <Button variant="contained"*/}
                      {/*    onClick={<Link to={() => ({ ...airport.airportId, pathname: "/update" })} />*/}
                      {/*    }>*/}
                      {/*    Update*/}
                      {/*  </Button>*/}
                      {/*</td>*/}
                      <td><button className="btn btn-danger" onClick={()=>{this.deleteAirportClicked(airport.airportId)}}>Delete</button></td>
                    </tr>
                  )}
              </tbody>
            </table>
            <div className="row">
              <button className="btn btn-success" onClick={this.addAirportClicked}>Add Airport</button>
            </div>
          </div>
        </div>
    );
  }
}
export default withRouter(ListAirports);
// export default ListAirports;