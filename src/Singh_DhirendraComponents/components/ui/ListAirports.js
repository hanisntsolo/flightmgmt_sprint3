import React, { Component } from 'react';

class ListAirports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airports : [ {
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
        }]

    }
  }
  render() {
    return(
        <div>
          <h1>List Airports</h1>
          <div class="container">
            <table class="table">
              <thead>
                <tr>
                  <th>Airport Identity Number</th>
                  <th>Airport Name</th>
                  <th>Airport Location</th>
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
                    </tr>
                  )}
              </tbody>
            </table>
          </div>
        </div>
    );
  }
}
export default ListAirports;