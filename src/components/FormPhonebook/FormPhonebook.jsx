export function FormPhonebook({ nameInputId, handleChange }) {
  console.log(nameInputId);
  return (
    <form>
      <label htmlFor={nameInputId}></label>
      <input
        id={nameInputId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title=""
        required
        onChange={handleChange}
      />
    </form>
  );
}
