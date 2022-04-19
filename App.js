import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
GLOBAL = require('./Global');
import { Entypo } from '@expo/vector-icons';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import FriendsScreen from './screens/FriendsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import WorkspaceScreen from './screens/WorkspaceScreenProjects';
import WorkspaceScreenSchedule from './screens/WorkspaceScreenSchedule';
import WorkspaceScreenTasks from './screens/WorkspaceScreenTasks';
import ProjectScreen from './screens/ProjectScreen';
import { useFonts, Overlock_700Bold } from '@expo-google-fonts/overlock';
import FriendScreen from './screens/FriendScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import FriendRequestsScreen from './screens/FriendRequests'
import AddFriendScreen from './screens/AddFriendScreen';
import RegisterScreen2 from './screens/RegisterScreen2';
import CreateTaskScreen from './screens/CreateTaskScreen';
import TaskScreen from  './screens/TaskScreen';
import EditTaskScreen from './screens/EditTaskScreen';
import VideoScreen from './screens/VideoScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  let [fontsLoaded] = useFonts({
    Overlock_700Bold,
  });

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{
      "tabBarShowLabel": false,
      "tabBarActiveTintColor": "grey",
      "tabBarInactiveTintColor": "#BBB",
      "tabBarStyle": [
        {
          "display": "flex"
        },
        null
      ],
    }}>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarIcon: ({color}) => <Entypo name="tools" size={32} color={color}/>,
        headerShown: false 
      }}/>
      <Tab.Screen name="Workspace" component={WorkspaceScreen} options={{
        tabBarIcon: ({color}) => <Entypo name="new-message" size={32} color={color}/>,
        headerShown: false 
      }}/>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({color}) => <Entypo name="home" size={32} color={color}/>,
        headerShown: false 
      }}/>
      <Tab.Screen name="Friends" component={FriendsScreen} options={{
        tabBarIcon: ({color}) => <Entypo name="users" size={32} color={color}/>,
        headerShown: false 
      }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({color}) => <Entypo name="user" size={32} color={color}/>,
        headerShown: false 
      }}/>
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen options={{ headerShown: false}} name="TabNavigator" component={TabNavigator} />
        <Stack.Screen options={{ headerShown: false}} name="Welcome" component={WelcomeScreen} />
        <Stack.Screen options={{ headerShown: false}} name="Register" component={RegisterScreen} />
        <Stack.Screen options={{ headerShown: false}} name="Register2" component={RegisterScreen2} />
        <Stack.Screen options={{ headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false}} name="Project" component={ProjectScreen} />
        <Stack.Screen options={{ headerShown: false}} name="Friend" component={FriendScreen} />
        <Stack.Screen options={{ headerShown: false}} name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen options={{ headerShown: false}} name="FriendRequests" component={FriendRequestsScreen} />
        <Stack.Screen options={{ headerShown: false}} name="AddFriend" component={AddFriendScreen} />
        <Stack.Screen options={{ headerShown: false}} name="WorkspaceTasks" component={WorkspaceScreenTasks} />
        <Stack.Screen options={{ headerShown: false}} name="WorkspaceSchedule" component={WorkspaceScreenSchedule} />
        <Stack.Screen options={{ headerShown: false}} name="CreateTask" component={CreateTaskScreen} />
        <Stack.Screen options={{ headerShown: false}} name="Task" component={TaskScreen} />
        <Stack.Screen options={{ headerShown: false}} name="EditTask" component={EditTaskScreen} />
        <Stack.Screen options={{ headerShown: false}} name="Video" component={VideoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
