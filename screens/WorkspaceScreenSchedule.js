import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Pressable, ActivityIndicator, ScrollView} from 'react-native'
import React, { useState, useEffect } from 'react'
import NavButton from '../components/NavButton'
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import ProjectCard from '../components/ProjectCard';
import TaskCard from '../components/TaskCard';
GLOBAL = require('../Global');

const WorkspaceScreen = ({navigation}) => {
  const [tasks, setTasks] = useState([]);

  const tasksInfo = async () => {
    try{
      const response = await fetch(`http://localhost:3000/tasks/owner/${GLOBAL.id}`, {headers: {'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2ltb25AZ21haWwuY29tIiwiaWF0IjoxNjQ3OTc0NjczfQ.F14QJJGDoGkk8Cl67gQWVui23v5vlyu1K-lqWUPgP08'}})
      const jsonRes = await response.json();
      setTasks(jsonRes)
    } catch (err){
      
    }
  }

  const renderItem = ({ item }) => (
    <Item name={item.name} end={item.end} id={item.id}/>
  );

  const Item = ({ name, end, id}) => (
    <View>
        <TouchableOpacity style={styles.bottomCard} onPress={() => navigation.navigate('Task', {taskId: id})}>
            <LinearGradient colors={['#7facd6', '#e9b7d4']} style={styles.Gradient}>
                <Image style={styles.profilePicture} source={require('../assets/images/taskIcon.png')} />
            </LinearGradient>
            <View style={styles.taskInfo}>
                <Text style={styles.taskName}>{name}</Text>
                <Text style={styles.taskDate}>Due: {end}</Text>
            </View>
            <View style={styles.credentialsContainer}>
                <Entypo name="chevron-right" size={32} color="grey" />
            </View>

        </TouchableOpacity>
    </View>
    
  );

  useEffect(() => {
    tasksInfo();
  }, []);

  return (
    <View style={{backgroundColor: '#F7F9FC', flex: 1}}>


      


    <View style={styles.ContainerNavButton}>
      <NavButton></NavButton>
    </View>
    <Text style={styles.heading}>Workspace</Text>

    
    <Pressable style={styles.plus} >
      <Entypo name="plus" size={32} color="grey" />
    </Pressable>

      <View style={styles.workspaceButtons}>
        
        

        <TouchableOpacity style={styles.buttonSelected}onPress={() => navigation.navigate('Workspace')}>
          <Text style={styles.btnSecondaryText}>Projects</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSelected} onPress={() => navigation.navigate('WorkspaceTasks')}>
          <Text style={styles.btnSecondaryText}>Tasks</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSelected}>
          <LinearGradient colors={['#7facd6', '#e9b7d4']} style={styles.GradientButton}>
              <Text  style={styles.btnSelectedText}>Schedule</Text>
          </LinearGradient>
        </TouchableOpacity>

      </View>

    <View style={styles.createTask}>
        <TouchableOpacity style={styles.bottomCard} onPress={() => navigation.navigate('CreateTask')}>
            <LinearGradient colors={['#7facd6', '#e9b7d4']} style={styles.Gradient}>
                <Entypo name="plus" size={60} color="white" />
            </LinearGradient>
            <View style={styles.taskInfo}>
                <Text style={styles.createTaskName}>CreateTask</Text>
            </View>
            <View style={styles.createTaskChevron}>
                <Entypo name="chevron-right" size={32} color="grey" />
            </View>

        </TouchableOpacity>
    </View>

    <View style={styles.tasksSection}>

            <FlatList
                contentContainerStyle={{alignItems: 'center'}}
                data={tasks}
                renderItem={renderItem}
                keyExtractor={tasks.id}
            />
        </View>

    
  </View>

    
  )
}

export default WorkspaceScreen

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
  tasksSection: {
    top: 120
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
bottomCard: {
    backgroundColor: '#fff',
    width: 325,
    height: 100,
    borderRadius: 25,
    flexDirection: "row",
    shadowColor: "black",
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginVertical: 16
},
credentialsContainer: {
    left: 30,
    paddingTop: 35
  },
Gradient: {
    borderRadius: 25,
    width: 90,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
},
taskInfo: {
    justifyContent: 'center',
    margin: 15,
},
iconRight: {
    justifyContent: 'center'
},
taskName: {
    fontSize: 15,
    color: 'grey',
    fontWeight: 'bold'
},
taskDate: {
    fontSize: 12,
    color: 'grey',
},
    createTask: {
        top: 100,
        alignItems: 'center',
    },
    createTaskChevron: {
        left: 35,
        paddingTop: 35
    },
    createTaskName: {

        fontSize: 25,
        color: 'grey',
        fontWeight: 'bold'
    }
})