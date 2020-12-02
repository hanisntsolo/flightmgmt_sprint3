import React, {useState} from "react";
import '../../App.css';
import Header from "./ui/Header";
import { ThemeProvider } from '@material-ui/styles';
import theme from "./ui/Theme";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from "./ui/Footer";
import About from "./ui/About";
import FlightCardList from "../../Gupta_AnishaComponents/FlightCardList";
import HelpComp from "../../Soni_SuchitaComponents/HelpComp";
import HomeComp from "../../Soni_SuchitaComponents/HomeComp";
import LoginComp from "./ui/LoginComp";
import ErrorComp from "./ui/ErrorComp";
import ListAirports from "./ui/ListAirports";
import LogoutComp from "./ui/LogoutComp";
import AuthenticatedRoute from "./Authentication/AuthenticatedRoute";
import UpdateAirportComp from "./ui/UpdateAirportComp";

function App() {
  //Global Declaration to be used in header/footer
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (

      <div className="App">
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
            <Switch>
              {/*<Route exact path="/" component={()=><div style={{height:"2000px"}}>HOME</div>}/>*/}
              <AuthenticatedRoute exact path="/home" component={()=><div style={{height:"2000px"}}><HomeComp/></div>}/>
              {/*<Route exact path="/search" component={()=><div style={{height:"2000px"}}>SEARCH</div>}/>*/}
              <AuthenticatedRoute exact path="/search" component={()=><div style={{height:"2000px"}}><FlightCardList/></div>}/>
              {/*<Route exact path="/faq" component={()=><div style={{height:"2000px"}}>FAQ'S</div>}/>*/}
              <AuthenticatedRoute exact path="/faq" component={()=><div style={{height:"2000px"}}><HelpComp/></div>}/>
              <AuthenticatedRoute exact path="/faq/pricing" component={()=><div style={{height:"2000px"}}>FAQ's Pricing</div>}/>
              <AuthenticatedRoute exact path="/faq/ticket-cancellation" component={()=><div style={{height:"2000px"}}>FAQ'S Ticket Cancellation</div>}/>
              <AuthenticatedRoute exact path="/faq/booking" component={()=><div style={{height:"2000px"}}>FAQ'S Booking</div>}/>
              <AuthenticatedRoute exact path="/faq/popular-queries" component={()=><div style={{height:"2000px"}}>FAQ'S Popular Queries</div>}/>
              {/*<Route exact path="/about" component={()=><div style={{height:"2000px"}}>ABOUT</div>}/>*/}
              <AuthenticatedRoute exact path="/about" component={()=><div style={{height:"2000px"}}><About/></div>}/>
              <AuthenticatedRoute exact path="/update/:id" component={UpdateAirportComp}/>
              <AuthenticatedRoute exact path="/update" component={()=><div style={{height:"2000px"}}><ListAirports/></div>}/>
              <Route exact path="/login" component={()=><div style={{height:"2000px"}}><LoginComp/></div>}/>
              <AuthenticatedRoute exact path="/logout" component={()=><div style={{height:"2000px"}}><LogoutComp/></div>}/>
              {/*<AuthenticatedRoute exact path="/update/:id" component={()=><div style={{height:"2000px"}}><UpdateAirportComp/></div>}/>*/}
              <Route exact path="/signup" component={()=><div style={{height:"2000px"}}>SIGNUP</div>}/>
              <Route exact component={()=><div style={{height:"2000px"}}><ErrorComp/></div>}/>
            </Switch>
            <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
          </BrowserRouter>
        </ThemeProvider>
      </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
