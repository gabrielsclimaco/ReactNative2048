import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Style from './style/Style';

const boardLines = 4;
const boardColumns = 4;

export default class ReactNative2048 extends Component {
  constructor(props) {
    super(props);

    this.newGame = this.newGame.bind(this);

    this.state = {
      score: 0,
      bestScore: 0,
    };
  }


  fillBoardWithTiles() {
    const views = [];

    for (let r = 0; r < boardColumns; r += 1) {
      const tileRow = [];

      for (let i = 0; i < boardLines; i += 1) {
        tileRow.push(
          <View
            style={Style.tile}
            key={r + '-' + i}
          />);
      }

      views.push(
        <View style={Style.tileRow} key={'row-' + r}>
          {tileRow}
        </View>,
      );
    }

    return views;
  }

  newGame() {
    this.setState({
      score: 0,
    });
  }

  render() {
    return (
      <View style={Style.homeScreen}>
        <View>
          <View style={Style.homeTitle}>
            <Text style={Style.title}>2048</Text>
            <View style={Style.scores}>
              <View style={Style.scoreBoard}>
                <Text style={Style.scoreTitle}>pontos</Text>
                <Text style={Style.scoreValue}>{this.state.score}</Text>
              </View>
              <View style={Style.scoreBoard}>
                <Text style={Style.scoreTitle}>recorde</Text>
                <Text style={Style.scoreValue}>{this.state.bestScore}</Text>
              </View>
            </View>
          </View>
          <View style={Style.subtitle}>
            <Text style={Style.label}>
              Version of
              <Text style={{ fontWeight: 'bold' }}> 2048 </Text>
              game built with facebook
              <Text style={{ fontWeight: 'bold' }}> React Native. </Text>
            </Text>
            <TouchableOpacity
              style={Style.newGameButton}
              onPress={this.newGame}
            >
              <Text style={Style.newGameLabel}>Novo jogo</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Style.homeGame}>
          <View style={Style.board}>
            {this.fillBoardWithTiles()}
          </View>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNative2048', () => ReactNative2048);
