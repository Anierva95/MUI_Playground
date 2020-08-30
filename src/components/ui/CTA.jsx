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
  