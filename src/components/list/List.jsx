const List = ({ animalArray }) => {
  return (
    <ul>
      {animalArray.map((animal) => (
        <li key={animal}>{animal}</li>
      ))}
    </ul>
  );
};

export default List;
