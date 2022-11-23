import { Pressable, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { goalsListStyle, invertedGoalsListStyle } from '../style';

const { item, itemContent } = goalsListStyle;

const ListItem = ({
  children,
  id,
  isDefaultItem,
  onPress: onPressCallback,
}) => {
  const onPress = () => {
    onPressCallback?.(id);
  };

  const onIosRippleStyle = ({ pressed }) => {
    if (pressed && !isDefaultItem) return { backgroundColor: '#477c7c' };

    return {};
  };

  const invertedItemStyle = isDefaultItem ? invertedGoalsListStyle.item : null;
  const invertedContentStyle = isDefaultItem
    ? invertedGoalsListStyle.itemContent
    : null;

  return (
    <View style={StyleSheet.compose(item, invertedItemStyle)}>
      <Pressable
        android_ripple={!isDefaultItem ? { color: '#477c7c' } : {}}
        onPress={onPress}
        style={onIosRippleStyle}
      >
        <Text style={StyleSheet.compose(itemContent, invertedContentStyle)}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
};

ListItem.defaultProps = {
  isDefaultItem: false,
};

ListItem.propTypes = {
  children: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isDefaultItem: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

export default ListItem;
