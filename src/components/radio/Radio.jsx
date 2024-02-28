import { useState } from "react";

const Radio = () => {
  const [text, setText] = useState("");
  function handleChange(checked, value) {
    if (checked) {
      setText(value);
    }
  }
  return (
    <div className="radio">
      <fieldset>
        <legend>Select:</legend>

        <div>
          <input
            type="radio"
            id="hello1"
            name="HelloWorld"
            value="Hello World"
            onChange={(e) =>
              handleChange(e.currentTarget.checked, e.currentTarget.value)
            }
          />
          <label htmlFor="hello1">Hello World</label>
        </div>

        <div>
          <input
            type="radio"
            id="hello2"
            name="HelloWorld"
            value="Hello World 2"
            onChange={(e) =>
              handleChange(e.currentTarget.checked, e.currentTarget.value)
            }
          />
          <label htmlFor="hello2">Hello World 2</label>
        </div>
      </fieldset>
      <p>{text}</p>
    </div>
  );
};

export default Radio;
