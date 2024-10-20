import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';

export default function AddTaskScreen({ route, navigation }) {
  const [newTask, setNewTask] = useState('');
  const { onAddTask } = route.params;

  const handleAddTask = () => {
    if (newTask.trim()) {
      onAddTask(newTask);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color="#000" size={24} />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: "https://i.pravatar.cc/100" }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.greeting}>Hi Twinkle</Text>
            <Text style={styles.subGreeting}>Have a great day ahead</Text>
          </View>
        </View>
      </View>

      <Text style={styles.title}>ADD YOUR JOB</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Input your job"
          value={newTask}
          onChangeText={setNewTask}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Text style={styles.buttonText}>FINISH →</Text>
      </TouchableOpacity>

      <Image
        source={{ uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hot5BT2uLKm0WELPHj9ooP6ycRK6F5.png" }}
        style={styles.illustration}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
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
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subGreeting: {
    fontSize: 14,
    color: '#666',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#00CED1',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  illustration: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 40,
  },
});