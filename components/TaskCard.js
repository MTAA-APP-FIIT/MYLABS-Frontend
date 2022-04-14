import { StyleSheet, Text, View, TouchableOpacity, _View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const TaskCard = () => {
  return (
    <View>
        <TouchableOpacity style={styles.bottomCard}>
            <LinearGradient colors={['#7facd6', '#e9b7d4']} style={styles.Gradient}>
                <Text style={styles.iconLeft}>ikonka</Text>
            </LinearGradient>
            <View style={styles.taskInfo}>
                <Text style={styles.taskName}>Develop SIP Proxy</Text>
                <Text style={styles.taskDate}>Due: Tuesday</Text>
            </View>
            <View style={styles.iconRight}>
                <Text>icon</Text>

            </View>
        </TouchableOpacity>
    </View>
  )
}

export default TaskCard

const styles = StyleSheet.create({
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