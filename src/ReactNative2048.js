import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';

import Style from './style/Style'

export default class ReactNative2048 extends Component {
  render() {
    return (
      <View style={Style.homeScreen}>
        <View>
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
          <View style={Style.subtitle}>
            <Text style={Style.label}>
              Version of
              <Text style={{fontWeight: 'bold'}}> 2048 </Text>
              game built with facebook
              <Text style={{fontWeight: 'bold'}}> React Native. </Text>
            </Text>
            <TouchableOpacity
              style={Style.newGameButton}
              onPress={() => { Alert.alert('Novo jogo')}}>
              <Text style={Style.newGameLabel}>Novo jogo</Text>
            </TouchableOpacity>
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
