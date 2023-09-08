import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

export function Notification({ message }) {
  return Notiflix.Notify.failure(message);
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};