import { useState } from "react";

const ColorBox = ({ colors }) => {
  const [colorList, setColorList] = useState(colors);
  const text = "#fff";
  function handleAddColor() {
    const newList = [text, ...colorList];
    setColorList(newList);
  }
  return (
    <div className="colorbox">
      <div className="textbox">
        <p>{text}</p>
        <button onClick={() => handleAddColor()}>Add color</button>
      </div>
      {colorList.map((color) => (
        <div
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
