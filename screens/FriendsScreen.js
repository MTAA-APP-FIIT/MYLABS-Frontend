import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Pressable, RefreshControl} from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import NavButton from '../components/NavButton'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';




const FriendsScreen = () => {

  const navigation = useNavigation();
  const [friends, setFriends] = useState([]);
  const [friendsLength, setFriendsLength] = useState([]);
  const [requests, setRequests] = useState([]);
  const [requestProfiles, setRequestProfiles] = useState([]);
  const [profiles, setProfiles] = useState([]);

  const renderItem = ({item}) => (
    <Item name={item.name} position={item.position} id={item.id}/>
  );

  const Item = ({name,position,id}) => (
    <View>
    <TouchableOpacity onPress={() => navigation.navigate('Friend', {userId: id})}>
      <View style={styles.itemContainer}>
        <View>
          <Image style={styles.tinyLogo} source={require('../assets/images/Avatar.png')} />
        </View>
        <View style={styles.credentialsContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.position}>{position}</Text>
        </View>
        <View style={styles.credentialsContainer}>
          <Entypo name="chevron-right" size={32} color="grey" />
        </View>
      </View>
    </TouchableOpacity>
    </View>
    
  );



  const friendsInfo = async () => {
    try{
      const response = await fetch('http://localhost:3000/users/' + GLOBAL.id + '/friends', {headers: {'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2ltb25AZ21haWwuY29tIiwiaWF0IjoxNjQ3OTc0NjczfQ.F14QJJGDoGkk8Cl67gQWVui23v5vlyu1K-lqWUPgP08'}})
      const jsonRes = await response.json();

      const filteredFriends = jsonRes.filter(x => x.state === true);
      const filteredRequests = jsonRes.filter(x => x.state === false);

      if (filteredFriends.length > 0){
        setFriendsLength(filteredFriends.length)
        setFriends(filteredFriends)
      }
      else {
        setFriendsLength(0)
      }
      if (filteredRequests.length > 0){
        setRequests(filteredRequests.length)
        setRequestProfiles(filteredRequests)
      }else {
        setRequests(0)
      }

    } catch{
      console.error("Problem")
    }

  }


  const profileInfo = async () => {
    const array = []
    var obj = Object.values(friends);
    for (let i = 0; i < friendsLength; i++) { 
        const response2 = await fetch('http://localhost:3000/users/' + obj[i].friend_id, {headers: {'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2ltb25AZ21haWwuY29tIiwiaWF0IjoxNjQ3OTc0NjczfQ.F14QJJGDoGkk8Cl67gQWVui23v5vlyu1K-lqWUPgP08'}})
        array.push(await response2.json())
    }
    setProfiles(array)
  }

  useEffect(() => {
    friendsInfo().then(profileInfo);
  }, []);

  return (
    <View style={{backgroundColor: '#F7F9FC', flex: 1}}>


      


      <View style={styles.ContainerNavButton}>
        <NavButton></NavButton>
      </View>
      <Text style={styles.heading}>Friends</Text>

      
      <Pressable style={styles.plus} >
        <Entypo name="plus" size={32} color="grey" onPress={() => navigation.navigate('AddFriend')} />
      </Pressable>
      <TouchableOpacity style={styles.requests} onPress={() => navigation.navigate('FriendRequests', {requestProfiles,requests})}>
        <View style={styles.itemContainer}>
          <View>
            <Image style={styles.tinyLogo} source={require('../assets/images/Avatar.png')} />
          </View>
          <View style={styles.credentialsContainer}>
            <Text style={styles.name}>Friend requests</Text>
            <Text style={styles.position}>New requests: {requests}</Text>
          </View>
        </View>
      </TouchableOpacity>
      

      
      <FlatList
        data={profiles}
        renderItem={renderItem}
        keyExtractor={profiles.id}
        style={styles.listContainer}
      />
      
    </View>
  )
}

export default FriendsScreen

const styles = StyleSheet.create({
  requests: {
    top: 150
  },
  plus: {
    top: 100,
    alignSelf: 'flex-end',
    marginRight: 30
  },
  heading: {
    top: 120,
    left: 25,
    fontSize: 30,
    fontWeight: 'bold'
  },
  name : {
    fontWeight: 'bold',
    fontSize: 18
  },
  position: {
    fontSize: 12,
    color: '#A5A5A5'
  },
  ContainerNavButton: {
    position: 'absolute',
    right: 20,
    top: 80
  },
  credentialsContainer: {
    left: 20,
    paddingTop: 17
  },
  itemContainer: {
    alignSelf: 'center',
    marginVertical: 16,
    width: '80%',
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection:'row', 
    flexWrap:'wrap'
  },
  listContainer: {
    top: 150,
  },
  tinyLogo: {
    width: 70,
    height: 70,
  },
})