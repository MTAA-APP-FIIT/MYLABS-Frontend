import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Pressable, ActivityIndicator, ScrollView} from 'react-native'
import React, { useState, useEffect } from 'react'
import NavButton from '../components/NavButton'
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import ProjectCard from '../components/ProjectCard';
import TaskCard from '../components/TaskCard';

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

  const Item = ({ title }) => (
    <TaskCard></TaskCard>
    
  );

const WorkspaceScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#F7F9FC', flex: 1}}>


      


    <View style={styles.ContainerNavButton}>
      <NavButton></NavButton>
    </View>
    <Text style={styles.heading}>Workspace</Text>

    
    <Pressable style={styles.plus} >
      <Entypo name="plus" size={32} color="grey" />
    </Pressable>

      <View style={styles.workspaceButtons}>
        
        

        <TouchableOpacity style={styles.buttonSelected}onPress={() => navigation.navigate('Workspace')}>
          <Text style={styles.btnSecondaryText}>Projects</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSelected} onPress={() => navigation.navigate('WorkspaceTasks')}>
          <Text style={styles.btnSecondaryText}>Tasks</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSelected}>
          <LinearGradient colors={['#7facd6', '#e9b7d4']} style={styles.GradientButton}>
              <Text  style={styles.btnSelectedText}>Schedule</Text>
          </LinearGradient>
        </TouchableOpacity>

      </View>

    <View style={styles.createTask}>
        <TouchableOpacity style={styles.bottomCard}>
            <LinearGradient colors={['#7facd6', '#e9b7d4']} style={styles.Gradient}>
                <Entypo name="plus" size={60} color="white" />
            </LinearGradient>
            <View style={styles.taskInfo}>
                <Text style={styles.createTaskName}>CreateTask</Text>
            </View>
            <View style={styles.createTaskChevron}>
                <Entypo name="chevron-right" size={32} color="grey" />
            </View>

        </TouchableOpacity>
    </View>

      <FlatList
      data={DATA}
      contentContainerStyle={{alignItems: 'center'}}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      style={styles.listContainer}
    />

    
  </View>

    
  )
}

export default WorkspaceScreen

const styles = StyleSheet.create({
  plus: {
    top: 100,
    alignSelf: 'flex-end',
    marginRight: 30
  },
  heading: {
    top: 120,
    left: 25,
    fontSize: 30,
    fontWeight: 'bold'
  },
  ContainerNavButton: {
    position: 'absolute',
    right: 20,
    top: 80
  },
  
  itemContainer: {
    alignSelf: 'center',
    marginVertical: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection:'row', 
    flexWrap:'wrap'
  },
  listContainer: {
    top: 150,
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
  GradientButton: {
    borderRadius: 20,
    width: 100
},
  btnSecondaryText: {
    fontSize: 14,
    paddingVertical: 12,
    borderRadius: 20,
    color: '#A5A5A5',
    textAlign: 'center',
  },
  btnSelectedText: {
    fontSize: 14,
    paddingVertical: 12,
    borderRadius: 20,
    color: 'white',
    textAlign: 'center',
  },
  Gradient: {
    borderRadius: 10,   
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2
},
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
credentialsContainer: {
    left: 30,
    paddingTop: 35
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
    createTask: {
        top: 100,
        alignItems: 'center',
    },
    createTaskChevron: {
        left: 35,
        paddingTop: 35
    },
    createTaskName: {

        fontSize: 25,
        color: 'grey',
        fontWeight: 'bold'
    }
})