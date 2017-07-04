import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import Style from './style/Style'

export default class ReactNative2048 extends Component {
  render() {
    return (
      <View style={Style.homeTitle}>
        <Text>hello world</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNative2048', () => ReactNative2048);
