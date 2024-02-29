import { useState } from "react";

const Check = () => {
  const [catChecked, setCatChecked] = useState();
  const [dogChecked, setDogChecked] = useState();

  function handleChange(checked, value) {
    if (value === "Cat" && checked) {
      setCatChecked(true);
    } else if (value === "Cat") {
      setCatChecked(false);
    } else if (value === "Dog" && checked) {
      setDogChecked(true);
    } else {
      setDogChecked(false);
    }
  }

  return (
    <div className="check">
      <div className="input">
        <label htmlFor="cat">Cat: </label>
        <input
          id="cat"
          type="checkbox"
          value={"Cat"}
          onChange={(e) =>
            handleChange(e.currentTarget.checked, e.currentTarget.value)
          }
        />
        <label htmlFor="dog">Dog: </label>
        <input
          id="dog"
          type="checkbox"
          value={"Dog"}
          onChange={(e) =>
            handleChange(e.currentTarget.checked, e.currentTarget.value)
          }
        />
      </div>

      <p>
        {catChecked && "Cat"}
        {catChecked && dogChecked && " and "}
        {dogChecked && "Dog"}
      </p>
    </div>
  );
};

export default Check;
