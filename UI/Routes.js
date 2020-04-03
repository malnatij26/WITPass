import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
 
import Read from './read';
import Write from './write'

 
export default class Routes extends Component {
    render() {
        return (
            <Router barButtonIconStyle ={styles.barButtonIconStyle}
                hideNavBar={false} 
                navigationBarStyle={{backgroundColor: '#1565c0',}} 
                titleStyle={{color: 'white',}}
            >
                <Stack key="root">
                    <Scene key="read" component={Read} title="WITPass Read"/>
                    <Scene key="write" component={Write} title="WITPass Write"/>
                </Stack>
            </Router>
        )
    }
}
 
const styles = {
    barButtonIconStyle: {
        tintColor: 'white'
    }
}