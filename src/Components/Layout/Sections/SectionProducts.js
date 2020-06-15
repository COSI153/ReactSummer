import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui icons
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Cached from "@material-ui/icons/Cached";
import Subject from "@material-ui/icons/Subject";
import Check from "@material-ui/icons/Check";
// core components
import Accordion from "../../../elements/Accordion/Accordion";
import GridContainer from "../../../elements/Grid/GridContainer.js";
import GridItem from "../../../elements/Grid/GridItem.js";
import Card from "../../../elements/Card/Card.js";
import CardHeader from "../../../elements/Card/CardHeader.js";
import CardBody from "../../../elements/Card/CardBody.js";
import CardFooter from "../../../elements/Card/CardFooter.js";
import Button from "../../../elements/CustomButtons/Button.js";
import Clearfix from "../../../elements/Clearfix/Clearfix.js";

import product1 from "../../../assets/img/farmproductimage/product-1.jpg";
import product2 from "../../../assets/img/farmproductimage/product-2.jpg";
import product3 from "../../../assets/img/farmproductimage/product-3.jpg";
import product4 from "../../../assets/img/farmproductimage/product-4.jpg";
import product5 from "../../../assets/img/farmproductimage/product-5.jpg";
import product6 from "../../../assets/img/farmproductimage/product-6.jpg";


