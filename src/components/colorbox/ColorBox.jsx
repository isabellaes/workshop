import { useState } from "react";

const ColorBox = ({ colors }) => {
  const [colorList, setColorList] = useState(colors);
  const [input, setInput] = useState();
  function handleAddColor() {
    const newList = [...colorList, input];
    setColorList(newList);
  }
  return (
    <div className="colorbox">
      <div className="textbox">
        <label htmlFor="input-color"></label>
        <input
          id="input-color"
          type="text"
          onChange={(e) => setInput(e.currentTarget.value)}
        />
        <button onClick={() => handleAddColor()}>Add color</button>
      </div>
      {colorList.map((color) => (
        <div
          className="color"
          key={color}
          style={{
            backgroundColor: color,
          }}
        ></div>
      ))}
    </div>
  );
};

export default ColorBox;
