import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import {React, useState} from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const RegisterScreen = ({route, navigation}) => {
  const name = route.params.name
  const username = route.params.username
  const position = route.params.position
  const birthdate = route.params.birthdate
  const [phone, setPhone] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  GLOBAL.USERNAME = false

  async function save(id) {
    GLOBAL.id = id
  }

  function navigate(){
    navigation.navigate('TabNavigator')
  }

  function navigate2(){
    navigation.navigate('Welcome')
  }

  const onSubmitHandler = () => {
    const payload = { 
      email: email,
      password: password
  };
    fetch('http://localhost:3000/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then(async res => { 
        try {
            const jsonRes = await res.json();
            if (res.status !== 200) {
              navigate2()
            } else {
              save(jsonRes.id)
              navigate()
              //loginFunc(jsonRes.token);
                
            }
            } catch (err) {
            console.log(err);
            } ;
    })
    .catch(err => {
        console.log(err);
    });
  }

  const registerUser = async () => {
        const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'}, 
          body: JSON.stringify({name: name, username: username, password: password, email: email, phone: phone, position: position, birthdate:birthdate, profile_picture:"", created_at:"", updated_at:"", delete: false})
        })
      
      }

  return (
    <View style={{ flex:1}}>
      <ImageBackground source={require('../assets/images/background.png')} resizeMode="cover" style={styles.image}>
          <Text style={styles.heading}>REGISTER</Text>
          <Text style={styles.subHeading}>PLEASE SIGN UP</Text>
          <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
              <TextInput style={styles.input} onChangeText={setPhone} placeholder="Phone" placeholderTextColor="#fff" keyboardType="default"/>
              <TextInput style={styles.input} onChangeText={setEmail} placeholder="E-Mail" placeholderTextColor="#fff" keyboardType="default"/>
              <TextInput style={styles.input} onChangeText={setPassword} placeholder="Password" placeholderTextColor="#fff" keyboardType="default"/>
              <TouchableOpacity style={styles.btnSecondary} onPress={() => {
                registerUser()
                onSubmitHandler()
              }}>
                <Text style={styles.btnSecondaryText}>Register</Text>
              </TouchableOpacity>
            <Text style={styles.subText}>Already have an account ? <Text style={{fontWeight: 'bold'}} onPress={() => navigation.navigate('Login')}>Sign in.</Text></Text>
          </KeyboardAvoidingView>
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
    fontFamily: 'Overlock_700Bold',
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
    color: 'white',
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