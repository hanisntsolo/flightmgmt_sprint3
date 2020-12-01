import React from 'react';
import PropTypes from 'prop-types';
import {Toolbar, MenuItem, makeStyles, AppBar, Menu, Tabs, Tab, Typography, Box, IconButton} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import HelpComp from './HelpComp';
import About from '../Singh_DhirendraComponents/components/ui/About';
import HomeComp from './HomeComp';
import HorizontalLabelPositionBelowStepper from './Stepper';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
      <div
          role="tabpanel"
          hidden={value !== index}
          id={`scrollable-force-tabpanel-${index}`}
          aria-labelledby={`scrollable-force-tab-${index}`}
          {...other}
      >
        {value === index && (
            <Box p={3}>
              <Typography>{children}</Typography>
            </Box>
        )}
      </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    // background: 'linear-gradient(45deg, #e0f7fa, #b2dfdb)',
    backgroundColor: theme.palette.background.default,
    fontColor: theme.palette.blue,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
  },
  toolbarButtons: {
    height:'50%',
    marginLeft: 'auto',
  },
}));


export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <div className={classes.root}>
        <AppBar position="static" color="cyan">
          <Tabs
              value={selectedTab}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="on"
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="scrollable force tabs example"
          >
            <Tab label="EASEMYFLIGHT" icon={<HomeIcon />} {...a11yProps(0)} />
            <Tab label="Book Flight" icon={<FlightTakeoffIcon />} {...a11yProps(1)} />
            <Tab label="About us" icon={<InfoIcon />} {...a11yProps(2)} />
            <Tab label="Help" icon={<HelpIcon />} {...a11yProps(3)} />
            <Toolbar className={classes.toolbarButtons} >
              <IconButton
                  edge="end"
                  aria-label="scrollable force tabs example"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
              >
                Login
                <AccountCircle fontSize="large" />
              </IconButton>
              <Menu
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Login</MenuItem>
                <MenuItem onClick={handleClose}>Signup</MenuItem>
              </Menu>
            </Toolbar>
          </Tabs>

        </AppBar>
        <TabPanel className={classes.paper} value={selectedTab} index={0} >
          <HomeComp />
        </TabPanel>

        <TabPanel  value={selectedTab} index={1}>
          <HorizontalLabelPositionBelowStepper />
        </TabPanel>

        <TabPanel value={selectedTab} index={2}>
          <About />
        </TabPanel>

        <TabPanel value={selectedTab} index={3}>
          <HelpComp />
        </TabPanel>

      </div>
  );
}