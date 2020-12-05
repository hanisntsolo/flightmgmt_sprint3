import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React, { Component } from 'react'
import ScheduleService from './ScheduleService'
import { withRouter } from "react-router";

class ListViewComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
                scheduledFlight : [{
                    "entryNo": 1338989894,
                    "flight": {
                        "flightId": 15,
                        "carrierName": "IndiGo",
                        "flightModel": "6E-656",
                        "seatCapacity": 150
                    },
                    "availableSeats": 110,
                    "schedule": {
                        "sourceAirport": {
                            "airportId": 1256,
                            "airportName": "KOL",
                            "airportLocation": "Kolkata"
                        },
                        "destinationAirport": {
                            "airportId": 8967,
                            "airportName": "CHE",
                            "airportLocation": "Chennai"
                        },
                        "arrivalTime": `2020-12-15T12:15:30`,
                        "departureTime": "2020-12-15T09:15:30",
                        "arrivalDate": "15-12-2020"
                    },
                    "fares": 4532.0
    }],
        }
        this.addScheduledFlight = this.addScheduledFlight.bind(this);
        this.editScheduledFlight = this.editScheduledFlight.bind(this);
        this.deleteScheduledFlight = this.deleteScheduledFlight.bind(this);
        this.backClicked = this.backClicked.bind(this);

        
    }
    backClicked() {
        console.log('update')
        // const { history } = this.props;
        // history.push(`/update/${id}`);
        this.props.history.push('/update')
        // this.props.history.push(`/update/${id}`)
    }

    deleteScheduledFlight(entryNo){
        ScheduleService.deleteScheduledFlight(entryNo).then( res => {
            this.setState({message: `Delete of id ${entryNo} is successful`})
            this.refreshSF()
          });
    }
    // viewScheduledFlight(entryNo){
    //     this.props.history.push(`/view-scheduledflig/${entryNo}`);
    // }
    editScheduledFlight(entryNo){
        this.props.history.push(`/updateFlight/${entryNo}`);
    }

    componentDidMount(){
        this.refreshSF();
        // ScheduleService.getScheduledFlight().then((res) => {
        //     this.setState({ scheduledFlight: res.data});
        // });
    }

    addScheduledFlight(){
        this.props.history.push(`/schedule`);
    }

    refreshSF() {
        ScheduleService.getScheduledFlight()
        .then(
            res=>
            {
              // console.log(response)
              this.setState({scheduledFlight : res.data})
            })
      }

    render() {
        return (
            <div>
                 <h2 className="text-center">Scheduled Flight List</h2>
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
                <div className = "row">
                    <Button variant="contained" color="secondary" onClick={this.addScheduledFlight}> Add Scheduled Flight</Button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <Table >

                            <TableHead>
                                <TableRow>
                                    {/* <TableCell> Flight Id</TableCell> */}
                                    <TableCell> Flight Model</TableCell>
                                    <TableCell> Source Airport</TableCell>
                                    <TableCell> Destination Airport</TableCell>
                                    <TableCell> Arrival Time</TableCell>
                                    <TableCell> Departure Time </TableCell>
                                    <TableCell> Arrival Date</TableCell>
                                    <TableCell> Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody> 
                                {
                                    this.state.scheduledFlight.map(
                                        scheduledflig =>{
                                            console.log(JSON.stringify(scheduledflig))
                                            return(<TableRow key = {scheduledflig.entryNo}>
                                             <TableCell> {scheduledflig.flight.flightModel} </TableCell>
                                             <TableCell> {scheduledflig.schedule.sourceAirport.airportLocation} </TableCell>
                                             <TableCell> {scheduledflig.schedule.destinationAirport.airportLocation}</TableCell>
                                             <TableCell> {scheduledflig.schedule.arrivalTime}</TableCell>
                                             <TableCell> {scheduledflig.schedule.departureTime}</TableCell>
                                             <TableCell> {scheduledflig.schedule.arrivalDate}</TableCell>
                                             <TableCell>
                                                 <Button variant="contained" color="success" onClick={ () => {this.editScheduledFlight(scheduledflig.entryNo)}}>Update </Button>
                                                 <Button variant="contained" color="secondary" style={{marginLeft: "10px"}} onClick={ () => {this.deleteScheduledFlight(scheduledflig.entryNo)}} >Delete </Button>
                                                 {/* <Button variant="contained" color="primary" style={{marginLeft: "10px"}} onClick={ () => this.viewScheduledFlight(scheduledflig.id)} >View </Button> */}
                                             </TableCell>
                                        </TableRow>
                                            );
                                        } 
                                        
                                    )
                                }
                            </TableBody>
                        </Table>

                 </div>

            </div>

        );
    }
}

// export default ListViewComp;
export default withRouter(ListViewComp);