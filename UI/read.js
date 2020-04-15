import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';
import { Actions } from 'react-native-router-flux'

import Form from './Form'

export default class Read extends Component {

  write() {
    Actions.write()
  }

  componentDidMount() {
    NfcManager.start();
    NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
      console.warn('tag', tag);
      NfcManager.setAlertMessageIOS('I got your tag!');
      NfcManager.unregisterTagEvent().catch(() => 0);
    });

    //read tag
    try {
      await NfcManager.registerTagEvent(eventMsg);
      alert('Student Information\n\n' + eventMsg)
    } catch (ex) {
      console.warn('ex', ex);
      NfcManager.unregisterTagEvent().catch(() => 0);
    }
  }

  componentWillUnmount() {
    NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    NfcManager.unregisterTagEvent().catch(() => 0);
  }

  _cancel = () => {
    NfcManager.unregisterTagEvent().catch(() => 0);
  }


  render() {
    return(
      <View>
        <Row style={{justifyContent:'center'}}>
          <Image source={require('./nfc_logo.png')} style={{width: 100, height: 100}} />
        </Row>
      
        <Text>Place phone near an NFC tag, or</Text>
        <TouchableOpacity onPress={this.write}>
            <Text style={styles.btn}>Go to Write</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  btn: {
    color: '#E7B004',
    fontSize:16,
    fontWeight: '500',
    textAlign: 'center'
  } 
}