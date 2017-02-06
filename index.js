'use strict';

import React from 'react';

import {
	PickerIOS,
	Platform,
	DatePickerIOS,
} from 'react-native';

import Picker from './Picker'
import DatePickerAndroid from './DatePickerAndroid';
const Picker = (Platform.OS === 'ios' ? PickerIOS : Picker);
const DatePicker = (Platform.OS === 'ios' ? DatePickerIOS : DatePickerAndroid);
module.exports = {
	Picker,
	DatePicker,
};
