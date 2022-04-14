import { StyleSheet, Text, View, Button, ScrollView, FlatList} from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar.js'
import ProjectCard from '../components/ProjectCard.js'
import NavButton from '../components/NavButton.js'
import TaskCard from '../components/TaskCard.js'


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

const ProjectScreen = () => {
  return (
    <View style={{backgroundColor: '#F7F9FC', flex: 1}}>
        <View style={styles.ContainerNavButton}>
            <NavButton></NavButton>
        </View>

        <View style={styles.heading}>
            <Text style={styles.projectName}>MTAA</Text>
            <Button style={styles.collaboratorsButton} title="Collaborators" onPress={() => navigation.navigate('Welcome')}/>
        </View>

        <View>
        <Text style={styles.projectDescription}>This is description of our project</Text>


        <View style={styles.containerInfo}>
            <Text style={styles.category}> Owner </Text> 
            <Text style={styles.categoryValue}> TheFattestNinja </Text>
            <Text style={styles.category}> Deadline: </Text> 
            <Text style={styles.categoryValue}> 21.4.2022 </Text>
        </View>

        <View style={styles.tasksSection}>
            <Text style={styles.taskToDo}>Task to do</Text>

            <FlatList
                contentContainerStyle={{alignItems: 'center'}}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.listContainer}
            />
        </View>
        </View>
        
        
            
    </View>
  )
}

export default ProjectScreen

const styles = StyleSheet.create({
    heading: {
        top: 120,
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
      projectHeadder: {
        flexDirection:'row', 
        flexWrap:'wrap',
        paddingHorizontal:35,
      },
      projectName: {
        fontSize: 30,
        fontWeight: 'bold'
      },
      projectDescription: {
        top: 174,
        flexDirection:'row', 
        flexWrap:'wrap',
        paddingHorizontal:35,
        color: '#A5A5A5'
      },
      containerInfo: {
          top: 180,
        flexDirection:'row', 
        flexWrap:'wrap',
        paddingHorizontal:35,
      },
      category: {
        width: '50%',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#A5A5A5',
        paddingBottom: 25
      },
      categoryValue: {
        color: '#A5A5A5'
      },
      tasksSection: {
          top: 200
      },
      taskToDo: {
        fontSize: 32,
        fontWeight: 'bold',
        flexDirection:'row', 
        flexWrap:'wrap',
        paddingHorizontal:35,
      },
      collaboratorsButton: {
          alignSelf: 'flex-end'
      }
})