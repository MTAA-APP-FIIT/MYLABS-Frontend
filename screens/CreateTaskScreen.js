import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native'
import {React, useState, useEffect} from 'react'
import { TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
GLOBAL = require('../Global');

const EditProfileScreen = ({navigation}) => {

    const [projectId, onChangeProjectId] = useState("");
    const [name, onChangeName] = useState("");
    const [description, onChangeDescription] = useState("");
    const [start, onChangeStart] = useState("");
    const [end, onChangeEnd] = useState("");
    const [notes, onChangeNotes] = useState("");
    

  const onSubmit = async () =>{
    try {
      console.log(name, description, start, end, notes, GLOBAL.id)
      const response = await fetch('http://localhost:3000/tasks/', {
          method: 'POST',
          headers: {'Content-Type': 'application/json','authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2ltb25AZ21haWwuY29tIiwiaWF0IjoxNjQ3OTc0NjczfQ.F14QJJGDoGkk8Cl67gQWVui23v5vlyu1K-lqWUPgP08'},
          body: JSON.stringify({
            name:name, 
            description: description, 
            start: start, 
            end: end, 
            owner: GLOBAL.id,
            project_id: projectId,
            notes: notes
          })
      })
    }
    catch (err){
      console.log(err)
    }
        
  }

    return (
    <View style={{backgroundColor: '#F7F9FC', flex: 1}}>
        <View style={styles.container}>
            <Text style={styles.heading}>Create Task</Text>
            <TouchableOpacity style={styles.chevron}>
                <Entypo name='chevron-left' size={32} color="black" onPress={() => navigation.goBack()}></Entypo>
            </TouchableOpacity>
            
            <SafeAreaView style={styles.formContainer}>
                <Text style={styles.label}> Project ID </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeProjectId}
                />
                <Text style={styles.label}> Name </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeName}
                />
                <Text style={styles.label}> Description </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeDescription}
                />
                <Text style={styles.label}> Start </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeStart}
                />
                <Text style={styles.label}> End </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEnd}
                />
                <Text style={styles.label}> Notes </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNotes}
                />
                <TouchableOpacity style={styles.btnSecondary} onPress={() => {
                    onSubmit()
                    navigation.navigate('WorkspaceSchedule')
                }}>
                    <LinearGradient colors={['#7facd6', '#e9b7d4']} style={styles.Gradient} end={{x:0.9,y:0.4}}>
                        <Text style={styles.btnSecondaryText}>Create</Text>
                    </LinearGradient>
                </TouchableOpacity>
                </SafeAreaView>
        </View>
    </View>
  )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    heading: {
        top: 80,
        left: 25,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
      },
    formContainer: {
        top: 80
    },
    btnSecondary: {
        alignSelf: 'center',
        width: '80%',
        borderRadius: 20,
        marginVertical: 5,
        marginTop:30,
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
    label: {
        fontSize: 15,
        left: 10,
        fontWeight: 'bold',
        color: '#999'
    },
    chevron: {
        left: 25
      },
    container: {
        top: 60,
    },
    input: {
        height: 40,
        margin: 12,
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 15,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
      },
})