import { useState } from "react";

const DropDown = ({ cars }) => {
  const [selected, setSelected] = useState();
  return (
    <div className="dropdown">
      <select
        name="Select a car"
        id="select"
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="car">--Select a car--</option>
        {cars.map((car) => (
          <option key={car} value={car}>
            {car}
          </option>
        ))}
      </select>

      <div>
        <p>{selected}</p>
      </div>
    </div>
  );
};

export default DropDown;
