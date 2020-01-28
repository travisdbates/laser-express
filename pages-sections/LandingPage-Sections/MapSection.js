import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs>
                    <h2 className={classes.title}>Our Location</h2>
                    <iframe width={'100%'} height={450} frameBorder="0" style={{ border: 0 }}
                        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJwcMxa1OXTYcRrcORV-5SBI4&key=AIzaSyBejpJEsgMAk6uNlTxuG7z8SOP95RWZnpw" allowFullScreen></iframe>
                </GridItem>
            </GridContainer>
        </div >
    );
}
