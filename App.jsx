import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
  },
});

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={enteredText => setEnteredGoal(enteredText)}
          value={enteredGoal}
        />
        <Button
          title="Add"
          onPress={() =>
            setCourseGoals(currentGoals => [
              ...currentGoals,
              { id: Math.random().toString(), value: enteredGoal },
            ])
          }
        />
      </View>
      <FlatList
        data={courseGoals}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}
