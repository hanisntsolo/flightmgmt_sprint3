import React, {useState} from "react";
import '../../App.css';
import Header from "./ui/Header";
import { ThemeProvider } from '@material-ui/styles';
import theme from "./ui/Theme";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from "./ui/Footer";
import About from "./ui/About";
import HelpComp from "../../Soni_SuchitaComponents/HelpComp";
import HomeComp from "../../Soni_SuchitaComponents/HomeComp";
import LoginComp from "./ui/LoginComp";
import ErrorComp from "./ui/ErrorComp";
import ListAirports from "./ui/ListAirports";
import LogoutComp from "./ui/LogoutComp";
import AuthenticatedRoute from "./Authentication/AuthenticatedRoute";
import UpdateAirportComp from "./ui/UpdateAirportComp";
import CreateAirportComp from "./ui/CreateAirportComp";
import BookingList from "../../Gupta_AnishaComponents/Anisha/BookingList";
import SearchBox from "../../Gupta_AnishaComponents/Anisha/SearchBox";
import {Provider} from "react-redux";
import store from "../../Gupta_AnishaComponents/Anisha/redux/Store";
import ListFlight from "../../Singh_ManishaComponents/FlightComponent/ListFlight";
import CreateFlightComp from "../../Singh_ManishaComponents/FlightComponent/CreateFlightComp";
import UpdateFlightComp from "../../Singh_ManishaComponents/FlightComponent/UpdateFlightComp";
import ListViewComp from "../../Soni_SuchitaComponents/SuchitaComp/ListViewComp";
import CreateSFComp from "../../Soni_SuchitaComponents/SuchitaComp/CreateSFComp";
import UpdateComp from "../../Soni_SuchitaComponents/SuchitaComp/UpdateComp";
import Login from "../../Bhatia_JigyasaComponents/Jigyasa/Login";
import SignUp from "../../Bhatia_JigyasaComponents/Jigyasa/SignUp";

function App() {
  //Global Declaration to be used in header/footer
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Provider store={store}>
      <div className="App">
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
              <Switch>
                <div>
                  {/*Suchita Soni Routes*/}
                  <AuthenticatedRoute exact path="/scheduleFlight" component={()=><div style={{height:"2000px"}}><ListViewComp/></div>}/>
                  <AuthenticatedRoute exact path="/schedule" component={CreateSFComp}/>
                  <AuthenticatedRoute  path="/schedule/:entryNo" component={UpdateComp}/>

                  {/*Anisha Gupta Routes*/}
                  <AuthenticatedRoute exact path="/search" component={()=><div style={{height:"2000px"}}><SearchBox/></div>}/>
                  <AuthenticatedRoute exact path="/user" component={()=><div style={{height:"2000px"}}><BookingList/></div>}/>

                  {/*Singh Dhirendra Routes*/}
                  <Route exact path="/login" component={()=><div style={{height:"2000px"}}><LoginComp/></div>}/>
                  <AuthenticatedRoute exact path="/logout" component={()=><div style={{height:"2000px"}}><LogoutComp/></div>}/>
                  <Route exact path="/signup" component={()=><div style={{height:"2000px"}}>SIGNUP</div>}/>
                  <Route exact path component={()=><div style={{height:"2000px"}}><ErrorComp/></div>}/>

                  <AuthenticatedRoute exact path="/home" component={()=><div style={{height:"2000px"}}><HomeComp/></div>}/>
                  <AuthenticatedRoute exact path="/faq" component={()=><div style={{height:"2000px"}}><HelpComp/></div>}/>
                  <AuthenticatedRoute exact path="/faq/pricing" component={()=><div style={{height:"2000px"}}>FAQ's Pricing</div>}/>
                  <AuthenticatedRoute exact path="/faq/ticket-cancellation" component={()=><div style={{height:"2000px"}}>FAQ'S Ticket Cancellation</div>}/>
                  <AuthenticatedRoute exact path="/faq/booking" component={()=><div style={{height:"2000px"}}>FAQ'S Booking</div>}/>
                  <AuthenticatedRoute exact path="/faq/popular-queries" component={()=><div style={{height:"2000px"}}>FAQ'S Popular Queries</div>}/>
                  <AuthenticatedRoute exact path="/about" component={()=><div style={{height:"2000px"}}><About/></div>}/>
                  <AuthenticatedRoute exact path="/create" component={CreateAirportComp}/>
                  <AuthenticatedRoute exact path="/update/:id" component={UpdateAirportComp}/>
                  <AuthenticatedRoute exact path="/update" component={()=><div style={{height:"2000px"}}><ListAirports/></div>}/>

                  {/*Singh Manisha Routes*/}
                  <AuthenticatedRoute exact path="/updateFlight/:flightId" component={UpdateFlightComp}/>
                  <AuthenticatedRoute  path="/createFlight" component={CreateFlightComp}/>
                  <AuthenticatedRoute exact path="/updateFlight/:flightId" component={UpdateFlightComp}/>


                  <Route exact path="/updateFlight" component={()=><div style={{height:"2000px"}}><ListFlight/></div>}/>

                  {/*Bhatia Jigyasa Routes*/}
                  <Route exact path="/loginUser" component={()=><div style={{height:"2000px"}}><Login/></div>}/>
                  <Route exact path="/signUpUser" component={()=><div style={{height:"2000px"}}><SignUp/></div>}/>

                  {/*Shukla Pranshi Routes*/}
                  {/*No routes yet*/}

                  {/*<AuthenticatedRoute exact path="/update/:id" component={()=><div style={{height:"2000px"}}><UpdateAirportComp/></div>}/>*/}
                </div>
              </Switch>
            <section>
              <div>
                <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
              </div>
            </section>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </Provider>

  );
}

export default App;
