import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import footerAdornment from "../../assets/Airplane_PNG_Clipart-421.svg"

const useStyles = makeStyles(theme => ({
  footer : {
    backgroundColor : theme.palette.common.arcDark,
    width : "100%"
  },
  adornment : {
    alignItems : "flex-end",
    justifyContent : "left",
    width: "50em",
  },
  mainContainer : {
    position : "absolute",
    justifyContent : "flex-end"
  },
  link : {
    color : "white",
    fontSize : "1rem",
    fontWeight : "bold",
    fontFamily : "roboto",
    textDecoration : "none"
  },
  gridItem : {
    margin : "3em"
  },
  madeBy: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  plane : {
    alignItems : "end",
    width : "50em"
  },
}))

export default function Footer(props) {
  const classes = useStyles()
  return <footer className={classes.footer}>
    <Grid container className={classes.mainContainer}>
      <Grid item className={classes.gridItem}>
        <Grid container direction="column" spacing={3}>
          <Grid item
                className={classes.link}
                component={Link} to="/"
                onClick={()=>{props.setValue(0)}}>
            Home
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Grid container direction="column">
          <Grid item
                className={classes.link}
                component={Link} to="/search"
                onClick={()=>{props.setValue(1)}}>
            Search
          </Grid>
        </Grid>
      </Grid>
      <Grid item alignItems="flex-start"  className={classes.gridItem}>
        <Grid container direction="column" alignItems="flex-start" spacing={3}>
          <Grid item
                className={classes.link}
                component={Link} to="/faq"
                onClick={()=>{
                  {
                    props.setValue(2);
                    props.setSelectedIndex(0)
                  }}}>
            FAQ's
          </Grid>
          <Grid onClick={()=>{
            {
              props.setValue(2);
              props.setSelectedIndex(1)
            }}} item className={classes.link} component={Link} to="/faq/pricing">
            Pricing
          </Grid>
          <Grid onClick={()=>{
            {
              props.setValue(2);
              props.setSelectedIndex(2)
            }}} item className={classes.link} component={Link} to="/faq/ticket-cancellation">
            Ticket Cancellation
          </Grid>
          <Grid onClick={()=>{
            {
              props.setValue(2);
              props.setSelectedIndex(3)
            }}} item className={classes.link} component={Link} to="/faq/booking">
            Booking
          </Grid>
          <Grid onClick={()=>{
            {
              props.setValue(2);
              props.setSelectedIndex(4)
            }}} item className={classes.link} component={Link} to="/faq/popular-queries">
            Popular Queries
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Grid container direction="column" alignItems="flex-start" spacing={3}>
          <Grid item
                className={classes.link}
                component={Link} to="/about" onClick={()=>{props.setValue(3)}}>
            About Us
          </Grid>
          <Grid item className={classes.link}>
            History
          </Grid>
          <Grid item className={classes.link}>
            Team
          </Grid>
        </Grid>
      </Grid>
      {/*<Grid item className={classes.gridItem}>*/}
      {/*  <Grid container direction="column" spacing={3}>*/}
      {/*    <Grid item*/}
      {/*          className={classes.link}*/}
      {/*          component={Link} to="/contactus"*/}
      {/*          onClick={()=>{props.setValue(4)}}>*/}
      {/*      Contact Us*/}
      {/*    </Grid>*/}
      {/*  </Grid>*/}
      {/*</Grid>*/}
    </Grid>
    {/*<Grid>*/}
    {/*  <div className={classes.madeBy}>*/}
    {/*    <Button color={classes.link.color}>Made with Love by Capgeminites</Button>*/}
    {/*  </div>*/}
    {/*</Grid>*/}
    <div className={classes.plane}>
      <img alt="flight-logo"
           width={400}
           src={footerAdornment}
           className={classes.plane}
           style={{padding: "10px"}}/>
    </div>
    <span className="text-muted"><p style={{padding: "20px", bottom : 0, position : "base", height : "50px"}}>All Rights Reserved 2020@Capgemini Services</p></span>
  </footer>
}