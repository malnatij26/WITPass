import React, { Component } from 'react';
import { StyleSheet
    , Text
    , View
    , TextInput
    , TouchableOpacity
    , AsyncStorage
    , Keyboard
    , Picker } from 'react-native';
import {Actions} from 'react-native-router-flux';

 
export default class Form extends Component {
 
    constructor(props){
        super(props);
        this.state={
            email:'',
            password: ''
        }
    }

    loginTRUE() {
        Actions.home()
    }
 
    saveData =async()=>{
        const {email,password} = this.state;
 
        //save data with asyncstorage
        let loginDetails={
            email: email,
            password: password
        }
        
        //Register form
        if(this.props.type !== 'Login')
        {
            AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));
 
            Keyboard.dismiss();
            alert("You successfully registered. Email: " + email + ' password: ' + password);
            this.login();
        }

        //Login form
        else if(this.props.type == 'Login')
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
        let loginDetails = await AsyncStorage.getItem('loginDetails');
        let ld = JSON.parse(loginDetails);
        alert('email: '+ ld.email + ' ' + 'password: ' + ld.password);
    }
 
    render() {
        return(
            <View style={styles.container}>

                <Text style={styles.header}>Person</Text>

                {/* name textbox */}
                <Text style={styles.txt}>Name</Text>

                <TextInput style={styles.inputBox}
                onChangeText={(email) => this.setState({email})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="First Name"
                placeholderTextColor = "#000000"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}/>

                <TextInput style={styles.inputBox}
                onChangeText={(email) => this.setState({email})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Last Name"
                placeholderTextColor = "#000000"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}/>

                {/* WIT ID */}
                <Text style={styles.txt}>Wentworth ID</Text>
                <TextInput style={styles.inputBox}
                onChangeText={(email) => this.setState({email})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Wentworth ID"
                placeholderTextColor = "#000000"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}/>
                
                {/* Pass Type */}
                <Text style={styles.txt}>Pass Type</Text>

                <Picker
                    selectedValue={this.state.passtype}
                    style={styles.inputBox}
                    onValueChange={(itemValue, itemIndex) => this.setState({ passtype: itemValue })}>
                    <Picker.Item label="Student" value="Student" />
                    <Picker.Item label="Faculty" value="Faculty" />
                    <Picker.Item label="Visitor" value="Visitor" />
                </Picker>

                {/* Active Semester */}
                <Text style={styles.txt}>Active Semester</Text>

                <Picker
                    selectedValue={this.state.semester}
                    style={styles.inputBox}
                    onValueChange={(itemValue, itemIndex) => this.setState({ semester: itemValue })}>
                    <Picker.Item label="Spring 2020" value="Spring 2020" />
                    <Picker.Item label="Summer 2020" value="Summer 2020" />
                </Picker>


{/* 
                    
                    */}
                <Text style={styles.header}>Car</Text>
                
                {/* Make, model, color */}
                <Text style={styles.txt}>Make, Model, and Color</Text>

                <TextInput style={styles.inputBox}
                onChangeText={(email) => this.setState({email})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Make"
                placeholderTextColor = "#000000"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}/>

                <TextInput style={styles.inputBox}
                onChangeText={(email) => this.setState({email})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Model"
                placeholderTextColor = "#000000"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}/>

                <TextInput style={styles.inputBox}
                onChangeText={(email) => this.setState({email})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Color"
                placeholderTextColor = "#000000"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}/>

                {/* license number */}
                <Text style={styles.txt}>License Number</Text>

                <TextInput style={styles.inputBox}
                onChangeText={(email) => this.setState({email})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="License"
                placeholderTextColor = "#000000"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}/>

 
                {/* submit button */}
                <TouchableOpacity style={styles.button}> 
                    <Text 
                    style={styles.buttonText} 
                    onPress={this.saveData}>{this.props.type}</Text>
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
    , txt: {
        fontSize:15
    }
    , header: {
        fontSize: 20
        , fontWeight:'bold'
    }
});