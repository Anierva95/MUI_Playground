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
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container direction="row" justify="center" className={classes.footerContainer}>
          <Grid item>
              <Grid container direction="column" className={classes.link}>
                  <Grid item>
                      Home
                  </Grid>
                  <Grid item>
                      Home
                  </Grid>
                  <Grid item>
                      Home
                  </Grid>
              </Grid>
          </Grid>
          <Grid item>
              <Grid container direction="column" className={classes.link}>
                  <Grid item>
                      Home
                  </Grid>
                  <Grid item>
                      Home
                  </Grid>
                  <Grid item>
                      Home
                  </Grid>
              </Grid>
          </Grid>
          <Grid item>
              <Grid container direction="column" className={classes.link}>
                  <Grid item>
                      Home
                  </Grid>
                  <Grid item>
                      Home
                  </Grid>
                  <Grid item>
                      Home
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
