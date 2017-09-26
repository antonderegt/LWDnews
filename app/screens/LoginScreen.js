import React, { Component } from 'react'
import { Platform, View, StyleSheet, Text, TextInput } from 'react-native'
import firebase from 'firebase'
import Loading from '../components/Loading'
import Button from '../components/Button'
import styles from './styles'

export default class SignupScreen extends Component {
  constructor(props){
    super(props);
    this.state = { 
      loading: false,
      email: '',
      pass: ''
    }
  }
  
  handleLogin() {
    let email = `${this.state.email}@mindef.nl`
    let password = this.state.pass
    this.setState({
      loading: true
    })
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({
          loading: false
        })
      })
      .catch(error => {
        this.setState({
          loading: false
        })
        let errorCode = error.code
        let errorMessage = error.message
        alert(errorMessage)
    })
  }

  render() {
    let form
    if (this.state.loading) {
      form = <Loading />
    } else {
      form = 
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput 
              onChangeText={(email) => { this.setState({ email }) } }
              autoCapitalize='none'
              returnKeyType='next'
              autoFocus={true}
              onSubmitEditing={(event) => {
                this.refs.passwordInput.focus();
              } }
              style={[styles.input, styles.email]}
              placeholder="email" />
            <Text adjustsFontSizeToFit={true} style={styles.mindef}>@mindef.nl</Text>
          </View>
          <TextInput 
            ref='passwordInput' onChangeText={(pass) => { this.setState({ pass }) } }
            onSubmitEditing={() => this.handleLogin()}
            style={styles.input}
            placeholder="wachtwoord"
            secureTextEntry={true}
            returnKeyType="go" />
          <Button label="Nog geen account?" onPress={() => this.props.navigation.navigate('SignupScreen')} />
        </View>
    }
    return (
      <View style={styles.container}>
        { form } 
      </View>
    )
  }
}
