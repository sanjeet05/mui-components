import React from "react";
import Button from 'material-ui/Button';

let defaultCSS = {

}

/*
* this Button can have three parameter
* 1. type @ raised
* 2. text @ button text
* 3. color @ primary
* EX: <ZTechButton type="raised" text="Add" color="primary" />
*/

const ZTechButton = (props) => {
  if(props.type === 'raised'){
    return (
      <Button raised color={props.color}>
        {props.text}
      </Button>
    );
  }else {
    return (
      <Button color={props.color}>
        {props.text}
      </Button>
    );
  }
}

export default ZTechButton;
