import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Pressable, ActivityIndicator, ScrollView} from 'react-native'
import React, { useState, useEffect } from 'react'
import NavButton from '../components/NavButton'
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import ProjectCard from '../components/ProjectCard';
import { useNavigation } from '@react-navigation/native';
GLOBAL = require('../Global');


const HomeScreen = ({navigation}) => {
  // const navigation = useNavigation();
  const [projects, setProjects] = useState([]);
  const [projectsLength, setProjectsLength] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);
  // const [jsonRes, setJsonRes] = useState([]);

  const renderItem = ({ item }) => (
    <Item name={item.name} description={item.description} date={item.date} id={item.id}/>
  );
  
  const Item = ({name, id, date, description}) => (
    <View style={styles.itemContainer}>
          <LinearGradient colors={['#7facd6', '#e9b7d4']} style={styles.Gradient} end={{x:0.9,y:0.4}}>
              <TouchableOpacity onPress={() => navigation.navigate('Project', {projectId: id})} style={styles.Card}>
                  <View style={styles.DayContainer}>
                      <Text style={styles.CardDay}>{date}</Text>
                  </View>
                  <View style={styles.TextContainer}>
                      <Text style={styles.CardHeading}>{name}</Text>
                      <Text style={styles.CardDescription}>{description}</Text>
                  </View>
                  <View style={styles.BarContainer}>
                      {/* <Text style={styles.CardBar}>Tuto bude bar </Text> */}
                  </View>
              </TouchableOpacity>
          </LinearGradient>
      </View>
    
  );
  
  // const projectsInfo = async () => {
  //   try{
  //     const response = await fetch(`http://localhost:3000/projects/owner/${GLOBAL.id}`, {
  //       headers: {
  //         'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2ltb25AZ21haWwuY29tIiwiaWF0IjoxNjQ3OTc0NjczfQ.F14QJJGDoGkk8Cl67gQWVui23v5vlyu1K-lqWUPgP08'
  //       },
  //     })
  //     // console.log(jsonRes)
     
  //     // global.socket.on('RES/projects/owner/:owner', (arg) => {
  //     //   setJsonRes(arg.projects)
  //     // })
  //     // setJsonRes(response)
  //     const jsonRes = await response.json();
      
  //     console.log('len ' +jsonRes.length)

      
  //     setProjectsLength(jsonRes.length)
  //     setProjects(jsonRes)

  //     const array = []
  //     var obj = Object.values(projects);
  //     for (let i = 0; i < projectsLength; i++) { 
  //         const response2 = await fetch('http://localhost:3000/projects/' + obj[i].id, {headers: {'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2ltb25AZ21haWwuY29tIiwiaWF0IjoxNjQ3OTc0NjczfQ.F14QJJGDoGkk8Cl67gQWVui23v5vlyu1K-lqWUPgP08'}})
  //         array.push(await response2.json())
  //     }
  //     setSelectedProjects(array)
  //     // console.log(selectedProjects +'ahoj')


  //   } catch(err){
  //     console.error(err)
  //   }

  // }


  useEffect(() => {
    // // socketEmits();
    // projectsInfo();
    const unsubscribe = navigation.addListener('focus', () => {
      global.socket.emit('loadProjects', GLOBAL.id)
      global.socket.on('loadProjects', (arg) => {
        setProjects(arg)
      })
    })
  }, [navigation]);

  return (
    <View style={{backgroundColor: '#F7F9FC', flex: 1}}>

    <View style={styles.ContainerNavButton}>
      <NavButton></NavButton>
    </View>
    <Text style={styles.heading}>Hello</Text>


    <FlatList
      data={projects}
      renderItem={renderItem}
      keyExtractor={projects.id}
      style={styles.listContainer}
      horizontal={true}
    />
    
    <FlatList
      data={projects}
      renderItem={renderItem}
      keyExtractor={projects.id}
      style={styles.listContainer}
      horizontal={true}
    />

    
  </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
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
  ContainerNavButton: {
    position: 'absolute',
    right: 20,
    top: 80
  },
  
  itemContainer: {
    alignSelf: 'center',
    marginVertical: 16,
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
    Card: {
        width: 200,
        height: 200,
        borderRadius: 10,
        padding: 20,
    },
    DayContainer: {
        alignItems: 'flex-end',
        width: 160,
        height: 40
    },
    TextContainer: {
        justifyContent: 'center',
        width: 160,
        height: 80,
        color: 'white'
    },
    BarContainer: {
        alignItems: 'flex-start',
        height: 40,
        justifyContent: 'flex-end'
    },
    CardHeading: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    CardDescription: {
        fontSize: 10,
        color: 'white',
    }
    ,
    CardDay: {
        fontSize: 15,
        color: 'white',
    },
  workspaceButtons: {
    flexDirection: 'row',

    justifyContent: "space-around",
    marginVertical: 3
  },
  buttonSelected: {
    top: 100,
    alignItems: 'center',
    width: '25%',
    borderRadius: 20,
    marginVertical: 5,
    marginTop:30,
    backgroundColor: '#E3EDF5',
  },
  GradientButton: {
    borderRadius: 20,
    width: 100
},
  btnSecondaryText: {
    fontSize: 14,
    paddingVertical: 12,
    borderRadius: 20,
    color: '#A5A5A5',
    textAlign: 'center',
  },
  btnSelectedText: {
    fontSize: 14,
    paddingVertical: 12,
    borderRadius: 20,
    color: 'white',
    textAlign: 'center',
  },
  Gradient: {
    borderRadius: 10,   
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2
},
})