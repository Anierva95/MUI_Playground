import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import logo from "../../assets/logo.svg";

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

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "8em",
  },
  logoContainer: {
    padding: 0,
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    fontSize: "1rem",
    textTransform: "none",
  },
  Menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: 0,
  },
  MenuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleMenuItemClick = (e, index) => {
    setAnchorEl(null);
    setSelectedIndex(index);
  }

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software", link: "/customsoftware" },
    { name: "Mobile Development", link: "/mobileapps" },
    { name: "Website Development", link: "/websites" },
  ];

  useEffect(() => {
    // Checking if the value does not match the pathname and fixing it
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/about" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/revolution" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === "/estimate" && value !== 4) {
      setValue(4);
    }
  }, [value]);
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button
              disableRipple
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)}
            >
              <img src={logo} className={classes.logo} />
            </Button>

            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="primary"
            >
              <Tab
                component={Link}
                className={classes.tab}
                label="Home"
                to="/"
              />

              <Tab
                aria-owns={anchorEl ? "simple-menu" : undefined}
                component={Link}
                className={classes.tab}
                aria-haspopup={anchorEl ? "true" : undefined}
                onMouseOver={(event) => handleClick(event)}
                label="Services"
                to="/services"
              />

              <Tab
                component={Link}
                className={classes.tab}
                label="About"
                to="/about"
              />
              <Tab
                component={Link}
                className={classes.tab}
                label="The Revolution"
                to="/revolution"
              />
              <Tab
                component={Link}
                className={classes.tab}
                label="Contact Us"
                to="/contact"
              />
            </Tabs>
            <Button
              component={Link}
              variant="contained"
              to="/estimate"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
            <Menu
              id="simple-menu"
              classes={{ paper: classes.Menu }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              onChange={handleChange}
              elevation={0}
            >
              {menuOptions.map((option, index )=> {
                return(
                  <MenuItem 
                  classes={{ root: classes.MenuItem}}
                  to={option.link}
                  component={Link}
                  onClick={() => {handleClose(); setValue(1); handleMenuItemClick()}}
                  selected={selectedIndex === index}
                  >
                  {option.name}
                  </MenuItem>
                )
              })}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
