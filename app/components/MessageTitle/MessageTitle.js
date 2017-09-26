'use strict';

import React, {Component} from 'react';
import { StyleSheet, Text, View }from 'react-native';
import styles from './styles'
import { constants } from '../../config/styles'

class MessageTitle extends Component {
  render() {
    return (
      <View style={styles.action}>
        <Text style={styles.title}>{this.props.text}</Text>
        <View
          style={styles.row}
        />
      </View>
    );
  }
}

module.exports = MessageTitle
