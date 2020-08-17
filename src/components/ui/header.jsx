import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 5 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em"
  },
  logo: {
    height: "7em"
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  },
  button: {
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    fontSize: "1rem",
    textTransform: "none"
  }
}));

export default function Header(props) {

  const classes = useStyles();

  const [value, setValue] = useState(0);

    const handleChange = (e, value) => {
      setValue(value);
    }

    return(
      <>
        <ElevationScroll>
        <AppBar position="fixed">
            <Toolbar disableGutters>

                <img src={logo} className={classes.logo}/>

              <Tabs 
              value={value} 
              onChange={handleChange} 
              className={classes.tabContainer}
              indicatorColor="primary"
              >
                <Tab component={Link} className={classes.tab} label="Home" to="/"/>
                <Tab component={Link} className={classes.tab} label="Services" to="/services"/>
                <Tab component={Link} className={classes.tab} label="The Revolution" to="/revolution"/>
                <Tab component={Link} className={classes.tab} label="Contact Us" to="/contact"/>
            </Tabs>
            <Button variant="contained" color="secondary" className={classes.button}>
              Free Estimate
            </Button>
            </Toolbar>

        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/> 
        </>
    );
}