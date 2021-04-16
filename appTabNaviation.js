import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation'

import WelcomeScreen from './screens/welcome'
import RequestScreen from './screens/request'
import DonateScreen from './screens/donate'

export  const AppTabNavigator=createBottomTabNavigator({
    request:{screen:RequestScreen,
     navigationOptions:{tabBarLabel:"Request",tabBarIcon:<Image source={require("./assets/adaptive-icon.png")} style={{width:30,height:30}} />}},
    donate:{screen:DonateScreen,
        navigationOptions:{tabBarLabel:"Donate",tabBarIcon:<Image source={require("./assets/splash.png")} style={{width:30,height:30}} />}},
})


