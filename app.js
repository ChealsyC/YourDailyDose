import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homescreen from './src/login/homescreen.js';
import Sign from './src/login/sign.js';
import Capricorn from './src/login/capricorn.js';
import Aries from './src/login/aries.js';
import Gemini from './src/login/gemini.js';
import Leo from './src/login/leo.js';
import Aquarius from './src/login/aquarius.js';
import Sag from './src/login/sag.js';
import Taurus from './src/login/taurus.js';
import Pisces from './src/login/pisces.js';
import Cancer from './src/login/cancer.js';
import Libra from './src/login/libra.js';
import Virgo from './src/login/virgo.js';
import Scorpio from './src/login/scorpio.js';











const RootStack = createStackNavigator(
{
  Home: { screen: Homescreen },
  Sign: { screen: Sign },
  Leo: {screen: Leo},
  Capricorn: {screen: Capricorn},
  Taurus: {screen: Taurus},
  Gemini: { screen: Gemini },
  Cancer: {screen: Cancer},
  Sag: {screen: Sag},
  Virgo: { screen: Virgo },
  Aries: {screen: Aries},
  Aquarius: {screen: Aquarius},
  Libra: { screen: Libra },
  Pisces: {screen: Pisces},
  Scorpio: {screen: Scorpio},
  
},
{
    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

