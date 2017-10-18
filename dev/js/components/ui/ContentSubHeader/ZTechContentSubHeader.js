import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import {white, blue600, grey900, grey600, grey800, black, blue500} from '../Color/ZTechColor';

let defaultCSS = {
  height: {
    maxHeight: '50px',
  },
  title:{
    fontWeight: "700",
    color: "#666",
    float: "left",
    fontSize: "16px",
    opacity: "0.9",
    textTransform: "uppercase",
  },
  navigation: {
    fontSize: "15px",
    fontWeight: "400",
    color: grey600,
    float: "right",
    marginRight: "0px",
    opacity: "0.87",
  },
}

/*
* this content sub-header can have two parameter
* 1. type @ leftText
* 2. text @ rightText
* EX: <ZTechContentSubHeader leftText="Dashboard" rightText="Dashboard / Executive" />
*/

const ZTechContentSubHeader = (props) => {
  return (
    <Grid fluid>
      <Row style={defaultCSS.height}>
        <Col md={6} sm={6}>
          <div style={defaultCSS.title}>{props.leftText}</div>
        </Col>
        <Col md={6} sm={6}>
          <div style={defaultCSS.navigation}>{props.rightText}</div>
        </Col>
      </Row>
    </Grid>
  );
}

export default ZTechContentSubHeader;
