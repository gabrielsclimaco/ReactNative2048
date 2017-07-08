import React, { PureComponent } from 'react';
import {
  Text,
  Animated,
} from 'react-native';

import Style from './style/Style';

export default class NumberTile extends PureComponent {
  // constructor () {
  //   super()
  //   this.springValue = new Animated.Value(0.3)
  // }
  //
  // spring () {
  //   this.springValue.setValue(0.3)
  //   Animated.spring(
  //     this.springValue,
  //     {
  //       toValue: 1,
  //       friction: 1
  //     }
  //   ).start()
  // }

  render() {
    return (
      <Animated.View style={Style['tile' + this.props.numberOfTile]}>
        <Text style={Style['text' + this.props.numberOfTile]}>
          {this.props.numberOfTile}
        </Text>
      </Animated.View>
    );
  }
}
