import React from "react";
import { useCounter } from "./CustomHook-Functions";

const CustomHookCounterOne = () => {
  const [counter, increment, decrement, resetCounter] = useCounter();

  return (
    <div>
      <h2>Custom Hook Example 2</h2>
      <h3>Count - {counter}</h3>
      <button className="count-btn" onClick={increment}>
        Increase Count
      </button>
      &nbsp;
      <button className="count-btn" onClick={decrement}>
        Decrease Count
      </button>
      &nbsp;
      <button className="count-btn" onClick={resetCounter}>
        Reset count
      </button>
      &nbsp;
    </div>
  );
};

export default CustomHookCounterOne;
