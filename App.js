import { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  const [currentGoal, setCurrentGoal] = useState('');
  const [goalsList, setGoalsList] = useState([]);

  const addGoalsToList = () => {
    setGoalsList((currentList) => [...currentList, currentGoal]);
    setCurrentGoal('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.goalInput}
          placeholder="Course goal"
          value={currentGoal}
          onChangeText={(newValue) => setCurrentGoal(newValue)}
        />
        <Button title="Add" onPress={addGoalsToList} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={({ item: goal }) => <Text>{goal}</Text>}
          ListEmptyComponent={<Text>You have not goals yet</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  formContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  goalInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
