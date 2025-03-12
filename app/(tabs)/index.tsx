import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  Pressable,
  StyleSheet
} from 'react-native';

export default function App() {
  const [goal, setGoal] = useState('');
  const [goalsList, setGoalsList] = useState([]);

  const addGoalHandler = () => {
    if (goal.trim()) {
      setGoalsList((current) => [...current, goal]);
      setGoal('');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>To-Do List</Text>
      </View>

      {/* Input & Button */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goal..."
          value={goal}
          onChangeText={setGoal}
        />
        <Pressable style={styles.addButton} onPress={addGoalHandler}>
          <Text style={styles.addButtonText}>ADD GOAL</Text>
        </Pressable>
      </View>

      {/* Goals List */}
      <FlatList
        data={goalsList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>{item}</Text>
          </View>
        )}
        style={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#8e44ad', // Purple
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 16,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#8e44ad',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  list: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  goalItem: {
    backgroundColor: '#9b59b6',
    borderRadius: 20,
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  goalText: {
    color: '#fff',
    fontSize: 16,
  },
});
