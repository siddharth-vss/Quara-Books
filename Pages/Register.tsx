/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    // Vibration,
    View,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';

const Register = ({ navigation } : {navigation : NavigationProp<any>}) => {

    // const ONE_SECOND_IN_MS = 500;
    // const PATTERN = [
    //     1 * ONE_SECOND_IN_MS,
    //     1 * ONE_SECOND_IN_MS,
    //     0 * ONE_SECOND_IN_MS,
    //     0 * ONE_SECOND_IN_MS,
    //     1 * ONE_SECOND_IN_MS,
    //     1 * ONE_SECOND_IN_MS,
    // ];
    // const vibrate = () => {
    //         Vibration.vibrate(PATTERN, false);
    // };
    return (
        <View>
            <ImageBackground source={require('../Assets/bg.jpg')} style={styles.container}  >
                <View style={styles.BGblock} >
                    <Text style={styles.title} >Register</Text>

                    <TextInput
                        inputMode="text"
                        style={styles.input}
                        placeholder="name"
                        placeholderTextColor={'#FFFFFF'}
                    />
                    <TextInput
                        inputMode="text"
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor={'#FFFFFF'}
                    />
                    <TextInput
                        inputMode="text"
                        style={styles.input}
                        placeholder="Phone no."
                        placeholderTextColor={'#FFFFFF'}
                    />
                    <TextInput
                        inputMode="text"
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor={'#FFFFFF'}
                    />

                    <TextInput
                        inputMode="text"
                        style={styles.input}
                        placeholder="Confirm PassWord"
                        placeholderTextColor={'#FFFFFF'}
                    />
                    <View style={styles.flex} >
                        <Text style={[styles.txt, { color: '#ffffff90' }]}>Have Alredy Account ?</Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('Login'); }} >
                            <Text style={styles.txt} >Login</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate('Home'); }} style={styles.btn}  >
                        <Text style={styles.txt} >Register</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    flex: {
        // flex : 1,
        flexDirection: 'row',
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
        height: '80%',
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
