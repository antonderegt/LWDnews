import React, { Component } from 'react';
import { Platform, ScrollView, Text, Image } from 'react-native'
import firebase from 'firebase'
import ActionButton from '../components/ActionButton'
import Button from '../components/Button'
import styles from './styles'
import { constants } from '../config/styles'

class Page extends Component {
  handleLogOut() {
    firebase.auth().signOut();
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.scrollContainer} shouldRasterizeIOS={true} renderToHardwareTextureAndroid={true}>
        <Image source={require('../images/F-35.png')} style={{height: 150, width: null, margin: 20, marginBottom: 40}}/>
        <Button raised icon="Info" label="Basis info" onPress={() => navigate('BasisInfoPage')} />
        <Button raised icon="Order" label="Dienst order" onPress={() => navigate('')} />
        <Button raised icon="Event" label="Evenementen" onPress={() => navigate('')} />
        <Button raised icon="SignOut" label="Uitloggen" onPress={this.handleLogOut} />
      </ScrollView>
    );
  }
}

export default Page;
