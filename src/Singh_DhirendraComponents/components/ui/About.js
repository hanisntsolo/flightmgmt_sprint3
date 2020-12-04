import React from 'react';
import { makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(
    theme =>({
      aboutContainer : {
        paddingTop : "10vh",
        paddingBottom: "10vh",
        paddingRight: "10vw",
        paddingLeft: "10vw"
      },
        contentContainer : {
            paddingTop : "5vh",
            paddingBottom: "5vh",
            paddingRight: "10vw",
            paddingLeft: "10vw"
        }
    })
);
export default function About(props) {
  const classes = useStyles();
  return(
        <div className={classes.aboutContainer}>
          <h1 className={classes.aboutContainer}>About Us</h1>
          <p className={classes.contentContainer}><b>EaseMyFlight</b> is a travel correlation web portal that gives you a chance to discover cheap flights tickets on the web.
            Regardless of whether you're going is just a tick away! You can look at flight tolls, from all the best web travel destinations in a single area.
            Finding cheap flights has never been less demanding. Spare time, set aside some cash; there's no compelling reason to visit a great many websites to discover cheap flight tickets or the best deal.
            It's everything here for you in one area EaseMyFlight-we'll get you where you need to go. EaseMyFlight is a travel site, a place where individuals are enlivened to plan and book straightforwardly from us with a significant number of flight ticket choices at the best costs.
            We are impartial and free, which implies that a million individuals who use us consistently can confide in our numerous scope of flight, alternatives.
            Our mystery is in our best exclusive innovation that associates individuals straightforwardly to everything the travel business brings to the table.</p>
          <p className={classes.contentContainer}> Going inside a specific budget plan isn't just important yet additionally fundamental for you to capitalize on your vacation.
            Having a profound comprehension of the considerable number of elements of traveling, we are submitted towards our goal of making your travel wants to work out as expected.
            In our travel gateway, you can scan for the line-up of flight, bargains at costs that fit your financial plan.</p>
          <p className={classes.contentContainer}> We take off aggressive costs on flight tickets, from probably the most confided companies. We offer you energizing deals to commence your get-away with the goal that it doesn't put an opening in your pocket.
            You can rest guaranteed that you are getting the best flight deal alongside value reserve funds.</p>
          <p className={classes.contentContainer}> As yet asking why you should book with us? We have a smooth and hassle free reserving procedure that can provide you with astonishing travel deals.
            If you are worn out on looking for the best charges, EaseMyFlight is here to encourage you.</p>

          <div className={classes.aboutContainer}>
            <h2>Contact Us</h2>
            <p>0214-456-2100<br/>
              easemyflight@gmail.com</p>
          </div>
        </div>
    );
  }
