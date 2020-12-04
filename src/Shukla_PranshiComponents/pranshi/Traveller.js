import React, { Component } from 'react';
import './Traveller.css';
import BookingForm from './BookingForm';
import{InputLabel} from '@material-ui/core';

class Traveller extends React.Component{
 
  
    render()
    {
        return(
           
            <div className="Booking">
            <header className="Booking-Header">
            <br/>
            <h4 class="headerTitle">Traveller Details</h4>
            <br/>
            </header>
            <br/>
            
            <div class="row-inline">
            <div class="col-md-8">
            <h5 class="text-white">Booking Details</h5>     
          </div>
         
           </div>
    <div class="row">
    <div class="col-md-8">
        <div class='card-group'>
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
      
          <span class="card-title">New Delhi-Mumbai</span>
          <p>(DEL-BOM)</p>
        </div>
        </div>
     </div>
    </div>
  </div>
          <div class="col-md-8">
           <h5 class="text-white">Fares Details</h5>
           <div class="card blue-grey darken-1">
           <div class="card-content white-text">
           <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                        <p>
                        Basic Fare:
                        </p>
                        </div>
                        <div class="col-md-4">
                        <p class="text-right">3241</p>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-md-3">
                        <p>
                        Charges:
                        </p>
                        </div>
                        <div class="col-md-4">
                        <p class="text-right">241</p>
                        </div>
                        </div>
                        <div class="card-footer bg-transparent border-success">
                <p class="text-right">3482</p>
                  </div>
                        </div> 
                        
                        
                        
         
        </div>
           </div>
          </div>
              
           
  <div class="col-md-8">
        <h5 class="text-white">Passenger Details</h5>     
        </div>
    <div class="row">
    <div class="col-md-8">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
      
          <div class="card-title"><div class="col-md-3 ">
			<h6>Contact Details:</h6>
	      </div>
      <form class="form-inline">
         <label for="email" class="mr-sm-4">Email address:</label>
         <input type="email" class="form-control mb-2 mr-sm-4" placeholder="Enter email" id="email"></input>
         <label for="mobile" class="mr-sm-4">Mobile No.:</label>
        <input type="text" class="form-control mb-2 mr-sm-4" placeholder="Enter number" id="num"></input>
        <button type="submit" class="btn btn-primary mb-2">Submit</button>
      </form>
    </div>
    <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo">Additional Information</button>
    <div id="demo" class="collapse">
      <br/>
      <BookingForm/>
    </div>
    
         </div> 
    </div>
    </div></div></div>

            
        );
    }
}
export default Traveller;