/*eslint-disable*/
import React from "react";
import {Link} from 'react-router-dom'
import SignUpPage from './SignUpPage';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";


// @material-ui/icons
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Email from "@material-ui/icons/Email";
import Favorite from "@material-ui/icons/Favorite";
import Face from "@material-ui/icons/Face";
// core components


import CardHeader from "../../elements/Card/CardHeader.js";
import GridContainer from "../../elements/Grid/GridContainer.js";
import GridItem from "../../elements/Grid/GridItem.js";
import Button from "../../elements/CustomButtons/Button.js";
import Card from "../../elements/Card/Card.js";
import CardBody from "../../elements/Card/CardBody.js";
import InfoArea from "../../elements/InfoArea/InfoArea.js";
import CustomInput from "../../elements/CustomInput/CustomInput.js";



import loginPageStyle from "../../assets/jss/material-kit-pro-react/views/signupPageStyle.js";

import image from "../../assets/img/background.jpeg";

const useStyles = makeStyles(loginPageStyle);

export default function LoginPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
   
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <form className={classes.form}>
                  <CardHeader
                    color="info"
                    signup
                    className={classes.cardHeader}
                  >
                    <h4 className={classes.cardTitle}>Login</h4>
                    <h6>New user?  <Link to="signup"> Sign up here! </Link></h6>
                    <div className={classes.socialLine}>
                    
                    </div>
                  </CardHeader>
                
                  <CardBody signup>
                    <CustomInput
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        placeholder: "User Name...",
                        type: "text",
                        startAdornment: (
                          <InputAdornment position="start">
                            <Face className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        placeholder: "Email...",
                        type: "email",
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        placeholder: "Password",
                        type: "password",
                        startAdornment: (
                          <InputAdornment position="start">
                            <VpnKeyIcon/>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                  </CardBody>
                  <div className={classes.textCenter}>
                          <Button round color="default">
                            Get started
                          </Button>
                </div>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
       
      </div>
    </div>
  );
}
