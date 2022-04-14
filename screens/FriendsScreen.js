import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Pressable, ActivityIndicator} from 'react-native'
import React, { useState, useEffect } from 'react'
import NavButton from '../components/NavButton'
import { Entypo } from '@expo/vector-icons';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const renderItem = ({ item }) => (
  <Item title={item.title} />
);

const Item = ({ title }) => (
  <View>
  <TouchableOpacity>
    <View style={styles.itemContainer}>
      <View>
        <Image style={styles.tinyLogo} source={require('../assets/images/Avatar.png')} />
      </View>
      <View style={styles.credentialsContainer}>
        <Text style={styles.name}>Simon Kokavec</Text>
        <Text style={styles.position}>Machine learning specialist</Text>
      </View>
      <View style={styles.credentialsContainer}>
        <Entypo name="chevron-right" size={32} color="grey" />
      </View>
    </View>
  </TouchableOpacity>
  </View>
  
);


const FriendsScreen = () => {

  const loginFunc = async (token) => {
    fetch('http://localhost:3000/users', {headers: {'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2ltb25AZ21haWwuY29tIiwiaWF0IjoxNjQ3OTc0NjczfQ.F14QJJGDoGkk8Cl67gQWVui23v5vlyu1K-lqWUPgP08'}
  })
  .then(async res => { 
    try {
        const jsonRes = await res.text();
        if (res.status !== 200) {
           console.log("Hello")
        } else {
            console.log(jsonRes)
            
        }
    } catch (err) {
        console.log(err);
    };
  })
  }

  const onSubmitHandler = () => {
    const payload = { 
      email: "simon@gmail.com",
      password: "MrSkeletor123"
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
               console.log("Neprešlo")
            } else {
                loginFunc(jsonRes.token);
                
            }
        } catch (err) {
            console.log(err);
        };
    })
    .catch(err => {
        console.log(err);
    });
};


  const [modalVisible, setModalVisible] = useState(false);

  
  return (
    <View style={{backgroundColor: '#F7F9FC', flex: 1}}>


      


      <View style={styles.ContainerNavButton}>
        <NavButton></NavButton>
      </View>
      <Text style={styles.heading}>Friends</Text>

      
      <Pressable style={styles.plus} onPress={onSubmitHandler}>
        <Entypo name="plus" size={32} color="grey" />
      </Pressable>

      <TouchableOpacity style={styles.requests}>
        <View style={styles.itemContainer}>
          <View>
            <Image style={styles.tinyLogo} source={require('../assets/images/Avatar.png')} />
          </View>
          <View style={styles.credentialsContainer}>
            <Text style={styles.name}>Friend requests</Text>
            <Text style={styles.position}>New requests: 1</Text>
          </View>
        </View>
      </TouchableOpacity>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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