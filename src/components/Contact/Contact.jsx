import PropTypes from 'prop-types';

export const Contact = ({ item }) => {
  return (
    <p>
      {/* {item.name}:<span>{item.number}</span> */}
      {`${item.name}:`}
      <span>{item.number}</span>
    </p>
  );
};

Contact.propTypes = {
  item: PropTypes.shape().isRequired,
};
