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
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AuthenticationService from "../Authentication/AuthenticationService";

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
          backgroundColor : "transparent",
        },
      },
      tabContainer: {
        marginLeft : "auto"
      },
      tab : {
        fontWeight : 700,
        fontSize : "1rem",
        // minWidth : 50
      }
    })
);
export default function Header(props) {
  const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const handleChange = (e, value) => {
    props.setValue(value);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  }
  const handleMenuItemClick= (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    props.setSelectedIndex(i);
  }
  const menuOptions =
      [
        {name: "FAQ's", link:"/faq", activeIndex: 2 ,selectedIndex:0},
        {name: "Pricing", link:"/faq/pricing", activeIndex: 2 ,selectedIndex:1},
        {name: "Ticket Cancellation", link:"/faq/ticket-cancellation", activeIndex: 2 ,selectedIndex:2},
        {name: "Booking", link:"/faq/booking", activeIndex: 2 ,selectedIndex:3},
        {name: "Popular Queries", link:"/faq/popular-queries", activeIndex: 2 ,selectedIndex:4},
        {name: "SignUp", link: "/signUpUser", activeIndex: 2 ,selectedIndex:5},
        {name: "Login", link: "/loginUser", activeIndex: 2 ,selectedIndex:6}

  ]
  const routes = [
    {name: "Home", link:"/home", activeIndex:0},
    {name: "Search", link:"/search", activeIndex:1},
    { name: "FAQ's",
      link:"/faq",
      activeIndex:2,
      ariaOwns:anchorEl ? "faq-menu" : undefined,
      ariaPopup:anchorEl ? "true" : undefined,
      mouseOver: event=>handleClick(event) },
    {name: "About", link:"/about", activeIndex:3},
    {name: "Admin", link:"/update", activeIndex:4},
    {name: "Your Bookings", link: "/user", activeIndex: 5},
  ]


  useEffect(()=>{
    [...menuOptions, ...routes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex)
            if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });


}, [props.value, menuOptions, props.selectedIndex, routes, props]);


  return(
      <React.Fragment>
        <AppBar position="fixed" color="secondary">
          <Toolbar>
            <Typography variant="h5">
              BookMyFlight
            </Typography>
            <Button disableRipple component={Link} to="/home" className={classes.logoContainer} onClick={() => props.setValue(0)}>
              <img alt="company logo" className={classes.logo} src={logo}/>
            </Button>
            {isUserLoggedIn && <div>
              <Tabs indicatorColor={"primary"} value={props.value}
                    onChange={handleChange} className={classes.tabContainer}>
                {routes.map((route, index) => (
                    <Tab key={`${route}${index}`}
                         className={classes.tab}
                         component={Link}
                         to={route.link}
                         label={route.name}
                         aria-owns={route.ariaOwns}
                         aria-haspopup={route.ariaPopup}
                         onMouseOver={route.mouseOver}/>
                ))}
              </Tabs>
              <Menu id="faq-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{onMouseLeave : handleClose}}
                    elevation={0}>
                { menuOptions.map((option,i) => (
                    <MenuItem key={option}
                              component={Link}
                              to={option.link}
                              onClick={(event)=>{handleMenuItemClick(event, i); props.setValue(2); handleClose()}}
                              selected={i === props.selectedIndex}>
                      {option.name}
                    </MenuItem>
                ))}
              </Menu>
            </div>}
            {!isUserLoggedIn && <div>
              <Button variant="contained"
                      onClick={AuthenticationService.logout}
                      component={Link}
                      to={"/login"}
                      style={{
                        position: "end",
                        justifyContent: "flex-end"
                      }}>
                Login
              </Button>
            </div>}
            {isUserLoggedIn && <div>
              <Button variant="contained"
                      onClick={AuthenticationService.logout}
                      component={Link}
                      to={"/logout"}>
                Logout
              </Button>
            </div>}

          </Toolbar>
        </AppBar>
        <div className={classes.toolbarMargin}/>
      </React.Fragment>
  );
}