import React from 'react';
import {Button,InputLabel} from '@material-ui/core';
import { orange } from '@material-ui/core/colors';


class SearchBox extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(

        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="p-3 mb-3 bg-info text-white">
                <form>
                  <center>
                    <table>
                      <tr>
                        <td><InputLabel>From</InputLabel>
                          <input type="text" name="from" placeholder="New-Delhi" class="border m-1"/></td>
                        <td><InputLabel>To</InputLabel>
                          <input type="text" name="to" placeholder="Mumbai" class="border m-1"/></td>
                        <td><InputLabel>Date</InputLabel>
                          <input type="date" name="date" class="border m-1"/></td>
                        <td><InputLabel>Class</InputLabel>
                          <select name="cls" class="border m-1">
                            <option>Economy</option>
                            <option>Premium Economy</option>
                            <option>Business</option>
                          </select>
                        </td>
                        <td>&nbsp;&nbsp;</td>
                        <td class="m-4">
                          <Button variant="contained" color="secondary" size="medium">
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
    );
  }
}

export default SearchBox;