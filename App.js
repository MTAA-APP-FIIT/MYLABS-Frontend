import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import FriendsScreen from './screens/FriendsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import WorkspaceScreen from './screens/WorkspaceScreen';
import { useFonts, Overlock_700Bold } from '@expo-google-fonts/overlock';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  let [fontsLoaded] = useFonts({
    Overlock_700Bold,
  });

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{
      "tabBarActiveTintColor": "#e91e63",
      "tabBarInactiveTintColor": "grey",
      "tabBarStyle": [
        {
          "display": "flex"
        },
        null
      ],
    }}>
      <Tab.Screen options={{ headerShown: false}} name="Settings" component={SettingsScreen}/>
      <Tab.Screen options={{ headerShown: false}} name="Workspace" component={WorkspaceScreen}/>
      <Tab.Screen options={{ headerShown: false}} name="Home" component={HomeScreen}/>
      <Tab.Screen options={{ headerShown: false}}name="Friends" component={FriendsScreen}/>
      <Tab.Screen options={{ headerShown: false}} name="Profile" component={ProfileScreen}/>
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
        <Stack.Screen options={{ headerShown: false}} name="Login" component={LoginScreen} />
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
