/**

 * Sample Firebase & React Native App
 * https://github.com/davideast/firebase-react-native-sample
 */
'use strict';

import React, {Component} from 'react'
import { View } from 'react-native'
import { Root, Login } from './config/routes'
import firebaseApp from './firebase.js'
import firebase from 'firebase'
const styles = require('../app/config/styles.js')

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("user logged in");
        if (user.emailVerified) {
          this.setState({user})
        } else {
          alert('Verify your email.')
          firebase.auth().signOut();
        }
      } else {
        console.log("user logged out");
        this.setState({user: null})
      }
    });
  }

  render() {
    return (
      this.state.user ? <Root /> : <Login/>
    )
  }
}

export default App
