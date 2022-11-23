import { StyleSheet } from 'react-native';

const modalStyle = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  message: {
    textAlign: 'center',
    fontSize: 16,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  textContainer: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
    paddingTop: 8,
    minWidth: 300,
  },
});

export default modalStyle;
