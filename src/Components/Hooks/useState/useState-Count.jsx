import React, { useState } from "react";
import './useState.css';

const Count = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount((prevCount) => prevCount+1)

        setCount((prevCount) => {
            return prevCount+1
        })
  
        // setCount(count+1);
        // setCount(count+1);
    };

    const decrease = () => {
        setCount((prevCount) => prevCount-1)
        setCount((prevCount) => prevCount-1)
    };

    return (
        <>
            <h2 id="useState">useState Example-1</h2>
            <button className="count-btn" onClick={decrease}>Decrease</button>
            <span className="count">{count}</span>
            <button className="count-btn" onClick={increase}>Increase</button>
            <hr></hr>
        </>
    )
}

export default Count;