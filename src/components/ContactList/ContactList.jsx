import { Contact } from '../Contact/Contact';

export function ContactList({ filterContacts }) {
  return (
    <ul>
      {filterContacts.map(item => (
        <li key={item.id}>
          <Contact item={item} />
        </li>
      ))}
    </ul>
  );
}
