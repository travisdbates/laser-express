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

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function WorkSection() {
  const [state, setState] = React.useState({ error: false, success: false })

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value, error: false })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!state.contact || !state.serviceType || !state.email || !state.message) {
      setState({ ...state, error: true })
      return;
    }
    console.log(JSON.stringify(state))
    fetch('https://tuix5j5iii.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state),
    })
      .then((response) => response.json())
      .then((jsonResponse => {
        setState({ ...state, success: true })
      }))
      .catch((error) => alert(error))

  }

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Submit a service request</h2>
          <h4 className={classes.description}>
            Here you can send a message to us for a repair or toner delivery.
          </h4>
          {state.error && <h4 className={classes.error}>All fields are required.</h4>}
          {state.success && <h4 className={classes.success}>We got your message! We'll be in touch soon!</h4>}
          <form name="contact" method="POST" data-netlify="true">
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  name="contact"
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                  value={state.value}
                  onChange={handleChange}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  name="email"
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  value={state.value}
                  onChange={handleChange}
                  required
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  name="company"
                  labelText="Company Name"
                  id="company"
                  formControlProps={{
                    fullWidth: true
                  }}
                  value={state.value}
                  onChange={handleChange}
                  required

                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12} style={{ marginTop: '20px' }}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend" className={classes.formControl}>Type of Request</FormLabel>
                  <RadioGroup className={classes.formControl} aria-label="request" name="serviceType" onChange={handleChange}>
                    <FormControlLabel value="toner" control={<Radio />} label="Toner Cartridges" />
                    <FormControlLabel value="printer" control={<Radio />} label="Printer Repair" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </GridItem>

              <CustomInput
                name="message"
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
                value={state.value}
                onChange={handleChange}
              />
              <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                <Button color="danger" onClick={handleSubmit}>Send Message</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
