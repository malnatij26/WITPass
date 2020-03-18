import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';
import { View, Text, TouchableOpacity } from 'react-native'

export default class Write extends Component {
    componentDidMount() {
        NfcManager.start();
        NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
          console.warn('tag', tag);
          NfcManager.setAlertMessageIOS('I got your tag!');
          NfcManager.unregisterTagEvent().catch(() => 0);
        });
      }
    
      componentWillUnmount() {
        NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
        NfcManager.unregisterTagEvent().catch(() => 0);
      }
    
      render() {
        return (
          <View style={{padding: 20}}>
            <Text>NFC Demo</Text>
            <TouchableOpacity 
              style={{padding: 10, width: 200, margin: 20, borderWidth: 1, borderColor: 'black'}}
              onPress={this._test}
            >
              <Text>Test</Text>
            </TouchableOpacity>
    
            <TouchableOpacity 
              style={{padding: 10, width: 200, margin: 20, borderWidth: 1, borderColor: 'black'}}
              onPress={this._cancel}
            >
              <Text>Cancel Test</Text>
            </TouchableOpacity>
          </View>
        )
      }
    
      _cancel = () => {
        NfcManager.unregisterTagEvent().catch(() => 0);
      }
    
      _test = async () => {
        try {
          await NfcManager.registerTagEvent();
        } catch (ex) {
          console.warn('ex', ex);
          NfcManager.unregisterTagEvent().catch(() => 0);
        }
      }
    }
    
    export default AppV2
