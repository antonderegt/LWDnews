import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';
import MessageTitle from '../components/MessageTitle'
import MessageText from '../components/MessageText'
import Loading from '../components/Loading'

class BasisInfoDetailsPage extends Component {
  constructor(props){
    super(props);
    this.state = { 
      loading: true
    }
  }

  imageHasLoaded() {
    this.setState({
      loading: false
    })
  }

  render() {
    const { title, text, uri } = this.props.navigation.state.params;
    return (
      <ScrollView>
        { this.state.loading && <Loading style={{marginBottom: 200}}/> }
        <Image 
          source={{ uri }}
          onLoad={() => {this.imageHasLoaded()}}
          style={{width: null, height: 200}} />
        <MessageTitle text={title}/>
        <MessageText text={text}/>
      </ScrollView>
    );
  }
}

export default BasisInfoDetailsPage;
