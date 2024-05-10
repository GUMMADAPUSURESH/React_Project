import React, { useState, useEffect } from "react";
import "../useState/useState.css";

const UseEffectBasic = () => {
  const [count, setCount] = useState(0);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log("useEffect extecuted ", count, "time(s)");
  });

  useEffect(() => {
    console.log(
      "useEffect extecuted at component mount only because passed empty dependency"
    );
  }, []);

  useEffect(() => {
    const resizeHandler = () => {
      setPageWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      console.log("event deleted");
      window.removeEventListener("resize", resizeHandler);
    };
  }, [pageWidth]);

  return (
    <>
      <div id="useEffect">
        <h1>This is from useEffect</h1>
        <h1>{pageWidth}</h1>
        <h2>{count}</h2>
        <button className="count-btn" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </>
  );
};

export default UseEffectBasic;
