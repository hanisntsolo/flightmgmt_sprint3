import { pink, yellow } from '@material-ui/core/colors';
import React from 'react';
import {Button, InputLabel, Accordion, AccordionSummary, Typography, AccordionDetails} from '@material-ui/core';

class FlightCard extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
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
                      Go Air
                      <InputLabel shrink="true">G8-324</InputLabel>
                    </p>
                  </div>
                  <div class="col-md-2">
                    <p class="text-left">
                      12:00
                      <InputLabel shrink="true">New Delhi</InputLabel>
                    </p>
                  </div>
                  <div class="col-md-2">
                    <p class="text-left">
                      02:00
                      <InputLabel shrink="true">Mumbai</InputLabel>
                    </p>
                  </div>
                  <div class="col-md-2">
                    <p class="text-left">
                      2 hrs
                      <InputLabel shrink="true">Non Stop</InputLabel>
                    </p>
                  </div>
                  <div class="col-md-2">
                    <b>Rs.5000</b>
                  </div>
                  <div class="col-md-2">
                    <a href="#" class="btn btn-info w-75">Book</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer bg-transparent border-success">
              <p class="text-left">
                <a href="#" class="card-link">Flight Details</a>
                {/* <Accordion square>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Collapsible Group Item #1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion> */}
              </p></div>
          </div>
        </center>
        </div>
    );
  }
}

export default FlightCard;