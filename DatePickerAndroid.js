import React, { PropTypes } from 'react'

import DatePicker from 'DatePicker';
import DateTimePicker from 'DateTimePicker';
import TimePicker from 'TimePicker';

class DatePickerAndroid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: props.mode,
      props,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      mode: nextProps.mode,
      props: nextProps,
    });
  }
  render () {
    const { mode, props } = this.state;
    switch (mode) {
      case 'date':
        return (
          <DatePicker props={props} />
        )
        break;
      case 'datetime':
        return (
          <DateTimePicker props={props} />
        )
        break;
      case 'time':
        return (
          <TimePicker props={props} />
        )
        break;
      default:
        return (
          <DatePicker props={props} />
        )
    }
  }
}

export default DatePickerAndroid;
