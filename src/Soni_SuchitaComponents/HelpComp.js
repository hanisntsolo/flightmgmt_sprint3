import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  paper: {
    padding: theme.spacing(20),
    textAlign: 'center',
  },
  paperHeader: {
    padding: theme.spacing(10),
    textAlign: 'center',
  },
  toolbarButtons: {
    height:'50%',
    marginLeft: 'auto',
  },
}));

export default function HelpComp() {
  const classes = useStyles();

  return (
      <div className={classes.root} >
        <h1 className={classes.paperHeader}>Frequently Asked Questions -FAQs</h1>
        <div className={classes.paper}>
          <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
              <Typography className={classes.heading}>How do I register with EaseMyFlight?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Easy Click on the (Sign up) link (it's up top on the right) and enter your name, contact details, email address and other necessary informations.
                After entering all the details click on signup and you're all set up with EaseMyFlight account.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
            >
              <Typography className={classes.heading}>What is the maximum number of seats I can book?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                A maximum of 9 seats can be booked at one time.
                If you need to book for more than 9 travelers you will have to recomplete the booking process for the additional travelers.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
              <Typography className={classes.heading}>How do I cancel a flight reservation?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Cancelling a flight booking you made on EaseMyFlight is super easy. <br/>
                Here's how: Log in to your EaseMyFlight Account if you aren't already signed in.
                Hit the 'Login' link on the top right corner of the page. Fill in your username and password on the subsequent page.
                All your upcoming trips are listed towards the top of your account page.
                Pick the one you want to cancel and hit the Trip ID associated with it. Hit 'Cancellations' on the trip details page to get started.
                Don't worry this does not cancel your booking straight away. Select the checkbox against any passenger you would like to cancel and hit 'Review Cancellation' when done.
                You can only cancel parts of the booking that haven't expired. Reconfirm the passengers you have selected.
                Once you are convinced of your selection, hit 'Yes, cancel now'. There is a possibility that the refund amount will be unknown at this stage.
                That's it - you're done. We will process your refund within 24 hours. Depending on your mode of payment and bank, this may take between 3 to 14 working days to show up on your account statement
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>


      </div>
  );
}