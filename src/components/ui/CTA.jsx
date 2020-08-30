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
  

  export default function CTA(props) {

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);


    const classes = useStyles();
  
    return (
        <>
        <Grid container direction="row" justify="center" alignItems="baseline" className={classes.footerContainer}>
            <Grid item className={classes.gridItem}>
                <Grid container direction="column" className={classes.link}>
                    <Grid item>
                        Are you ready to start your journey?
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
                <Grid container direction="column" className={classes.link} spacing={2}>
                    <Grid item>
                        We are happy to help!
                    </Grid>
                    </Grid>

      </>
    );
  }
  