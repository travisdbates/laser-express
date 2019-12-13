import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Build from "@material-ui/icons/Build";
import Print from "@material-ui/icons/Print";
import PersonIcon from '@material-ui/icons/Person';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import logo from "../../assets/img/logo.png"

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          {/* <img width='200px' src={stuff}></img> */}
          <h3 className={classes.description}>
            Laser Express has been in business since 1989. We began by serving Utah County and through our exceptional customer service, we have expanded our operations to include the entire Wasatch Front.
            Laser Express maintains a firm belief that customers are the reason we are in business. This attitude of providing the highest quality service and customer care is emulated through all employees at Laser Express.
          </h3>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Printer Repair"
              description="When your printer breaks, you need an expert on the scene to get you up and running fast. That’s why we offer on demand printer repair to you or your business."
              icon={Build}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Toner Cartridges"
              description="We have competitive prices, and in most cases provide local same-day toner delivery free of charge."
              icon={Print}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Customer Service"
              description="We offer only the highest quality service, repair, and parts. Our Technicians are HP certified and are experts in printer repair and maintenance."
              icon={PersonIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
