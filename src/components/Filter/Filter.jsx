export function Filter({ valueFilter, onChangeFilter }) {
  return (
    <label>
      <span> Find contacts by name </span>
      <input placeholder="Search" type="text" value={valueFilter} onChange={onChangeFilter} />
    </label>
  );
}