import styles from "../../../assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionProducts() {
  const [checked, setChecked] = React.useState([1, 9, 27]);
  const [priceRange, setPriceRange] = React.useState([101, 790]);
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: priceRange,
        connect: true,
        range: { min: 30, max: 900 },
        step: 1
      }).on("update", function(values) {
        setPriceRange([Math.round(values[0]), Math.round(values[1])]);
      });
    }
    return function cleanup() {};
  });
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Find what you need</h2>
        <GridContainer>
          <GridItem md={3} sm={3}>
            <Card plain>
              <CardBody className={classes.cardBodyRefine}>
                <h4 className={classes.cardTitle + " " + classes.textLeft}>
                  Refine
                  <Tooltip
                    id="tooltip-top"
                    title="Reset Filter"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      link
                      justIcon
                      size="sm"
                      className={classes.pullRight + " " + classes.refineButton}
                    >
                      <Cached />
                    </Button>
                  </Tooltip>
                  <Clearfix />
                </h4>
                <Accordion
                  active={[0, 2]}
                  activeColor="rose"
                  collapses={[
                    {
                      title: "Vegetables",
                      content: (
                        <CardBody className={classes.cardBodyRefine}>
                        
                          <br />
                          <br />
                          <div id="sliderRegular" className="slider-rose" />
                        </CardBody>
                      )
                    },
                    {
                      title: "Fruits",
                      content: (
                        <div className={classes.customExpandPanel}>
                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(1)}
                                  checked={
                                    checked.indexOf(1) !== -1 ? true : false
                                  }
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Local"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(2)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Import"
                            />
                          
                          </div>
                        </div>
                      )
                    },
                    {
                      title: "Meat",
                      content: (
                        <div className={classes.customExpandPanel}>
                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(9)}
                                  checked={
                                    checked.indexOf(9) !== -1 ? true : false
                                  }
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Chicken"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(10)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Beef"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(11)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Pork"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(12)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Lamb"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(13)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Meat Substitue"
                            />
                           
                           
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(16)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Thom Sweeney"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(17)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Burberry Prorsum"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(18)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Calvin Klein"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(19)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Kingsman"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(20)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Club Monaco"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(21)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Dolce & Gabbana"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(22)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Gucci"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(23)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Biglioli"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(24)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Lanvin"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(25)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Loro Piana"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(26)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Massimo Alba"
                            />
                          </div>
                        </div>
                      )
                    },
                  
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={9} sm={9}>
            <GridContainer>
              <GridItem md={4} sm={4}>
                <Card plain product>
                  <CardHeader noShadow image>
                    <a href="#pablo">
                      <img src={product1} alt=".." />
                    </a>
                  </CardHeader>
                  <CardBody plain>
                    <a href="#pablo">
                      <h4 className={classes.cardTitle}>Tomato</h4>
                    </a>
                    <p className={classes.description}>
                     Fresh red tomato.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentBetween}>
                    <div className={classes.priceContainer}>
                      <span className={classes.price}> $1/lb</span>
                    </div>
                    <Tooltip
                      id="tooltip-top"
                      title="Saved to Wishlist"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        justIcon
                        simple
                        color="rose"
                        className={classes.pullRight}
                      >
                        <Favorite />
                      </Button>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem md={4} sm={4}>
                <Card plain product>
                  <CardHeader noShadow image>
                    <a href="#pablo">
                      <img src={product2} alt=".." />
                    </a>
                  </CardHeader>
                  <CardBody plain>
                    <a href="#pablo">
                      <h4 className={classes.cardTitle}>Strawberry</h4>
                    </a>
                    <p className={classes.description}>
                      Some strawbeeries.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentBetween}>
                    <div className={classes.priceContainer}>
                      <span className={classes.price}> $3/lb</span>
                    </div>
                    <Tooltip
                      id="tooltip-top"
                      title="Save to Wishlist"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        justIcon
                        simple
                        color="rose"
                        className={classes.pullRight}
                      >
                        <FavoriteBorder />
                      </Button>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem md={4} sm={4}>
                <Card plain product>
                  <CardHeader noShadow image>
                    <a href="#pablo">
                      <img src={product3} alt=".." />
                    </a>
                  </CardHeader>
                  <CardBody plain>
                    <a href="#pablo">
                      <h4 className={classes.cardTitle}>Mint</h4>
                    </a>
                    <p className={classes.description}>
                      Frest mint.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentBetween}>
                    <div className={classes.priceContainer}>
                      <span className={classes.price}> $12/lb</span>
                    </div>
                    <Tooltip
                      id="tooltip-top"
                      title="Save to Wishlist"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        justIcon
                        simple
                        color="rose"
                        className={classes.pullRight}
                      >
                        <FavoriteBorder />
                      </Button>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem md={4} sm={4}>
                <Card plain product>
                  <CardHeader noShadow image>
                    <a href="#pablo">
                      <img src={product4} alt=".." />
                    </a>
                  </CardHeader>
                  <CardBody plain>
                    <a href="#pablo">
                      <h4 className={classes.cardTitle}>Lemon</h4>
                    </a>
                    <p className={classes.description}>
                      Fresh local farm product!
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentBetween}>
                    <div className={classes.priceContainer}>
                      <span className={classes.price}> $2</span>
                    </div>
                    <Tooltip
                      id="tooltip-top"
                      title="Save to Wishlist"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        justIcon
                        simple
                        color="rose"
                        className={classes.pullRight}
                      >
                        <FavoriteBorder />
                      </Button>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem md={4} sm={4}>
                <Card plain product>
                  <CardHeader noShadow image>
                    <a href="#pablo">
                      <img src={product5} alt=".." />
                    </a>
                  </CardHeader>
                  <CardBody plain>
                    <a href="#pablo">
                      <h4 className={classes.cardTitle}>Blueberry</h4>
                    </a>
                    <p className={classes.description}>
                      Fresh blue berries.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentBetween}>
                    <div className={classes.priceContainer}>
                      <span className={classes.price}> $5/lb</span>
                    </div>
                    <Tooltip
                      id="tooltip-top"
                      title="Saved to Wishlist"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        justIcon
                        simple
                        color="rose"
                        className={classes.pullRight}
                      >
                        <Favorite />
                      </Button>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem md={4} sm={4}>
                <Card plain product>
                  <CardHeader noShadow image>
                    <a href="#pablo">
                      <img src={product6} alt=".." />
                    </a>
                  </CardHeader>
                  <CardBody plain>
                    <a href="#pablo">
                      <h4 className={classes.cardTitle}>Potato</h4>
                    </a>
                    <p className={classes.description}>
                      Fresh Potatoes.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentBetween}>
                    <div className={classes.priceContainer}>
                      <span className={classes.price}> $2/lb</span>
                    </div>
                    <Tooltip
                      id="tooltip-top"
                      title="Save to Wishlist"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        justIcon
                        simple
                        color="rose"
                        className={classes.pullRight}
                      >
                        <FavoriteBorder />
                      </Button>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem
                md={3}
                sm={3}
                className={classNames(classes.mlAuto, classes.mrAuto)}
              >
                <Button round color="rose">
                  Get more fresh products!
                </Button>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <br />
      
      </div>
    </div>
  );
}
