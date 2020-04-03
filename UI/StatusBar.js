import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";


export default class Statusbar extends Component {
    render() {
        return(
            <View style={styles.statusBarBackground}>

            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    statusBarBackground: {
        height:18,
      }
  });
