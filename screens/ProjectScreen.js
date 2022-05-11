import { StyleSheet, Text, View, Button, ScrollView, FlatList, TouchableOpacity, Image} from 'react-native'
import NavBar from '../components/NavBar.js'
import ProjectCard from '../components/ProjectCard.js'
import NavButton from '../components/NavButton.js'
import TaskCard from '../components/TaskCard.js'
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import {React, useState, useEffect} from 'react'
GLOBAL = require('../Global');


const ProjectScreen = ({route, navigation}) => {

  const projectId = route.params.projectId
  // console.log('project ID: ' + projectId)
  const [project, setProject] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [tasksLength, setTasksLength] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);

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

  // const projectInfo = async () => {
  //   try{
  //     const response = await fetch(`http://localhost:3000/projects/${projectId}`, {headers: {'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2ltb25AZ21haWwuY29tIiwiaWF0IjoxNjQ3OTc0NjczfQ.F14QJJGDoGkk8Cl67gQWVui23v5vlyu1K-lqWUPgP08'}})
  //     const jsonRes = await response.json();
  //     setProject(jsonRes)
  //   } catch{
  //     console.error(error)
  //   }
  // }

  // const tasksInfo = async () => {
  //   try{
  //     console.log(projectId)
  //     const response = await fetch(`http://localhost:3000/tasks/project/${projectId}`, {headers: {'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2ltb25AZ21haWwuY29tIiwiaWF0IjoxNjQ3OTc0NjczfQ.F14QJJGDoGkk8Cl67gQWVui23v5vlyu1K-lqWUPgP08'}})
  //     const jsonRes = await response.json();
  //     setTasksLength(jsonRes.length)
  //     setTasks(jsonRes)

  //     const array = []
  //     var obj = Object.values(tasks);
  //     for (let i = 0; i < tasksLength; i++) { 
  //         const response2 = await fetch('http://localhost:3000/tasks/' + obj[i].id, {headers: {'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2ltb25AZ21haWwuY29tIiwiaWF0IjoxNjQ3OTc0NjczfQ.F14QJJGDoGkk8Cl67gQWVui23v5vlyu1K-lqWUPgP08'}})
  //         array.push(await response2.json())
  //     }
  //     setSelectedTasks(array)
  //   } catch (err){
      
  //   }
  // }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      global.socket.emit('loadProject', projectId)
      global.socket.emit('loadProjectTasks', projectId)
      global.socket.on('loadProject', (arg) => {
        setProject(arg)
      })
      global.socket.on('loadProjectTasks', (arg) => {
        setTasks(arg)
      })
    })
    // projectInfo();
    // tasksInfo();
  }, [navigation]);


  return (
    <View style={{backgroundColor: '#F7F9FC', flex: 1}}>
        <View style={styles.ContainerNavButton}>
            <NavButton></NavButton>
        </View>

        <View style={styles.heading}>
            <Text style={styles.projectName}>{project.name}</Text>
            {/* <Button style={styles.collaboratorsButton} title="Collaborators" onPress={() => navigation.navigate('Welcome')}/> */}
        </View>

        <View>
        <Text style={styles.projectDescription}>{project.description}</Text>


        <View style={styles.containerInfo}>
          <Text style={styles.category}> Project ID: </Text> 
            <Text style={styles.categoryValue}> {project.id} </Text>
            <Text style={styles.category}> Deadline: </Text> 
            <Text style={styles.categoryValue}> {project.deadline} </Text>
        </View>

        <View style={styles.tasksSection}>
            <Text style={styles.taskToDo}>Tasks to do</Text>

            <FlatList
                contentContainerStyle={{alignItems: 'center'}}
                data={tasks}
                renderItem={renderItem}
                keyExtractor={tasks.id}
            />
        </View>
        </View>
        
        
            
    </View>
  )
}

export default ProjectScreen

const styles = StyleSheet.create({
    heading: {
        top: 120,
        flexDirection:'row',
        paddingHorizontal:35,
        fontSize: 30,
        fontWeight: 'bold'
      },
    ContainerNavButton: {
        position: 'absolute',
        right: 20,
        top: 80
      },
      projectHeadder: {
        flexDirection:'row', 
        flexWrap:'wrap',
        paddingHorizontal:35,
      },
      projectName: {
        fontSize: 30,
        fontWeight: 'bold'
      },
      projectDescription: {
        top: 174,
        flexDirection:'row', 
        flexWrap:'wrap',
        paddingHorizontal:35,
        color: '#A5A5A5'
      },
      containerInfo: {
          top: 180,
        flexDirection:'row', 
        flexWrap:'wrap',
        paddingHorizontal:35,
      },
      category: {
        width: '50%',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#A5A5A5',
        paddingBottom: 25
      },
      categoryValue: {
        color: '#A5A5A5'
      },
      tasksSection: {
          top: 200
      },
      taskToDo: {
        fontSize: 32,
        fontWeight: 'bold',
        flexDirection:'row', 
        flexWrap:'wrap',
        paddingHorizontal:35,
      },
      collaboratorsButton: {
          alignSelf: 'flex-end'
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
})
