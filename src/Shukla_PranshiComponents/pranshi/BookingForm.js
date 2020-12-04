import React, { Component } from 'react';
import './style.css';
class BookingForm extends React.Component{
      constructor(props)
      {
          super(props);
      }

render()
    {
    return(


    <div class="booking-form-box">
       
        <div class="booking-form">
            <label>Flying from</label>
            <input type="text" className="form-control" placeholder="City Name"></input>
            <label>Flying To</label>
            <input type="text" className="form-control" placeholder="City Name"></input>
            <div class="input-grp">
                <label>Departure</label>
                <input type="date" className="form-control select-date"></input>
            </div>
            <div class="input-grp">
                <label>Arrival</label>
                <input type="date" className="form-control select-date"></input>
            </div>
            <div class="input-grp">
                <label>Adults</label>
                <input type="number" className="form-control" value="1"></input>
            </div>
            <div class="input-grp">
                <label>Childern</label>
                <input type="number" className="form-control" value="0"></input>
            </div>
            <div class="input-grp">
                <label>Travel class</label>
                <select className="custom-select">
                    <option value="1">Economy Class</option>
                    <option value="1">Bussiness Class</option> 
                </select>
            </div>
            <div class="input-grp">
                <button type="button" class="btn btn-primary flight" >Submit</button>
            </div>
            </div>
            </div>
            
           );
        }
    }
           export default BookingForm; 