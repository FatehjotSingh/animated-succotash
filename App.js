import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {createSwitchNavigator, createAppContainer} from 'react-navigation'

import WelcomeScreen from './screens/welcome'

import {AppTabNavigator} from './appTabNaviation'



export default class App extends React.Component {
  render(){
    return (
    <AppContainer/>
  );
}
}

const AppContainer = createAppContainer(switchNavigator)
const switchNavigator = createSwitchNavigator({
  welcome:{screen:WelcomeScreen},
  rest:{screen:AppTabNavigator}
})


