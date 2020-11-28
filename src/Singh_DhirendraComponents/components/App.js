import React from "react";
import '../../App.css';
import Header from "./ui/Header";
import { ThemeProvider } from '@material-ui/styles';
import theme from "./ui/Theme";
import { BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (

      <div className="App">
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header/>
            <Switch>
              <Route exact path="/" component={()=><div>HOME</div>}/>
              <Route exact path="/search" component={()=><div>SEARCH</div>}/>
              <Route exact path="/faq" component={()=><div>FAQ'S</div>}/>
              <Route exact path="/about" component={()=><div>ABOUT</div>}/>
              <Route exact path="/contactus" component={()=><div>CONTACTUS</div>}/>
              <Route exact path="/login" component={()=><div>LOGIN</div>}/>
              <Route exact path="/signup" component={()=><div>SIGNUP</div>}/>
            </Switch>
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
