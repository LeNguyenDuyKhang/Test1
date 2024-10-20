import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const API_URL = 'https://6703a68cab8a8f8927310915.mockapi.io/task';

export default function TaskScreen({navigation}) {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

    const addTask = async (newTaskTitle) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: newTaskTitle,
          completed: false,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to add task');
      }
      const newTask = await response.json();
      setTasks([...tasks, newTask]);
    } catch (err) {
      Alert.alert('Error', 'Failed to add task. Please try again.');
    }
  };

  const toggleTaskCompletion = async (id, completed) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !completed }),
      });
      if (!response.ok) {
        throw new Error('Failed to update task');
      }
      setTasks(tasks.map(task => 
        task.id === id ? { ...task, completed: !completed } : task
      ));
    } catch (err) {
      Alert.alert('Error', 'Failed to update task. Please try again.');
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete task');
      }
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      Alert.alert('Error', 'Failed to delete task. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('FirstScreen')}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: 'https://placekitten.com/100/100' }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.greeting}>Hi Twinkle</Text>
            <Text style={styles.subGreeting}>Have a great day ahead</Text>
          </View>
        </View>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.taskItem}
            onPress={() => toggleTaskCompletion(item.id, item.completed)}
          >
            <View style={[styles.checkbox, item.completed && styles.checked]}>
              {item.completed && <Feather name="check" size={16} color="white" />}
            </View>
            <Text style={[styles.taskText, item.completed && styles.completedTask]}>
              {item.title}
            </Text>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Feather name="edit-2" size={20} color="#888" />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.addButton} onPress={()=> navigation.navigate('AddTaskScreen', { onAddTask: addTask })}>
        <Feather name="plus" size={24} color="white" />
       
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subGreeting: {
    fontSize: 14,
    color: '#888',
  },
  searchInput: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: 'green',
    //borderRadius: 12,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#6200ee',
    borderColor: '#6200ee',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  addButton: {
    position: 'absolute',
    right: 140,
    bottom: 20,
    backgroundColor: '#20B2AA',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});