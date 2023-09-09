export const Contact = ({ item }) => {
    console.log(item);
  return (
    <p>
      {item.name}:<span>{item.number}</span>
    </p>
  );
};
