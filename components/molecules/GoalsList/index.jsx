import { FlatList, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import goalsListStyle from './style';

const GoalsList = ({ data }) => (
  <View style={goalsListStyle.container}>
    <FlatList
      data={data}
      renderItem={({ item }) => <Text>{item}</Text>}
      ListEmptyComponent={<Text>You have no goals yet</Text>}
    />
  </View>
);

GoalsList.defaultProps = {
  data: []
};

GoalsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string)
};

export default GoalsList;
