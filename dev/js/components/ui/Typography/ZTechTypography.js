import React from 'react';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

let defaultCSS = {
  padding: '10px',
  opacity: '0.87',
}
/*
* this Typography can have two parameter
* 1. type @ title
* 2. text @ paper text
* EX: <ZTechTypography type="title" text="Component List" />
*/
const ZTechTypography = (props) => {
  return (
    <div>
      <Typography type={props.type} style={defaultCSS}>
        {props.text}
      </Typography>
      <Divider/>
    </div>
  );
}

export default ZTechTypography;
