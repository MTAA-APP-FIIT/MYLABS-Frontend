import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
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
    const response = await fetch('http://localhost:3000/users/' + GLOBAL.id + '/friends', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json','authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2ltb25AZ21haWwuY29tIiwiaWF0IjoxNjQ3OTc0NjczfQ.F14QJJGDoGkk8Cl67gQWVui23v5vlyu1K-lqWUPgP08'},
        body: JSON.stringify({friend_id: user_id})
    })
        
  }

  const confirmFriend = async (user_id) => {
    const response = await fetch('http://localhost:3000/users/' + GLOBAL.id + '/friends', {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json','authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2ltb25AZ21haWwuY29tIiwiaWF0IjoxNjQ3OTc0NjczfQ.F14QJJGDoGkk8Cl67gQWVui23v5vlyu1K-lqWUPgP08'},
        body: JSON.stringify({friend_id: user_id, state: 1})
    })
        
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
            navigation.navigate('Friends')
          }}/>
          <Entypo name="cross" size={32} color="grey" onPress={() => {
            declineFriend(id)
            navigation.navigate('Friends')
          }}/>
        </View>
      </View>
    </TouchableOpacity>
    </View>
    
  );



  useEffect(() => {
    findProfiles();
  }, []);


  return (
    <View style={{backgroundColor: '#F7F9FC', flex: 1}}>
        <View style={styles.ContainerNavButton}>
            <NavButton></NavButton>
        </View>
        <TouchableOpacity style={styles.chevron}>
                <Entypo name='chevron-left' size={32} color="black" onPress={() => navigation.goBack()}></Entypo>
        </TouchableOpacity>
        <Text style={styles.heading}>Friend requests</Text>
        <FlatList
        data={requests}
        renderItem={renderItem}
        keyExtractor={requests.id}
        style={styles.listContainer}
      />
    </View>
  )
}

export default FriendRequests

const styles = StyleSheet.create({
  chevron: {
    left: 25,
    top: 90,
  },
  heading: {
      top: 120,
      left: 25,
      fontSize: 30,
      fontWeight: 'bold'
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