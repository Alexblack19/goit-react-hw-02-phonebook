export const Contact = ({ item }) => {   
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
