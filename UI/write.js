import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';
import { View, Text, TouchableOpacity } from 'react-native'

function buildUrlPayload(valueToWrite) {
    return Ndef.encodeMessage([
        Ndef.uriRecord(valueToWrite),
    ]);
}

export default class Write extends Component {
    componentDidMount() {
        NfcManager.start();
      }
    
      componentWillUnmount() {
        this._cleanUp();
      }
    
      render() {
        return (
          <View style={{padding: 20}}>
            <Text>NFC Demo</Text>
            <TouchableOpacity 
              style={{padding: 10, width: 200, margin: 20, borderWidth: 1, borderColor: 'black'}}
              onPress={this._testNdef}
            >
              <Text>Test Ndef</Text>
            </TouchableOpacity>
    
            <TouchableOpacity 
              style={{padding: 10, width: 200, margin: 20, borderWidth: 1, borderColor: 'black'}}
              onPress={this._cleanUp}
            >
              <Text>Cancel Test</Text>
            </TouchableOpacity>
          </View>
        )
      }
    
      _cleanUp = () => {
        NfcManager.cancelTechnologyRequest().catch(() => 0);
      }
    
      _testNdef = async () => {
        try {
          let resp = await NfcManager.requestTechnology(NfcTech.Ndef, {
            alertMessage: 'Ready to write.'
          });
          console.warn(resp);
          let ndef = await NfcManager.getNdefMessage();
          console.warn(ndef);
         
          //this is where you choose what you want to write
          let bytes = buildUrlPayload('https://www.google.com');
          await NfcManager.writeNdefMessage(bytes);
          console.warn('successful');
          await NfcManager.setAlertMessageIOS('Tag received');
          this._cleanUp();
        } catch (ex) {
          console.warn('ex', ex);
          this._cleanUp();
        }
      }
    }
    
    export default AppV2Ndef;
