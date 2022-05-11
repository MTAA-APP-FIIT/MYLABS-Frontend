import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Alert } from 'react-native'
import {React, useState,useEffect} from 'react'
import NavButton from '../components/NavButton';
import { Entypo } from '@expo/vector-icons';
GLOBAL = require('../Global');

 
  
const FriendRequests = ({route, navigation}) => {
  const profiles = route.params.requestProfiles
  const [requests, setRequests] = useState([]);
 
  const findProfiles = async () => {
    const array = []
    var obj = Object.values(profiles);
    for (let i = 0; i < route.params.requests; i++) { 
        const response2 = await fetch('http://localhost:3000/users/' + obj[i].friend_id, {headers: {'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2ltb25AZ21haWwuY29tIiwiaWF0IjoxNjQ3OTc0NjczfQ.F14QJJGDoGkk8Cl67gQWVui23v5vlyu1K-lqWUPgP08'}})
        array.push(await response2.json())
    }
    setRequests(array);
  };

  const renderItem = ({item}) => (
    <Item name={item.name} position={item.position} id={item.id}/>
  );
  
  const declineFriend = async (user_id) =>{
    const isLargeNumber = (element) => element.id === user_id
    const index = requests.findIndex(isLargeNumber)
    const temp = requests
    temp.splice(index, 1)
    setRequests([...temp])
    global.socket.emit('declineFriend', GLOBAL.id, user_id)
    /* const response = await fetch('http://localhost:3000/users/' + GLOBAL.id + '/friends', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json','authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2ltb25AZ21haWwuY29tIiwiaWF0IjoxNjQ3OTc0NjczfQ.F14QJJGDoGkk8Cl67gQWVui23v5vlyu1K-lqWUPgP08'},
        body: JSON.stringify({friend_id: user_id})
    }) */
        
  }

  const confirmFriend = async (user_id) => {
    const isLargeNumber = (element) => element.id === user_id
    const index = requests.findIndex(isLargeNumber)
    const temp = requests
    temp.splice(index, 1)
    setRequests([...temp])
    global.socket.emit('acceptFriend', GLOBAL.id, user_id)
    /* const response = await fetch('http://localhost:3000/users/' + GLOBAL.id + '/friends', {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json','authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2ltb25AZ21haWwuY29tIiwiaWF0IjoxNjQ3OTc0NjczfQ.F14QJJGDoGkk8Cl67gQWVui23v5vlyu1K-lqWUPgP08'},
        body: JSON.stringify({friend_id: user_id, state: 1})
    }) */
        
  }

  const confirm = () => {
    Alert.alert(
      "Confirmation",
      "Request approved",
      [
        { text: "OK" }
      ])
  }

  const decline = () => {
    Alert.alert(
      "Confirmation",
      "Request declined",
      [
        { text: "OK" }
      ])
  }


  const Item = ({name,position,id}) => (
    <View>
    <TouchableOpacity >
      <View style={styles.itemContainer}>
        <View>
          <Image style={styles.tinyLogo} source={require('../assets/images/Avatar.png')} />
        </View>
        <View style={styles.credentialsContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.position}>{position}</Text>
        </View>
        <View style={styles.credentialsContainer}>
          <Entypo name="check" size={32} color="grey" onPress={() => {
            confirmFriend(id)
            global.socket.emit('acceptInvite', GLOBAL.id, id)
            confirm()
          }}/>
          <Entypo name="cross" size={32} color="grey" onPress={() => {
            declineFriend(id)
            decline()
          }}/>
        </View>
      </View>
    </TouchableOpacity>
    </View>
    
  );

  global.socket.on('request', (arg) => {
    if (requests.length < 1){
      setRequests([...requests,arg])
    } else {
      setRequests([...requests,arg])
    }
  })

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      global.socket.emit('loadRequests', GLOBAL.id)
      global.socket.on('loadRequests', (arg) => {
        GLOBAL.friendRequests = arg
        setRequests(GLOBAL.friendRequests)
      })
    })
  }, [navigation]);


  return (
    <View style={{backgroundColor: '#F7F9FC', flex: 1}}>
        <View style={styles.ContainerNavButton}>
            <NavButton></NavButton>
        </View>
        <TouchableOpacity style={styles.chevron}>
                <Entypo name='chevron-left' size={32} color="black" onPress={() => navigation.goBack()}></Entypo>
        </TouchableOpacity>
        <Text style={styles.heading}>Friend requests</Text>
        { requests.length ? <FlatList
        data={requests}
        extraData={requests}
        renderItem={renderItem}
        keyExtractor={requests.id}
        style={styles.listContainer}
      /> : <Text style={styles.EmptyState}> No Requests </Text>}
        
    </View>
  )
}

export default FriendRequests

const styles = StyleSheet.create({
  EmptyState: {
    alignSelf: 'center',
    top: 180,
    fontWeight: 'bold'
  },
  chevron: {
    left: 25,
    top: 70,
  },
  heading: {
      top: 90,
      left: 25,
      fontSize: 30,
      fontWeight: 'bold'
  },
  itemContainer: {
    justifyContent: 'space-between',
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
    paddingHorizontal: 30,
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
})