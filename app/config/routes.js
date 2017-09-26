import React from 'react'
import { StackNavigator } from 'react-navigation'

import HomePage from '../screens/HomePage'
import BasisInfoPage from '../screens/BasisInfoPage'
import BasisInfoDetailsPage from '../screens/BasisInfoDetailsPage'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'

export const PageStack = StackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      title: 'LWDnews'
    }
  },
  BasisInfoPage: {
    screen: BasisInfoPage,
    navigationOptions: {
      title: 'Basis info'
    }
  },
  BasisInfoDetailsPage: {
    screen: BasisInfoDetailsPage,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`
    })
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login'
    }
  },
  SignupScreen: {
    screen: SignupScreen,
    navigationOptions: {
      title: 'Aanmelden'
    }
  },
})

export const LoginStack = StackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login'
    }
  },
  SignupScreen: {
    screen: SignupScreen,
    navigationOptions: {
      title: 'Aanmelden'
    }
  }
})

export const Root = StackNavigator({
  Page: {
    screen: PageStack
  }
}, {
  mode: 'modal',
  headerMode: 'none'
})

export const Login = StackNavigator({
  Page: {
    screen: LoginStack
  }
}, {
  mode: 'modal',
  headerMode: 'none'
})
