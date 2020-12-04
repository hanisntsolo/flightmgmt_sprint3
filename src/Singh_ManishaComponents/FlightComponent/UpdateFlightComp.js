import React, {Component} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import { Container,Row,Col } from 'react-bootstrap';
import { withRouter } from "react-router";
import FlightService from './FlightService';
class UpdateFlightComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flightId : this.props.match.params.flightId,
      carrierName : '',
      flightModel: '',
      seatCapacity: ''

    }
    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit(values) {
    let flight = {
      flightId: this.state.flightId,
      carrierName: values.carrierName,
      flightModel: values.flightModel,
      seatCapacity:values.seatCapacity
    }
    if (this.state.flightId === null) {
      FlightService.createFlight(flight)
      .then(() => this.props.history.push('/updateFlight'))
      console.log(values);
    } else {
      FlightService.updateFlight(this.state.flightId, flight)
      .then(() => this.props.history.push('/updateFlight'))
      console.log(values);
    }
  }
  componentDidMount() {
    if (this.state.flightId === null) {
      return
    } else {
      FlightService.retrieveFlight(this.state.flightId)
      .then(
          response =>
              // console.log(response)
              this.setState({
                carrierName : response.data.carrierName,
                flightModel: response.data.flightModel,
                seatCapacity: response.data.seatCapacity,

              })
      )
    }
  }

  render() {
    let {carrierName, flightModel,seatCapacity} = this.state;

    return(
      <div>
      <div className="btn-info" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '90vh'}}>
      <Container>
      <h1 >Add Flight</h1>
      <Row>
      <Col sm={4}>
        <Formik
            initialValues={{carrierName,flightModel,seatCapacity}}

            enableReinitialize={true}
            onSubmit={this.onSubmit}>
          {
            (props => (
                <Form>

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
                   <button className="btn btn-danger" type="submit">Save</button>
                </Form>
            ))
          }
        </Formik>
        </Col>
    </Row>
    </Container>



    </div>
    <div>Update Flight for id - {this.props.match.params.flightId}</div>
    </div>
          );
  }
}
export default withRouter(UpdateFlightComp);