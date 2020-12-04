import React, {Component} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import ScheduleService from "./ScheduleService";
import { withRouter } from "react-router";

class CreateSFComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        scheduledFlight : {
            entryNo: this.props.match.params.entryNo,
            flight: {
                flightId: '',
                carrierName: '',
                flightModel: '',
                seatCapacity: ''
            },
            availableSeats: '',
            schedule: {
                sourceAirport: {
                    airportId: '',
                    airportName: '',
                    airportLocation: ''
                },
                destinationAirport: {
                    airportId1: '',
                    airportName1: '',
                    airportLocation1: ''
                },
                arrivalTime: '',
                departureTime: '',
                arrivalDate: ''
            },
            fares: ''
}
,
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  validate(values) {
    // let errors = {airportName: 'Airport Name should be Alphabetical', airportLocation: 'Airport Location should be Alphabetical'}
    let errors = {}
    // const letters = /^[A-Za-z]+$/;
    const letters = /^[A-Za-z ]+$/;
    if (!values.sourceAirport) {
      errors.sourceAirport = 'Enter a description'
    } else if (!values.sourceAirport.match(letters)) {
      errors.sourceAirport = 'Sorry! Airport name should be alphabetical, please try again!'
    }
    if (!values.destinationAirport) {
      errors.destinationAirport = 'Enter a description'
    } else if (!values.destinationAirport.match(letters)) {
      errors.destinationAirport = 'Sorry! Airport Location should be alphabetical, please try again!'
    }
    return errors
  }
//   onSubmit(values) {
//       let scheduledF = {
//         entryNo: this.state.scheduledFlight.entryNo,
//         flightId: values.flightId,
//         carrierName: values.carrierName,
//         flightModel: values.flightModel, 
//         seatCapacity: values.seatCapacity,
//         availableSeats: values.availableSeats,
//         airportId: values.airportId,
//         airportName: values.airportName,
//         airportLocation: values.airportLocation,

//         destinationAirport: values.destinationAirport, 
//         arrivalTime: values.arrivalTime,
//         departureTime: values.departureTime, 
//         arrivalDate: values.arrivalDate,
//         fares: values.fares
//       }
//   }

onSubmit(e){
    let scheduledF = {

        entryNo: this.state.scheduledFlight.entryNo,
            flight: {
                flightId: this.state.scheduledFlight.flight.flightId,
                carrierName: this.state.scheduledFlight.flight.carrierName,
                flightModel: this.state.scheduledFlight.flight.flightModel,
                seatCapacity: this.state.scheduledFlight.flight.seatCapacity
            },
            availableSeats: this.state.scheduledFlight.availableSeats,
            schedule: {
                sourceAirport: {
                    airportId: this.state.scheduledFlight.schedule.sourceAirport.airportId,
                    airportName: this.state.scheduledFlight.schedule.sourceAirport.airportName,
                    airportLocation: this.state.scheduledFlight.schedule.sourceAirport.airportLocation
                },
                destinationAirport: {
                    airportId1: this.state.scheduledFlight.schedule.destinationAirport.airportId,
                    airportName1: this.state.scheduledFlight.schedule.destinationAirport.airportName,
                    airportLocation1: this.state.scheduledFlight.schedule.destinationAirport.airportLocation
                },
                arrivalTime: this.state.scheduledFlight.schedule.arrivalTime,
                departureTime: this.state.scheduledFlight.schedule.departureTime,
                arrivalDate: this.state.scheduledFlight.schedule.arrivalDate
            },
            fares: this.state.scheduledFlight.fares
        // entryNo: this.state.entryNo,
        // flightId: this.state.flightId,
        // carrierName: this.state.carrierName,
        // flightModel: this.state.flightModel, 
        // seatCapacity: this.state.seatCapacity,
        // availableSeats: this.state.availableSeats,
        // airportId: this.state.airportId,
        // airportName: this.state.airportName,
        // airportLocation: this.state.airportLocation,

        // // destinationAirport: values.destinationAirport, 
        // arrivalTime: this.state.arrivalTime,
        // departureTime: this.state.departureTime, 
        // arrivalDate: this.state.arrivalDate,
        // fares: this.state.fares
    }
        
console.log(JSON.stringify(scheduledF))
    ScheduleService.createScheduledFlight(this.state)
      .then(() => this.props.history.push('/update/schedule'))
      console.log(e);
    
}
  componentDidMount() {
    if (this.state.entryNo === null) {
        return
      } else {
        ScheduleService.getScheduledFlightById(this.state.entryNo)
        .then(
            response =>
                // console.log(response)
                this.setState({
                  
                    scheduledFlight : {
                        entryNo: this.props.match.params.entryNo,
                        flight: {
                            flightId: response.data.flightModel,
                            carrierName: '',
                            flightModel: '',
                            seatCapacity: ''
                        },
                        availableSeats: '',
                        schedule: {
                            sourceAirport: {
                                airportId: '',
                                airportName: '',
                                airportLocation: ''
                            },
                            destinationAirport: {
                                airportId1: '',
                                airportName1: '',
                                airportLocation1: ''
                            },
                            arrivalTime: '',
                            departureTime: '',
                            arrivalDate: ''
                        },
                        fares: ''
                    }               
            })
        )
      }
  }

