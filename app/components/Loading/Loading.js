import React, { Component } from 'react'
import { View, ActivityIndicator, Animated, Easing } from 'react-native'
import styles from './styles';

class Loading extends Component {
  constructor(props) {
     super(props);
     this.state = {
       spinValue: new Animated.Value(0), // init opacity 0
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
      <View style={styles.container}>
        <Animated.Image
          style={{transform: [{rotate: spin}], width: 50, height: 50, marginTop: 60, marginBottom: -120 }}
          source={require('../../images/Luchtmacht-Logo.jpg')}
        />
      </View>
    )
  }
}

Loading.propTypes = {
  size: React.PropTypes.string,
};

Loading.defaultProps = {
  size: 'large',
};

export default Loading
