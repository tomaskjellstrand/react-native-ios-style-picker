/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Picker, DatePicker } from 'react-native-ios-style-picker';
import _ from 'lodash';

getData = () => {
  return _.range(31);
}
export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      data: getData(),
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <DatePicker
          date={this.state.date}
          onDateChange={(date) => {
            console.log(date)
            this.setState({
              date,
            });
          }}
          mode="datetime"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Example', () => Example);
