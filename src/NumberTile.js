import React, { PureComponent } from 'react';
import {
  Text,
  View,
  Animated,
} from 'react-native';

import Style from './style/Style';

export default class NumberTile extends PureComponent {
  constructor() {
    super();
    this.springValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spring();
  }

  spring() {
    this.springValue.setValue(0);
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 4,
      },
    ).start();
  }

  render() {
    return (
      <Animated.View
        style={{ flex: 1, transform: [{ scale: this.springValue }] }}
      >
        <View style={Style['tile' + this.props.numberOfTile]}>
          <Text style={Style['text' + this.props.numberOfTile]}>
            {this.props.numberOfTile}
          </Text>
        </View>
      </Animated.View>
    );
  }
}
