import React, { useState } from "react";
import { useCount } from "./CustomHook-Functions";

const CustomHookOne = () => {
  const [count, setCount] = useState(0);

  useCount(count);

  return (
    <div id="customHooks">
      <h2>Custom Hook Example 1</h2>
      <h2>Custom Hook 1</h2>
      <button className="count-btn" onClick={() => setCount(count + 1)}>
        Increase - {count}
      </button>
    </div>
  );
};

export default CustomHookOne;
