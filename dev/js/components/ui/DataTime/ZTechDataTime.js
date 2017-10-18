import React from 'react';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
// import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

const DAY_FORMAT = 'MM/DD/YYYY';

class ZTechDataTime extends React.Component {
  state = {
    selectedDay: new Date()
  };

  handleDayChange = (selectedDay, modifiers) => {
    let day = moment(selectedDay).format(DAY_FORMAT);
    this.setState({
      selectedDay : day
    });
  };

  render() {
    let today = moment(this.state.selectedDay).format(DAY_FORMAT);
    return (
      <div style={{maxHeight:'500px'}}>
        <DayPickerInput
          style={{width:'100px'}}
          value={today}
          onDayChange={this.handleDayChange}
          format={DAY_FORMAT}
          placeholder="MM/DD/YYYY"
        />
      </div>
    );
  }
}

export default ZTechDataTime;
