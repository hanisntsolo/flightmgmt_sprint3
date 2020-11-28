import React, {useState, useEffect} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import logo from '../../assets/Airplane_PNG_Clipart-421.svg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(
    theme =>({
      toolbarMargin : {
        ...theme.mixins.toolbar
      },
      logo : {
        height : "4em"
      },
      logoContainer : {
        padding : 0,
        "&:hover" : {
          backgroundColor : "tranparent",
        },
      },
      tabContainer: {
        marginLeft : "auto"
      },
      tab : {
        fontWeight : 700,
        fontSize : "1rem",
        minWidth : 30
      }
    })
);
export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
    setValue(value);
  };
  useEffect(()=>{
    if (window.location.pathname === "/" && value!==0) {
      setValue(0);
    } else if (window.location.pathname === "/search" && value!==1) {
      setValue(1);
    } else if (window.location.pathname === "/faq" && value!==2) {
      setValue(2);
    } else if (window.location.pathname === "/about" && value!==3) {
      setValue(3);
    } else if (window.location.pathname === "/contactus" && value!==4) {
      setValue(4);
    }
  }, [value]);


  return(
      <React.Fragment>
        <AppBar position="fixed" color="secondary">
          <Toolbar>
            <Typography variant="h5">
              BookMyFlight
            </Typography>
            <Button disableRipple component={Link} to="/" className={classes.logoContainer} onClick={() => setValue(0)}>
              <img alt="company logo" className={classes.logo} src={logo}/>
            </Button>
            <Tabs indicatorColor={"primary"} value={value} onChange={handleChange} className={classes.tabContainer}>
              <Tab className={classes.tab} component={Link} to="/" label="Home"/>
              <Tab className={classes.tab} component={Link} to="/search" label="Search"/>
              <Tab className={classes.tab} component={Link} to="/faq" label="FAQ's"/>
              <Tab className={classes.tab} component={Link} to="/about" label="About"/>
              <Tab className={classes.tab} component={Link} to="/contactus" label="Contact Us"/>
            </Tabs>
            <Button variant="contained">
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <div className={classes.toolbarMargin}/>
      </React.Fragment>
  );
}