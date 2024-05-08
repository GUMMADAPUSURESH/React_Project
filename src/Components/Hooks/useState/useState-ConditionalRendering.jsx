import React, { useState } from "react";
import "./useState.css";

const ConditionalUseState = () => {
  const [showData, setShowData] = useState(false);

  const handleChange = () => {
    setShowData(!showData);
  };

  return (
    <>
      <h2>useState Example-4</h2>
      <button className="count-btn" onClick={handleChange}>
        {showData ? "Hide" : "Show"}
      </button>
      <div
        className={
          showData ? "useState-container-data" : "useState-container-hidden"
        }
      >
        {showData ? (
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quisquam dolorum provident, culpa ab nostrum rem possimus corporis itaque ipsam consequuntur ad, totam dignissimos molestias est assumenda sapiente aliquid laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptates?"
        ) : (
          <h3>Subject Hidden</h3>
        )}
      </div>
      <hr></hr>
    </>
  );
};

export default ConditionalUseState;
