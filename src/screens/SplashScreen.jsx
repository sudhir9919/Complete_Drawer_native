import React from "react";
import { View, Text,StyleSheet,Image } from 'react-native';
import { useEffect } from "react";
const SplashScreen= ({ navigation }) => {
 useEffect(() => {
 const timer = setTimeout(() => {
 console.log('Splash screen finished!');
 navigation.replace('Login');
 }, 3000);

 return () => clearTimeout(timer);
 }, [navigation]);

 return (
 <View style={styles.container}>
 <Image
 source={require('../../src/assets/Images/gemba-logo.png')}
 style={styles.logo}
 resizeMode="contain"
 />
 <Text style={styles.splashText}>
 Welcome to GEMBA <Text style={{ color: '#A50104' }}>INFOTECH</Text>
 </Text>
 </View>
 );
}
export default SplashScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    splashText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#393D3F',
        textAlign: 'center',
        },
})