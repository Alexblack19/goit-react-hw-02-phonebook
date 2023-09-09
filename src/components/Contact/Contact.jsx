import PropTypes from 'prop-types';

export const Contact = ({ item: { name, number } }) => {
  return (
    <p>
      {name}&#58;
      <span>&nbsp;{number}</span>
    </p>
  );
};

Contact.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
