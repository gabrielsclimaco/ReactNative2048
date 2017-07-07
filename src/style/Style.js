import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Style = StyleSheet.create({

  homeScreen: {
    flex: 1,
    backgroundColor: '#faf8ef',
  },

  homeHeader: {
    flex: 2,
  },

  homeTitle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'green',
    padding: 25,
  },

  homeGame: {
    flex: 8,
    justifyContent: 'center',
    // backgroundColor: 'red',
    alignItems: 'center',
  },

  board: {
    backgroundColor: '#bbada0',
    width: responsiveWidth(95),
    height: responsiveWidth(95),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tile: {
    backgroundColor: 'rgba(238, 228, 218, 0.35)',
    width: responsiveWidth(95) * 0.22,
    height: responsiveWidth(95) * 0.22,
    borderRadius: 5,
    margin: 3,
  },

  scores: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: responsiveWidth(45),
  },

  scoreBoard: {
    height: responsiveHeight(10),
    minWidth: responsiveWidth(20),
    backgroundColor: '#bbada0',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    color: '#776e65',
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold',
  },

  scoreTitle: {
    color: '#eee4da',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
  },

  scoreValue: {
    color: '#faf8ef',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3),
  },

  subtitle: {
    // flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },

  label: {
    flex: 8,
    color: '#776e65',
  },

  newGameButton: {
    backgroundColor: '#8f7a66',
    borderRadius: 5,
    width: responsiveWidth(30),
    height: responsiveHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
  },

  newGameLabel: {
    color: '#faf8ef',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
  },

});

export default Style;
