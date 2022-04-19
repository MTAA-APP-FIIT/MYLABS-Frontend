import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const NavButton = () => {
  const navigation = useNavigation()
  return (

        <View>
              <Pressable onPress={() =>  navigation.navigate('Welcome')}>
                <Entypo name="log-out" size={25} color="grey" />
              </Pressable>
        </View>
  )
}

export default NavButton

const styles = StyleSheet.create({
    
  container: {
    width:15,
    height: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 0,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  }
})