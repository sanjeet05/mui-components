import React from "react";
import Tabs, { Tab } from "material-ui/Tabs";
import Paper from "material-ui/Paper";

let defaultCSS = {
  tab: {
    textTransform: "capitalize"
  }
};

/*
* this tabs can have two parameter
* 1. clickHandler={this.handleChange}
* 2. tabList @ Object of Array
* EX: <ZTechTabs  clickHandler={this.handleChange} tabList={["Tab-1", "Tab-2"]} />
*/

class ZTechTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }

  tabChange = (event, value) => {
    this.setState({ slideIndex: value });
    this.props.clickHandler(value);
  };

  render() {
    let tabList = this.props.tabList;
    return (
      <div>
        <Paper>
          <Tabs
            onChange={this.tabChange}
            value={this.state.slideIndex}
            fullWidth
            centered
            indicatorColor="primary"
            textColor="primary"
          >
            {tabList.map((item, index) => {
              return (
                <Tab
                  key={index}
                  label={item}
                  value={index}
                  style={defaultCSS.tab}
                />
              );
            })}
          </Tabs>
        </Paper>
      </div>
    );
  }
}

export default ZTechTabs;
