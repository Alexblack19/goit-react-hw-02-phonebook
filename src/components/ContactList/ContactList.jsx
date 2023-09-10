import { Contact } from '../Contact/Contact';
import PropTypes from 'prop-types';
import { List, Item } from './ContactList.styled';

export function ContactList({ filterContacts, deleteContact }) {
  return (
    <List>
      {filterContacts.map(item => (
        <Item key={item.id}>
          {filterContacts ? (
            <Contact item={item} deleteContact={deleteContact} />
          ) : (
            <p>No contacts</p>
          )}
          {/* <Contact item={item} deleteContact={deleteContact} /> */}
        </Item>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
