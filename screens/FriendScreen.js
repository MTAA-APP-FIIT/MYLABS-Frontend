import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import {React, useState, useEffect} from 'react'
import NavButton from '../components/NavButton'
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const FriendScreen = ({route, navigation}) => {

  const userId = route.params.userId
  const [result, setResult] = useState([]);
  const [friends, setFriends] = useState([]);

  const profileInfo = async () => {
    try{
      const response = await fetch('http://localhost:3000/users/' + userId, {headers: {'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2ltb25AZ21haWwuY29tIiwiaWF0IjoxNjQ3OTc0NjczfQ.F14QJJGDoGkk8Cl67gQWVui23v5vlyu1K-lqWUPgP08'}})
      const jsonRes = await response.json();
      setResult(jsonRes)
    } catch{
      console.error(error)
    }
    
  }

  const friendsInfo = async () => {
    try{
      const response = await fetch('http://localhost:3000/users/' + userId + '/friends', {headers: {'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2ltb25AZ21haWwuY29tIiwiaWF0IjoxNjQ3OTc0NjczfQ.F14QJJGDoGkk8Cl67gQWVui23v5vlyu1K-lqWUPgP08'}})
      const jsonRes = await response.json();
      setFriends(jsonRes.length)
    } catch{
      console.error(error)
    }
  }

  const deleteFriend = async () =>{
    const response = await fetch('http://localhost:3000/users/' + GLOBAL.id + '/friends', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json','authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2ltb25AZ21haWwuY29tIiwiaWF0IjoxNjQ3OTc0NjczfQ.F14QJJGDoGkk8Cl67gQWVui23v5vlyu1K-lqWUPgP08'},
        body: JSON.stringify({friend_id: userId})
    })
        
  }

  useEffect(() => {
    profileInfo();
    friendsInfo();
  }, []);

  return (
    
    <View style={{backgroundColor: '#F7F9FC', flex: 1}}>
        <View style={styles.ContainerNavButton}>
            <NavButton></NavButton>
        </View>
        <TouchableOpacity style={styles.chevron}>
                <Entypo name='chevron-left' size={32} color="black" onPress={() => navigation.goBack()}></Entypo>
        </TouchableOpacity>
        <View style={styles.container}>
            <Image style={styles.profilePicture} source={require('../assets/images/Avatar.png')} />
            <Text style={styles.name}> {result.name} </Text>
            <Text style={styles.position}> {result.position} </Text>
            <View style={styles.containerStats}>
                <Text style={styles.stats}> Common friends: {friends} </Text> 
                <Text style={styles.stats}> Common projects: 1 </Text>
            </View>
            <View style={styles.containerInfo}>
                <Text style={styles.category}> E-Mail: </Text> 
                <Text style={styles.categoryValue}> {result.email} </Text>
                <Text style={styles.category}> Phone: </Text> 
                <Text style={styles.categoryValue}> {result.phone} </Text>
                <Text style={styles.category}> Birthday: </Text> 
                <Text style={styles.categoryValue}> {result.birthdate} </Text>
                <Text style={styles.category}> Username: </Text> 
                <Text style={styles.categoryValue}> {result.username} </Text>
                <Text style={styles.category}> Position: </Text> 
                <Text style={styles.categoryValue}> {result.position} </Text>
            </View>
            <TouchableOpacity style={styles.btnSecondary} onPress={() => navigation.navigate('TabNavigator')}>
                <LinearGradient colors={['#7facd6', '#e9b7d4']} style={styles.Gradient} end={{x:0.9,y:0.4}}>
                    <Text style={styles.btnSecondaryText}>Call</Text>
                </LinearGradient>
            </TouchableOpacity>
            <Pressable onPress={() => {
                    deleteFriend()
                    navigation.navigate('Friends')
                }}>
              <Text style={styles.delete} >Delete friend</Text>
            </Pressable>
           
        </View>
    </View>
  )
}

export default FriendScreen

const styles = StyleSheet.create({
  chevron: {
    top:80,
    left: 25
  },
    container: {
        top: 180
    },
    category: {
        width: '50%',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#A5A5A5',
        paddingBottom: 25
    },
    ContainerNavButton: {
      position: 'absolute',
      right: 20,
      top: 80
      },
    profilePicture: {
        width: 125,
        height: 125,
        alignSelf: 'center',
        marginBottom: 20
    },
    name: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    delete: {
        alignSelf: 'center',
        fontSize: 10
    },
    position: {
        alignSelf: 'center',
        fontSize: 14,
        color: '#A5A5A5',
        marginBottom: 20
    },
    containerInfo: {
        flexDirection:'row', 
        flexWrap:'wrap',
        paddingHorizontal:35,
    },
    categoryValue: {
        color: '#A5A5A5'
    },
    btnSecondary: {
        alignSelf: 'center',
        width: '80%',
        borderRadius: 20,
        marginVertical: 5,
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
    containerStats: {
        flexDirection:'row', 
        flexWrap:'wrap',
        paddingHorizontal:35,
        justifyContent: 'space-between'
      },
      stats: {
        fontWeight: 'bold',
        fontSize: 14,
        paddingBottom: 25,
      },
      category: {
        width: '50%',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#A5A5A5',
        paddingBottom: 25
      },
})