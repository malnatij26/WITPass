import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { TabView, SceneMap } from 'react-native-tab-view';

import Read from './read'
import Write from './write'
import StatusBar from './StatusBar'
import Routes from './Routes'

export default class Body extends Component {
    render() {


        return(
            <View>
                <StatusBar />
                <Routes/>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
  });
