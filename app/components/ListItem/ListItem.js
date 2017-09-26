import React, {Component} from 'react'
import ReactNative from 'react-native'
import styles from './styles.js'
import LoadingThumbnail from '../LoadingThumbnail'
const { View, TouchableHighlight, Text, Image } = ReactNative;

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.li}>
        { this.state.loading && <LoadingThumbnail /> }
          <Image source={{uri: this.props.item.uri}} style={styles.image} onLoadEnd={() => {this.setState({loading: false})}}/>
          <Text style={styles.liText}>{this.props.item.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default ListItem
