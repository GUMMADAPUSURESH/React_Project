import React, { useState } from "react";
import { useCount } from "./CustomHook-Functions";

const CustomHookTwo = () => {
  const [count, setCount] = useState(0);

  useCount(count);

  return (
    <div>
      <h2>Custom Hook 2</h2>
      <button className="count-btn" onClick={() => setCount(count + 1)}>
        Increase - {count}
      </button>
      <hr></hr>
    </div>
  );
};

export default CustomHookTwo;
