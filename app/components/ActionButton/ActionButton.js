'use strict';

import React, {Component} from 'react'
import ReactNative from 'react-native'
import styles from './styles.js'
import { constants } from '../../config/styles'
const { StyleSheet, Text, View, TouchableHighlight} = ReactNative;

class ActionButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor={constants.kluRed}
          onPress={this.props.onPress}
          style={styles.button}>
          <Text style={styles.buttonText}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ActionButton
