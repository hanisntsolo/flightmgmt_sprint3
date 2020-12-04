import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React, { Component } from 'react'
import ScheduleService from './ScheduleService'
import { withRouter } from "react-router";

class ListViewComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
                scheduledFlight : [{
                    entryNo: 1338989894,
                    flight: {
                        flightId: 15,
                        carrierName: "IndiGo",
                        flightModel: "6E-656",
                        seatCapacity: 150
                    },
                    availableSeats: 110,
                    schedule: {
                        sourceAirport: {
                            airportId: 1256,
                            airportName: "KOL",
                            airportLocation: "Kolkata"
                        },
                        destinationAirport: {
                            airportId: 8967,
                            airportName: "CHE",
                            airportLocation: "Chennai"
                        },
                        arrivalTime: `2020-12-15T12:15:30`,
                        departureTime: "2020-12-15T09:15:30",
                        arrivalDate: "15-12-2020"
                    },
                    fares: 4532.0
    }

                ],
        }
        this.addScheduledFlight = this.addScheduledFlight.bind(this);
        this.editScheduledFlight = this.editScheduledFlight.bind(this);
        this.deleteScheduledFlight = this.deleteScheduledFlight.bind(this);

        
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
        this.props.history.push(`/schedule/${entryNo}`);
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