import React, { Component } from 'react'
import { View, ActivityIndicator, Animated, Easing } from 'react-native'

class LoadingThumbnail extends Component {
  constructor(props) {
     super(props);
     this.state = {
       spinValue: new Animated.Value(0)
     }
  }

  componentDidMount() {
    Animated.timing(
      this.state.spinValue,
    {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true
    }
    ).start()
  }

  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    return (
        <Animated.Image
          style={{transform: [{rotate: spin}], width: 40, height: 40, marginRight: -40 }}
          source={require('../../images/Luchtmacht-Logo.jpg')}
        />
    )
  }
}

export default LoadingThumbnail
