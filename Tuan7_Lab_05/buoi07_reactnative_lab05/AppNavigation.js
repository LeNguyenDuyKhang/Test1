import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import AddTaskScreen from './AddTaskScreen'

const Stack = createStackNavigator();

export default function AppNavigation(){
  return(
    <NavigationContainer>
      <Stack.Navigator initalRouteName="FirstScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name = "FirstScreen" component = {FirstScreen} />
         <Stack.Screen name = "SecondScreen" component = {SecondScreen} />
         <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}