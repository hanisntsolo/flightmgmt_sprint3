import React from 'react';
import FlightCard from './FlightCard';
import SearchBox from './SearchBox';
class FlightCardList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      arr:[1,2,3,4]
    }
  }

  render(){
    return(
        <div>
          <div class="container-fluid">
            <div class="row"><div class="col-sm"><SearchBox/></div></div>
            {this.state.arr.map(n=>
                <div class="row"><div class="col-sm"><FlightCard/></div></div>)}
          </div>
        </div>
    );
  }
}

export default FlightCardList;
