import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import goalsListStyle from './style';
import ListItem from './ListItem';

const GoalsList = ({ data }) => (
  <View style={goalsListStyle.container}>
    <FlatList
      data={data}
      renderItem={({ item }) => <ListItem>{item}</ListItem>}
      ListEmptyComponent={<ListItem>You have no goals yet</ListItem>}
    />
  </View>
);

GoalsList.defaultProps = {
  data: [],
};

GoalsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};

export default GoalsList;
