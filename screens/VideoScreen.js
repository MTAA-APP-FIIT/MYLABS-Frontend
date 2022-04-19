import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const VideoScreen = ({route, navigation}) => {
  const userId = route.params.userId
  console.log(userId)
  return (
    <View>
      <Text>VideoScreen</Text>
    </View>
  )
}

export default VideoScreen

const styles = StyleSheet.create({})