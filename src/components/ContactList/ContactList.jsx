export function ContactList({ contacts }) {
    console.log(contacts);
  return (
    <ul>
      {contacts.map(item => (
        <li key={item.id}>
          <p>
            ${item.name}:<span>${item.number}</span>
          </p>
        </li>
      ))}
    </ul>
  );
}
