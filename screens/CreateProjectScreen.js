import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native'
import {React, useState, useEffect} from 'react'
import { TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
GLOBAL = require('../Global');

const CreateProjectScreen = (props) => {
    const [name, onChangeName] = useState("");
    const [description, onChangeDescription] = useState("");
    const [deadline, onChangeEnd] = useState("");
    

  /*const onSubmit = async () =>{
    try {
      console.log(name, description, GLOBAL.id)
      const response = await fetch('http://localhost:3000/projects/', {
          method: 'POST',
          headers: {'Content-Type': 'application/json','authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2ltb25AZ21haWwuY29tIiwiaWF0IjoxNjQ3OTc0NjczfQ.F14QJJGDoGkk8Cl67gQWVui23v5vlyu1K-lqWUPgP08'},
          body: JSON.stringify({
            name:name, 
            description: description,
            deadline: deadline, 
            owner: GLOBAL.id,
          })
      })
    }
    catch (err){
      console.log(err)
    }
  }*/

    return (
    <View style={{backgroundColor: '#F7F9FC', flex: 1}}>
        <View style={styles.container}>
            <Text style={styles.heading}>Create Project</Text>
            <TouchableOpacity style={styles.chevron}>
                <Entypo name='chevron-left' size={32} color="black" onPress={() => props.change()}></Entypo>
            </TouchableOpacity>
            
            <SafeAreaView style={styles.formContainer}>
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
                <Text style={styles.label}> Deadline </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEnd}
                />
                <TouchableOpacity style={styles.btnSecondary} onPress={() => {
                    props.onSubmit(name, description, deadline);
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

export default CreateProjectScreen

const styles = StyleSheet.create({})