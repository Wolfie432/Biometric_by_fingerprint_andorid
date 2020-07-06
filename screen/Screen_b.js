import React from 'react';
import ButtonWithBackground from '../src/ButtonWithBackground';
/*import DmzCard from '../src/components/molecules/DmzCard'*/
import {
    View,
    Button,
    Image,
    Text,
    StyleSheet
} from 'react-native';


const Screen_b =() =>{
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.textPosition}>
                    <Text style={styles.textStyle}>DocMz</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.logoPosition}>
                    <Image 
                        source={require('./images/img4.png')}
                        style={styles.logo}
                        resizeMode="stretch" />
                    <Text></Text>
                    <ButtonWithBackground text='Camera' color='#d9d143' />
                    <Text></Text>
                    <ButtonWithBackground text='Select Image from Galary' color='#d9d143' />
                 </View>
                    
            </View>
        </View>
    );
};

export default Screen_b;


/*const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101e25'
    }
    
}); */

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    logoPosition:{
        alignItems:'center',
        justifyContent:'center'
    },
    logo:{
        height:150,
        width:150,
        opacity: 0.7
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
        
    },
    textPosition:{
        position: 'absolute',
            top:20,
            bottom:0,
            left:0,
            right:0,
        alignItems: 'center',
        flexGrow: 1
    },
    textStyle:{
        fontSize:30,
        color:'#fffbff',
        fontFamily: 'abhaya_libre',
        fontWeight: 'bold'
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    /*buttonposition:{
        marginTop:100
        
    },*/
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });