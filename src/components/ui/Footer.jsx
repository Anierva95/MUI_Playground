import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import footerAdornment from "../../assets/Footer Adornment.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
  },
  footerContainer: {
      position: "absolute"
  },
  link: {
      color: "white",
      fontSize: ".75em",
      fontFamily: "Arial",
      fontWeight: "bold"
  },
  gridItem: {
      margin: "3em"
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container direction="row" justify="center" alignItems="baseline" className={classes.footerContainer}>
          <Grid item className={classes.gridItem}>
              <Grid container direction="column" className={classes.link}>
                  <Grid item>
                      Home
                  </Grid>
              </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
              <Grid container direction="column" className={classes.link} spacing={2}>
                  <Grid item>
                      Services
                  </Grid>
                  <Grid item>
                      Custom Software Development
                  </Grid>
                  <Grid item>
                      Mobile App Development
                  </Grid>
                  <Grid item>
                      Website Development
                  </Grid>
              </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
              <Grid container direction="column" className={classes.link} spacing={2}>
                  <Grid item>
                      The Revolution
                  </Grid>
                  <Grid item>
                      Vision
                  </Grid>
                  <Grid item>
                      Technology
                  </Grid>
                  <Grid item>
                      Process
                  </Grid>
              </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
              <Grid container direction="column" className={classes.link} spacing={2}>
                  <Grid item>
                      About Us
                  </Grid>
                  <Grid item>
                      History
                  </Grid>
                  <Grid item>
                      Team
                  </Grid>
              </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
              <Grid container direction="column" className={classes.link} spacing={2}>
                  <Grid item>
                      Contact Us
                  </Grid>
              </Grid>
          </Grid>
      </Grid>
      <img
        alt="black slash"
        src={footerAdornment}
        className={classes.adornment}
      />
    </footer>
  );
}
