import { Contact } from '../Contact/Contact';

export function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(item => (
        <li key={item.id}>
          <Contact item={item} />
        </li>
      ))}
    </ul>
  );
}
