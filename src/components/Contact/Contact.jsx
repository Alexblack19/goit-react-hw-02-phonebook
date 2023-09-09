import PropTypes from 'prop-types';

export const Contact = ({ item: { id, name, number }, deleteContact }) => {  
  return (
    <>
      <span>{name}&#58;</span>
      <span>{number}</span>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </>
  );
};

Contact.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
