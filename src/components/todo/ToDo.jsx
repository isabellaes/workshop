import { useState } from "react";

const ToDo = () => {
  const [list, setList] = useState([]);
  const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
  function handleAddText() {
    const newlist = [text, ...list];
    setList(newlist);
  }
  function handleDelete(index) {
    let spliced = list.toSpliced(index, 1);
    setList(spliced);
  }
  return (
    <div className="todo">
      <div className="text">
        <p>{text}</p>
      </div>
      <button onClick={() => handleAddText()}>Add ➕</button>
      <ul>
        {list.map((p, index) => (
          <li key={index} onClick={() => handleDelete(index)}>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
