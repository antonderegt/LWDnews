import React, { Component } from 'react'
import { View, StyleSheet, Button, Text, TextInput } from 'react-native'
import firebase from 'firebase'
import Loading from '../components/Loading'
import styles from './styles'

export default class SignupScreen extends Component {
  constructor(props){
    super(props);
    this.state = { 
      loading: false,
      email: '',
      pass: '',
      passConfirm: ''
    }
  }
  handleLogin() {
    let email = `${this.state.email}@mindef.nl`
    let password = this.state.pass
    let passwordConfirm = this.state.passConfirm
    if (password != passwordConfirm) {
      alert(`Wachtwoorden zijn niet gelijk`)
      return
    }
    this.setState({
      loading: true
    })
    firebase.auth()
      .createUserWithEmailAndPassword(email, password).then(user => {
        user.sendEmailVerification().then(() => {
          firebase.auth().signOut();
          this.setState({
            loading: false
          })
          this.props.navigation.navigate('LoginScreen')
        }).catch( error => {
          this.setState({
            loading: false
          })
          var errorCode = error.code
          var errorMessage = error.message
          alert(errorMessage)
        })
      })
      .catch(error => {
        this.setState({
          loading: false
        })
        var errorCode = error.code
        var errorMessage = error.message
        alert(errorMessage)
      })
    }

  render() {
    let form
    if (this.state.loading) {
      form = <Loading />
    } else {
      form = 
        <View>
          <Text style={styles.title}>Aanmelden</Text>
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
            onSubmitEditing={(event) => {
              this.refs.passwordConfirmInput.focus()
            }}
            style={styles.input}
            placeholder="wachtwoord"
            secureTextEntry={true}
            returnKeyType="next" />
          <TextInput 
            ref='passwordConfirmInput' onChangeText={passConfirm => { this.setState({ passConfirm }) } }
            onSubmitEditing={() => this.handleLogin()}
            style={styles.input}
            placeholder="herhaal wachtwoord"
            secureTextEntry={true}
            returnKeyType="go" />
        </View>
    }
    return (
      <View style={styles.container}>
        { form } 
      </View>
    )
  }
}
