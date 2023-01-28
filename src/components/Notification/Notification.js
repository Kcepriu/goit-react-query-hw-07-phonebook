import PropTypes from 'prop-types';
import { TextNotification } from './Notification.styled';

const Notification = ({ message }) => (
  <TextNotification>{message}</TextNotification>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
