import { FlatList, View } from 'react-native';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { goalsListStyle } from './style';
import ListItem from './ListItem';
import BaseModal from '../BaseModal';

const EMPTY_GOAL_ID = 'empty-goal-item';

const GoalsList = ({ data, onRemoveGoal }) => {
  const [itemToRemoveId, setItemToRemoveId] = useState();
  const [isModalVisible, setModalVisible] = useState(false);

  const hideModal = () => setModalVisible(false);

  const onPressItem = (itemId) => {
    // Shows modal unless the event occurs on default item
    setModalVisible(itemId !== EMPTY_GOAL_ID);
    setItemToRemoveId(itemId);
  };

  const removeGoalAfterConfirm = () => {
    onRemoveGoal?.(itemToRemoveId);
    hideModal();
    setItemToRemoveId(undefined);
  };

  return (
    <View style={goalsListStyle.container}>
      <BaseModal
        visible={isModalVisible}
        onCancel={hideModal}
        onAccept={removeGoalAfterConfirm}
        title="Remove goal"
        message="Are you sure you want to delete the goal?"
      />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem id={item.id} onPress={onPressItem}>
            {item.text}
          </ListItem>
        )}
        ListEmptyComponent={
          <ListItem id={EMPTY_GOAL_ID} onPress={onPressItem} isDefaultItem>
            You have no goals yet
          </ListItem>
        }
      />
    </View>
  );
};

GoalsList.defaultProps = {
  data: [],
  onRemoveGoal: () => {},
};

GoalsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onRemoveGoal: PropTypes.func,
};

export default GoalsList;
