import React from "react";
import Paper from "material-ui/Paper";
import Divider from "material-ui/Divider";
import SwipeableViews from 'react-swipeable-views';

// imports mui components
import ZTechTypography from "./ui/Typography/ZTechTypography";
import ZTechContentHeader from "./ui/ContentHeader/ZTechContentHeader";
import ZTechContentSubHeader from "./ui/ContentSubHeader/ZTechContentSubHeader";
import ZTechButton from "./ui/Button/ZTechButton";
import ZTechTabs from "./ui/Tabs/ZTechTabs";

class MuiComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      slideIndex: 0
    };
  }

  handleChange = value => {
    this.setState({ slideIndex: value });
  };

  render() {
    return (
      <div>
        <Paper>
          <ZTechTypography type="title" text="Component List" />
          <div style={{ padding: "20px" }}>
            <div>
              <h3>Header Ex: </h3>
              <Divider />
              <ZTechContentHeader
                leftText="Dashboard"
                rightText="Dashboard / Executive"
              />
            </div>

            <div>
              <h3>Sub Header Ex: </h3>
              <Divider />
              <ZTechContentSubHeader
                leftText="Admin"
                rightText="C-360 / Profile"
              />
            </div>

            <div>
              <h3>Buttons Ex: </h3>
              <Divider />
              <ZTechButton type="raised" text="Save" color="primary" />
              <ZTechButton text="Update" color="primary" />
            </div>

            <div>
              <h3>Tabs Ex: </h3>
              <Divider />
              <div style={{ width: "100%", maxWidth: "530px" }}>
                <ZTechTabs
                  clickHandler={this.handleChange}
                  tabList={["Tab-1", "Tab-2"]}
                />
                <SwipeableViews
                  index={this.state.slideIndex}
                  onChangeIndex={this.handleChange}
                >
                  <div style={{ margin: "10px" }}>Tab-1</div>

                  <div style={{ margin: "10px" }}>Tab-2</div>
                </SwipeableViews>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default MuiComponent;
