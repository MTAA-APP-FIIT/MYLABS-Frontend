import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar.js'
import ProjectCard from '../components/ProjectCard.js'
import NavButton from '../components/NavButton.js'

const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.ContainerNavButton}>
        <NavButton></NavButton>
      </View>
        
        <Text>Home Screen</Text>
        <NavBar></NavBar>
        <ProjectCard></ProjectCard>
        
        <Button title="Go to welcome" onPress={() => navigation.navigate('Welcome')}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  ContainerNavButton: {
    position: 'absolute',
    right: 20,
    top: 80
  }
})