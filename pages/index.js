import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Link from "@material-ui/core/Link";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import logo from "../assets/img/NewLogoWhite.png";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";
import MapSection from "pages-sections/LandingPage-Sections/MapSection.js";

const dashboardRoutes = ["/"];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Laser Express"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter responsive color="#181818">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              {/* <h1 className={classes.title}>We keep you printing.</h1> */}
              <img
                src={logo}
                style={{ width: "33vw", minWidth: "300px" }}
              ></img>
              <br />
              <br />
              <h4>
                Laser Express has been keeping Utah County printing for over two
                decades. We're here to simplify your business needs and do our
                best to serve you with a smile.
              </h4>
              <br />
              <Link href="#service" style={{ textDecoration: "none" }}>
                <Button color="danger" size="lg">
                  <i className="fas fa-wrench" />
                  &nbsp;&nbsp;Submit Service Request
                </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <div id="service" name="service"></div>
          <WorkSection />
          <MapSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
