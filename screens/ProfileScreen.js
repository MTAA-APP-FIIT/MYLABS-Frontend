import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TouchableOpacity, MaskedView } from 'react-native'
import React from 'react'
import NavButton from '../components/NavButton.js'
import { LinearGradient } from 'expo-linear-gradient';

const ProfileScreen = () => {
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
          <Text style={styles.edit}>Edit</Text>
        </View>
        <View style={styles.credentialsContainer}>
          <Text style={styles.name}>Simon Kokavec</Text>
          <Text style={styles.position}>Machine learning specialist</Text>
          <View style={styles.friendContainer}>
            <Text style={styles.stats}>Friends: 33</Text>
            <Text style={styles.stats}>Projects: 5</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerInfo}>
          <Text style={styles.category}> E-Mail: </Text> 
          <Text style={styles.categoryValue}> example </Text>
          <Text style={styles.category}> Phone: </Text> 
          <Text style={styles.categoryValue}> example </Text>
          <Text style={styles.category}> Birthday: </Text> 
          <Text style={styles.categoryValue}> example </Text>
          <Text style={styles.category}> Username: </Text> 
          <Text style={styles.categoryValue}> example </Text>
          <Text style={styles.category}> Position: </Text> 
          <Text style={styles.categoryValue}> example </Text>
          <Text style={styles.category}> Joined: </Text> 
          <Text style={styles.categoryValue}> example </Text>
          <TouchableOpacity style={styles.btnSecondary} onPress={() => navigation.navigate('TabNavigator')}>
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