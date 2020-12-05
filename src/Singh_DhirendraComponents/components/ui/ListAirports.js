import React, { Component } from 'react';
import AirportService from "../../AirportApi/AirportService";
import { withRouter } from "react-router";

class ListAirports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airports : [],
      message : null
    }

    this.addAirportClicked = this.addAirportClicked.bind(this);
    this.updateAirportClicked = this.updateAirportClicked.bind(this);
    this.deleteAirportClicked = this.deleteAirportClicked.bind(this);
    this.refreshAirports = this.refreshAirports.bind(this);
    this.addFlightClicked = this.addFlightClicked.bind(this);
    this.addScheduleClicked = this.addScheduleClicked.bind(this);

  }
  addAirportClicked() {
    console.log('update')
    this.props.history.push('/create')
  }
  updateAirportClicked(id) {
    console.log('update' + id)
    this.props.history.push(`/update/${id}`)
  }
  deleteAirportClicked(id) {
    AirportService.deleteAirport(id)
    .then(
        response =>{
          this.setState({message: `Deletion of airport with ID: ${id} is successful`})
          this.refreshAirports()
        }
    )
  }
  addFlightClicked() {
    console.log('update')
    this.props.history.push('/updateFlight')
  }
  addScheduleClicked() {
    console.log('update')
    this.props.history.push('/scheduleFlight')
  }
  componentDidMount() {
    this.refreshAirports();
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
                    <svg width="1em" height="1em" viewBox="0 0 16 19" className="bi bi-gear" fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                            d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"/>
                      <path fill-rule="evenodd"
                            d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"/>
                    </svg>Admin Dashboard</h1>
                </div>
              </div>
            </div>
          </header>
          {/*actions*/}
          <section id="actions" className="py-4 mb-4 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                    <button className="btn btn-outline-primary btn-block" data-toggle="modal" onClick={this.addAirportClicked}><i className="fas fa-plus"></i>
                      Add Airport <svg width="1em" height="1em" viewBox="0 0 16 18" className="bi bi-cursor-fill"
                                       fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                      </svg>
                      </button>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-outline-success btn-block" data-toggle="modal" onClick={this.addFlightClicked}><i className="fas fa-plus"></i>
                    <svg width="1em" height="1em" viewBox="0 0 16 18" className="bi bi-box-arrow-in-up-right"
                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                            d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"/>
                      <path fill-rule="evenodd"
                            d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"/>
                    </svg>
                    Add Flights </button>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-outline-warning btn-block" data-toggle="modal" onClick={this.addScheduleClicked}><i className="fas fa-plus"></i>
                    <svg width="1em" height="1em" viewBox="0 0 16 18" className="bi bi-box-arrow-in-up-right"
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
          <section>
          <div className="container">
            <div className="card-header">
              <div className="card container">
              <h1 className="text-lg-right display-4">List of Currently Functional Airports</h1>
          </div>
          {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
          <div>
            <div className="table-responsive">
              <font size="4">
            <table className="table table-hover">
              <thead className="thead-dark">
                <tr>
                  <th className="text-center">Airport Id</th>
                  <th className="text-center">Airport Name</th>
                  <th className="text-center">Airport Location</th>
                  <th className="text-center">Update</th>
                  <th className="text-center">Delete</th>
                </tr>
              </thead>
              <tbody className="text-left">
                  {
                    this.state.airports.map(
                      airport=>
                    <tr key={airport.airportId}>
                      <td>
                        <svg width="1em" height="1em" viewBox="0 0 16 18" className="bi bi-shield-check"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                                d="M5.443 1.991a60.17 60.17 0 0 0-2.725.802.454.454 0 0 0-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 0 0 8 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 0 0 2.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 0 0-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 0 1 2.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 0 1-2.418 2.3 6.942 6.942 0 0 1-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 0 1-1.007-.586 11.192 11.192 0 0 1-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 0 1 2.415 1.84a61.11 61.11 0 0 1 2.772-.815z"/>
                          <path fill-rule="evenodd"
                                d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                        </svg>{airport.airportId}</td>
                      <td>{airport.airportName}</td>
                      <td>
                        <svg width="1em" height="1em" viewBox="0 0 16 18" className="bi bi-geo-alt-fill"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>{airport.airportLocation}</td>
                      <td><section><div className="container row"><div className="col-md-3"><button className="btn btn-outline-success btn-lg" onClick={()=>{this.updateAirportClicked(airport.airportId)}}>
                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 18" className="bi bi-pencil-fill"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                                d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                        </svg></button></div></div></section></td>
                      <td><section><div className="container row"><div className="col-md-3"><button className="btn btn-outline-danger btn-lg" onClick={()=>{this.deleteAirportClicked(airport.airportId)}}>
                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 18" className="bi bi-x" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg></button></div></div></section></td>
                    </tr>
                  )}
              </tbody>
            </table></font>
              </div>
            </div>
          </div>
            <section id="actions" className="py-4 mb-4 bg-light">
              <div className="container">
                <div className="row">
                  <div className="col-md-2">
                    <button className="btn btn-primary btn-block" data-toggle="modal" onClick={this.addAirportClicked}><i className="fas fa-plus"></i>
                      <svg width="1em" height="1em" viewBox="0 0 16 18" className="bi bi-cursor-fill"
                           fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                      </svg>
                      Add Airport </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
          </section>
        </div>
    );
  }
}

export default withRouter(ListAirports);
