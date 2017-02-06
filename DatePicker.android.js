import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Picker from 'react-native-wheel-picker';
import moment from 'moment';
import _ from 'lodash';


getNumberOfDaysInMonth = (date) => {
  return date.daysInMonth()
}

getDaysInMonth = (date) => {
  const numberOfDays = getNumberOfDaysInMonth(date);
  const days = _.range(1, numberOfDays + 1);
  return days;
}

export default class DatePickerComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const yearList = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
    const dateSelected = moment(props.date).isValid ? moment(props.date) : moment();
    const yearSelected = dateSelected.year();
    const monthSelected = dateSelected.month();
    const daySelected = dateSelected.date();
    const daysList = getDaysInMonth(dateSelected);
    this.state = {
      selectedItem: 0,
      dateSelected,
      daysList,
      daySelected,
      monthList,
      monthSelected,
      yearList,
      yearSelected,
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log('NEW PROPS');
    if (nextProps.date !== this.props.date) {
      const dateSelected = moment(nextProps.date).isValid ? moment(nextProps.date) : moment();
      const yearSelected = dateSelected.year();
      const monthSelected = dateSelected.month();
      const daySelected = dateSelected.date();
      const daysList = getDaysInMonth(dateSelected);
      this.setState({
        dateSelected,
        daysList,
        daySelected,
        monthSelected,
        yearSelected,
      });
    }
  }
  render() {
    const {
      yearList,
      yearSelected,
      monthList,
      monthSelected,
      daysList,
    } = this.state;
    let { daySelected } = this.state;
    return (
      <View style={{ flexDirection: 'row' }}>
        <Picker
          style={{ width: 100, height: 170 }}
          selectedValue={monthSelected}
          itemStyle={{ color:"black", fontSize:18, textAlign: 'left' }}
          curved
          cyclic
          atmospheric
          indicator
          indicatorSize={1}
          indicatorColor="#ebebeb"
          onValueChange={(monthSelected) => {
            let date = moment({ year: yearSelected, month: monthSelected, day: daySelected });
            while (!date.isValid()) {
              daySelected--;
              date = moment({ year: yearSelected, month: monthSelected, day: daySelected })
            }
            const daysList = getDaysInMonth(date);
            this.props.onDateChange(date.toDate());
            this.setState({
              monthSelected,
              daysList,
              daySelected
            });
          }}>
            {monthList.map((value, i) => (
              <Picker.Item label={value} value={i} key={"monthList"+value}/>
            ))}
        </Picker>
        <Picker
          style={{width: 75, height: 170}}
          selectedValue={daySelected}
          itemStyle={{color:"black", fontSize:18}}
          curved
          cyclic
          atmospheric
          indicator
          indicatorSize={1}
          indicatorColor="#ebebeb"
          onValueChange={(daySelected) => {
            // console.log(daySelected);
            let date = moment({ year: yearSelected, month: monthSelected, day: daySelected });
            this.props.onDateChange(date.toDate());
            this.setState({ daySelected })
          }}>
            {daysList.map((value, i) => (
              <Picker.Item label={`${value}`} value={value} key={"daysList"+value}/>
            ))}
        </Picker>
        <Picker
          style={{width: 75, height: 170}}
          selectedValue={yearSelected}
          itemStyle={{ color:"black", fontSize:18 }}
          curved
          cyclic
          atmospheric
          indicator
          indicatorSize={1}
          indicatorColor="#ebebeb"
          onValueChange={(yearSelected, i) => {
            let date = moment({ year: yearSelected, month: monthSelected, day: daySelected });
            while (!date.isValid()) {
              daySelected--;
              date = moment({ year: yearSelected, month: monthSelected, day: daySelected })
            }
            const daysList = getDaysInMonth(date);
            this.props.onDateChange(date.toDate());
            this.setState({
              yearSelected,
              daysList,
              daySelected
            })
          }}>
            {yearList.map((value, i) => (
              <Picker.Item label={`${value}`} value={value} key={"yearList"+value}/>
            ))}
        </Picker>
      </View>
    );
  }
}

const currentYear = moment().format('YYYY');
const minYear = parseInt(currentYear) - 5;
const maxYear = parseInt(currentYear) + 5;

DatePickerComponent.defaultProps = {
  minDate: moment().set('year', minYear).format('llll'),
  minDate: moment().set('year', maxYear).format('llll'),
  date: new Date(),
};
DatePickerComponent.propTypes = {
  date: React.PropTypes.object,
  minDate: React.PropTypes.string,
  maxDate: React.PropTypes.string,
  onDateChange: React.PropTypes.func,
};
