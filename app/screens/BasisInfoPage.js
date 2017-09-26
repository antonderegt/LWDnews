'use strict';

import React, {Component} from 'react'
import ReactNative from 'react-native'
import firebaseApp from '../firebase.js'
import Loading from '../components/Loading'
import ListItem from '../components/ListItem'

const {
  ListView,
  StyleSheet,
  Text,
  View
} = ReactNative;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = this.getRef().child('items');
  }

  getRef() {
    return firebaseApp.database().ref();
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      let items = []

      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          text: child.val().text,
          uri: child.val().uri,
          _key: child.key
        })
      })
      this.setState({
        loading: false
      })
      this.setState({ dataSource: this.state.dataSource.cloneWithRows(items) });
    })
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  render() {
    let listView
    if (this.state.loading) {
      listView = <Loading />
    } else {
      listView = <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderItem.bind(this)}
        enableEmptySections={true}
        style={{flex: 1}}/>
    }
    return (
      <View style={{flex: 1}}>

        { listView }
        
      </View>
    )
  }

  //const {navigate} = this.props.navigation;

  _renderItem(item) {
    const { navigate } = this.props.navigation;
    return (
      <ListItem item={item} onPress={() => navigate('BasisInfoDetailsPage', item)} />
    );
  }

}

export default App
