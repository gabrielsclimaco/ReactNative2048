import { StyleSheet } from 'react-native'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions'


const Style = StyleSheet.create({

  homeScreen: {
    flex: 1,
    backgroundColor: '#faf8ef'
  },

  homeTitle: {
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'green',
    padding: 25
  },

  homeGame: {
    flex: 8,
    justifyContent: 'center',
    // backgroundColor: 'red',
    alignItems: 'center'
  },

  board: {
    backgroundColor: '#bbada0'
  },

  scores: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: responsiveWidth(45)
  },

  scoreBoard: {
    height: responsiveHeight(10),
    minWidth: responsiveWidth(20),
    backgroundColor: '#bbada0',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  title: {
    color: '#776e65',
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold'
  },

  scoreTitle: {
    color: '#eee4da',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2)
  },

  scoreValue: {
    color: '#faf8ef',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3)
  }

})

export default Style
