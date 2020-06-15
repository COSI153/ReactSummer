import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import Header from "../../elements/Header/Header.js";
import GridContainer from "../../elements/Grid/GridContainer.js";
import GridItem from "../../elements/Grid/GridItem.js";
import Parallax from "../../elements/Parallax/Parallax.js";
import Button from "../../elements/CustomButtons/Button.js";
import Card from "../../elements/Card/Card.js";
import CardBody from "../../elements/Card/CardBody.js";
import CustomInput from "../../elements/CustomInput/CustomInput.js";
import Footer from "../../elements/Footer/Footer.js";
// sections for this page
import HeaderLinks from "../../elements/Header/HeaderLinks";
import SectionLatestOffers from "./Sections/SectionLastestOffers";
import SectionProducts from "./Sections/SectionProducts";
import SectionBlog from "./Sections/SectionBlog";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui icons
import Mail from "@material-ui/icons/Mail";

import ecommerceHeader from "../../assets/img/examples/ecommerce-header.jpg";
import face1 from "../../assets/img/faces/card-profile6-square.jpg";
import face2 from "../../assets/img/faces/christian.jpg";
import face3 from "../../assets/img/faces/card-profile4-square.jpg";
import face4 from "../../assets/img/faces/card-profile1-square.jpg";
import face5 from "../../assets/img/faces/marc.jpg";
import face6 from "../../assets/img/faces/kendall.jpg";
import face7 from "../../assets/img/faces/card-profile5-square.jpg";
import face8 from "../../assets/img/faces/card-profile2-square.jpg";

import styles from "../../assets/jss/material-kit-pro-react/views/ecommerceStyle.js";

const useStyles = makeStyles(styles);

export default function EcommercePage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      
      <Parallax
        image={require("../../assets/img/background.jpeg")}
        filter="dark"
        small
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <div className={classes.brand}>
                <h1 className={classes.title}>Product Page</h1>
                <h4>
                  Free local farm product delivery
                </h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
       
        <SectionProducts />
      </div>
     
      <div
        className={classNames(
          classes.subscribeLine,
          classes.subscribeLineImage
        )}
       
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={classNames(classes.mlAuto, classes.mrAuto)}
            >
              <div className={classes.textCenter}>
                <h3 className={classes.title}>Subscribe to our Newsletter</h3>
                <p className={classes.description}>
                  Join our newsletter and get news in your inbox every week! We
                  hate spam too, so no worries about this.
                </p>
              </div>
              <Card raised className={classes.card}>
                <CardBody className={classes.cardBody}>
                  <form>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6} lg={8}>
                        <CustomInput
                          id="emailPreFooter"
                          formControlProps={{
                            fullWidth: true,
                            className: classes.cardForm
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Mail />
                              </InputAdornment>
                            ),
                            placeholder: "Your Email..."
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6} lg={4}>
                        <Button
                          color="rose"
                          block
                          className={classes.subscribeButton}
                        >
                          subscribe
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </form>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>

      
    </div>
  );
}
