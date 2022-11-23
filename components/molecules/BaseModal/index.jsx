import PropTypes from 'prop-types';
import { Button, Modal, Text, View } from 'react-native';
import modalStyle from './style';

const BaseModal = ({
  title,
  message,
  onAccept,
  onAcceptMessage,
  onCancel,
  onCancelMessage,
  visible,
}) => (
  <Modal animationType="slide" transparent visible={visible}>
    <View style={modalStyle.contentContainer}>
      <View style={modalStyle.modalView}>
        <View style={modalStyle.textContainer}>
          <Text style={modalStyle.title}>{title}</Text>
          <Text style={modalStyle.message}>{message}</Text>
        </View>
        <View style={modalStyle.button}>
          <Button title={onAcceptMessage} onPress={onAccept} />
        </View>
        <View style={modalStyle.button}>
          <Button title={onCancelMessage} onPress={onCancel} />
        </View>
      </View>
    </View>
  </Modal>
);

BaseModal.defaultProps = {
  visible: false,
  title: '',
  message: '',
  onAcceptMessage: 'Accept',
  onCancelMessage: 'Cancel',
};

BaseModal.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
  onAccept: PropTypes.func.isRequired,
  onAcceptMessage: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onCancelMessage: PropTypes.string,
};

export default BaseModal;
