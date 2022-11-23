import { useState } from 'react';
import { View } from 'react-native';
import GoalsForm from '../../molecules/GoalsForm';
import GoalsList from '../../molecules/GoalsList';
import styles from './style';

const defaultGoal = {
  text: '',
  id: undefined,
};

const GoalsDashboard = () => {
  const [currentGoal, setCurrentGoal] = useState(defaultGoal);
  const [goalListData, setGoalListData] = useState([]);

  const onChangeText = (text) => {
    setCurrentGoal((currentValue) => ({ ...currentValue, text }));
  };

  const addGoalToList = () => {
    const goalWithId = {
      ...currentGoal,
      id: Math.random().toString(16),
    };
    setGoalListData((currentList) => [...currentList, goalWithId]);
    setCurrentGoal(defaultGoal);
  };

  const removeGoalFromList = (goalId) => {
    setGoalListData(
      (currentList) => currentList.filter((item) => item?.id !== goalId),
      // eslint-disable-next-line function-paren-newline
    );
  };

  return (
    <View style={styles.container}>
      <GoalsForm
        inputValue={currentGoal.text}
        onChangeText={onChangeText}
        onAddGoal={addGoalToList}
      />
      <GoalsList data={goalListData} onRemoveGoal={removeGoalFromList} />
    </View>
  );
};

export default GoalsDashboard;
