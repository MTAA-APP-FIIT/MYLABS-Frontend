import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import NavButton from '../components/NavButton'
import { LinearGradient } from 'expo-linear-gradient';

const FriendScreen = () => {
  return (
    
    <View style={{backgroundColor: '#F7F9FC', flex: 1}}>
        <View style={styles.ContainerNavButton}>
            <NavButton></NavButton>
        </View>
        <View style={styles.container}>
            <Image style={styles.profilePicture} source={require('../assets/images/Avatar.png')} />
            <Text style={styles.name}> Elon Musk </Text>
            <Text style={styles.position}> Frontend Specialist </Text>
            <View style={styles.containerStats}>
                <Text style={styles.stats}> Common friends: 98 </Text> 
                <Text style={styles.stats}> Common projects: 1 </Text>
            </View>
            <View style={styles.containerInfo}>
                <Text style={styles.category}> E-Mail: </Text> 
                <Text style={styles.categoryValue}> example </Text>
                <Text style={styles.category}> Phone: </Text> 
                <Text style={styles.categoryValue}> example </Text>
                <Text style={styles.category}> Birthday: </Text> 
                <Text style={styles.categoryValue}> example </Text>
                <Text style={styles.category}> Username: </Text> 
                <Text style={styles.categoryValue}> example </Text>
                <Text style={styles.category}> Position: </Text> 
                <Text style={styles.categoryValue}> example </Text>
            </View>
            <TouchableOpacity style={styles.btnSecondary} onPress={() => navigation.navigate('TabNavigator')}>
                <LinearGradient colors={['#7facd6', '#e9b7d4']} style={styles.Gradient} end={{x:0.9,y:0.4}}>
                    <Text style={styles.btnSecondaryText}>Call</Text>
                </LinearGradient>
            </TouchableOpacity>
            <Text style={styles.delete} onPress={() => navigation.navigate('Register')}>Delete friend</Text>
        </View>
    </View>
  )
}

export default FriendScreen

const styles = StyleSheet.create({
    container: {
        top: 180
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
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    delete: {
        alignSelf: 'center',
        fontSize: 10
    },
    position: {
        alignSelf: 'center',
        fontSize: 14,
        color: '#A5A5A5',
        marginBottom: 20
    },
    containerInfo: {
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