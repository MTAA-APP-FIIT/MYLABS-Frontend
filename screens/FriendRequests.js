import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import NavButton from '../components/NavButton';
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
            <Entypo name="check" size={32} color="grey" />
          <Entypo name="cross" size={32} color="grey" />
        </View>
      </View>
    </TouchableOpacity>
    </View>
    
  );

  
const FriendRequests = () => {
  return (
    <View style={{backgroundColor: '#F7F9FC', flex: 1}}>
        <View style={styles.ContainerNavButton}>
            <NavButton></NavButton>
        </View>
        <Text style={styles.heading}>Friend requests</Text>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.listContainer}
      />
    </View>
  )
}

export default FriendRequests

const styles = StyleSheet.create({
    
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