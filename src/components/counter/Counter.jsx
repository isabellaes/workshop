import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function decrease() {
    const num = count - 1;
    setCount(num);
  }
  function increase() {
    const num = count + 1;
    setCount(num);
  }
  return (
    <div className="counter">
      <button onClick={decrease}>-</button>
      <p>{count} </p>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Counter;
