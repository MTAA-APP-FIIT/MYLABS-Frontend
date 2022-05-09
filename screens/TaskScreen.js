import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import {React, useState, useEffect} from 'react'
import NavButton from '../components/NavButton'
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const TaskScreen = ({route, navigation}) => {

  const taskId = route.params.taskId
  const [result, setResult] = useState([]);

  const taskInfo = async () => {
    try{
      const response = await fetch('http://localhost:3000/tasks/' + taskId, {headers: {'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2ltb25AZ21haWwuY29tIiwiaWF0IjoxNjQ3OTc0NjczfQ.F14QJJGDoGkk8Cl67gQWVui23v5vlyu1K-lqWUPgP08'}})
      const jsonRes = await response.json();
      console.log(jsonRes)
      setResult(jsonRes)
    } catch{
      console.error(error)
    }
    
  }

  const deleteTask = async () =>{
    const response = await fetch('http://localhost:3000/tasks/' + taskId , {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json','authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2ltb25AZ21haWwuY29tIiwiaWF0IjoxNjQ3OTc0NjczfQ.F14QJJGDoGkk8Cl67gQWVui23v5vlyu1K-lqWUPgP08'},

    })
        
  }

  useEffect(() => {
    taskInfo();
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
            <Text style={styles.name}> {result.name} </Text>
            <Text style={styles.projectDescription}>{result.description}</Text>
            
            <View style={styles.containerInfo}>
                <Text style={styles.category}> Start: </Text> 
                <Text style={styles.categoryValue}> {result.start} </Text>
                <Text style={styles.category}> End: </Text> 
                <Text style={styles.categoryValue}> {result.end} </Text>
                <Text style={styles.category}> Notes: </Text> 
                <Text style={styles.categoryValue}> {result.notes} </Text>
            </View>
            <TouchableOpacity style={styles.btnSecondary} onPress={() => navigation.navigate('EditTask', {taskId: taskId})}>
                <LinearGradient colors={['#7facd6', '#e9b7d4']} style={styles.Gradient} end={{x:0.9,y:0.4}}>
                    <Text style={styles.btnSecondaryText}>Edit</Text>
                </LinearGradient>
            </TouchableOpacity>
            <Pressable onPress={() => {
                    deleteTask()
                    navigation.navigate('Workspace')
                }}>
              <Text style={styles.delete} >Delete task</Text>
            </Pressable>
           
        </View>
    </View>
  )
}

export default TaskScreen

const styles = StyleSheet.create({
  chevron: {
    top:100,
    left: 25
  },
  projectDescription: {
    flexDirection:'row', 
    flexWrap:'wrap',
    paddingHorizontal:35,
    color: '#A5A5A5'
  },
    container: {
        top: 120
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
        left: 27,
        fontSize: 30,
        fontWeight: 'bold'
    },
    delete: {
        alignSelf: 'center',
        fontSize: 10,
        color: '#A5A5A5'
        
    },
    position: {
        alignSelf: 'center',
        fontSize: 14,
        color: '#A5A5A5',
        marginBottom: 20
    },
    containerInfo: {
      top: 20,
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