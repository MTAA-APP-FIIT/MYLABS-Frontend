import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const ProjectCard = () => {
  return (
    <View>
        <LinearGradient colors={['#7facd6', '#e9b7d4']} style={styles.Gradient} end={{x:0.9,y:0.4}}>
            <TouchableOpacity style={styles.Card}>
                <View style={styles.DayContainer}>
                    <Text style={styles.CardDay}>Tuesday</Text>
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.CardHeading}>MTAA</Text>
                    <Text style={styles.CardDescription}>Semesteral project</Text>
                </View>
                <View style={styles.BarContainer}>
                    <Text style={styles.CardBar}>Tuto bude bar </Text>
                </View>
            </TouchableOpacity>
        </LinearGradient>
    </View>
  )
}

export default ProjectCard

const styles = StyleSheet.create({
    Gradient: {
        borderRadius: 10,   
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2
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
    }
})