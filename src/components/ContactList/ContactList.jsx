import { Contact } from '../Contact/Contact';
import PropTypes from 'prop-types';


export function ContactList({ filterContacts, deleteContact }) {
  return (
    <ul>
      {filterContacts.map(item => (
        <li key={item.id}>
          <Contact item={item} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
