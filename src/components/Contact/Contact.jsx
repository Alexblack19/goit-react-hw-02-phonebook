export const Contact = ({ item }) => {
    console.log(item);
  return (
    <>
      {item && (
        <p>
          {item.name}:<span>{item.number}</span>
        </p>
      )}
    </>
  );
};