onChange= (event) => {
    this.setState({[event.target.name]: event.target.value});
    console.log(event.target.name,event.target.value)
}

  render() {
    let {flight:{flightId, carrierName, flightModel,seatCapacity},availableSeats, schedule:{sourceAirport:{airportId, airportName,airportLocation},destinationAirport:{airportId1,airportName1,airportLocation1}, arrivalTime, departureTime, arrivalDate}, fares} = this.state.scheduledFlight;
    // let airportLocation = this.state.airportLocation;
    return(
        <div>
          <h1>Add Schedule Flight</h1>
          <div className="dropdown">
            <Formik
                initialValues={{flightId, carrierName, flightModel,seatCapacity,availableSeats, airportId, airportName,airportLocation,airportId1,airportName1,airportLocation1, arrivalTime, departureTime, arrivalDate, fares}}
                validate={this.validate}
                validateOnChange={false}
                validateOnBlur={false}
                enableReinitialize={true} 
                onSubmit={this.onSubmit}>
              {
                (props => (
                    <Form  onSubmit={this.onSubmit}>
                      <ErrorMessage name="sourceAirport" component="div" className="alert alert-warning"/>
                      <ErrorMessage name="destinationAirport" component="div" className="alert alert-warning"/>
                      <fieldset className="form-group">
                        <label>Flight Id</label>
                        <Field className="form-control" type="number" name="flightId" value= {this.state.scheduledFlight.flight.flightId} onChange={this.onChange} />
                        
                      </fieldset>
                      <fieldset className="form-group">
                        <label>Carrier Name</label>
                        <Field className="form-control" type="text" name="carrierName" value= {this.state.scheduledFlight.flight.carrierName} onChange={this.onChange}/>
                      </fieldset>
                      <fieldset className="form-group">
                        <label>Flight Model</label>
                        <Field className="form-control" type="text" name="flightModel" value= {this.state.scheduledFlight.flight.flightModel} onChange={this.onChange}/>
                      </fieldset>

                      <fieldset className="form-group">
                        <label>Seat Capacity </label>
                        <Field className="form-control" type="number" name="seatCapacity" value= {this.state.scheduledFlight.flight.seatCapacity} onChange={this.onChange}/>
                      </fieldset>
                      <fieldset className="form-group">
                        <label>Available seats </label>
                        <Field className="form-control" type="number" name="availableSeats" value= {this.state.scheduledFlight.availableSeats} onChange={this.onChange}/>
                      </fieldset>
                      <fieldset className="form-group">
                        <label>Source Airport Id </label>
                        <Field className="form-control" type="number" name="airportId" value= {this.state.scheduledFlight.schedule.sourceAirport.airportId} onChange={this.onChange}/>
                      </fieldset>
                      <fieldset className="form-group">
                        <label>Source Airport Name </label>
                        <Field className="form-control" type="text" name="airportName" value= {this.state.scheduledFlight.schedule.sourceAirport.airportName} onChange={this.onChange}/>
                      </fieldset>
                      <fieldset className="form-group">
                        <label>Source Airport Location </label>
                        <Field className="form-control" type="text" name="airportLocation" value= {this.state.scheduledFlight.schedule.sourceAirport.airportLocation} onChange={this.onChange}/>
                      </fieldset>

                      <fieldset className="form-group">
                        <label>Destination Airport Id </label>
                        <Field className="form-control" type="number" name="airportId1" value= {this.state.scheduledFlight.schedule.destinationAirport.airportId1} onChange={this.onChange}/>
                      </fieldset>
                      <fieldset className="form-group">
                        <label>Destination Airport Name </label>
                        <Field className="form-control" type="text" name="airportName1" value= {this.state.scheduledFlight.schedule.destinationAirport.airportName1} onChange={this.onChange}/>
                      </fieldset>
                      <fieldset className="form-group">
                        <label>Destination Airport Location </label>
                        <Field className="form-control" type="text" name="airportLocation1" value= {this.state.scheduledFlight.schedule.destinationAirport.airportLocation1} onChange={this.onChange}/>
                      </fieldset>

                      <fieldset className="form-group">
                        <label>Arrival Time</label>
                        <Field className="form-control" type="text" name="arrivalTime" value= {this.state.scheduledFlight.schedule.arrivalTime} onChange={this.onChange}/>
                      </fieldset>
                      <fieldset className="form-group">
                        <label>Departure Time</label>
                        <Field className="form-control" type="text" name="departureTime" value= {this.state.scheduledFlight.schedule.departureTime} onChange={this.onChange}/>
                      </fieldset>
                      <fieldset className="form-group">
                        <label>Arrival Date</label>
                        <Field className="form-control" type="number" name="arrivalDate" value= {this.state.scheduledFlight.schedule.arrivalDate} onChange={this.onChange}/>
                      </fieldset>
                      <fieldset className="form-group">
                        <label>Fares </label>
                        <Field className="form-control" type="text" name="fares" value= {this.state.scheduledFlight.fares} onChange={this.onChange}/>
                      </fieldset>
                      <button className="btn btn-success" type="submit">Save</button>
                      <button className="btn btn-danger" type="cancel">Cancel</button>

                    </Form>
                ))
              }
            </Formik>
          </div>
          {/* <div>Update Schedule Flight for entryNo - {this.props.match.params.entryNo}</div> */}
        </div>
          );
  }
}

export default withRouter(CreateSFComp);