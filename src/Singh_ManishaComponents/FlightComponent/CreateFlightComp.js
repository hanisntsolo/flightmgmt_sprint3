import React, {Component} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import { withRouter } from "react-router";
import FlightService from './FlightService';
import { Container,Row,Col } from 'react-bootstrap';
class CreateFlightComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flightId : this.props.match.params.flightId,
      carrierName : '',
      flightModel : '',
      seatCapacity : ''
    }

    this.onSubmit = this.onSubmit.bind(this);

  }



  onSubmit(values) {
    let flight = {
      flightId: this.state.flightId,
      carrierName: values.carrierName,
      flightModel: values.flightModel,
      seatCapacity: values.seatCapacity
    }
      FlightService.createFlight(flight)
      .then(() => this.props.history.push('/updateFlight'));
      console.log(values);
    }


  render() {
    let {carrierName, flightModel,seatCapacity} = this.state;
    // let airportLocation = this.state.airportLocation;
    return(
        <div className="btn-info" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '90vh'}}>
          <Container>
          <h1 >Add Flight</h1>
          <Row>
          <Col sm={5}>
            <Formik
                initialValues={{carrierName,flightModel,seatCapacity}}

                enableReinitialize={true}
                onSubmit={this.onSubmit}>
              {
                (props => (
                    <Form>
                       <ErrorMessage name="carrierName" component="div" className="alert alert-warning"/>
                      {/* <ErrorMessage name="flightModel" component="div" className="alert alert-warning"/> */}
                      <fieldset className="form-group">

                        <label htmlFor="carrierName"><span style={{fontFamily:"Serif",fontSize:"1.5em"}}>Enter Carrier Name</span></label>

                        <Field id="carrierName" className="form-control" type="text" name="carrierName" required="true"/>

                      </fieldset><br/>
                      <fieldset className="form-group">


                        <label htmlFor="flightModel"><span style={{fontFamily:"Serif",fontSize:"1.5em"}}>Enter FlightModel No.</span></label>&nbsp;&nbsp;

                        <Field id="flightModel" className="form-control" type="text" name="flightModel" required="true"/>

                      </fieldset> <br />
                      <fieldset className="form-group">

                        <label htmlFor="seatCapacity"><span style={{fontFamily:"Serif",fontSize:"1.5em"}}>Enter Seat Capacity</span></label>&nbsp;&nbsp;

                        <Field id="seatCapacity" className="form-control" type="text" name="seatCapacity" required="true"/>

                      </fieldset>
                      <button className="btn btn-success" type="submit">Save</button>
                    </Form>
                ))
              }
            </Formik>
            </Col>
        </Row>
        </Container>



        </div>


    );
  }
}

export default withRouter(CreateFlightComp);