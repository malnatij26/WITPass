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
            firstName: ''
            , lastName: ''
            , witID: ''
            , passType
            , semester: ''
            , make: ''
            , model: ''
            , color: ''
            , license: ''
        }
    }

    _cleanUp = () => {
        NfcManager.cancelTechnologyRequest().catch(() => 0);
      }
    
      writeToTag = async () => {
        try {
          let resp = await NfcManager.requestTechnology(NfcTech.Ndef, {
            alertMessage: 'Ready to write, place your phone near a NFC tag.'
          });
          console.warn(resp);
          let ndef = await NfcManager.getNdefMessage();
          console.warn(ndef);
          let bytes = buildTextPayload(
            'Name: ' + this.state.firstName + ' ' + this.state.lastName +
            '\nwitID: ' + this.state.witID +
            '\npassType: ' + this.state.passType +
            '\nsemester: ' + this.state.semester +
            '\nmake: ' + this.state.color + ' ' + this.state.make + ' ' + this.state.model +
            '\nlicense: ' + this.state.license );
          await NfcManager.writeNdefMessage(bytes);
          console.warn('successfully write ndef');
          await NfcManager.setAlertMessageIOS('I got your tag!');
          this._cleanUp();
        } catch (ex) {
          console.warn('ex', ex);
          this._cleanUp();
        }
      }
    
 
    render() {
        return(
            <View style={styles.container}>

                <Text style={styles.header}>Person</Text>

                {/* name textbox */}
                <Text style={styles.txt}>Name</Text>

                <TextInput style={styles.inputBox}
                onChangeText={(firstName) => this.setState({firstName})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="First Name"
                placeholderTextColor = "#000000"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.lastName.focus()}/>

                <TextInput style={styles.inputBox}
                onChangeText={(lastName) => this.setState({lastName})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Last Name"
                placeholderTextColor = "#000000"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.witID.focus()}/>

                {/* WIT ID */}
                <Text style={styles.txt}>Wentworth ID</Text>
                <TextInput style={styles.inputBox}
                onChangeText={(witID) => this.setState({witID})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Wentworth ID"
                placeholderTextColor = "#000000"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.passType.focus()}/>
                
                {/* Pass Type */}
                <Text style={styles.txt}>Pass Type</Text>

                <Picker
                    selectedValue={this.state.passtype}
                    style={styles.inputBox}
                    onValueChange={(itemValue, itemIndex) => this.setState({ passtype: itemValue })}
                    onSubmitEditing={()=> this.semester.focus()}>
                    <Picker.Item label="Student" value="Student" />
                    <Picker.Item label="Faculty" value="Faculty" />
                    <Picker.Item label="Visitor" value="Visitor" />
                </Picker>

                {/* Active Semester */}
                <Text style={styles.txt}>Active Semester</Text>

                <Picker
                    selectedValue={this.state.semester}
                    style={styles.inputBox}
                    onValueChange={(itemValue, itemIndex) => this.setState({ semester: itemValue })}
                    onSubmitEditing={()=> this.make.focus()}>
                    <Picker.Item label="Spring 2020" value="Spring 2020" />
                    <Picker.Item label="Summer 2020" value="Summer 2020" />
                </Picker>


                <Text style={styles.header}>Car</Text>
                
                {/* Make, model, color */}
                <Text style={styles.txt}>Make, Model, and Color</Text>

                <TextInput style={styles.inputBox}
                onChangeText={(make) => this.setState({make})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Make"
                placeholderTextColor = "#000000"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.model.focus()}/>

                <TextInput style={styles.inputBox}
                onChangeText={(model) => this.setState({model})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Model"
                placeholderTextColor = "#000000"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.color.focus()}/>

                <TextInput style={styles.inputBox}
                onChangeText={(color) => this.setState({color})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Color"
                placeholderTextColor = "#000000"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.license.focus()}/>

                {/* license number */}
                <Text style={styles.txt}>License Number</Text>

                <TextInput style={styles.inputBox}
                onChangeText={(license) => this.setState({license})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="License"
                placeholderTextColor = "#000000"
                selectionColor="#fff"
                keyboardType="email-address"/>

 
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