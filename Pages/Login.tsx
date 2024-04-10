/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';

const Login = ({navigation} : { navigation: NavigationProp<any> }) => {
    return (
        <View>
            <ImageBackground source={require('../Assets/bg.jpg')} style={styles.container}  >
                <View style={styles.BGblock} >
                    <Text style={styles.title} >Login</Text>

                    <TextInput
                        inputMode="text"
                        style={styles.input}
                        placeholder="Email Or Phone"
                        placeholderTextColor={'#FFFFFF'}
                    />

                    <TextInput
                        inputMode="text"
                        style={styles.input}
                        placeholder="Email Your PassWord"
                        placeholderTextColor={'#FFFFFF'}
                    />
                    <View style={styles.flex} >
                        <Text style={[styles.txt,{color : '#ffffff90'}]}>Don't Have Account ?</Text>
                        <TouchableOpacity  onPress={() => { navigation.navigate('Register');}} >
                            <Text style={styles.txt} >Register</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('Home'); }} >
                        <Text style={styles.txt} >Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    flex:{
        // flex : 1,
        flexDirection : 'row',
        // justifyContent : 'center',
        // alignItems : 'center',
    },
    btn: {
        backgroundColor: '#F7F5FB',
        borderRadius: 10,
        height: 50,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    txt: {
        color: '#46ACC2',
        fontSize: 20,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    BGblock: {
        backgroundColor: '#00000070',
        height: '70%',
        width: '80%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#fff',
    },
    input: {
        backgroundColor: '#ffffff3d',
        height: 40,
        width: 200,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#fff',
        marginBottom: 30,
        color: '#fff',
    },
});
