import React, {Component} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import AirportService from "../../AirportApi/AirportService";
import { withRouter } from "react-router";
class CreateAirportComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id : this.props.match.params.id,
      airportName : '',
      airportLocation : ''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.backClicked = this.backClicked.bind(this);
  }
  validate(values) {
    let errors = {}
    const letters = /^[A-Za-z ]+$/;
    if (!values.airportName) {
      errors.airportName = 'Enter a description'
    } else if (!values.airportName.match(letters)) {
      errors.airportName = 'Sorry! Airport name should be alphabetical, please try again!'
    }
    if (!values.airportLocation) {
      errors.airportLocation = 'Enter a description'
    } else if (!values.airportLocation.match(letters)) {
      errors.airportLocation = 'Sorry! Airport Location should be alphabetical, please try again!'
    }
    return errors
  }
  onSubmit(values) {
    let airPort = {
      id: this.state.id,
      airportName: values.airportName,
      airportLocation: values.airportLocation
    }
      AirportService.createAirport(airPort)
      .then(() => this.props.history.push('/update'))
      console.log(values);
    }
  backClicked() {
    console.log('update')
    this.props.history.push('/update')
  }

  render() {
    let {airportName, airportLocation} = this.state;
    return(
        <div>
          <h1 className="display-1">Add Airport</h1>
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
          <div className="container">
            <Formik
                initialValues={{airportName,airportLocation}}
                validate={this.validate}
                validateOnChange={false}
                validateOnBlur={false}
                enableReinitialize={true}
                onSubmit={this.onSubmit}>
              {
                (props => (

                    <Form>
                      <ErrorMessage name="airportName" component="div" className="alert alert-warning"/>
                      <ErrorMessage name="airportLocation" component="div" className="alert alert-warning"/>
                      <div className="form-group">
                        <fieldset className="form-group">
                          <div className="input-group mb-3">
                            <div className="input-group-append">
                                <label htmlFor="airportName"><span className="input-group-text">Airport Name</span></label>
                            </div>
                            <Field id="airportName" className="form-control" type="text" name="airportName"/>
                          </div>
                        </fieldset>
                      </div>
                      <fieldset className="form-group">
                        <div className="input-group mb-3">
                          <div className="input-group-append">
                            <label for="airportLocation"><span className="input-group-text">Airport Location</span></label>
                          </div>
                          <Field id="airportLocation" className="form-control" type="text" name="airportLocation"/>
                        </div>
                      </fieldset>
                      <div className="input-group mb-3 ">
                           <button className="btn btn-success btn-block form-control" type="submit">Save</button>
                        <div className="input-group-append">
                          <button className="btn btn-warning btn-block" type="reset">Reset</button>
                        </div>
                      </div>
                    </Form>
                ))
              }
            </Formik>
          </div>
        </div>
    );
  }
}

export default withRouter(CreateAirportComp);