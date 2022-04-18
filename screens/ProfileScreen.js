import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TouchableOpacity, MaskedView, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import NavButton from '../components/NavButton.js'
import { LinearGradient } from 'expo-linear-gradient';
GLOBAL = require('../Global');
import * as ImagePicker from 'expo-image-picker';


const ProfileScreen = ({navigation}) => {

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const [result, setResult] = useState([]);
  const [friends, setFriends] = useState([]);
  const [projects, setProjects] = useState([]);

  const profileInfo = async () => {
    try{
      const response = await fetch('http://localhost:3000/users/' + GLOBAL.id, {headers: {'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2ltb25AZ21haWwuY29tIiwiaWF0IjoxNjQ3OTc0NjczfQ.F14QJJGDoGkk8Cl67gQWVui23v5vlyu1K-lqWUPgP08', 
      'Content-Type': 'application/json'}})
      const jsonRes = await response.json();
      setResult(jsonRes)
    } catch{
      console.error(error)
    }
    
  }

  const friendsInfo = async () => {
    try{
      const response = await fetch('http://localhost:3000/users/' + GLOBAL.id + '/friends', {headers: {'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2ltb25AZ21haWwuY29tIiwiaWF0IjoxNjQ3OTc0NjczfQ.F14QJJGDoGkk8Cl67gQWVui23v5vlyu1K-lqWUPgP08', 
      'Content-Type': 'application/json'}})
      const jsonRes = await response.json();
      setFriends(jsonRes.length)
    } catch{
      console.error(error)
    }
  }

  const projectsInfo = async () => {
    try{
      const response = await fetch('http://localhost:3000/projects', 
      {
        headers: {'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2ltb25AZ21haWwuY29tIiwiaWF0IjoxNjQ3OTc0NjczfQ.F14QJJGDoGkk8Cl67gQWVui23v5vlyu1K-lqWUPgP08', 
        'Content-Type': 'application/json'},
      })

      const jsonRes = await response.text();
      console.log(jsonRes)
      setProjects(jsonRes.length)
    } catch{
      console.error("Problem")
    }
  }
  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      profileInfo();
      friendsInfo();
      projectsInfo();
    })
  }, []);
  

  return (
    <View style={{backgroundColor: '#F7F9FC', flex: 1}}>
      <View style={styles.ContainerNavButton}>
        <NavButton></NavButton>
      </View>
      <Text style={styles.heading}>Profile</Text>
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.container}>
        <View>
          <Image style={styles.tinyLogo} source={require('../assets/images/Avatar.png')} />
          <Text style={styles.edit} onPress={pickImage} >Edit</Text>
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
        <View style={styles.credentialsContainer}>
          <Text style={styles.name}>{result.name}</Text>
          <Text style={styles.position}>{result.position}</Text>
          <View style={styles.friendContainer}>
            <Text style={styles.stats}>Friends: {friends} </Text>
            <Text style={styles.stats}>Projects: {projects}</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerInfo}>
          <Text style={styles.category}> E-Mail: </Text> 
          <Text style={styles.categoryValue}>{result.email}</Text>
          <Text style={styles.category}> Phone: </Text> 
          <Text style={styles.categoryValue}> {result.phone} </Text>
          <Text style={styles.category}> Birthday: </Text> 
          <Text style={styles.categoryValue}> {result.birthdate} </Text>
          <Text style={styles.category}> Username: </Text> 
          <Text style={styles.categoryValue}> {result.username} </Text>
          <Text style={styles.category}> Position: </Text> 
          <Text style={styles.categoryValue}> {result.position} </Text>
          <Text style={styles.category}> Joined: </Text> 
          <Text style={styles.categoryValue}> {result.created_at} </Text>
          <TouchableOpacity style={styles.btnSecondary} onPress={() => navigation.navigate('EditProfile')}>
            <LinearGradient colors={['#7facd6', '#e9b7d4']} style={styles.Gradient} end={{x:0.9,y:0.4}}>
              <Text style={styles.btnSecondaryText}>Edit</Text>
            </LinearGradient>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
      
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  heading: {
    top: 120,
    left: 25,
    fontSize: 30,
    fontWeight: 'bold'
  },
  ContainerNavButton: {
    position: 'absolute',
    right: 20,
    top: 80
  },
  tinyLogo: {
    width: 85,
    height: 85,
  },
  container: {
    top: 174,
    left: 25,
    backgroundColor: '#F7F9FC',
    flexDirection:'row', flexWrap:'wrap'
  },
  edit: {
    alignSelf: 'center',
    paddingTop: 10
  },
  name : {
    fontWeight: 'bold',
    fontSize: 30
  },
  position: {
    fontSize: 14,
    color: '#A5A5A5'
  },
  credentialsContainer: {
    left: 20,
    paddingTop: 12
  },
  friendContainer: {
    flexDirection:'row', 
    flexWrap:'wrap',
    justifyContent: 'space-between',
    paddingTop: 30
  },
  stats: {
    fontWeight: 'bold',
    
  },
  containerInfo: {
    flexDirection:'row', 
    flexWrap:'wrap',
    paddingHorizontal:35,
    top: 240
  },
  category: {
    width: '50%',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#A5A5A5',
    paddingBottom: 25
  },
  btnSecondary: {
    width: '40%',
    borderRadius: 20,
    marginVertical: 5,
    marginTop:30,
    borderWidth: 1,
    borderColor: 'white',
  },
  btnSecondaryText: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 12,
    borderRadius: 20,
    color: 'white',
    textAlign: 'center',
  },
  Gradient: {
    borderRadius: 20,   
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2
  },
  categoryValue: {
    color: '#A5A5A5'
  }

})