import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const RegisterScreen = ({navigation}) => {

  return (
    <View style={{ flex:1}}>
      <ImageBackground source={require('../assets/images/background.png')} resizeMode="cover" style={styles.image}>
          <Text style={styles.heading}>REGISTER</Text>
          <Text style={styles.subHeading}>PLEASE SIGN UP</Text>
          <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Full name" placeholderTextColor="#fff" keyboardType="default"/>
            <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#fff" keyboardType="default"/>
            <TextInput style={styles.input} placeholder="Job position" placeholderTextColor="#fff" keyboardType="default"/>
            <TextInput style={styles.input} placeholder="Birthdate" placeholderTextColor="#fff" keyboardType="default"/>
            <TouchableOpacity style={styles.btnSecondary} onPress={() => navigation.navigate('TabNavigator')}>
              <Text style={styles.btnSecondaryText}>Next</Text>
            </TouchableOpacity>
            <Text style={styles.subText}>Already have an account ? <Text style={{fontWeight: 'bold'}} onPress={() => navigation.navigate('Login')}>Sign in.</Text></Text>
          </View>
          <Text style={styles.footerText}>Created by Students of FIIT STU</Text>
      </ImageBackground>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    letterSpacing: 10,
    fontFamily: 'Overlock_700Bold'
  },
  input: {
    width: '70%',
    paddingVertical: 15,
    paddingLeft:10,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    color: 'white',
    marginVertical: 10
  },
  subText: {
    marginTop: 10,
    color: 'white'
  },

  subHeading: {
    color: 'white',
    fontSize: 9,
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: 2,
  },
  footerText: {
    color: '#b5b5b5',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 40,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    
  },
  
  btnSecondary: {
    width: '40%',
    borderRadius: 20,
    marginVertical: 5,
    marginTop:30,
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