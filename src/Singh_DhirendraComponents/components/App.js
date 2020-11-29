import React, {useState} from "react";
import '../../App.css';
import Header from "./ui/Header";
import { ThemeProvider } from '@material-ui/styles';
import theme from "./ui/Theme";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from "./ui/Footer";

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
              <Route exact path="/" component={()=><div style={{height:"2000px"}}>HOME</div>}/>
              <Route exact path="/search" component={()=><div style={{height:"2000px"}}>SEARCH</div>}/>
              <Route exact path="/faq" component={()=><div style={{height:"2000px"}}>FAQ'S</div>}/>
              <Route exact path="/faq/pricing" component={()=><div style={{height:"2000px"}}>FAQ'S Pricing</div>}/>
              <Route exact path="/faq/ticket-cancellation" component={()=><div style={{height:"2000px"}}>FAQ'S Ticket Cancellation</div>}/>
              <Route exact path="/faq/booking" component={()=><div style={{height:"2000px"}}>FAQ'S Booking</div>}/>
              <Route exact path="/faq/popular-queries" component={()=><div style={{height:"2000px"}}>FAQ'S Popular Queries</div>}/>
              <Route exact path="/about" component={()=><div style={{height:"2000px"}}>ABOUT</div>}/>
              <Route exact path="/contactus" component={()=><div style={{height:"2000px"}}>CONTACTUS</div>}/>
              <Route exact path="/login" component={()=><div>LOGIN</div>}/>
              <Route exact path="/signup" component={()=><div>SIGNUP</div>}/>
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
