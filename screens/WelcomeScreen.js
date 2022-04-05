import { ImageBackground, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import AppLoading from 'expo-app-loading';
import { useFonts, Overlock_700Bold } from '@expo-google-fonts/overlock';


const WelcomeScreen = ({navigation}) => {
  let [fontsLoaded] = useFonts({
    Overlock_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{flex:1}}>
      <ImageBackground source={require('../assets/images/background.png')} resizeMode="cover" style={styles.image}>
          <Text style={styles.heading}>MYLABS</Text>
          <Text style={styles.subHeading}>YOUR OWN MANAGEMENT LABORATORY</Text>
          <View style={styles.container}>
            <TouchableOpacity style={styles.btnSecondary} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.btnSecondaryText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.btnPrimaryText}>or</Text>
            <TouchableOpacity style={styles.btnPrimary} onPress={() => navigation.navigate('Register')}>
              <Text style={styles.btnPrimaryText}>Register</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.footerText}>Created by Students of FIIT STU</Text>
      </ImageBackground>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 70,
    textAlign: 'center',
    letterSpacing: 10,
    fontFamily: 'Overlock_700Bold'
  },
  subHeading: {
    color: 'white',
    fontSize: 9,
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 2,
  },
  footerText: {
    color: '#b5b5b5',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center'
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    
  },
  btnPrimary: {
    width: '70%',
    borderRadius: 20,
    marginVertical: 5,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    borderColor: 'white',
  },
  btnPrimaryText: {
    fontSize: 14,
    paddingVertical: 12,
    borderRadius: 20,
      fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
   
  },
  btnSecondary: {
    width: '70%',
    borderRadius: 20,
    marginVertical: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
  },
  btnSecondaryText: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 12,
    borderRadius: 20,
    color: 'black',
    textAlign: 'center',
  },
})