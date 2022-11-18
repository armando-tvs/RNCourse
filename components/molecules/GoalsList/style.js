import { StyleSheet } from 'react-native';

const goalsListStyle = StyleSheet.create({
  container: {
    flex: 5,
  },
  item: {
    marginBottom: 8,
    backgroundColor: '#66b2b2',
    height: 48,
    borderRadius: 8
  },
  itemContent: {
    textAlignVertical: 'center',
    color: '#fff',
    fontSize: 16,
    padding: 8,
  }
});

export default goalsListStyle;
