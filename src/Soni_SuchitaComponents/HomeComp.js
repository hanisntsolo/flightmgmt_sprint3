import { Button, IconButton, Table, TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import FlightIcon from '@material-ui/icons/Flight';


class HomeComp extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
        <div >
          <h1 >Welcome to EaseMyFlight</h1>
          {/* <table align="left" >
                <tr>
                    <td><h3>Why Book <br />with us?</h3></td>
                    <td>
                    <IconButton
                aria-haspopup="true"
                color="inherit"
              >
                  <FlightIcon fontSize="large" />
              </IconButton>
              <p >We offer easy and <br /> convenient flight bookings</p>
                    </td>
                </tr>
            </table> */}
          <h2 align="center" ><i>Top Flight Routes</i> </h2><br/>
          <Table >
            <TableRow >
              <TableCell> Delhi to Mumbai (DEL-BOM)</TableCell>
              <TableCell><Button color="secondary" variant="contained">
                Search Flight
              </Button></TableCell>
            </TableRow>
            <TableRow >
              <TableCell> Mumbai to Delhi (BOM-DEL)</TableCell>
              <TableCell><Button color="secondary" variant="contained" >
                Search Flight
              </Button></TableCell>
            </TableRow>
            <TableRow >
              <TableCell> Delhi to Bangalore (DEL-BLR)</TableCell>
              <TableCell><Button color="secondary" variant="contained" >
                Search Flight
              </Button></TableCell>
            </TableRow>
            <TableRow >
              <TableCell> Bangalore to Delhi (BLR-DEL)</TableCell>
              <TableCell><Button color="secondary" variant="contained" >
                Search Flight
              </Button></TableCell>
            </TableRow>
            <TableRow >
              <TableCell> Kolkata to Delhi (CCU-DEL)</TableCell>
              <TableCell><Button color="secondary" variant="contained" >
                Search Flight
              </Button></TableCell>
            </TableRow>
            <TableRow >
              <TableCell> Delhi to Kolkata (DEL-CCU)</TableCell>
              <TableCell><Button color="secondary" variant="contained" >
                Search Flight
              </Button></TableCell>
            </TableRow>
            <TableRow >
              <TableCell> Mumbai to Goa (BOM-GOI)</TableCell>
              <TableCell><Button color="secondary" variant="contained" >
                Search Flight
              </Button></TableCell>
            </TableRow>

          </Table>

        </div>
    );
  }
}
export default HomeComp;