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
    this.validate = this.validate.bind(this);
    this.backClicked = this.backClicked.bind(this);
  }
    backClicked() {
        console.log('update')
        // const { history } = this.props;
        // history.push(`/update/${id}`);
        this.props.history.push('/updateFlight')
        // this.props.history.push(`/update/${id}`)
    }
    validate(values) {
//     // let errors = {airportName: 'Airport Name should be Alphabetical', airportLocation: 'Airport Location should be Alphabetical'}
        let errors = {}

        const letters = /^[A-Za-z ]+$/;
        const modelno = /^[A-Z0-9]{2}[-][0-9]{3,4}$/;

        if (!values.carrierName.match(letters)) {
            errors.carrierName = 'Sorry! Carrier Name should be alphabetical, please try again!'
        }
        if (!values.flightModel.match(modelno)) {
            errors.flightModel = 'Sorry! Flight Model No.  should be in format AA-1111 or 1A-111, please try again!'
        }

        return errors
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
                      </div>
                  </div>
              </section>
          <h1 className="display-4" >Add Flight</h1>
          <Row>
          <Col sm={5}>
            <Formik
                initialValues={{carrierName,flightModel,seatCapacity}}
                enableReinitialize={true}
                onSubmit={this.onSubmit}
                validate={this.validate}
                validateOnBlur={false}
                validateOnChange={false}>
              {
                (props => (
                    <Form>
                       <ErrorMessage name="carrierName" component="div" className="alert alert-warning"/>
                       <ErrorMessage name="flightModel" component="div" className="alert alert-warning"/>
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

                        <Field id="seatCapacity" className="form-control" size="4" type="number" name="seatCapacity" required="true"/>

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