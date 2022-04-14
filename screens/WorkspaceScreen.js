import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Pressable, ActivityIndicator, ScrollView} from 'react-native'
import React, { useState, useEffect } from 'react'
import NavButton from '../components/NavButton'
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import ProjectCard from '../components/ProjectCard';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const renderItem = ({ item }) => (
  <Item title={item.title} />
);

const Item = ({ title, navigate}) => (
  <ProjectCard onPress={() => navigation.navigate('Project')}></ProjectCard>
  
);

const WorkspaceScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#F7F9FC', flex: 1, }}>
      <View style={styles.ContainerNavButton}>
        <NavButton></NavButton>
      </View>
      <Text style={styles.heading}>Workspace</Text>

      
      <Pressable style={styles.plus} >
        <Entypo name="plus" size={32} color="grey" />
      </Pressable>

      <View style={styles.workspaceButtons}>
        <TouchableOpacity style={styles.buttonSelected}>
            <Text style={styles.btnSecondaryText}>Projects</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSelected}>
          <Text style={styles.btnSecondaryText}>Tasks</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSelected}>
          <Text style={styles.btnSecondaryText}>Schedule</Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.heading}>School</Text>
      <FlatList
          contentContainerStyle={{alignItems: 'center', margin:10}}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.listContainer}
          horizontal={true}
      />
      
      
      
    

    </View>
  )
}

export default WorkspaceScreen

const styles = StyleSheet.create({
  heading: {
    top: 130,
    flexDirection:'row',
    paddingHorizontal:35,
    fontSize: 30,
    fontWeight: 'bold'
  },
  ContainerNavButton: {
    position: 'absolute',
    right: 20,
    top: 80
  },
  plus: {
    top: 100,
    alignSelf: 'flex-end',
    marginRight: 30
  },
  workspaceButtons: {
    flexDirection: 'row',

    justifyContent: "space-around",
    marginVertical: 3
  },
  buttonSelected: {
    top: 100,
    alignItems: 'center',
    width: '25%',
    borderRadius: 20,
    marginVertical: 5,
    marginTop:30,
    backgroundColor: '#E3EDF5',
  },
  Gradient: {
    borderRadius: 20,
  },
  btnSecondaryText: {
    fontSize: 14,
    paddingVertical: 12,
    borderRadius: 20,
    color: '#A5A5A5',
    textAlign: 'center',
  },
  projects: {}
})