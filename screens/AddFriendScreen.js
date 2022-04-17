import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView,TextInput } from 'react-native'
import {React, useState} from 'react'
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const AddFriendScreen = ({navigation}) => {
    const [number, onChangeNumber] = useState(null);
    const addFriend = async () =>{
        const response = await fetch('http://localhost:3000/users/' + number + '/friends', {
            method: 'POST',
            headers: {'Content-Type': 'application/json','authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2ltb25AZ21haWwuY29tIiwiaWF0IjoxNjQ3OTc0NjczfQ.F14QJJGDoGkk8Cl67gQWVui23v5vlyu1K-lqWUPgP08'},
            body: JSON.stringify({friend_id: GLOBAL.id, state: false})
        })
            
      }
    const [name, onChangeName] = useState("");
  return (
    <View style={{backgroundColor: '#F7F9FC', flex: 1}}>
        <View style={styles.container}>
            <TouchableOpacity style={styles.chevron}>
                <Entypo name='chevron-left' size={32} color="black" onPress={() => navigation.goBack()}></Entypo>
            </TouchableOpacity>
            <Text style={styles.heading}>Add friend</Text>
            <SafeAreaView style={styles.formContainer}>
                <Text style={styles.label}> Friend id </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                />
                <TouchableOpacity style={styles.btnSecondary} onPress={() => {
                    addFriend()
                    navigation.navigate('Friends')
                }}>
                    <LinearGradient colors={['#7facd6', '#e9b7d4']} style={styles.Gradient} end={{x:0.9,y:0.4}}>
                        <Text style={styles.btnSecondaryText}>Send request</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    </View>
  )
}

export default AddFriendScreen

const styles = StyleSheet.create({
    heading: {
        top: 40,
        left: 25,
        fontSize: 30,
        fontWeight: 'bold'
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
      formContainer: {
        top: 80
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
        top: 50,
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