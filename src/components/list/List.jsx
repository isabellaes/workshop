const List = ({ animalArray }) => {
  return (
    <ul className="list">
      {animalArray.map((animal) => (
        <li key={animal}>{animal}</li>
      ))}
    </ul>
  );
};

export default List;
