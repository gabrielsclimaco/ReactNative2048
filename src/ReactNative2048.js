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
      <View style={Style.homeScreen}>
        <View style={Style.homeTitle}>
          <Text style={Style.title}>2048</Text>
          <View style={Style.scores}>
            <View style={Style.scoreBoard}>
              <Text style={Style.scoreTitle}>pontos</Text>
              <Text style={Style.scoreValue}>184</Text>
            </View>
            <View style={Style.scoreBoard}>
              <Text style={Style.scoreTitle}>recorde</Text>
              <Text style={Style.scoreValue}>2048</Text>
            </View>
          </View>
        </View>
        <View style={Style.homeGame}>
          <View style={Style.board}>

          </View>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNative2048', () => ReactNative2048);
