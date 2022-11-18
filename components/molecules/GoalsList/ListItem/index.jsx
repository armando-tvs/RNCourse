import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import goalsListStyle from '../style';

const ListItem = ({ children }) => (
  <View style={goalsListStyle.item}>
    <Text style={goalsListStyle.itemContent}>{children}</Text>
  </View>
);

ListItem.defaultProps = {
  children: '',
};

ListItem.propTypes = {
  children: PropTypes.string,
};

export default ListItem;
