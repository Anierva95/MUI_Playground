import React from 'react';
import {makeStyles} from '@material-ui/styles';

import footerAdornment from '../../assets/Footer Adornment.svg';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%"
    },
    adornment: {
        width: "25em",
        verticalAlign: "bottom"
    }
}));

export default function Footer(props) {
    const classes = useStyles();

    return <footer className={classes.footer}>
        <img alt="black slash" src={footerAdornment} className={classes.adornment}/>
        </footer>
}