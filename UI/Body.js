import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Body {
    render() {
        return(
            <Grid>
                <Row>
                    <Text>Open up App.js to start working on your app!</Text>
                </Row>
            </Grid>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
  });