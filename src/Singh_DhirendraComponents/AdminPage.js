import React, { Component } from 'react';

class AdminPage extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
        <div>
          <CreateAirport/>
          <GetAirport/>
          <UpdateAirport/>
          <DeleteAirport/>
        </div>
    );
  }
}