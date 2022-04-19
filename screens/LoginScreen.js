import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
GLOBAL = require('../Global');
import * as SecureStore from 'expo-secure-store';



const LoginScreen = ({navigation}) => {
  
  GLOBAL.USERNAME = false

  async function save(id) {
    GLOBAL.id = id
  }

  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  function navigate(){
    navigation.navigate('TabNavigator')
  }

  function navigate2(){
    navigation.navigate('Welcome')
  }

  function validator(){
    if (email.length < 1 || password.length < 1){
      setIsError(true);
      setMessage("Fill both fields");
      return false
    }
    return true
  }
  const onSubmitHandler = () => {
    const payload = { 
      email: email,
      password: password
  };
    fetch('http://192.168.68.106:3000/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then(async res => { 
        try {

            
            if (res.status !== 200) {
              setIsError(true);
              setMessage("Wrong credentials");
            } else {
              const jsonRes = await res.json();
              save(jsonRes.id)
              navigate()   
            }
            } catch (err) {
            console.log(err);
            } ;
    })
    .catch(err => {
        console.log(err);
    });
  }

  const getMessage = () => {
    const status = isError ? `Error: ` : `Success: `;
    return status + message;
}

  //onPress={() => navigation.navigate('TabNavigator')} 
  return (
    
    <View style={{ flex:1}}>
      <ImageBackground source={require('../assets/images/background.png')} resizeMode="cover" style={styles.image}>
          <Text style={styles.heading}>LOGIN</Text>
          <Text style={styles.subHeading}>PLEASE SIGN IN</Text>
          <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={setEmail} autoCapitalize='none' placeholder="E-Mail" placeholderTextColor="#fff" keyboardType="default"/>
            <TextInput style={styles.input} onChangeText={setPassword} autoCapitalize='none' placeholder="Password" placeholderTextColor="#fff" keyboardType="default"/>
            <Text style={[styles.message, {color: isError ? 'red' : 'green'}]}>{message ? getMessage() : null}</Text>
            <TouchableOpacity style={styles.btnSecondary} onPress={
              () => {
                if(validator()){
                  onSubmitHandler()
                }
              }
            }>
              <Text style={styles.btnSecondaryText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.subText}>Don’t have an account ? <Text style={{fontWeight: 'bold'}} onPress={() => navigation.navigate('Register')}>Sign up.</Text></Text>
          </View>
          <Text style={styles.footerText}>Created by Students of FIIT STU</Text>
      </ImageBackground>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 70,
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