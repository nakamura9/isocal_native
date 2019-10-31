/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import HomeScreen from './screens/home';
import LoginScreen from './screens/login';
import SummaryScreen from './screens/summary';
import UploadScreen from './screens/upload';
import CreateStandardScreen from './screens/create_standard';
import StandardsScreen from './screens/standards';
import CalibrationBasicsScreen from './screens/calibrate/basic';
import CalibrationSpecsScreen from './screens/calibrate/specs';
import AutoclaveSpecsScreen from './screens/calibrate/autoclave_specs';
import TestScreen from './testscreen';

const AppNavigator = createStackNavigator({
    Home: {screen: TestScreen},
    Login: {screen: LoginScreen},
    Summary: {screen: SummaryScreen},
    Upload: {screen: UploadScreen},
    CreateStandard: {screen: CreateStandardScreen},
    Standards: {screen: StandardsScreen},
    NewCalibration: {screen: CalibrationBasicsScreen},
    Specs: {screen: CalibrationSpecsScreen},
    autoclaveSpecs: {screen: AutoclaveSpecsScreen},
});

const App = createAppContainer(AppNavigator);

export default App;

