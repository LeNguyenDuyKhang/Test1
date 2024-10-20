import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecondScreen from './SecondScreen'
export default function Component({navigation}) {
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.square}>
          <Image source ={require('./assets/1.png')} style={styles.image} />
        </View>
        <Text style={styles.title}>MANAGE YOUR TASK</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SecondScreen')}>
          <Text style={styles.buttonText} >GET STARTED →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  square: {
    width: 200,
    height: 200,
    // borderWidth: 2,
    // borderColor: '#8A2BE2',
    // position: 'relative',
    // marginBottom: 40,
  },
  name: {
    position: 'absolute',
    backgroundColor: 'white',
    padding: 5,
  },
  topLeft: {
    top: -15,
    left: 10,
  },
  topRight: {
    top: 10,
    right: -30,
  },
  bottomLeft: {
    bottom: 10,
    left: -20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8A2BE2',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#20B2AA',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image:{
    width:200,
    height:200,
  },

});