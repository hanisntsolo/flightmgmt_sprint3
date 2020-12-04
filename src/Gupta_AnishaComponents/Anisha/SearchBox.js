import React from 'react';
import {Button,InputLabel} from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchFlights } from './redux';
import { orange } from '@material-ui/core/colors';
import FlightCard from './FlightCard';
import {withRouter} from 'react-router'; 
import moment from 'moment';

class SearchBox extends React.Component{
    constructor(props){
        super(props);
        // var today = new Date(),
        // dt = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state={
            from:"Mumbai",
            to:"Lucknow",
            date:"",
            arr:[],
            status:""
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(e){
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // submitHandler(e){
    //     e.preventDefault()
    //     this.props.fetchFlights(this.state.from, this.state.to, this.state.date)
    //     console.log(this.props.flightData.flights)
    //     this.setState({
    //         element: this.props.flightData.loading ? (
    //             <h2>Loading</h2>
    //         ) : this.props.flightData.error ? (
    //             <h2>{this.props.flightData.error}</h2>
    //         ) : this.props.flightData.flights.length===0 ? ( 
    //             <h2>No flights found!</h2>
    //         ) : (
    //             this.props.onSearch(this.props.flightData.flights)
    //         )
    //     });
    // }

    submitHandler(e){
        e.preventDefault()
        this.props.fetchFlights(this.state)
        setTimeout(()=>{console.log(this.props.flightData.flights)
        var flist= this.props.flightData.flights
        //this.props.onSearch(flist)
        if(!flist.length)
        this.setState({status : "No Flights available!"})
        else
        this.setState({arr: flist})
    console.log("arr",this.state.arr)},2000)
    }

    renderFlightCard= ()=>{
        const {arr}= this.state;
        if(!arr.length){
            return
        }
        return  (arr.map(sf=> 
                {var now= moment(sf.schedule.arrivalTime);
                var then= moment(sf.schedule.departureTime);
                var d= moment.utc(moment(then,"DD/MM/YYYY HH:mm:ss").diff(moment(now,"DD/MM/YYYY HH:mm:ss"))).format("HH:mm");
               return <div class="row"><div class="col-sm"><FlightCard key={sf[0]} carrier={sf.flight.carrierName} model={sf.flight.flightModel}
                  arrival={moment(sf.schedule.arrivalTime).format("HH:mm")} departure={moment(sf.schedule.departureTime).format("HH:mm")}
                   duration={d} fares={sf.fares} source={sf.schedule.sourceAirport.airportLocation} destination={sf.schedule.destinationAirport.airportLocation}
                   flight={sf.flight.flightId}/></div></div>}
             ))
        }

    render(){
        return(
        
            <div>
                {this.state.status && <div className="alert alert-danger">{this.state.status}</div>}
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                        <div class="p-3 mb-3 bg-info text-white"> 
                        
                <form>
                    <center>
                    <table> 
                        <tr> 
                            <td><InputLabel>From</InputLabel>
                                <input type="text" list="sc" name="from" placeholder="New-Delhi" class="border m-2" onChange={this.changeHandler}/>
                                <datalist id="sc">
                                <option>Mumbai </option>
                                <option>	Delhi 	</option>
                                <option>	Bangalore </option>
                                <option>	Hyderabad 	</option>
                                <option>	Ahmedabad 	</option>
                                <option>	Chennai </option>	
                                <option>	Kolkata 	</option>
                                <option>	Surat	</option>
                                <option>	Pune	</option>
                                <option>Jaipur	</option>
                                <option>	Lucknow	</option>
                                <option>	Kanpur	</option>
                                <option>	Nagpur	</option>
                                <option>	Indore	</option>
                                <option>Visakhapatnam</option>
                                </datalist>
                                </td>
                            <td><InputLabel>To</InputLabel>
                                <input type="text" list="dc" name="to" placeholder="Mumbai" class="border m-2" onChange={this.changeHandler}/>
                                <datalist id="dc">
                                <option>Mumbai </option>
                                <option>	Delhi 	</option>
                                <option>	Bangalore </option>
                                <option>	Hyderabad 	</option>
                                <option>	Ahmedabad 	</option>
                                <option>	Chennai </option>	
                                <option>	Kolkata 	</option>
                                <option>	Surat	</option>
                                <option>	Pune	</option>
                                <option>Jaipur	</option>
                                <option>	Lucknow	</option>
                                <option>	Kanpur	</option>
                                <option>	Nagpur	</option>
                                <option>	Indore	</option>
                                <option>Visakhapatnam</option>
                                </datalist>
                                </td>
                            <td><InputLabel>Date</InputLabel>
                                <input type="date" name="date" class="border m-2" onChange={this.changeHandler}/></td>
                            {/* <td><InputLabel>Class</InputLabel>
                                <select name="cls" class="border m-1">
                                    <option>Economy</option>
                                    <option>Premium Economy</option>
                                    <option>Business</option>
                                </select>
                            </td> */}
                            <td>&nbsp;&nbsp;</td>
                                <td class="m-4">
                                <Button variant="contained" color="secondary" size="medium" onClick={this.submitHandler}>
                                Search
                                </Button>
                                    {/* <button type="submit" class="btn btn-danger m-3">Search</button> */}
                            </td>
                            </tr>
                    </table>
                    </center>
                </form>
            </div> 
            </div>
            </div>
            </div>
            {this.renderFlightCard()}
            <br/><br/><br/>
            {!this.state.arr.length && <div className="alert alert-info"><h2>Search Your Flights</h2></div>}<br/>
    
            </div>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        flightData: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFlights: ({from, to, date}) => dispatch(fetchFlights({from, to, date}))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBox);
// export default SearchBox;