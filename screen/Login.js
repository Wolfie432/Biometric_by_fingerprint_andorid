import React from 'react';
import {
    View,
    Button,
    Image,
    Text,
    StyleSheet
} from 'react-native';

const Login =() =>{
    return (
        <View style={styles.container1}>
           <View style={styles.logoContainer}>
            <Image
            style={styles.logo}
            source={require('./images/img2.png')} />
            <Text style={styles.title}>
                Welcome back, Manish.{"\n"}
            </Text>
            <Text style={styles.title1}>
                Not Manish? Switch User{"\n"}
            </Text>
           </View>

           <View style={styles.touchContainer}>
            <Image
               style={styles.touch}
               source={require('./images/img3.png')} />
            <Text style={styles.title2}>
                Touch your device sensor to log in{"\n"}
            </Text>
            <Text style={styles.title3}>
                Login with password{"\n"}
            </Text>
            <Text style={styles.title4}>
                We are currently performing maintenance .{"\n"}
            </Text>
            <Text style={styles.title5}>
                Learn more at Azlo Status{"\n"}
            </Text>
            <Text style={styles.title6}>
                We use bank level encryption to secure your data.{"\n"}
            </Text>
            <Text style={styles.title7}>
                ATM finder{"\n"}
            </Text>
            <Text style={styles.title8}>
                copyright Azlo -2.48.0{"\n"}
            </Text>
           </View>
            
        </View>
    );
};

export default Login;
const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#101e25'
    },
    logoContainer:{
        position: 'absolute',
            top:65,
            bottom:0,
            left:0,
            right:0,
        alignItems: 'center',
        flexGrow: 1,
    },
    logo: {
        width: 200,
        height: 100,
        opacity: 0.5
    },
    touchContainer:{
        position: 'absolute',
            top:350,
            bottom:0,
            left:0,
            right:0,
        alignItems: 'center',
        flexGrow: 1,
    },
    touch: {
        width: 70,
        height: 70,
        opacity: 0.4
    },

    title: {
        color: '#fffbff',
        marginTop: 50,
        textAlign: 'center',
        fontSize: 25,
        textAlign:'center',
        fontFamily:'abhaya_libre',
        opacity: 0.5
    },
    title1: {
        color: '#3c49ff',
        marginTop: -30,
        textAlign: 'center',
        fontSize: 16,
        fontFamily:'abhaya_libre',
        textAlign:'center',
        opacity: 0.5
    },
    title2: {
        color: '#fffbff',
        marginTop: 25,
        textAlign: 'center',
        fontSize: 20,
        textAlign:'center',
        fontFamily:'abhaya_libre',
        opacity: 0.5
    },
    title3: {
        color: '#3c49ff',
        marginTop: -22,
        textAlign: 'center',
        fontSize: 16,
        textAlign:'center',
        fontFamily:'abhaya_libre',
        opacity: 0.5
    },
    title4: {
        color: '#fffbff',
        marginTop: 0,
        textAlign: 'center',
        fontSize: 16,
        textAlign:'center',
        fontFamily:'abhaya_libre',
        opacity: 0.5
    },
    title5: {
        color: '#fffbff',
        marginTop: -22,
        textAlign: 'center',
        fontSize: 16,
        textAlign:'center',
        fontFamily:'abhaya_libre',
        opacity: 0.5
    },
    title6: {
        color: '#fffbff',
        marginTop: 0,
        textAlign: 'center',
        fontSize: 16,
        textAlign:'center',
        fontFamily:'abhaya_libre',
        opacity: 0.5
    },
    title7: {
        color: '#3c49ff',
        marginTop: -5,
        textAlign: 'center',
        fontSize: 16,
        textAlign:'center',
        fontFamily:'abhaya_libre',
        opacity: 0.5
    },
    title8: {
        color: '#fffbff',
        marginTop: -22,
        textAlign: 'center',
        fontSize: 16,
        textAlign:'center',
        fontFamily:'abhaya_libre',
        opacity: 0.2
    }
});