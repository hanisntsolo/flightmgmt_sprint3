import React, { Component } from 'react';
import AirportService from "../../AirportApi/AirportService";
import { withRouter } from "react-router";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import Header from "./Header";

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
          {/*Header*/}
          <header id="main-header" className="py-2 bg-dark text-white">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h1>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-gear" fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                            d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"/>
                      <path fill-rule="evenodd"
                            d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"/>
                    </svg>  Admin Dashboard</h1>
                </div>
              </div>
            </div>
          </header>
          {/*actions*/}
          <section id="actions" className="py-4 mb-4 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-2">
                    <button className="btn btn-primary btn-block" data-toggle="modal" onClick={this.addAirportClicked}><i className="fas fa-plus"></i>
                      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-box-arrow-in-up-right"
                           fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"/>
                        <path fill-rule="evenodd"
                              d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"/>
                      </svg>
                      Add Airport </button>
                </div>
              </div>
            </div>
          </section>
          <section>
          <div className="container">
            <div className="card-header">
              <div className="card">
              <h1>List Airports</h1>
          </div>
          {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
          <div className="container">
            <div className="table-responsive">
            <table className="table table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>Airport Identity Number</th>
                  <th>Airport Name</th>
                  <th>Airport Location</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody className="text-left">
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
              </div>
            </div>
          </div>
            <section id="actions" className="py-4 mb-4 bg-light">
              <div className="container">
                <div className="row">
                  <div className="col-md-2">
                    <button className="btn btn-primary btn-block" data-toggle="modal" onClick={this.addAirportClicked}><i className="fas fa-plus"></i>
                      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-box-arrow-in-up-right"
                           fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"/>
                        <path fill-rule="evenodd"
                              d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"/>
                      </svg>
                      Add Airport </button>
                  </div>
                </div>
              </div>
            </section>
            {/*<div className="row">*/}
            {/*  <button className="btn btn-success" onClick={this.addAirportClicked}>Add Airport</button>*/}
            {/*</div>*/}
          </div>
{/*Pagination*/}
          <section>
          <nav>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">Previous</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">1</a>
              </li>
              <li className="page-item">
              <a className="page-link" href="#">2</a>
            </li>
              <li className="page-item">
              <a className="page-link" href="#">3</a>
            </li>
              <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
            </ul>
          </nav>
          </section>
          </section>
        </div>
    );
  }
}
export default withRouter(ListAirports);
// export default ListAirports;