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

  tile2: {
    flex: 1,
    backgroundColor: '#eee4da',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  text2: {
    color: '#776e65',
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold',
  },

  tile4: {
    flex: 1,
    backgroundColor: '#ede0c8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  text4: {
    color: '#776e65',
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold',
  },

  tile8: {
    flex: 1,
    backgroundColor: '#f2b179',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  text8: {
    color: '#f9f6f2',
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold',
  },

  tile16: {
    flex: 1,
    backgroundColor: '#f59563',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  text16: {
    color: '#f9f6f2',
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold',
  },

  tile32: {
    flex: 1,
    backgroundColor: 'rgba(246, 124, 95, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  text32: {
    color: '#f9f6f2',
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold',
  },

  tile64: {
    flex: 1,
    backgroundColor: 'rgba(246, 94, 59, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  text64: {
    color: '#f9f6f2',
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold',
  },

  tile128: {
    flex: 1,
    backgroundColor: '#edcf72',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  text128: {
    color: '#f9f6f2',
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold',
  },

  tile256: {
    flex: 1,
    backgroundColor: '#edcc61',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  text256: {
    color: '#f9f6f2',
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold',
  },

  tile512: {
    flex: 1,
    backgroundColor: '#edc850',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  text512: {
    color: '#f9f6f2',
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold',
  },

  tile1024: {
    flex: 1,
    backgroundColor: '#edc53f',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  text1024: {
    color: '#f9f6f2',
    fontSize: responsiveFontSize(4),
    fontWeight: 'bold',
  },

  tile2048: {
    flex: 1,
    backgroundColor: '#edc22e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  text2048: {
    color: '#f9f6f2',
    fontSize: responsiveFontSize(3.5),
    fontWeight: 'bold',
  },

  tileSuper: {
    flex: 1,
    backgroundColor: '#3c3a32',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  textSuper: {
    color: '#f9f6f2',
    fontSize: responsiveFontSize(3.5),
    fontWeight: 'bold',
  },

});

export default Style;
