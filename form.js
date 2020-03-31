import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native';
import {Actions} from 'react-native-router-flux';

 
export default class Form extends Component {
 
    constructor(props){
        super(props);
        this.state={
            name:'',
            id: '',
            pass: '',
            semester: '',
            license: '',
            car: ''
        }
    }

    saveData =async()=>{
        const {name, id, pass, semester, license, car} = this.state;
 
        //save data with asyncstorage
        let writeDetails={
            name: name,
            id: id,
            pass: pass,
            semester: semester,
            license: license,
            car: car
        }
 
        if(this.props.type == 'Write')
        {
            try{
                    Actions.home();
 
            }catch(error)
            {
                alert(error);
            }
        }
    }
 
    showData = async()=>{
        let writeDetails = await AsyncStorage.getItem('loginDetails');
        let ld = JSON.parse(loginDetails);
        alert('email: '+ ld.email + ' ' + 'password: ' + ld.password);
    }
 
    render() {
        return(
            <View style={styles.container}>
                {/* email textbox */}
                <TextInput style={styles.inputBox}
                onChangeText={(email) => this.setState({email})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Name: last,first"
                placeholderTextColor = "#000000"
                selectionColor="#fff"
                onSubmitEditing={()=> this.password.focus()}/>
                
                {/* password textbox */}
                <TextInput style={styles.inputBox}
                onChangeText={(password) => this.setState({password})} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="WIT ID #"
                secureTextEntry={true}
                placeholderTextColor = "#000000"
                ref={(input) => this.password = input}
                />
 
                {/* submit button */}
                <TouchableOpacity style={styles.button}> 
                    <Text style={styles.buttonText} onPress={this.saveData}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
            
        )
    }
}
 
//Styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: 300,
        backgroundColor: '#eeeeee', 
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#000000',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#000000',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#E7B004',
        textAlign: 'center'
    }
});
