import React, { PropTypes } from 'react';
import {
  Text
} from 'react-native';
import DatePicker from './DatePicker.js';
import DateTimePicker from './DateTimePicker.js';
import TimePicker from './TimePicker.js';

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
          <DatePicker {...this.props} />
        )
        break;
      case 'datetime':
        return (
          <DateTimePicker {...this.props} />
        )
        break;
      case 'time':
        return (
          <TimePicker {...this.props}/>
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
