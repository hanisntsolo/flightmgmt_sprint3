import { pink, yellow } from '@material-ui/core/colors';
import React from 'react';
import {Button, InputLabel, Accordion, AccordionSummary, Typography, AccordionDetails} from '@material-ui/core';
import history from './history.js';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';

class FlightCard extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <div><center>
            <div class="card w-75 shadow-lg rounded m-2">
                <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.
                    <a href="#" class="btn btn-primary">Button</a></p> */}
                    <div class="container">
                    <div class="row">
                        <div class="col-md-2">
                        <p class="text-left">
                        {this.props.carrier}
                        <InputLabel shrink="true">{this.props.model}</InputLabel>
                        </p>
                        </div>
                        <div class="col-md-2">
                        <p class="text-left">
                        {this.props.arrival}
                        <InputLabel shrink="true">{this.props.source}</InputLabel>
                        </p>
                        </div>
                        <div class="col-md-2">
                        <p class="text-left">
                        {this.props.departure}
                        <InputLabel shrink="true">{this.props.destination}</InputLabel>
                        </p>
                        </div>
                        <div class="col-md-2">
                        <p class="text-left">
                        {this.props.duration}&nbsp;hrs
                        <InputLabel shrink="true">Non Stop</InputLabel>
                        </p>
                        </div>
                        <div class="col-md-2">
                        <b>{this.props.fares}</b>
                        </div>
                        <div class="col-md-2">
                            <Link to={`/booking/${this.props.flight}/${this.props.fares}`}>
                            <input type="button" class="btn btn-info w-75" value="Book"/>
                            </Link>
                         {/* <a href="#" class="btn btn-info w-75">Book</a>   */}
                        </div>
                    </div>
                    
                    </div>
                    </div>
                <p class="text-left">
                <div class="card-footer bg-transparent border-success">





                <p class="text-left">
                <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Flight Details
                </a>
                
                </p>
                <div class="collapse" id="collapseExample">
                <div class="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
                </div>
                {/* <div class="expand" id="collapseExample">
                <div class="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
                </div> */}





                    





                    </div>
                </p>
            </div>
            </center>
            
            </div>
            </div>
        );
    }
}

export default FlightCard;
// onClick={()=> this.props.history.push('/Booking')