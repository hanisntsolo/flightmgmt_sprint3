import React, {Component} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import AirportService from "../../AirportApi/AirportService";
import { withRouter } from "react-router";
class UpdateAirportComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id : this.props.match.params.id,
      airportName : '',
      airportLocation : ''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }
  validate(values) {
    // let errors = {airportName: 'Airport Name should be Alphabetical', airportLocation: 'Airport Location should be Alphabetical'}
    let errors = {}
    // const letters = /^[A-Za-z]+$/;
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
    if (this.state.id === null) {
      AirportService.createAirport({
        // id: this.state.id,
        airportName: values.airportName,
        airportLocation: values.airportLocation
      }).then(() => this.props.history.push('/update'))
      console.log(values);
    } else {
      AirportService.updateAirport(this.state.id, {
        id: this.state.id,
        airportName: values.airportName,
        airportLocation: values.airportLocation
      }).then(() => this.props.history.push('/update'))
      console.log(values);
    }
  }
  componentDidMount() {
    if (this.state.id === null) {
      return
    } else {
      AirportService.retrieveAirport(this.state.id)
      .then(
          response =>
              // console.log(response)
              this.setState({
                airportName : response.data.airportName,
                airportLocation : response.data.airportLocation
              })
      )
    }
  }

  render() {
    let {airportName, airportLocation} = this.state;
    // let airportLocation = this.state.airportLocation;
    return(
        <div>
          <h1>Update Airport</h1>
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
                      <fieldset className="form-group">
                        <label>Airport Name</label>
                        <Field className="form-control" type="text" name="airportName"/>
                      </fieldset>
                      <fieldset className="form-group">
                        <label>Airport Location</label>
                        <Field className="form-control" type="text" name="airportLocation"/>
                      </fieldset>
                      <button className="btn btn-success" type="submit">Save</button>
                    </Form>
                ))
              }
            </Formik>
          </div>
          <div>Update Airport for id - {this.props.match.params.id}</div>
        </div>
          );
  }
}
export default UpdateAirportComp;