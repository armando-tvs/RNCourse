import PropTypes from 'prop-types';
import { Button, TextInput, View } from 'react-native';
import goalsFormStyle from './style';

const GoalsForm = ({ inputValue, onChangeText, onAddGoal }) => (
  <View style={goalsFormStyle.container}>
    <TextInput
      style={goalsFormStyle.input}
      placeholder="Course goal"
      value={inputValue}
      onChangeText={onChangeText}
    />
    <Button title="Add goal" onPress={onAddGoal} />
  </View>
);

GoalsForm.defaultProps = {
  inputValue: '',
};

GoalsForm.propTypes = {
  inputValue: PropTypes.string,
  onAddGoal: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export default GoalsForm;
