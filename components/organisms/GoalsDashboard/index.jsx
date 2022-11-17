import { useState } from 'react';
import { View } from 'react-native';
import GoalsForm from '../../molecules/GoalsForm';
import GoalsList from '../../molecules/GoalsList';
import styles from './style';

const GoalsDashboard = () => {
  const [currentGoal, setCurrentGoal] = useState('');
  const [goalListData, setGoalListData] = useState([]);

  const onChangeText = (text) => setCurrentGoal(text);

  const addGoalToList = () => {
    setGoalListData((currentList) => [...currentList, currentGoal]);
    setCurrentGoal('');
  };

  return (
    <View style={styles.container}>
      <GoalsForm
        inputValue={currentGoal}
        onChangeText={onChangeText}
        onAddGoal={addGoalToList}
      />
      <GoalsList data={goalListData} />
    </View>
  );
};

export default GoalsDashboard;
